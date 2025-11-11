import https from "https";
import { db } from "lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const { paymentId, amount } = req.body;

    if (!paymentId || !amount)
      return res.status(400).json({ error: "Missing paymentId or amount" });

    const payment = await db.paymentModel.findUnique({
      where: { id: paymentId },
    });

    if (!payment)
      return res.status(404).json({ error: "Payment record not found" });

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    const authHeader =
      "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64");

    // payload per Razorpay API spec
    const payload = JSON.stringify({
      type: "upi_qr",
      name: `Payment for ${payment.customerName}`,
      usage: "single_use",
      fixed_amount: true,
      payment_amount: Math.round(Number(amount) * 100), // in paisa
      description: `QR Payment for ${payment.customerName}`,
      customer_id: payment.customerPhone, // using phone number as unique customer ID
      notes: {
        paymentId,
        customerName: payment.customerName,
        customerEmail: payment.customerEmail,
        customerPhone: payment.customerPhone,
      },
      customer_name: payment.customerName,
      customer_email: payment.customerEmail,
    });

    const options = {
      hostname: "api.razorpay.com",
      path: "/v1/payments/qr_codes",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
    };

    const qrResponse = await new Promise((resolve, reject) => {
      const request = https.request(options, (r) => {
        let data = "";
        r.on("data", (chunk) => (data += chunk));
        r.on("end", () => {
          try {
            const parsed = JSON.parse(data);
            if (r.statusCode >= 400) return reject(parsed);
            resolve(parsed);
          } catch (err) {
            reject(err);
          }
        });
      });
      request.on("error", reject);
      request.write(payload);
      request.end();
    });

    // Razorpay returns fields: id, entity, image_url, etc.
    const qrId = qrResponse.id;
    const qrImage = qrResponse.image_url;

    // Store QR details
    await db.paymentModel.update({
      where: { id: paymentId },
      data: {
        razorpayPaymentId: qrId,
        paymentMethod: "upi_qr",
      },
    });

    return res.status(200).json({
      qrId,
      qrImage,
      qrPayload: qrResponse,
    });
  } catch (err) {
    console.error("create-qr error:", err);
    return res.status(500).json({
      error: err.description || err.message || "Could not create QR code",
    });
  }
}

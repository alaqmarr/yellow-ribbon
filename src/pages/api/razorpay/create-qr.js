// pages/api/razorpay/create-qr.js
const Razorpay = require("razorpay");
const { db } = require("lib/db");
const https = require("https");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { paymentId, amount } = req.body;
    if (!paymentId || !amount)
      return res.status(400).json({ error: "Missing fields" });

    const payment = await db.paymentModel.findUnique({ where: { id: paymentId } });
    if (!payment) return res.status(404).json({ error: "Payment not found" });

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    const authHeader =
      "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64");

    const payload = JSON.stringify({
      type: "upi_qr",
      name: `Payment for ${payment.customerName || "order"}`,
      usage: "single_use",
      fixed_amount: true,
      payment_amount: Math.round(Number(amount) * 100),
      description: `Payment link ${paymentId}`,
      notes: { paymentId },
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
      const reqHttps = https.request(options, (r) => {
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
      reqHttps.on("error", reject);
      reqHttps.write(payload);
      reqHttps.end();
    });

    await db.paymentModel.update({
      where: { id: paymentId },
      data: { razorpayPaymentId: qrResponse.id },
    });

    return res.status(200).json({
      qrId: qrResponse.id,
      qrImage: qrResponse.image_qr_code,
      qrPayload: qrResponse,
    });
  } catch (err) {
    console.error("create-qr error:", err);
    return res
      .status(500)
      .json({ error: err.description || err.message || "Could not create QR" });
  }
};

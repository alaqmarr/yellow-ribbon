import RazorpayPkg from "razorpay";
import Razorpay from "razorpay";
import { db } from "lib/db";
import webhooks from "razorpay/dist/types/webhooks";

const RazorpayInstance = Razorpay || RazorpayPkg.default || RazorpayPkg;
const rz = new RazorpayInstance({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { paymentId, amount } = req.body;
    if (!paymentId || !amount)
      return res.status(400).json({ error: "Missing fields" });

    const payment = await db.paymentModel.findUnique({
      where: { id: paymentId },
    });
    if (!payment) return res.status(404).json({ error: "Payment not found" });

    const amountPaise = Math.round(Number(amount) * 100);

    // create QR code order on Razorpay
    const qr = await rz.qrCode.create({
      type: "upi_qr",
      name: `Payment for ${payment.customerName || "order"}`,
      usage: "single_use",
      fixed_amount: true,
      payment_amount: amountPaise,
      description: `Payment link ${paymentId}`,
      notes: {
        paymentId,
      },
    });

    // optional: store QR details in DB for status checking
    await db.paymentModel.update({
      where: { id: paymentId },
      data: {
        paymentGatewayId: qr.id,
      },
    });

    return res.status(200).json({
      qrId: qr.id,
      qrImage: qr.image_url, // direct image URL for <img src="">
      qrPayload: qr,
    });
  } catch (err) {
    console.error("create-qr error:", err);
    return res
      .status(500)
      .json({ error: err.message || "Could not create QR" });
  }
}

// pages/api/razorpay/create-qr.js
const Razorpay = require("razorpay");
const { db } = require("lib/db");

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { paymentId, amount } = req.body;
    if (!paymentId || !amount)
      return res.status(400).json({ error: "Missing fields" });

    const payment = await db.paymentModel.findUnique({ where: { id: paymentId } });
    if (!payment) return res.status(404).json({ error: "Payment not found" });

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const qr = await razorpay.qrCode.create({
      type: "upi_qr",
      name: `Payment for ${payment.customerName || "order"}`,
      usage: "single_use",
      fixed_amount: true,
      payment_amount: Math.round(Number(amount) * 100),
      description: `Payment link ${paymentId}`,
      notes: { paymentId },
    });

    await db.paymentModel.update({
      where: { id: paymentId },
      data: { paymentGatewayId: qr.id },
    });

    return res.status(200).json({
      qrId: qr.id,
      qrImage: qr.image_url,
    });
  } catch (err) {
    console.error("create-qr error:", err);
    return res.status(500).json({ error: err.message || "Could not create QR" });
  }
}

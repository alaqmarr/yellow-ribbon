// pages/api/razorpay/create-order.js
const Razorpay = require("razorpay");
const { db } = require("lib/db");

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { paymentId, amount, currency = "INR", receipt } = req.body;
    if (!paymentId || !amount)
      return res.status(400).json({ error: "Missing fields" });

    const payment = await db.paymentModel.findUnique({ where: { id: paymentId } });
    if (!payment) return res.status(404).json({ error: "Payment not found" });

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: Math.round(Number(amount) * 100),
      currency,
      receipt: receipt || paymentId,
      payment_capture: 1,
    });

    await db.paymentModel.update({
      where: { id: paymentId },
      data: { paymentGatewayId: order.id },
    });

    return res.status(200).json({ orderId: order.id });
  } catch (err) {
    console.error("create-order error:", err);
    return res.status(500).json({ error: err.message || "Could not create order" });
  }
}

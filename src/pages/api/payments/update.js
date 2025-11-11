import crypto from "crypto";
import { db } from "lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { paymentId, gatewayId, orderId, signature } = req.body;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(orderId + "|" + gatewayId)
      .digest("hex");

    if (signature !== expectedSignature)
      return res.status(400).json({ error: "Invalid signature" });

    await db.paymentModel.update({
      where: { id: paymentId },
      data: { paid: true, paymentGatewayId: gatewayId, paymentDate: new Date() },
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("payments/update error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

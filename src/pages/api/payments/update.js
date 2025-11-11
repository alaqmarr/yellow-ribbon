import crypto from "crypto";
import { db } from "lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const { paymentId, gatewayId, orderId, signature, status } = req.body;

    if (!paymentId || !gatewayId || !orderId || !signature) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Compute Razorpay signature for verification
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${orderId}|${gatewayId}`)
      .digest("hex");

    if (expectedSignature !== signature) {
      console.error("Signature mismatch", {
        orderId,
        gatewayId,
        expected: expectedSignature,
        received: signature,
      });
      return res.status(400).json({ error: "Invalid signature" });
    }

    // Update payment record
    const updatedPayment = await db.paymentModel.update({
      where: { id: paymentId },
      data: {
        paid: true,
        razorpayPaymentId: gatewayId,
        paymentMethod: "razorpay",
        paymentDate: new Date(),
      },
    });

    return res.status(200).json({ success: true, payment: updatedPayment });
  } catch (err) {
    console.error("payments/update error:", err);
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
}

import crypto from "crypto";
import { db } from "lib/db";

export default async function handler(req, res) {
  const signature = req.headers["x-razorpay-signature"];
  const body = JSON.stringify(req.body);
  const expected = crypto
    .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET)
    .update(body)
    .digest("hex");

  if (signature !== expected) return res.status(400).send("Invalid signature");

  const event = req.body.event;
  if (event === "payment.captured") {
    const notes = req.body.payload.payment.entity.notes;
    const paymentId = notes?.paymentId;
    if (paymentId) {
      await db.paymentModel.update({
        where: { id: paymentId },
        data: { paid: true, paymentDate: new Date() },
      });
    }
  }

  res.status(200).send("ok");
}

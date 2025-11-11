import GenerateQr from "@/components/GenerateQr";
import PayClient from "@/components/PayClient";
import { db } from "lib/db";

export async function getServerSideProps(ctx) {
  const { slug } = ctx.params;
  const payment = await db.paymentModel.findUnique({ where: { id: slug } });

  return {
    props: {
      paymentRecord: payment
        ? {
            id: payment.id,
            amount: Number(payment.amount),
            paid: payment.paid,
            customerName: payment.customerName,
            customerEmail: payment.customerEmail,
            customerPhone: payment.customerPhone,
            paymentMethod: payment.paymentMethod,
          }
        : null,
      razorpayKey: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || null,
    },
  };
}

export default function PayPage(props) {
  return (
  <> 
  <PayClient {...props} />
  {/* <GenerateQr {...props} /> */}
  </>);
}

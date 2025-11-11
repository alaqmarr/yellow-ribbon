import React from "react";

export default function PayClient({ paymentRecord, razorpayKey }) {
  const [loading, setLoading] = React.useState(false);

  if (!paymentRecord) {
    return (
      <div
        style={{
          padding: 40,
          fontFamily: "Inter, sans-serif",
          textAlign: "center",
        }}
      >
        <h2>Invalid or expired payment link</h2>
        <p>This payment link does not exist or has been removed.</p>
      </div>
    );
  }

  const startPayment = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentId: paymentRecord.id,
          amount: paymentRecord.amount,
          currency: "INR",
          receipt: paymentRecord.id,
        }),
      });

      if (!res.ok) throw new Error("Order creation failed");
      console.log("Create order response:", res);
      const { orderId } = await res.json();
      if (!res.ok) {
        const errText = await res.text();
        throw new Error("Order creation failed: " + errText);
      }

      if (!window.Razorpay) {
        await new Promise((resolve, reject) => {
          const s = document.createElement("script");
          s.src = "https://checkout.razorpay.com/v1/checkout.js";
          s.onload = resolve;
          s.onerror = reject;
          document.body.appendChild(s);
        });
      }

      const options = {
        key: razorpayKey,
        amount: Math.round(paymentRecord.amount * 100),
        currency: "INR",
        name: "Yellow Ribbon Travels",
        description: `Payment for ${paymentRecord.customerName || "order"}`,
        order_id: orderId,
        prefill: {
          name: paymentRecord.customerName || "",
          email: paymentRecord.customerEmail || "",
          contact: paymentRecord.customerPhone || "",
        },
        theme: { color: "#0ea5a4" },
        handler: async (response) => {
          try {
            const update = await fetch("/api/payments/update", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                paymentId: paymentRecord.id,
                gatewayId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                signature: response.razorpay_signature,
                status: "success",
              }),
            });
            if (!update.ok) throw new Error(await update.text());
            alert("Payment successful. Thank you!");
            console.log("Payment update response:", update);
            window.location.reload();
          } catch (err) {
            console.error(err);
            alert("Payment succeeded but update failed. Contact support.");
            console.log("Payment update error:", err);
          }
        },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.error(err);
      alert("Could not initiate payment. Try again.");
      console.log("Payment initiation error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8fafc",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          width: 520,
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 6px 24px rgba(16,24,40,0.08)",
          padding: 28,
        }}
      >
        <h2 style={{ margin: 0, fontSize: 20, color: "#0f172a" }}>
          Confirm Payment
        </h2>
        <p style={{ color: "#64748b", marginTop: 8 }}>
          Link ID:{" "}
          <code
            style={{
              background: "#f1f5f9",
              padding: "2px 6px",
              borderRadius: 6,
            }}
          >
            {paymentRecord.id}
          </code>
        </p>

        <div
          style={{
            marginTop: 18,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ fontWeight: 600 }}>{paymentRecord.customerName}</div>
            <div style={{ fontSize: 13, color: "#475569" }}>
              {paymentRecord.customerEmail}
            </div>
            <div style={{ fontSize: 13, color: "#475569" }}>
              {paymentRecord.customerPhone}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontWeight: 700, fontSize: 20 }}>
              ₹{paymentRecord.amount.toFixed(2)}
            </div>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>Amount to pay</div>
          </div>
        </div>

        <button
          onClick={startPayment}
          disabled={loading || paymentRecord.paid}
          style={{
            marginTop: 24,
            width: "100%",
            background: paymentRecord.paid ? "#94a3b8" : "#06b6d4",
            color: "#022c3a",
            padding: "12px 16px",
            borderRadius: 10,
            border: "none",
            fontWeight: 700,
            cursor: paymentRecord.paid ? "not-allowed" : "pointer",
          }}
        >
          {paymentRecord.paid
            ? "Already Paid"
            : loading
            ? "Processing..."
            : "Pay Now"}
        </button>
      </div>
    </div>
  );
}

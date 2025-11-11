"use client";

import React from "react";

export default function PayClient({ paymentRecord, razorpayKey }) {
  const [loading, setLoading] = React.useState(false);
  const [qrLoading, setQrLoading] = React.useState(false);
  const [qrData, setQrData] = React.useState(null);
  const [paid, setPaid] = React.useState(paymentRecord?.paid || false);
  const [successInfo, setSuccessInfo] = React.useState(null);

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

  // --- Razorpay Checkout ---
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
      const { orderId } = await res.json();

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

            setPaid(true);
            setSuccessInfo({
              amount: paymentRecord.amount,
              id: response.razorpay_payment_id,
              name: paymentRecord.customerName,
            });
          } catch (err) {
            console.error("Payment update error:", err);
            alert("Payment succeeded but update failed. Contact support.");
          }
        },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.error("Payment initiation error:", err);
      alert("Could not initiate payment. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // --- Generate QR Payment ---
  const generateQR = async () => {
    try {
      setQrLoading(true);
      const res = await fetch("/api/razorpay/create-qr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentId: paymentRecord.id,
          amount: paymentRecord.amount,
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      setQrData(data);
    } catch (err) {
      console.error("QR creation failed:", err);
      alert("Could not create QR. Try again.");
    } finally {
      setQrLoading(false);
    }
  };

  // --- Success Screen ---
  if (paid && successInfo) {
    return (
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f8fafc",
          fontFamily: "Inter, sans-serif",
          padding: 20,
        }}
      >
        <div
          style={{
            width: 480,
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
            textAlign: "center",
            padding: "40px 24px",
            animation: "fadeIn 0.6s ease-out",
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              background: "#dcfce7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#16a34a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h2 style={{ color: "#065f46", fontSize: 22, marginBottom: 8 }}>
            Payment Successful
          </h2>
          <p style={{ color: "#475569", fontSize: 15, marginBottom: 24 }}>
            Thank you, {successInfo.name}. Your payment of{" "}
            <strong>₹{successInfo.amount.toFixed(2)}</strong> has been
            confirmed.
          </p>
          <div
            style={{
              background: "#f1f5f9",
              padding: "10px 16px",
              borderRadius: 8,
              color: "#475569",
              fontSize: 14,
              marginBottom: 24,
              display: "inline-block",
            }}
          >
            Transaction ID: {successInfo.id}
          </div>
          <p style={{ color: "#64748b", fontSize: 13 }}>
            You can safely close this page now.
          </p>
        </div>
      </div>
    );
  }

  // --- Main Payment UI ---
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8fafc",
        fontFamily: "Inter, sans-serif",
        padding: 20,
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

        {/* Razorpay Button */}
        <button
          onClick={startPayment}
          disabled={loading || paid}
          style={{
            marginTop: 24,
            width: "100%",
            background: paid ? "#94a3b8" : "#06b6d4",
            color: "#022c3a",
            padding: "12px 16px",
            borderRadius: 10,
            border: "none",
            fontWeight: 700,
            cursor: paid ? "not-allowed" : "pointer",
          }}
        >
          {paid ? "Already Paid" : loading ? "Processing..." : "Pay Now"}
        </button>

        {/* OR Divider */}
        <div
          style={{
            textAlign: "center",
            color: "#94a3b8",
            margin: "18px 0",
            fontSize: 13,
          }}
        >
          — OR —
        </div>

        {/* QR Code Section */}
        {!qrData ? (
          <button
            onClick={generateQR}
            disabled={qrLoading || paid}
            style={{
              width: "100%",
              background: "#e2e8f0",
              color: "#0f172a",
              padding: "10px 16px",
              borderRadius: 10,
              border: "none",
              fontWeight: 600,
              cursor: paid ? "not-allowed" : "pointer",
            }}
          >
            {qrLoading
              ? "Generating QR..."
              : paid
              ? "Already Paid"
              : "Generate UPI QR Code"}
          </button>
        ) : (
          <div style={{ marginTop: 20, textAlign: "center" }}>
            <img
              src={qrData.qrImage}
              alt="Razorpay QR"
              width={240}
              height={240}
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: 8,
                padding: 8,
              }}
            />
            <p style={{ marginTop: 8, color: "#475569" }}>
              Scan with any UPI app to pay ₹{paymentRecord.amount.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

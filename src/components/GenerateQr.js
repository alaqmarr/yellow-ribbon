"use client";
import React from "react";

export default function GenerateQr({ paymentRecord, razorpayKey }) {
  const [loading, setLoading] = React.useState(false);
  const [qrData, setQrData] = React.useState(null);

  if (!paymentRecord) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <h2>Invalid or expired payment link</h2>
        <p>This payment link does not exist or has been removed.</p>
      </div>
    );
  }

  const generateQR = async () => {
    try {
      setLoading(true);
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
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "30vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          width: 520,
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 6px 24px rgba(16,24,40,0.08)",
          padding: 28,
          textAlign: "center",
        }}
      >
        <h2>Confirm Payment</h2>
        <p>Amount: ₹{paymentRecord.amount.toFixed(2)}</p>

        {!qrData ? (
          <button
            onClick={generateQR}
            disabled={loading || paymentRecord.paid}
            style={{
              marginTop: 16,
              padding: "10px 18px",
              borderRadius: 8,
              border: "none",
              background: "#06b6d4",
              color: "#fff",
              fontWeight: 600,
              cursor: paymentRecord.paid ? "not-allowed" : "pointer",
            }}
          >
            {loading
              ? "Generating QR..."
              : paymentRecord.paid
              ? "Already Paid"
              : "Generate QR Code"}
          </button>
        ) : (
          <div style={{ marginTop: 20 }}>
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

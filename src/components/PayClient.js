"use client";

import React from "react";
import Layout from "./Layout/Layout";
import { motion, AnimatePresence } from "framer-motion";

// --- Reusable Animated Loader Icon (Unchanged) ---
const Loader = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: 8 }}
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
  >
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </motion.svg>
);

export default function PayClient({ paymentRecord, razorpayKey }) {
  // --- State and Handlers (Unchanged) ---
  const [loading, setLoading] = React.useState(false);
  const [qrLoading, setQrLoading] = React.useState(false);
  const [qrData, setQrData] = React.useState(null);
  const [paid, setPaid] = React.useState(paymentRecord?.paid || false);
  const [successInfo, setSuccessInfo] = React.useState(
    paymentRecord?.paid
      ? {
          amount: paymentRecord.amount,
          id: paymentRecord.razorpayPaymentId,
          name: paymentRecord.customerName,
        }
      : null
  );

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
        theme: { color: "#2563eb" }, // Updated theme color
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
  
  // --- STYLES ---

  const pageBackgroundStyle = {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // Subtle gradient background
    background: "linear-gradient(170deg, #f9fafb 0%, #f3f4f6 100%)",
    padding: 20,
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
  };
  
  const baseCardStyle = {
    background: "#ffffff",
    borderRadius: 20, // Softer radius
    // Softer, more modern shadow
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.06)",
    border: "1px solid #e5e7eb", // Subtle border for definition
    fontFamily: "inherit",
  };

  const mainButtonBase = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 12, // Softer radius
    border: "none",
    fontWeight: 600, // Slightly lighter weight
    fontSize: 16,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.1s ease, background-color 0.2s ease",
  };

  // --- Main Render ---
  return (
    <Layout
      pageTitle={
        paid
          ? `Payment Successful`
          : `Pay Now - ${paymentRecord.customerName || "Customer"}`
      }
    >
      <div style={pageBackgroundStyle}>
        <AnimatePresence mode="wait">
          {/* --- Success Screen --- */}
          {paid && successInfo ? (
            <motion.div
              key="success"
              style={{
                ...baseCardStyle,
                width: 480,
                textAlign: "center",
                padding: "40px 32px",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <motion.div
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
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.1, duration: 0.6 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="2.5"
                >
                  <motion.path
                    d="M20 6L9 17l-5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, type: "tween" }}
                  />
                </svg>
              </motion.div>
              <h2 style={{ color: "#065f46", fontSize: 24, marginBottom: 8, fontWeight: 600 }}>
                Payment Successful
              </h2>
              <p style={{ color: "#4b5563", fontSize: 16, marginBottom: 24 }}>
                Thank you, {successInfo.name}. Your payment of{" "}
                <strong style={{color: "#111827"}}>₹{successInfo.amount.toFixed(2)}</strong> has been
                confirmed.
              </p>
              {/* --- Improved Transaction ID Box --- */}
              <div
                style={{
                  background: "#f3f4f6",
                  padding: "12px 16px",
                  borderRadius: 12,
                  marginBottom: 24,
                  border: "1px solid #e5e7eb",
                  textAlign: "left", // Align text to the left
                }}
              >
                <span style={{
                  color: "#6b7281",
                  fontSize: 12,
                  display: "block", // Makes the span take its own line
                  textTransform: "uppercase",
                  fontWeight: 500,
                  fontFamily: "Inter, sans-serif" // Use main font
                }}>
                  Transaction ID
                </span>
                <span style={{
                  color: "#1f2937",
                  fontSize: 14,
                  fontFamily: "monospace", // Keep this for the ID
                  fontWeight: 600,
                  display: "block",
                  marginTop: 2,
                }}>
                  {successInfo.id}
                </span>
              </div>
            </motion.div>
          ) : (
            
            /* --- Main UI (for unpaid links) --- */
            <motion.div
              key="payment"
              style={{
                ...baseCardStyle,
                width: 520,
                padding: 32,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 style={{ margin: 0, fontSize: 24, color: "#111827", fontWeight: 600 }}>
                Confirm Payment
              </h2>
              <p style={{ color: "#6b7281", marginTop: 8, fontSize: 14 }}>
                Link ID:{" "}
                <code
                  style={{
                    background: "#f3f4f6",
                    padding: "3px 6px",
                    borderRadius: 6,
                    fontFamily: "monospace",
                    fontSize: 14,
                    color: "#1f2937",
                    border: "1px solid #e5e7eb"
                  }}
                >
                  {paymentRecord.id}
                </code>
              </p>

              <div
                style={{
                  marginTop: 24,
                  marginBottom: 24,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start"
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, color: "#1f2937", fontSize: 16 }}>
                    {paymentRecord.customerName}
                  </div>
                  <div style={{ fontSize: 14, color: "#4b5563", marginTop: 4 }}>
                    {paymentRecord.customerEmail}
                  </div>
                  <div style={{ fontSize: 14, color: "#4b5563", marginTop: 2 }}>
                    {paymentRecord.customerPhone}
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 28, color: "#111827" }}>
                    ₹{paymentRecord.amount.toFixed(2)}
                  </div>
                  <div style={{ fontSize: 14, color: "#6b7281" }}>
                    Amount to pay
                  </div>
                </div>
              </div>

              <motion.button
                onClick={startPayment}
                disabled={loading || paid}
                style={{
                  ...mainButtonBase,
                  // New modern blue color
                  background: paid ? "#9ca3af" : "#2563eb", 
                  color: "#ffffff",
                  cursor: loading || paid ? "not-allowed" : "pointer",
                  opacity: loading || paid ? 0.7 : 1,
                }}
                whileHover={{ scale: loading || paid ? 1 : 1.02, background: paid ? "#9ca3af" : "#1d4ed8" }}
                whileTap={{ scale: loading || paid ? 1 : 0.98 }}
              >
                {loading ? <Loader /> : null}
                {paid ? "Already Paid" : loading ? "Processing..." : "Pay Now"}
              </motion.button>

              <div
                style={{
                  textAlign: "center",
                  color: "#9ca3af",
                  margin: "20px 0",
                  fontSize: 14,
                  fontWeight: 500
                }}
              >
                — OR —
              </div>

              <AnimatePresence mode="wait">
                {!qrData ? (
                  <motion.button
                    key="qr-button"
                    onClick={generateQR}
                    disabled={qrLoading || paid}
                    style={{
                      ...mainButtonBase,
                      background: "#f3f4f6", // Lighter secondary button
                      color: "#1f2937", // Darker text for contrast
                      fontWeight: 600,
                      fontSize: 15,
                      border: "1px solid #e5e7eb",
                      cursor: qrLoading || paid ? "not-allowed" : "pointer",
                      opacity: qrLoading || paid ? 0.7 : 1
                    }}
                    whileHover={{ scale: qrLoading || paid ? 1 : 1.02, background: "#e5e7eb" }}
                    whileTap={{ scale: qrLoading || paid ? 1 : 0.98 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {qrLoading ? <Loader /> : null}
                    {qrLoading
                      ? "Generating QR..."
                      : paid
                      ? "Already Paid"
                      : "Generate UPI QR Code"}
                  </motion.button>
                ) : (
                  <motion.div
                    key="qr-code"
                    style={{ marginTop: 20, textAlign: "center" }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                  >
                    <img
                      src={qrData.qrImage}
                      alt="Razorpay QR"
                      width={240}
                      height={240}
                      style={{
                        border: "1px solid #e5e7eb",
                        borderRadius: 12,
                        padding: 8,
                        margin: "0 auto",
                      }}
                    />
                    <p style={{ marginTop: 12, color: "#4b5563", fontSize: 14 }}>
                      Scan with any UPI app to pay <strong style={{color: "#111827"}}>₹{paymentRecord.amount.toFixed(2)}</strong>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}
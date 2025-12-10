import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

function Receipt({ item, amount }) {
  const ref = useRef();

  const downloadPDF = () => {
    if (ref.current) {
      html2pdf().from(ref.current).save(`${item}-receipt.pdf`);
    }
  };

  return (
    <div
      style={{ background: "#e0f7e9", padding: "1rem", borderRadius: "12px", margin: "1rem 0" }}
    >
      <div
        ref={ref}
        style={{
          padding: "1rem",
          background: "#b2f2bb",
          borderRadius: "8px",
          marginBottom: "1rem",
        }}
      >
        <h4 style={{ color: "#1b5e20", fontWeight: "bold", marginBottom: "0.5rem" }}>
          Receipt
        </h4>
        <p>Item: {item}</p>
        <p>Amount: ₦{amount}</p>
        <p>Date: {new Date().toLocaleDateString()}</p>
      </div>
      <button
        onClick={downloadPDF}
        style={{
          background: "#4caf50",
          color: "#fff",
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Download Receipt
      </button>
    </div>
  );
}

export default Receipt;

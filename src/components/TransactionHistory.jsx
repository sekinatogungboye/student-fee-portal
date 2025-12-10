import React, { useState, useEffect } from "react";

function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("transactions") || "[]");
    setTransactions(data);
  }, []);

  return (
    <div className="bg-secondary p-4 rounded-lg">
      <h3 className="font-bold text-lg mb-4">Transaction History</h3>
      {transactions.length === 0 && <p>No transactions yet.</p>}
      {transactions.length > 0 && (
        <ul className="space-y-2">
          {transactions.map((t, index) => (
            <li key={index} className="flex justify-between bg-primary/20 p-2 rounded">
              <span>{t.item}</span>
              <span>₦{t.amount}</span>
              <span>{t.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionHistory;

import { useState } from "react";

function PaymentForm() {
  const [item, setItem] = useState("Tuition");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payment = { item, amount, date: new Date().toLocaleDateString(), status: "Paid" };
    const history = JSON.parse(localStorage.getItem("transactions") || "[]");
    history.push(payment);
    localStorage.setItem("transactions", JSON.stringify(history));
    alert(`Payment recorded for ${item}: ₦${amount}`);
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-secondary p-6 rounded-lg max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold mb-4">Make Payment</h2>
      <select className="w-full p-2 text-primary rounded" value={item} onChange={(e) => setItem(e.target.value)}>
        <option>Tuition</option>
        <option>Library</option>
        <option>Sports</option>
        <option>ICT</option>
      </select>
      <input type="number" placeholder="Amount (₦)" className="w-full p-2 text-primary rounded" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <button className="bg-accent text-primary px-4 py-2 w-full rounded hover:bg-light transition">Submit Payment</button>
    </form>
  );
}

export default PaymentForm;

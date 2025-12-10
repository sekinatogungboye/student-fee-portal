function FeeCard({ title, amount, status }) {
  return (
    <div className={`p-4 rounded shadow-md ${status === 'Unpaid' ? 'bg-accent text-primary' : 'bg-secondary text-cream'}`}>
      <h3 className="font-bold">{title}</h3>
      <p className="mt-2 text-xl">₦{amount}</p>
      {status === 'Unpaid' && <p className="text-red-400 font-semibold mt-1">Unpaid</p>}
    </div>
  );
}

export default FeeCard;

import FeeCard from "./FeeCard";
import fees from "../data/fees";

function FeeSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {fees.map((fee) => (
        <FeeCard key={fee.id} title={fee.title} amount={fee.amount} status={fee.status} />
      ))}
    </div>
  );
}

export default FeeSummary;

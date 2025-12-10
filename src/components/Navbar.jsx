import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-secondary p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-cream">Student Fee Portal</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-light">Home</Link>
        <Link to="/payments" className="hover:text-light">Payments</Link>
        <Link to="/history" className="hover:text-light">History</Link>
      </div>
    </nav>
  );
}

export default Navbar;

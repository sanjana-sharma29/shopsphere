import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-bold text-gray-900">
            ShopSphere
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-gray-700 hover:text-blue-600"
          >
            Products
          </Link>

          <Link
            to="/categories"
            className="text-gray-700 hover:text-blue-600"
          >
            Categories
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">

          <Link
            to="/cart"
            className="text-gray-700 hover:text-blue-600"
          >
            Cart
          </Link>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Login
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
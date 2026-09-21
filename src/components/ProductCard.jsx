import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">

      <Link to={`/products/${product.id}`}>

        <div className="h-56 bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-5">

          <h3 className="text-lg font-semibold text-gray-900">
            {product.name}
          </h3>

          <p className="text-gray-500 mt-2">
            {product.category}
          </p>

          <div className="flex items-center justify-between mt-4">

            <span className="text-xl font-bold">
              ₹{product.price}
            </span>

            <span className="text-sm text-yellow-600">
              ⭐ {product.rating}
            </span>

          </div>

        </div>

      </Link>

      <div className="px-5 pb-5">
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductCard;
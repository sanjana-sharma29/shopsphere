import { useParams } from "react-router-dom";

import products from "../data/products";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useContext(CartContext);

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">
          Product not found
        </h1>
      </div>
    );
  }

  return (
    <main className="py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Product Image */}
        <div className="bg-gray-100 rounded-xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">

          <p className="text-gray-500 mb-2">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold text-gray-900">
            {product.name}
          </h1>

          <p className="text-yellow-600 mt-4">
            ⭐ {product.rating}
          </p>

          <p className="text-3xl font-bold mt-6">
            ₹{product.price}
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            This is a high-quality {product.name.toLowerCase()}.
            Discover great quality and a smooth shopping experience
            with ShopSphere.
          </p>

          {/* Quantity */}
          <div className="mt-8">

            <p className="font-semibold mb-2">
              Quantity
            </p>

            <div className="flex items-center gap-4">

              <button
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity === 1}
                className="border px-4 py-2 rounded-lg disabled:opacity-50"
              >
                -
              </button>

              <span className="font-semibold">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="border px-4 py-2 rounded-lg"
              >
                +
              </button>

            </div>

          </div>

   {/* Add to Cart */}
<button
  onClick={() => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
    };

  const existingItem = cart.find(
  (item) => item.id === product.id
);

if (existingItem) {
  setCart(
    cart.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity + quantity,
          }
        : item
    )
  );
} else {
  setCart([...cart, cartItem]);
}

    alert("Product added to cart!");
  }}
  className="mt-8 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
>
  Add to Cart
</button>

        </div>

      </div>
    </main>
  );
}

export default ProductDetails;
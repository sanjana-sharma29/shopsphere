import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

  const { cart } = useContext(CartContext);

  return (
    <main className="py-12 px-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-gray-600">
            Your cart is empty.
          </p>
        ) : (
          <div className="space-y-4">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 bg-white p-5 rounded-xl shadow-sm"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">

                  <h2 className="text-lg font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-gray-600 mt-1">
                    ₹{item.price}
                  </p>

                  <p className="text-gray-600 mt-1">
                    Quantity: {item.quantity}
                  </p>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </main>
  );
}

export default Cart;
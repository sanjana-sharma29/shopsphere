import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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
          <div>

            {/* Cart Items */}
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

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-3">

                      <button
                        onClick={() => {
                          setCart(
                            cart.map((cartItem) =>
                              cartItem.id === item.id
                                ? {
                                    ...cartItem,
                                    quantity: cartItem.quantity - 1,
                                  }
                                : cartItem
                            )
                          );
                        }}
                        disabled={item.quantity === 1}
                        className="border px-3 py-1 rounded-lg disabled:opacity-50"
                      >
                        -
                      </button>

                      <span className="font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => {
                          setCart(
                            cart.map((cartItem) =>
                              cartItem.id === item.id
                                ? {
                                    ...cartItem,
                                    quantity: cartItem.quantity + 1,
                                  }
                                : cartItem
                            )
                          );
                        }}
                        className="border px-3 py-1 rounded-lg"
                      >
                        +
                      </button>

                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => {
                        setCart(
                          cart.filter(
                            (cartItem) => cartItem.id !== item.id
                          )
                        );
                      }}
                      className="text-red-600 mt-3 hover:underline"
                    >
                      Remove
                    </button>

                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-8 border-t pt-6 flex justify-between items-center">
              <h2 className="text-xl font-bold">
                Total
              </h2>

              <p className="text-2xl font-bold">
                ₹{totalPrice}
              </p>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}

export default Cart;
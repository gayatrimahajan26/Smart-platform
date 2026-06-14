"use client";

import { useEffect, useState } from "react";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  category: string;
}

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  useEffect(() => {
    const items =
      JSON.parse(localStorage.getItem("cart") || "[]");

    setCart(items);
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const placeOrder = async () => {
    try {
      setIsPlacingOrder(true);

      for (const item of cart) {
        await fetch("http://localhost:5002/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: "gayatri123",
            productId: item._id,
            quantity: 1,
          }),
        });
      }

      localStorage.removeItem("cart");
      setCart([]);

      alert("Order Placed Successfully");
    } catch (error) {
      console.error("Order Error:", error);
      alert("Failed to place order");
    } finally {
      setIsPlacingOrder(false);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">
          Your cart is empty.
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              className="border p-4 mb-4 rounded shadow-sm"
            >
              <h2 className="font-semibold">
                {item.name}
              </h2>
              <p>₹ {item.price}</p>
              <p>{item.category}</p>
            </div>
          ))}

          <h2 className="text-2xl font-bold mt-5">
            Total: ₹ {total}
          </h2>

          <button
            onClick={placeOrder}
            disabled={isPlacingOrder}
            className="bg-green-500 text-white px-6 py-2 rounded mt-4 disabled:bg-gray-400"
          >
            {isPlacingOrder
              ? "Placing Order..."
              : "Place Order"}
          </button>
        </>
      )}
    </div>
  );
}
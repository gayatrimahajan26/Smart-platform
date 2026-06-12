"use client";

import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const items =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(items);
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">
        Shopping Cart
      </h1>

      {cart.map((item, index) => (
        <div
          key={index}
          className="border p-4 mb-4 rounded"
        >
          <h2>{item.name}</h2>
          <p>₹ {item.price}</p>
          <p>{item.category}</p>
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-5">
        Total: ₹ {total}
      </h2>
    </div>
  );
}
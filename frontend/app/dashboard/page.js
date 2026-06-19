"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    cart: 0,
  });

  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then((res) => res.json())
      .then((data) =>
        setStats((prev) => ({
          ...prev,
          products: data.length,
        }))
      );

    fetch("http://localhost:5002/orders")
      .then((res) => res.json())
      .then((data) =>
        setStats((prev) => ({
          ...prev,
          orders: data.length,
        }))
      );

    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setStats((prev) => ({
      ...prev,
      cart: cart.length,
    }));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-black border border-blue-500 p-6 rounded-xl">
          <h2 className="text-xl">Products</h2>
          <p className="text-4xl text-blue-500">
            {stats.products}
          </p>
        </div>

        <div className="bg-black border border-blue-500 p-6 rounded-xl">
          <h2 className="text-xl">Orders</h2>
          <p className="text-4xl text-blue-500">
            {stats.orders}
          </p>
        </div>

        <div className="bg-black border border-blue-500 p-6 rounded-xl">
          <h2 className="text-xl">Cart Items</h2>
          <p className="text-4xl text-blue-500">
            {stats.cart}
          </p>
        </div>
      </div>
    </div>
  );
}
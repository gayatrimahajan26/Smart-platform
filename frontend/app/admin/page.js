"use client";

import { useEffect, useState } from "react";

export default function Admin() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="bg-black border border-blue-500 p-6 rounded-xl">
        <h2 className="text-2xl mb-4">
          Products
        </h2>

        {products.map((product) => (
          <div
            key={product._id}
            className="flex justify-between border-b py-3"
          >
            <span>{product.name}</span>

            <button
              className="bg-red-500 px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
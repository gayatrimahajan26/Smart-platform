"use client";

import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-5">Products</h1>

      {products.map((product) => (
        <div
          key={product._id}
          className="border p-4 mb-3"
        >
          <h2>{product.name}</h2>
          <p>₹ {product.price}</p>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
}
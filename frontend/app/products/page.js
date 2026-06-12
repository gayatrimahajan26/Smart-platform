"use client";

import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const placeOrder = async (productId) => {
    try {
      const response = await fetch(
        "http://localhost:5002/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: "gayatri123",
            productId,
            quantity: 1,
          }),
        }
      );

      const data = await response.json();

      alert("Order Created");
      console.log(data);
    } catch (error) {
      console.error(error);
      alert("Failed to create order");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-5">Products</h1>

      {products.map((product) => (
        <div
          key={product._id}
          className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow-lg mb-4"
        >
          <h2 className="text-2xl font-bold">
            {product.name}
          </h2>

          <p className="text-green-400 text-xl mt-2">
            ₹ {product.price}
          </p>

          <p className="text-gray-400 mt-2">
            {product.category}
          </p>

         <button
  onClick={() => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Added to Cart");
  }}
  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded mt-4 text-white"
>
  Add To Cart
</button>
        </div>
      ))}
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5002/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-5">My Orders</h1>

      {orders.map((order) => (
        <div
          key={order._id}
          className="border p-4 mb-4 rounded"
        >
          <p>Product ID: {order.productId}</p>
          <p>Quantity: {order.quantity}</p>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
}

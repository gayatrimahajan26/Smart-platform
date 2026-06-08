"use client";

import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:4000/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      }
    );

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login Successful");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-5">Login</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md"
      >
        <input
          type="email"
          placeholder="Email"
          className="border p-2"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value
            })
          }
        />

        <button
          type="submit"
          className="border p-2"
        >
          Login
        </button>
      </form>
    </div>
  );
}
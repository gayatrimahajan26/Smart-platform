"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl">
        User Profile
      </h1>
    </div>
  );
}
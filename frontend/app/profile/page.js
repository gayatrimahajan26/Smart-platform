"use client";

export default function Profile() {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        User Profile
      </h1>

      <div className="mt-5 border p-5 rounded">
        <p>
          <strong>JWT Token:</strong>
        </p>

        <p className="break-all text-sm">
          {token || "No token found"}
        </p>
      </div>
    </div>
  );
}
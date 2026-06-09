import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </nav>
  );
}
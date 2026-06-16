import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-blue-500 px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-500">
        SmartShop
      </h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/orders">Orders</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
}
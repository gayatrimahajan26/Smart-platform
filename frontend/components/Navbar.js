import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 flex justify-between">
      <h1 className="font-bold text-xl">
        SmartShop
      </h1>

      <div className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/orders">Orders</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
}
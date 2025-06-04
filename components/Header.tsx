import Link from "next/link";

export default function Header() {
  return (
    <header className="p-6 flex justify-between items-center border-b shadow-md">
      <h1 className="text-2xl font-bold">JP Shop</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
      </nav>
    </header>
  );
}
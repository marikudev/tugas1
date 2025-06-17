import Link from "next/link";

export default function Header() {
  return (
    <div className="text-xl font-bold p-4 mb-8 text-gray-300 bg-gray-500">
      <Link href="/" className="hover:text-white px-4">
        Home
      </Link>
      <Link href="/about" className="ml-4 hover:text-white px-4">
        About
      </Link>
      <Link href="/posts" className="ml-4 hover:text-white px-4">
        Posts
      </Link>
    </div>
  );
}

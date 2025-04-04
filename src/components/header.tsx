import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaShoppingBag } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold">
          Inkride
        </Link>
        <form className="flex w-[320px] items-center gap-3 rounded-full border-1 border-zinc-700 px-5 py-3">
          <FaSearch className="w-5 h-5 text-zinc-700" />
          <input
            type="text"
            placeholder="Search for a book"
            className="flex-1 bg-transparent text-sm outline-0 placeholder:text-zinc-700"
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <FaShoppingBag className="h-4 w-4" />
          <span className="text-sm">Cart (0)</span>
        </div>

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/vinniemoth.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

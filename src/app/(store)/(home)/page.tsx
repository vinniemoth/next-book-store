import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-5 grid-rows-2 gap-3">
      <Link
        href="/"
        className="group relative col-span-2 row-span-2 rounded-lg bg-zinc-100 overflow-hidden flex items-center justify-center"
      >
        <Image
          src="/the_let_them_theory.jpg"
          className="p-3 pb-16 group-hover:scale-105 transition-transform duration-500"
          width={300}
          height={300}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-3 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate text-white">
            The Let Them Theory
          </span>
          <span className="flex h-full items-center justify-center rounded-full text-white bg-zinc-500 px-4 font-semibold">
            $14
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative  col-span-2 row-span-2 rounded-lg bg-zinc-100 overflow-hidden flex items-center justify-center"
      >
        <Image
          src="/sunrise_on_the_reaping.jpg"
          className="p-3 pb-16 group-hover:scale-105 transition-transform duration-500"
          width={300}
          height={300}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-3 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate text-white">
            Sunrise on the Reaping
          </span>
          <span className="flex h-full items-center justify-center rounded-full text-white bg-zinc-500 px-4 font-semibold">
            $20
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-1 row-span-1 rounded-lg bg-zinc-100 overflow-hidden flex items-center justify-center"
      >
        <Image
          src="/the_new_menopause.jpg"
          className="p-3 pb-16 group-hover:scale-105 transition-transform duration-500"
          width={150}
          height={150}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-3 h-12 flex items-center gap-2 max-w-[200px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate text-white">The New Menopause</span>
          <span className="flex h-full items-center justify-center rounded-full text-white bg-zinc-500 px-4 font-semibold">
            $18
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-1 row-span-1 rounded-lg bg-zinc-100 overflow-hidden flex items-center justify-center"
      >
        <Image
          src="/forgotten_home_apothecary.jpg"
          className="p-3 pb-16 group-hover:scale-105 transition-transform duration-500"
          width={150}
          height={150}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-3 h-12 flex items-center gap-2 max-w-[200px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate text-white">
            Forgotten Home Apothecary
          </span>
          <span className="flex h-full items-center justify-center rounded-full text-white bg-zinc-500 px-4 font-semibold">
            $37
          </span>
        </div>
      </Link>
    </div>
  );
}

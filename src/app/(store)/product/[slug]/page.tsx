import Image from "next/image";

export default function ProductPage() {
  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 mx-auto overflow-hidden">
        <Image
          src="/the_let_them_theory.jpg"
          alt=""
          width={300}
          height={300}
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          The Let Them Theory
        </h1>
        <p className="mt-2 leading-relacxed text-zinc-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatem
          hic repellendus error, quibusdam iste nemo enim aut soluta magnam
          ipsam placeat reiciendis asperiores ducimus aliquid odit praesentium
          aperiam. Quasi.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full px-5 py-2.5 bg-zinc-300 font-semibold">
            $14
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Versions</span>
          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-20 items-center justify-center rounded-full border border-zinc-700 bg-zinc-300 text-sm font-semibold"
            >
              Paperback
            </button>
            <button
              type="button"
              className="flex h-9 w-20 items-center justify-center rounded-full border border-zinc-700 bg-zinc-300 text-sm font-semibold"
            >
              Hardcover
            </button>
            <button
              type="button"
              className="flex h-9 w-20 items-center justify-center rounded-full border border-zinc-700 bg-zinc-300 text-sm font-semibold"
            >
              Ebook
            </button>
            <button
              type="button"
              className="flex h-9 w-20 items-center justify-center rounded-full border border-zinc-700 bg-zinc-300 text-sm font-semibold"
            >
              Audiobook
            </button>
          </div>
        </div>
        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-400 text-white font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

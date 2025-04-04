import Link from "next/link";
import Image from "next/image";
import { api } from "@/data/api";
import { Product } from "@/data/types/product";

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api("/products/featured", {
    next: {
      revalidate: 60 * 60, // 1 hora
    },
  });
  const products = await response.json();

  return products;
}

export default async function Home() {
  const [firstHighlight, secondHighlight, ...otherProducts] =
    await getFeaturedProducts();

  return (
    <div className="grid max-h-[860px] grid-cols-5 grid-rows-2 gap-3">
      <Link
        href={`/product/${firstHighlight.slug}`}
        className="group relative col-span-2 row-span-2 rounded-lg bg-zinc-100 overflow-hidden flex items-center justify-center"
      >
        <Image
          src={firstHighlight.image}
          className="p-3 pb-16 group-hover:scale-105 transition-transform duration-500"
          width={300}
          height={300}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-3 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate text-white">
            {firstHighlight.title}
          </span>
          <span className="flex h-full items-center justify-center rounded-full text-white bg-zinc-500 px-4 font-semibold">
            {firstHighlight.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>
      <Link
        href={`/product/${secondHighlight.slug}`}
        className="group relative  col-span-2 row-span-2 rounded-lg bg-zinc-100 overflow-hidden flex items-center justify-center"
      >
        <Image
          src={secondHighlight.image}
          className="p-3 pb-16 group-hover:scale-105 transition-transform duration-500"
          width={300}
          height={300}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-3 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate text-white">
            {secondHighlight.title}
          </span>
          <span className="flex h-full items-center justify-center rounded-full text-white bg-zinc-500 px-4 font-semibold">
            {secondHighlight.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative col-span-1 row-span-1 rounded-lg bg-zinc-100 overflow-hidden flex items-center justify-center"
          >
            <Image
              src={product.image}
              className="p-3 pb-16 group-hover:scale-105 transition-transform duration-500"
              width={150}
              height={150}
              quality={100}
              alt=""
            />
            <div className="absolute bottom-3 h-12 flex items-center gap-2 max-w-[200px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate text-white">
                {product.title}
              </span>
              <span className="flex h-full items-center justify-center rounded-full text-white bg-zinc-500 px-4 font-semibold">
                {product.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

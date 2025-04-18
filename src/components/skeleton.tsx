import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export default function Skeleton({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={twMerge("bg-zinc-900/20 animate-pulse rounded-md", className)}
      {...props}
    ></div>
  );
}

import Skeleton from "@/components/skeleton";

export default function HomeLoading() {
  return (
    <div className="grid h-full grid-cols-5 grid-rows-2 gap-3">
      <Skeleton className="col-span-2 row-span-2 h-[542px]"></Skeleton>
      <Skeleton className="col-span-2 row-span-2 h-[542px]"></Skeleton>
      <Skeleton className="col-span-1 row-span-1"></Skeleton>
      <Skeleton className="col-span-1 row-span-1"></Skeleton>
    </div>
  );
}

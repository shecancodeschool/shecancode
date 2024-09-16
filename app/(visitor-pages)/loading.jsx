import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col space-y-3 w-full bg-sky-950 h-screen justify-center items-center">
      <div className="bg-white p-5 animate-pulse">
        <Image src="/logoscc.png" alt="logo" width={80} height={80} className="" />
      </div>
    </div>
  );
}
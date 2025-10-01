"use client";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { foodPhotos } from "@/lib/constant";

export default function PhotoBooth() {
  const router = useRouter();

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 360;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="h-fit my-16 px-5">
        <div className="flex flex-col items-center text-center mb-20">
          <h1 className="header-font text-green-500 text-7xl mb-5 font-extrabold">
            Just a <span className="text-black">glimpse</span>.
          </h1>
          <p className="text-lg subHeader-font">A glance of what we cook</p>
        </div>

        <div className="relative p-1">
          <button
            onClick={() => scroll("left")}
            className={cn(
              "absolute left-[-10px] top-1/2 -translate-y-1/2 z-10 block",
              "bg-[var(--main-color)] text-white p-2 rounded-full"
            )}
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex items-center overflow-scroll no-scroll gap-3"
          >
            {foodPhotos?.map((food) => (
              <Image
                key={food.id}
                src={food?.src}
                alt="food"
                height={900}
                width={900}
                className="h-[350px] bg-green-200 shadow-sm w-[350px] shrink-0  object-contain rounded-2xl "
              />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className={cn(
              "absolute block bg-[var(--main-color)] text-white p-2",
              "right-[-10px] top-1/2 -translate-y-1/2 z-10 rounded-full"
            )}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center w-full">
          <Button
            className=" rounded-4xl text-xl h-14 w-[250px] cursor-pointer"
            size={"lg"}
            onClick={() => router.push("/food")}
          >
            View More Food <Eye color="var(--main-color-secondary)" />
          </Button>
        </div>
      </div>
    </div>
  );
}

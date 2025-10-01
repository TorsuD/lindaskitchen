"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, Eye } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { foodPhotos } from "@/lib/constant";

export default function PhotoBooth() {
  const router = useRouter();

  return (
    <div>
      <div className="h-fit my-16 px-5">
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="header-font text-green-500 text-7xl mb-5 font-extrabold">
            Just a <span className="text-black">glimpse</span>.
          </h1>
          <p className="text-lg subHeader-font">A glance of what we cook</p>
        </div>

        <div className="relative p-1">
          <div
            // ref={scrollRef}
            className="flex items-center overflow-scroll no-scroll gap-3"
          >
            {foodPhotos?.map((food) => (
              <Image
                key={food.id}
                src={food?.src}
                alt="food"
                height={900}
                width={900}
                className="h-[250px] bg-green-200 shadow-sm w-[250px] shrink-0  object-contain   rounded-2xl "
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center w-full">
          <Button
            className=" rounded-2xl text-xl h-14 w-[250px] cursor-pointer"
            size={"lg"}
            onClick={() => router.push("/food")}
          >
            <Eye color="var(--main-color-secondary)" /> View More Food
          </Button>
        </div>
      </div>
    </div>
  );
}

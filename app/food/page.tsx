"use client";

import ScrollUpButton from "@/components/ScrollUpButton";
import { foodPhotos, foodVideos } from "@/lib/constant";
import Image from "next/image";

export default function FoodPage() {
  return (
    <div className="md:pb-36 pb-10 flex-1 max-w-7xl lg:mx-auto md:px-10 px-3 w-full">
      <ScrollUpButton />
      <div className="flex flex-col items-center justify-center my-10">
        <h1 className="text-6xl text-green-500 font-extrabold header-font">
          Food
        </h1>
        <p className="subHeader-font">Enjoy pictures and videos of our foods</p>
      </div>

      <div>
        {foodPhotos?.slice(0, 1)?.map((food) => (
          <Image
            key={food.id}
            src={food?.src}
            alt="food"
            height={900}
            width={900}
            className="h-full bg-green-200 shadow-sm w-full shrink-0  object-contain rounded-2xl "
          />
        ))}
      </div>

      <div className="mt-10 grid lg:grid-cols-4 grid-cols-1 gap-5">
        {foodPhotos?.slice(1, foodPhotos?.length)?.map((food) => (
          <Image
            key={food.id}
            src={food?.src}
            alt="food"
            height={900}
            width={900}
            className="h-full w-full lg:h-[600px] bg-green-200 shadow-sm lg:w-[600px] shrink-0  object-contain rounded-2xl "
          />
        ))}
      </div>

      <div className="mt-10 grid lg:grid-cols-4 grid-cols-1 gap-5">
        {foodVideos?.map((food) => (
          <video
            key={food.id}
            src={food.src}
            controls
            className="h-full w-full bg-green-200 shadow-sm shrink-0 object-contain rounded-2xl"
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Footer() {
  // date
  const date = new Date();

  return (
    <div
      className={cn(
        "relative flex items-center justify-center p-10 text-white",
        "overflow-hidden text-center w-full bg-black"
      )}
    >
      <div className="flex flex-col gap-4 text-sm">
        <div>Copyright. All rights reserved.</div>
        <p className="text-lg md:text-2xl text-[var(--main-color-secondary)]">
          Linda&apos;s Kitchen.
        </p>

        <div className="flex items-center justify-center">
          <Image
            src={"/svgs/instagram.svg"}
            alt="insta"
            height={200}
            width={200}
            className="h-[30px] w-[30px]"
          />
        </div>

        <div>
          <p>{date?.getFullYear()}</p>
        </div>

        <p className="opacity-10">Created by TorsuD</p>
      </div>

      <div className="z-40">
        <Image
          src={"/svgs/Mpatapo.svg"}
          alt="Gye nyame"
          width={900}
          loading="lazy"
          height={900}
          className="absolute top-[100px] rotate-45 -z-10 left-[0px] overflow-clip h-[70px] w-[70px] lg:h-[200px] lg:w-[200px] object-contain"
        />

        <Image
          src={"/svgs/Pempamsie.svg"}
          alt="Gye nyame"
          width={900}
          loading="lazy"
          height={900}
          className="absolute top-[100px] rotate-12 -z-10 right-[0px]  overflow-clip h-[70px] w-[70px] lg:h-[200px] lg:w-[200px] object-contain"
        />
      </div>
    </div>
  );
}

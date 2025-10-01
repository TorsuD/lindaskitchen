"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import AdinkraSymbols from "./Adinkra";
import Image from "next/image";
import waakye from "@/public/food/waakye.png";
import rice from "@/public/food/rice-and-stew.png";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  return (
    <div className="relative grid place-items-center h-[600px] w-full bg-green-200">
      <div className="flex flex-col gap-3 items-center justify-center text-center">
        <h1 className="text-4xl lg:text-6xl header-font font-bold w-full lg:w-[800px]">
          From our <span className="text-green-500">Ghanaian</span> kitchen to
          your plate
          <span className="text-[var(--main-color-secondary)]">.</span>
        </h1>
        <p className="text-lg md:text-xl mb-5">
          Homemade Ghanaian kitchen to your plate.
        </p>

        <Button
          onClick={() => router.push("/order")}
          className="rounded-2xl text-xl h-14 w-[200px] cursor-pointer"
          size={"lg"}
        >
          View Menu <ArrowRight color="var(--main-color-secondary)" />
        </Button>

        <div className="z-10">
          <AdinkraSymbols />
        </div>
      </div>

      <Image
        src={waakye}
        alt="Waakye"
        width={900}
        height={900}
        priority
        className="absolute top-[-310px] z-10 left-[-100px] overflow-hidden h-[550px] w-[550px] object-contain lg:top-[-270px]"
      />

      <Image
        src={rice}
        alt="Rice and stew"
        width={900}
        height={900}
        priority
        className="absolute bottom-[-180px]  lg:bottom-[-250px] overflow-hidden z-10 right-[2px] h-[350px] w-[350px] lg:h-[500px] lg:w-[500px] object-contain"
      />
    </div>
  );
}

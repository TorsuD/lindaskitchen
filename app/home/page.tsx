import Image from "next/image";
import jollof from "@/public/food/jollof.png";
import rice from "@/public/food/rice-and-stew.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AdinkraSymbols from "@/components/Adinkra";

export default function HomePage() {
  return (
    <main>
      <div className="relative grid place-items-center h-[600px] w-full bg-green-100 -z-10">
        <div className="flex flex-col gap-3 items-center justify-center text-center">
          <h1 className="text-4xl lg:text-6xl header-font font-bold w-full lg:w-[800px]">
            From our{" "}
            <span className="text-[var(--main-color-secondary)]">Ghanaian</span>{" "}
            kitchen to your plate
            <span className="text-[var(--main-color-secondary)]">.</span>
          </h1>
          <p className="text-lg md:text-xl mb-5">
            Homemade Ghanaian kitchen to your plate.
          </p>

          <Button
            className=" rounded-4xl text-xl h-14 w-[200px] z-50"
            size={"lg"}
          >
            View Menu <ArrowRight color="var(--main-color-secondary)" />
          </Button>

          {/* <div className="lg:block hidden"> */}
          <AdinkraSymbols />
          {/* </div> */}
        </div>

        <Image
          src={jollof}
          alt="Jollof rice"
          width={900}
          height={900}
          priority
          className="absolute top-[-300px]  -z-10 left-[-100px] overflow-hidden  h-[550px] w-[550px] object-contain lg:top-[-290px]"
        />

        <Image
          src={rice}
          alt="Rice and stew"
          width={900}
          height={900}
          priority
          className="absolute bottom-[-250px] -z-10 right-[2px] overflow-clip h-[500px] w-[500px] object-contain"
        />
      </div>

      {/* STEPS TO ORDERING  */}
      {/* <div className="mt-10">
        <div>
          <h1 className="text-5xl font-bold header-font">
            Steps to making an order
          </h1>
          <p className="text-sm">3 easy steps to ordering food from us </p>
        </div>
      </div> */}
    </main>
  );
}

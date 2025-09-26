import Image from "next/image";
import jollof from "@/public/food/jollof.png";
import rice from "@/public/food/rice-and-stew.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AdinkraSymbols from "@/components/Adinkra";
import { stepsToOrder } from "@/lib/constant";
import { Fade, Slide } from "react-awesome-reveal";

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

          <Button className=" rounded-4xl text-xl h-14 w-[200px]" size={"lg"}>
            View Menu <ArrowRight color="var(--main-color-secondary)" />
          </Button>

          <AdinkraSymbols />
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
          className="absolute bottom-[-250px] overflow-hidden -z-10 right-[2px] h-[500px] w-[500px] object-contain"
        />
      </div>
      {/* ENDING OF LANDING PAGE */}

      {/* BODY OF THE WEBSITE */}
      {/* STEPS TO ORDERING  */}
      <div className="relative px-3 w-full pb-10 flex-1 max-w-7xl lg:mx-auto md:pb-36 md:px-10">
        <div className="mt-[280px] lg:mt-[100px]">
          <div>
            <h1 className="text-4xl text-center lg:text-5xl lg:text-left font-bold header-font">
              Steps to making an{" "}
              <span className="text-[var(--main-color)]">order.</span>
            </h1>
            <p className="text-center text-lg mt-1 lg:text-left">
              3 easy steps to ordering food from us{" "}
            </p>
          </div>

          <div className="mt-10">
            {stepsToOrder?.map((step, idx) => (
              <div
                key={step.id}
                className="flex flex-col lg:flex-row gap-4 items-center mb-10"
              >
                <Fade>
                  <div className="h-14 w-14 header-font rounded-lg text-white text-2xl bg-[var(--main-color)] z-20 flex items-center justify-center lg:text-4xl lg:h-20 lg:w-20 ">
                    {idx + 1}
                  </div>
                </Fade>
                <div>
                  <Slide>
                    <h1 className="subHeader-font text-2xl lg:text-3xl mb-4 ">
                      {step.title}
                    </h1>
                  </Slide>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={"/svgs/Mako.svg"}
          alt="Gye nyame"
          width={900}
          height={900}
          className="absolute bottom-[20px] rotate-45 -z-10 left-[-250px] md:left-[-300px] overflow-clip  h-[350px] w-[350px] object-contain"
        />
      </div>

      {/*  */}
    </main>
  );
}

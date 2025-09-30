import { stepsToOrder } from "@/lib/constant";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

export default function StepsToOrder() {
  return (
    <div className="relative px-3 w-full pb-10 flex-1 max-w-7xl lg:mx-auto md:pb-36 md:px-10">
      <div className="mt-[280px] lg:mt-[100px]">
        <div>
          <h1 className="text-4xl text-center lg:text-5xl lg:text-left font-bold header-font">
            Steps to making an <span className="text-green-500">order.</span>
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
        className="absolute bottom-[20px] spin-slow rotate-45 -z-10 left-[-250px] md:left-[-300px] overflow-clip  h-[350px] w-[350px] object-contain"
      />
    </div>
  );
}

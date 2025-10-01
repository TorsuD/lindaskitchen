"use client";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import RotatingText from "./ui/rotating-text";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function FoodBanner() {
  const router = useRouter();
  return (
    <ParallaxProvider>
      <div className="bg-[url('/core-v-bg.jpg')] w-full">
        <Parallax speed={-5}>
          <div className="grid place-items-center h-[40vh] lg:h-[50vh]">
            <div>
              <div className="mb-2 px-4 rounded-md w-fit flex items-center justify-center text-center font-bold text-md backdrop-blur-xs text-white">
                Homemade Ghanaian food, made for you.
              </div>
              <div
                className={cn(
                  "flex items-center justify-center",
                  "header-font text-2xl lg:text-7xl font-extrabold  text-white",
                  "transition-all ease duration-300"
                )}
              >
                <span className="mr-2 text-shadow-lg backdrop-blur-xs">
                  Enjoy
                </span>
                <RotatingText
                  texts={[
                    "Delicious!",
                    "Tasty!",
                    "Amazing!",
                    "Mouth-watering!",
                  ]}
                  mainClassName="px-2 transition-all ease duration-300 sm:px-2 md:px-3 bg-white header-font text-2xl lg:text-7xl font-extrabold text-[var(--main-color)] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />

                <span className="ml-2 text-shadow-lg backdrop-blur-xs">
                  Food
                </span>
              </div>

              <div className="flex items-center justify-center mt-10">
                <Button
                  className=" rounded-2xl text-xl h-14 w-[200px] cursor-pointer"
                  size={"lg"}
                  onClick={() => router.push("/order")}
                >
                  Order now <ArrowRight color="var(--main-color-secondary)" />
                </Button>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}

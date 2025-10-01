"use client";

import { cn } from "@/lib/utils";
import { ArrowUpFromDot, Pizza } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function ScrollUpButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const foodPath = "/food";

  return (
    <div>
      {backToTopButton && (
        <div className="flex items-center gap-4">
          {pathName === foodPath && (
            <Link href="/order">
              <div
                className={cn(
                  "fixed right-[80px] z-50 bottom-[50px] h-[50px] w-[200px]",
                  "text-lg cursor-pointer transition-all ease duration-200",
                  "backdrop-blur-3xl text-white flex items-center justify-center",
                  "rounded-2xl shadow-xl transition-all ease duration-150"
                )}
              >
                Order food
              </div>
            </Link>
          )}
          <div
            onClick={scrollUp}
            className={cn(
              "fixed right-[20px] z-50 bottom-[50px] h-[50px] w-[50px]",
              "text-[40px] cursor-pointer transition-all ease duration-200"
            )}
          >
            <ArrowUpFromDot
              strokeWidth={"3px"}
              color={"white"}
              className="bg-[var(--main-color)] rounded-2xl shadow-md transition-all h-[50px] w-[50px] ease duration-150 p-3"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ScrollUpButton;

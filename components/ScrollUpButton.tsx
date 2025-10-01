"use client";

import { cn } from "@/lib/utils";
import { ArrowUpFromDot } from "lucide-react";
import React, { useEffect, useState } from "react";

function ScrollUpButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

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
  return (
    <div>
      {backToTopButton && (
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
      )}
    </div>
  );
}

export default ScrollUpButton;

"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ThemeSwitch() {
  const { setTheme, theme = "system" } = useTheme();

  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <div
        className={cn(
          "transition-all ease-in duration-150",
          "flex items-center gap-2 border border-2-gray-900 p-1 rounded-2xl antialiased"
        )}
      >
        <Sun
          size={30}
          onClick={() => setTheme("light")}
          className={` p-1 h-[27px] w-[27px] rounded-full ${
            theme === "light"
              ? " bg-[var(--main-color-secondary)] text-white"
              : ""
          }`}
        />

        <Moon
          size={30}
          color={"var(--main-color-secondary)"}
          onClick={() => setTheme("dark")}
          className={` p-[2px] h-[27px] w-[27px] rounded-full ${
            theme === "dark" ? " bg-[var(--main-color)]" : ""
          }`}
        />
      </div>
    </div>
  );
}

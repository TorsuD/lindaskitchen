"use client";

import AdinkraSymbols from "@/components/Adinkra";
import { useDialog } from "@/lib/hooks/useDialog";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Menu() {
  const dialogBody = (
    <Image
      src={"/menu.jpg"}
      height={900}
      width={900}
      alt="menu"
      className="h-full w-full object-contain"
    />
  );

  const { setOpen, DialogComponent } = useDialog({
    title: "Our menu",
    description: "",
    body: dialogBody,
    triggerLabel: "",
  });

  return (
    <div className="grid place-items-center h-[90vh] p-2">
      <div className="text-sm text-[var(--main-color-secondary)]">
        <div
          className={cn(
            "flex items-center z-50 gap-4 cursor-pointer bg-black",
            "transition-all ease duration-200 subHeader-font",
            "hover:bg-gray-800 border border-gray-500 px-2 py-2 lg:px-6 lg:py-4 rounded-xl"
          )}
          onClick={() => setOpen(true)}
        >
          {DialogComponent}
          <div>
            <Image
              src={"/logo-white.jpg"}
              alt="menu"
              height={900}
              width={900}
              className="h-24 w-24 object p-2 border rounded-lg border-white cover"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl text-[var(--main-color-secondary)] font-bold tracking-wider">
              Menu
            </h1>
            <p className="text-sm text-white header-font">
              List of foods available for purchase
            </p>
          </div>
          <AdinkraSymbols />
        </div>
      </div>
    </div>
  );
}

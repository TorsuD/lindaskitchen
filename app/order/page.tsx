"use client";

import AdinkraSymbols from "@/components/Adinkra";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Order() {
  const dialogBody = (
    <div className="">
      <Image
        src={"/menu.jpg"}
        height={900}
        width={900}
        alt="menu"
        className="h-full w-full object-contain"
      />
    </div>
  );

  return (
    <div className=" relative grid place-items-center h-[90vh] p-2">
      <div className="text-sm text-[var(--main-color-secondary)]">
        <Dialog>
          <DialogTrigger>
            <div
              className={cn(
                "flex items-center z-50 gap-4 cursor-pointer bg-black",
                "transition-all ease duration-200 subHeader-font",
                "hover:bg-gray-800 border border-gray-500 px-2 py-2 lg:px-6 lg:py-4 rounded-xl"
              )}
              // onClick={() => setOpen(true)}
            >
              {/* {DialogComponent} */}

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

              <div className="-z-10">
                <AdinkraSymbols />
              </div>
            </div>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Menu</DialogTitle>
              <DialogDescription>{dialogBody}</DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <DialogClose asChild>
                <Button>Close Menu</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div className="mt-4 flex items-center justify-center">
          <Link href={"/food"}>
            <Button className="flex items-center">
              View Photos of foods we have cooked before{" "}
              <EyeIcon color="var(--main-color-secondary)" />
            </Button>
          </Link>
        </div>

        <div className="mt-10">
          <p className="text-black text-xl text-center">
            Tap to call to place an order
          </p>

          <div className="flex items-center justify-center text-xl ">
            <a
              href="tel:+17058082139"
              className=" text-blue-600 hover:underline"
            >
              +1 (705) 808-2139
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

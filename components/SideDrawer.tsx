"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItemsMobileView } from "@/lib/constant";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Fade } from "react-awesome-reveal";

type Props = {
  children: React.ReactNode;
  title: string;
};

export default function SideDrawer({ children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className=" text-[var(--main-color)]">
        <SheetHeader>
          <SheetTitle className=" text-center text-[var(--main-color)] text-xl">
            {/* {title} */}
          </SheetTitle>
        </SheetHeader>

        <div className="px-5 flex flex-col gap-5 mt-5">
          {navItemsMobileView?.map((navitem) => {
            return (
              <Fade key={navitem?.id}>
                <Link
                  href={navitem?.href}
                  className="text-4xl flex text-center items-center gap-3"
                  onClick={() => setOpen(false)}
                >
                  <ArrowRight size={30} />
                  {navitem?.name}
                </Link>
              </Fade>
            );
          })}
        </div>

        <SheetFooter>
          <div className="flex items-center gap-5 px-3 mt-2">
            {/* <ThemeSwitch /> */}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

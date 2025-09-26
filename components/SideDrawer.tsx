"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItemsMobileView } from "@/lib/constant";
import { useState } from "react";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitcher";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
};

export default function SideDrawer({ children, title, description }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>

        <div className="px-5 flex flex-col gap-5 mt-5">
          {navItemsMobileView?.map((navitem) => {
            return (
              <Link
                key={navitem?.id}
                href={navitem?.href}
                className="text-4xl flex text-center items-center gap-3 text-[var(--main-color)]"
                onClick={() => setOpen(false)}
              >
                {navitem?.name}
              </Link>
            );
          })}
        </div>

        <SheetFooter>
          <div className="flex items-center gap-5 px-3 mt-2">
            <ThemeSwitch />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

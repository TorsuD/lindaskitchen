"use client";

import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import SideDrawer from "./SideDrawer";
import { APP_DESCRIPTION, APP_NAME, navItems } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import ThemeSwitch from "./ThemeSwitcher";
import { cn } from "@/lib/utils";

export default function Header() {
  const router = useRouter();
  const path = usePathname();
  return (
    <div className="px-5 py-4 z-30 bg-white">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <Link href={"/"}>
          <Image
            src={"/logo-black-text.png"}
            alt="logo"
            width={500}
            height={500}
            className="h-16 w-16 object-contain lg:h-16 lg:w-[200px]"
          />
        </Link>

        {/* MAIN MENU */}
        <ul className="hidden lg:flex items-center gap-6 text-lg cursor-pointer">
          {navItems?.map((navItem) => (
            <Link
              key={navItem?.id}
              className={cn(
                "transition-all ease-in duration-150",
                `${
                  path === navItem?.href &&
                  "text-[var(--main-color-secondary)] font-extrabold"
                }`,
                "hover:text-[var(--main-color)]"
              )}
              href={navItem?.href}
            >
              {navItem?.name}
            </Link>
          ))}
        </ul>

        {/* ORDER FROM US BUTTON */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          {/* <ThemeSwitch /> */}
          <Button
            className="bg-[var(--main-color)] text-lg rounded-ssm"
            onClick={() => {
              router.push("/order");
            }}
          >
            Order food
          </Button>
        </div>

        {/* SIDE DRAWER */}
        <div className="lg:hidden block">
          <SideDrawer title={APP_NAME} description={APP_DESCRIPTION}>
            <div className="backdrop-blur-3xl flex items-center justify-center h-12 w-12 rounded-full">
              <MenuIcon size={30} className="text-[var(--main-color)]" />
            </div>
          </SideDrawer>
        </div>
      </div>
    </div>
  );
}

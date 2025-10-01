import AdinkraSymbols from "@/components/Adinkra";
import { Heart, LeafyGreen, Sparkle, UserStar } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative mt-10 md:pb-36 pb-10 flex-1 max-w-7xl lg:mx-auto md:px-10 px-3 w-full">
      <div>
        <h1 className="header-font font-bold lg:text-6xl text-4xl">
          About <span className="text-green-500">Linda&apos;s Kitchen.</span>
        </h1>
      </div>

      <div>
        <p className="tracking-wider mt-5 text-xl">
          From our Ghanaian kitchen to your plate; homemade food made with love.{" "}
          <br />
          We celebrate authentic flavors, fresh ingredients, and the traditions
          that bring family and friends together. Every dish is crafted with
          care, honoring Ghanaian heritage and sharing it with you.
        </p>
      </div>

      <div className="mt-10  text-xl tracking-tight flex flex-col gap-5">
        <h1 className="header-font font-bold lg:text-6xl text-4xl">
          Core <span className="text-green-500">values</span>
        </h1>

        <div className="flex items-center gap-5">
          <Sparkle className="size-[25px]" color="gold" />
          <div>
            <h2 className="text-3xl header-font">Authencity</h2>
            <p>Celebrating true Ghanaian flavors in every dish</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <LeafyGreen className="size-[25px]" color={"green"} />
          <div>
            <h2 className="text-3xl header-font">Freshness</h2>
            <p>Homemade meals crafted with the finest ingredients.</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <UserStar className="size-[25px]" color="blue" />
          <div>
            <h2 className="text-3xl header-font">Community</h2>
            <p>Serving food that brings people together</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Heart className="size-[25px]" color="red" />
          <div>
            <h2 className="text-3xl header-font">Care</h2>
            <p>Cooking with love and attention to every detail.</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Image
            src="/svgs/gye-nyame.svg"
            alt="gye-nyame"
            height={900}
            width={900}
            className="size-[30px] object-contain"
          />
          <div>
            <h2 className="text-3xl header-font">Tradition</h2>
            <p>Preserving Ghanaian culinary heritage in every bite.</p>
          </div>
        </div>
      </div>

      <div className="opacity-15">
        <AdinkraSymbols />
      </div>
    </div>
  );
}

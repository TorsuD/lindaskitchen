import AdinkraSymbols from "@/components/Adinkra";

export default function About() {
  return (
    <div className="relative mt-10 md:pb-36 pb-10 flex-1 max-w-7xl lg:mx-auto md:px-10 px-3 w-full">
      <div>
        <h1 className="header-font font-bold lg:text-6xl text-3xl">
          About{" "}
          <span className="text-[var(--main-color)]">
            Linda&apos;s Kitchen.
          </span>
        </h1>
      </div>

      <div className="opacity-30">
        <AdinkraSymbols />
      </div>
    </div>
  );
}

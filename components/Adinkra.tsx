import Image from "next/image";

export default function AdinkraSymbols() {
  return (
    <div>
      {/* LARGE SCREEN VIEW OF ADINKRA SYMBOLS */}
      <div className="lg:block hidden ">
        <Image
          src={"/svgs/gye-nyame.svg"}
          alt="Gye nyame"
          width={900}
          height={900}
          className="opacity-30 absolute bounce-up-down top-[20px]  -z-10 right-[200px] overflow-clip  h-[190px] w-[190px] object-contain"
        />

        <Image
          src={"/svgs/Akofena.svg"}
          alt="Akofena"
          width={900}
          height={900}
          className="opacity-30 absolute top-[50%] -rotate-12 -z-10 right-[50px] overflow-clip  h-[165px] w-[165px] object-contain"
        />

        <Image
          src={"/svgs/Sankofa.svg"}
          alt="Sankofa"
          width={900}
          height={900}
          className="opacity-30 absolute top-[320px] bounce-up-down -rotate-12 -z-10 left-[250px] overflow-clip  h-[120px] w-[120px] object-contain"
        />

        <Image
          src={"/svgs/Wo nsa da mu.svg"}
          alt="Wo nsa da mu"
          width={900}
          height={900}
          className="opacity-30 absolute top-[180px] rotate-6 -z-10 left-[10px] overflow-clip  h-[60px] w-[60px] object-contain"
        />

        <Image
          src={"/svgs/Dwennimmen.svg"}
          alt="Dwennimmen"
          width={900}
          height={900}
          className="opacity-30 absolute top-[10px] rotate-12 -z-10 right-1/2 overflow-clip  h-[75px] w-[75px] object-contain"
        />

        <Image
          src={"/svgs/adom.svg"}
          alt="adom"
          width={900}
          height={900}
          className="opacity-30 absolute bottom-[10px] rotate-12 -z-10 left-1/2 overflow-clip  h-[90px] w-[90px] object-contain"
        />

        {/* <Image
          src={"/svgs/Mpatapo.svg"}
          alt="Mpatapo"
          width={900}
          height={900}
          className="absolute bottom-[-50px] bounce-up-down z-10 right-[38%] overflow-clip  h-[70px] w-[70px] object-contain"
        /> */}
      </div>

      {/* MOBILE VIEW OF ADINKRA SYMBOLS */}
      <div className="block lg:hidden">
        <Image
          src={"/svgs/gye-nyame.svg"}
          alt="Gye nyame"
          width={900}
          height={900}
          className="absolute top-20 right-10 bounce-up-down -rotate-12 -z-10 overflow-clip  h-[90px] w-[90px] object-contain"
        />

        <Image
          src={"/svgs/Mpatapo.svg"}
          alt="Mpatapo"
          width={900}
          height={900}
          className="absolute top-[320px] z-10   left-[15px] -rotate-12 overflow-clip  h-[55px] w-[55px] object-contain"
        />

        <Image
          src={"/svgs/Dwennimmen.svg"}
          alt="Dwennimmen"
          width={900}
          height={900}
          className="absolute top-[450px]    rotate-12 z-10 right-[20px] overflow-hidden  h-[70px] w-[70px] object-contain"
        />

        <Image
          src={"/svgs/Sankofa.svg"}
          alt="Sankofa"
          width={900}
          height={900}
          className="absolute top-[700px] bounce-up-down -rotate-12 z-10 left-[20px] overflow-clip  h-[70px] w-[70px] object-contain"
        />
      </div>
    </div>
  );
}

import Image from "next/image";

export default function AdinkraSymbols() {
  return (
    <div>
      {/* LARGE SCREEN VIEW OF ADINKRA SYMBOLS */}
      <div className="lg:block hidden">
        <Image
          src={"/svgs/gye-nyame.svg"}
          alt="Gye nyame"
          width={900}
          height={900}
          className="absolute top-[20px] rotate-45 -z-10 right-[200px] overflow-clip  h-[90px] w-[90px] object-contain"
        />

        <Image
          src={"/svgs/Akofena.svg"}
          alt="Akofena"
          width={900}
          height={900}
          className="absolute top-[50%] -rotate-12 -z-10 right-[50px] overflow-clip  h-[65px] w-[65px] object-contain"
        />

        <Image
          src={"/svgs/Sankofa.svg"}
          alt="Sankofa"
          width={900}
          height={900}
          className="absolute top-[320px] -rotate-12 -z-10 left-[250px] overflow-clip  h-[90px] w-[90px] object-contain"
        />

        <Image
          src={"/svgs/Wo nsa da mu.svg"}
          alt="Wo nsa da mu"
          width={900}
          height={900}
          className="absolute top-[180px] rotate-6 -z-10 left-[10px] overflow-clip  h-[60px] w-[60px] object-contain"
        />

        <Image
          src={"/svgs/adom.svg"}
          alt="adom"
          width={900}
          height={900}
          className="absolute top-[500px] rotate-12 -z-10 left-[100px] overflow-clip  h-[66px] w-[66px] object-contain"
        />

        <Image
          src={"/svgs/Dwennimmen.svg"}
          alt="Dwennimmen"
          width={900}
          height={900}
          className="absolute top-[30px] rotate-12 -z-10 right-1/2 overflow-clip  h-[75px] w-[75px] object-contain"
        />

        <Image
          src={"/svgs/Mpatapo.svg"}
          alt="Mpatapo"
          width={900}
          height={900}
          className="absolute bottom-[50px] z-10 right-[38%] overflow-clip  h-[70px] w-[70px] object-contain"
        />
      </div>

      {/* MOBILE VIEW OF ADINKRA SYMBOLS */}
      <div className="block lg:hidden">
        <Image
          src={"/svgs/gye-nyame.svg"}
          alt="Gye nyame"
          width={900}
          height={900}
          className="absolute top-20 right-10 -rotate-12 -z-10 overflow-clip  h-[65px] w-[65px] object-contain"
        />

        <Image
          src={"/svgs/Mpatapo.svg"}
          alt="Mpatapo"
          width={900}
          height={900}
          className="absolute top-[320px] z-10 left-[15px] -rotate-12 overflow-clip  h-[55px] w-[55px] object-contain"
        />

        <Image
          src={"/svgs/Dwennimmen.svg"}
          alt="Dwennimmen"
          width={900}
          height={900}
          className="absolute top-[450px] rotate-12 z-10 right-[20px] overflow-hidden  h-[70px] w-[70px] object-contain"
        />

        <Image
          src={"/svgs/Sankofa.svg"}
          alt="Sankofa"
          width={900}
          height={900}
          className="absolute top-[700px] -rotate-12 z-10 left-[20px] overflow-clip  h-[70px] w-[70px] object-contain"
        />
      </div>
    </div>
  );
}

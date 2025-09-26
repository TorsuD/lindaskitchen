import { Jelly } from "ldrs/react";
import "ldrs/react/Jelly.css";

export default function Loading() {
  return (
    <div className="h-[80vh] grid place-items-center">
      <div className=" text-center flex flex-col items-center  text-sm text-[var(--main-color)]">
        {" "}
        {/* <H className="animate-bounce" /> */}
        <Jelly size="80" speed="0.9" color="var(--main-color)" />
        <p className="text-md mt-2 animate-pulse font-extrabold">Loading...</p>
      </div>
    </div>
  );
}

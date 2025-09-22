import { Construction } from "lucide-react";

export default function Home() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col items-center justify-center text-center animate-pulse">
        <Construction color="orange" size={30} />
        <p>Linda&apos;s Kitchen is under construction.</p>
      </div>
    </div>
  );
}

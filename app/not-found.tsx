import { APP_NAME } from "@/lib/constant";
import { Construction } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid place-items-center h-[80vh]">
      <div className="flex flex-col items-center justify-center text-center animate-pulse">
        <Construction color="orange" size={30} />
        <p>
          {APP_NAME} page not found. Go back <Link href={"/"}>home</Link>
        </p>
      </div>
    </div>
  );
}

import type { ReactNode } from "react";
import Image from "next/image";

let Green = require("../../../public/image/green.jpg");

interface AuthLayoutProps {
  children: ReactNode;
}
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Image area (60%) */}
      <div className="hidden bg-green-600 md:block w-[70%]">
        <div className="relative h-full w-full">
          <Image
            src={Green}
            alt="Authentication background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-green-600/40" />
          <div className="absolute bottom-12 left-12 max-w-md text-white">
            <h2 className="mb-4 text-3xl font-bold">
              Sustainable and Smart Modern Agricultural Practices{" "}
            </h2>
          </div>
        </div>
      </div>
      {/* Content area (40%) */}
      <div className="flex flex-col items-center justify-center w-[30%] bg-white ">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}

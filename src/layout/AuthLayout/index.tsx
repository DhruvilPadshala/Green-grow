import type { ReactNode } from "react";
import Image from "next/image";
import Green from "../../../public/image/green.jpg";

interface AuthLayoutProps {
  children: ReactNode;
}
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen h-screen flex-col lg:flex-row">
      {/* Image area (70%) */}
      <div className="relative hidden lg:flex w-full flex-col justify-center lg:w-[70%]">
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
              Get naturally <br />
              grown produce directly <br />
              from trusted farmers near you.{" "}
            </h2>
          </div>
        </div>
      </div>
      {/* Content area (30%) */}
      <div className="flex w-full items-center justify-center bg-background p-2 lg:w-[30%]">
        {children}
      </div>
    </div>
  );
}

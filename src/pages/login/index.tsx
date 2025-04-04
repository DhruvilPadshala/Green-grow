import React, { use } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

let Icon = require("../../../public/image/icon.jpg");
export default function Login() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white p-5">
      <div className="w-[90%] mx-auto flex flex-col items-center justify-center">
        <div className="w-[80%] flex flex-col items-center justify-center mt-4">
          <Image src={Icon} alt="Logo" width={180} height={40} />
        </div>
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="flex flex-col items-center justify-center mt-4 w-[80%]">
          <div className="w-full mb-4">
            <Label htmlFor="email"> Email </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="mt-2"
            />
          </div>
          <div className="w-full mb-4">
            <Label htmlFor="password"> Password </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="mt-2"
            />
          </div>
          <div className="w-full mt-4">
            <Button className="w-full bg-green-900">Submit</Button>
          </div>
          <div className="text-center text-sm mt-4">
            <span
              className="text-green-900"
              onClick={() => router.push("/forgot-password")}
            >
              Forgot password?
            </span>
          </div>
          <div className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <span
              className="text-green-900"
              onClick={() => router.push("/signup")}
            >
              Sign up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

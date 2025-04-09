import React, { useEffect } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import Icon from "../../../public/image/icon.jpg";
import AuthLayout from "@/layout/AuthLayout";

export default function Login() {
  const router = useRouter();
  useEffect(() => {
    document.title = "Green Grow || login";
  }, []);
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center w-full bg-white p-0 md:p-5">
      <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <Image src={Icon} alt="Logo" width={180} height={40} />
        </div>
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="flex flex-col items-center justify-center mt-4 w-full">
          <div className="w-[90%] mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="mt-2"
            />
          </div>
          <div className="w-[90%] mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="mt-2"
            />
          </div>
          <div className="w-[90%] mt-4">
            <Button className="w-full">Login</Button>
          </div>
          <div className="text-center text-sm mt-4">
            <span className="text-green-900">Forgot password?</span>
          </div>
          <div className="text-center text-sm mt-4">
            {"Don't have an account?"}
            <span
              className="text-green-900 ml-2"
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
Login.layout = AuthLayout;

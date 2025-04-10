import AuthLayout from "@/layout/AuthLayout";
import { useEffect, useState } from "react";
import Icon from "../../../public/image/icon.jpg";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function Signup() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  useEffect(() => {
    document.title = "Green Grow || signup";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full  bg-white p-0 md:p-5">
      <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <Image
            src={Icon || "/placeholder.svg"}
            alt="Logo"
            width={180}
            height={40}
          />
        </div>
        <h1 className="text-2xl font-bold">Signup</h1>
        <div className="flex flex-col items-center justify-center mt-4 w-[90%]">
          {step === 1 && (
            <div>
              <div className="w-full flex flex-row items-center justify-center gap-4">
                <div className="w-full mb-4">
                  <Label htmlFor="firstName">FirstName</Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Enter your firstName"
                    className="mt-2"
                  />
                </div>
                <div className="w-full mb-4">
                  <Label htmlFor="lastName">LastName</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Enter your lastName"
                    className="mt-2"
                  />
                </div>
              </div>
              <div className="w-full mb-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2"
                />
              </div>
              <div className="w-full mb-4">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone"
                  className="mt-2"
                />
              </div>
              <div className="w-full mb-4">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="Enter your address"
                  className="mt-2"
                />
              </div>
              <Button className="w-full mt-2" onClick={() => setStep(2)}>
                Next
              </Button>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col items-center justify-center w-full">
              <div className="w-full mb-4">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  type="text"
                  placeholder="Enter your country"
                  className="mt-2"
                />
              </div>
              <div className="w-full mb-4">
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  type="text"
                  placeholder="Enter your state"
                  className="mt-2"
                />
              </div>
              <div className="w-full mb-4">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="Enter your city"
                  className="mt-2"
                />
              </div>
              <div className="w-full mb-4">
                <Label htmlFor="zip">Zip</Label>
                <Input
                  id="zip"
                  type="text"
                  placeholder="Enter your zip"
                  className="mt-2"
                />
              </div>
              <div className="flex flex-row gap-4 mt-2 w-full">
                <Button
                  variant="outline"
                  className="w-[48%]"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                {step === 2 && <Button className="w-[48%]">Signup</Button>}
              </div>
            </div>
          )}

          <div className="text-center text-sm mt-4">
            {"Already have an account ?"}
            <span
              className="text-green-900 ml-2 cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

Signup.layout = AuthLayout;

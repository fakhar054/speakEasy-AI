"use client";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

export default function page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const [otp, setOtp] = useState("");
  const otpRef = useRef("");

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp) {
      otpRef.current?.focus();
    }

    try {
      const response = await fetch(`${baseUrl}/otp/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: "123",
        },
        body: JSON.stringify({ identity: email, otp: otp }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log("otp failed");
        throw new Error(data.message || "otp failed");
      }

      console.log("Data is:", data);

      if (data.status) {
        toast.success("Otp verified successfully");
        router.push("/reset-password");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center forget_page">
      <div className="container mx-auto ">
        <div className="login-header-section">
          <div className="img_div flex justify-center">
            <img src="/images/logo.png" alt="logo pic" className="w-48 h-48" />
          </div>
          <h1 className="text-3xl font-bold text-center">Enter OTP</h1>
          <form
            className="flex flex-col gap-5 items-center"
            onSubmit={handleSubmit}
          >
            <div className="row_div w-[80%] max-w-md gap-1">
              <label htmlFor="otp">OTP</label>
              <input
                type="text"
                placeholder="OTP"
                name="otp"
                id="otp"
                ref={otpRef}
                value={otp}
                onChange={handleChange}
              />
            </div>

            <div className="w-[80%] max-w-md text-center">
              <button
                type="submit"
                className="w-[80%] max-w-md bg-green-color text-white font-bold  rounded-full text-center"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

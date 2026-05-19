"use client";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

export default function page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const emailRef = useRef(null);

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      emailRef.current?.focus();
    }

    try {
      const response = await fetch(`${baseUrl}/send-otp-for-reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: "123",
        },
        body: JSON.stringify({ identity: email }),
      });

      const data = await response.json();
      console.log(data);

      if (data.status) {
        toast.success("Otp sent successfully");
        router.push(`/otp?email=${encodeURIComponent(email)}`);
      } else {
        toast.error("Something went wrong");
        setEmail("");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }

    console.log("Reset link requested for:", email);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center forget_page">
      <div className="container mx-auto ">
        <div className="login-header-section">
          <div className="img_div flex justify-center">
            <img src="/images/logo.png" alt="logo pic" className="w-48 h-48" />
          </div>
          <h1 className="text-3xl font-bold text-center"> Reset Password</h1>

          <form
            className="flex flex-col gap-5 items-center"
            onSubmit={handleSubmit}
          >
            <div className="row_div w-[80%] max-w-md gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                ref={emailRef}
                value={email}
                onChange={handleChange}
              />
            </div>

            <div className="w-[80%] max-w-md text-center">
              <button
                type="submit"
                className="w-[80%] max-w-md bg-green-color text-white font-bold  rounded-full text-center"
              >
                Send Otp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Public url is: ", baseUrl);

    if (!formData.email) {
      emailRef.current?.focus();
      return;
    }

    if (!formData.password) {
      passwordRef.current?.focus();
      return;
    }

    try {
      const payload = {
        email: formData.email,
        password: formData.password,
        device_type: 1,
        login_type: 3,
        is_login: 1,
      };

      const response = await fetch(`${baseUrl}/registerUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: "123",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log("login failed");
        throw new Error(data.message || "Login failed");
      }

      console.log("Data is:", data);
      console.log("Token (ID) is:", data.data.id);

      if (data.data.id) {
        localStorage.setItem("token", data.data.id);
        toast.success("Logged in successfully!");
        router.push("/dashboard");
        return { success: true, data };
      } else {
        toast.error("Invalid email or password");

        throw new Error(data.message || "Invalid email or password");
      }
    } catch (error) {
      toast.error("Email or Password incorrect");
      console.error("Login API Error:", error.message);
      return { success: false, error: error.message };
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center login_page">
      <div className="container mx-auto ">
        <div className="login-header-section">
          <div className="img_div  flex justify-center">
            <img src="/images/logo.png" alt="logo" className="h-48 w-48" />
          </div>
          <h1 className="text-3xl font-bold text-center"> Welcome Back!</h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 items-center"
          >
            <div className="row_div w-[80%] max-w-md gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                ref={emailRef}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="row_div w-[80%] max-w-md ">
              <label htmlFor="password">Password</label>
              <div className="relative w-full">
                <input
                  ref={passwordRef}
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  className="w-full"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer flex items-center justify-center"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>

            <div>
              <Link
                href="/forget-password"
                className="text-xl font-bold border-b-black text-green-color"
              >
                Forget Password?
              </Link>
            </div>
            <div className="w-[80%] max-w-md text-center">
              <button className="w-[80%] max-w-md bg-green-color text-white font-bold  rounded-full text-center">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

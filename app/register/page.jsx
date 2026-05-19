"use client";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";

export default function page() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile_no: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted Successfully:", formData);

    const payload = {
      email: formData.email,
      fullname: formData.fullName,
      password: formData.password,
      device_type: 1,
      login_type: 3,
      is_login: 0,
    };

    console.log(payload);

    try {
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
        throw new Error(data.message || "Registration failed");
      }

      console.log("Data is:", data);
      console.log("Token (ID) is:", data.data.id);
      toast.success("Registered successfully!");
    } catch (error) {
      toast.error("Regestration Failed");
      console.error("Register API Error:", error.message);
      return { success: false, error: error.message };
    }
  };

  return (
    <div className="forget_page register min-h-screen flex flex-col justify-center gap-7 px-5">
      <div className="">
        <div className="img_div flex justify-center">
          <img src="/images/logo.png" alt="logo pic" className="w-48 h-48" />
        </div>

        <h1 className="text-3xl font-bold text-center ">Create Your Account</h1>
      </div>

      <div className="flex items-center justify-center p-4 ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 items-center w-full max-w-2xl "
        >
          <div className="grid grid-cols-1 gap-8 w-full md:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 w-full md:grid-cols-2">
            {/* <div className="flex flex-col gap-1">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer flex items-center justify-center"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div> */}

            <div className="flex flex-col gap-1 w-full max-w-md">
              <label htmlFor="password">Password</label>

              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
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

            <div className="flex flex-col gap-1 w-full max-w-md">
              <label htmlFor="confirmPassword">Confirm Password</label>

              <div className="relative w-full">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer flex items-center justify-center"
                >
                  {showConfirmPassword ? (
                    <FiEyeOff size={20} />
                  ) : (
                    <FiEye size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-1">
            <label>Mobile Number</label>
            <input
              name="mobile_no"
              type="text"
              placeholder="Mobile Num"
              value={formData.mobile_no}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <button
            type="submit"
            className="w-full max-w-md bg-green-color text-white font-bold rounded-full py-4 mt-4"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

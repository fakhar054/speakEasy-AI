"use client";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get email from URL query
  const email = searchParams.get("email");

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.newPassword) {
      newPasswordRef.current?.focus();
      return;
    }

    if (!formData.confirmPassword) {
      confirmPasswordRef.current?.focus();
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      confirmPasswordRef.current?.focus();
      return;
    }

    if (formData.newPassword.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      newPasswordRef.current?.focus();
      return;
    }

    try {
      const payload = {
        identity: email,
        password: formData.newPassword,
        password_confirmation: formData.confirmPassword,
      };

      const response = await fetch(`${baseUrl}/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: "123",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to reset password");
      }

      if (data.status) {
        toast.success("Password reset successfully!");
        router.push("/login");
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
      console.error("Reset Password API Error:", error);
    }
  };

  return (
    <div className="container mx-auto login_page">
      <div className="img_div flex justify-center">
        <img src="/images/logo.png" alt="logo" className="h-48 w-48" />
      </div>

      <h1 className="text-3xl font-bold text-center">Reset Password !</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 items-center"
      >
        {/* New Password */}
        <div className="row_div w-[80%] max-w-md gap-1">
          <label htmlFor="newPassword">New Password</label>

          <div className="relative w-full">
            <input
              ref={newPasswordRef}
              value={formData.newPassword}
              onChange={handleChange}
              name="newPassword"
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              placeholder="New Password"
              className="w-full"
            />

            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer flex items-center justify-center"
            >
              {showNewPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="row_div w-[80%] max-w-md gap-1">
          <label htmlFor="confirmPassword">Confirm Password</label>

          <div className="relative w-full">
            <input
              ref={confirmPasswordRef}
              value={formData.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm Password"
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

        {/* Submit Button */}
        <div className="w-[80%] max-w-md text-center mb-3">
          <button
            type="submit"
            className="w-[80%] max-w-md bg-green-color text-white font-bold rounded-full text-center py-3"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
}

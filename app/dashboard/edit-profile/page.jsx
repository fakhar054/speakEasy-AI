"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";

export default function Page() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    nationalId: "",
    city: "",
    dob: "",
    gender: "",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted Data:", formData);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen w-full">
      <h1 className="text-3xl font-extrabold">Edit Profile</h1>

      <p className="text-gray-500 mb-7">Update your personal information</p>

      <div className="container mx-auto bg-white border border-green-color rounded-2xl p-6">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <div className="relative w-[120px] h-[120px]">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-green-500">
              <Image
                src="/images/human.png"
                width={120}
                height={120}
                className="object-cover w-full h-full"
                alt="Profile"
              />
            </div>

            <div className="absolute bottom-2 right-2 bg-green-600 text-white p-2 rounded-full cursor-pointer">
              <FaCamera className="text-sm" />
            </div>
          </div>

          <button
            type="button"
            className="text-green-600 font-semibold px-4 py-2 cursor-pointer hover:bg-green-color hover:text-white rounded duration-200 transition-all"
          >
            Change Photo
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-4 md:px-8 mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-bold text-gray-600">Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="text-sm font-bold text-gray-600">
                Mobile Number
              </label>

              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter phone number"
              />
            </div>

            {/* National ID */}
            <div>
              <label className="text-sm font-bold text-gray-600">
                National ID
              </label>

              <input
                type="text"
                name="nationalId"
                value={formData.nationalId}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter Your National ID"
              />
            </div>

            {/* City */}
            <div>
              <label className="text-sm font-bold text-gray-600">City</label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter Your city"
              />
            </div>

            {/* DOB */}
            <div>
              <label className="text-sm font-bold text-gray-600">
                Date of Birth
              </label>

              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="text-sm font-bold text-gray-600">Gender</label>

            <div className="mt-2 flex items-center gap-6">
              {/* Male */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  className="accent-green-600 w-4 h-4"
                />

                <span className="text-gray-700">Male</span>
              </label>

              {/* Female */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  className="accent-green-600 w-4 h-4"
                />

                <span className="text-gray-700">Female</span>
              </label>
            </div>
          </div>

          {/* Notifications Toggle */}
          <div className="flex items-center justify-between border rounded-lg p-4">
            <div>
              <h3 className="font-semibold text-gray-800">Notifications</h3>

              <p className="text-sm text-gray-500">
                Enable or disable notifications
              </p>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="notifications"
                checked={formData.notifications}
                onChange={handleChange}
                className="sr-only peer"
              />

              <div className="w-14 h-7 bg-gray-300 rounded-full peer peer-checked:bg-green-600 transition-all duration-300"></div>

              <div className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-all duration-300 peer-checked:translate-x-7"></div>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-4 cursor-pointer bg-green-color text-white py-3 rounded-lg font-semibold hover:opacity-90"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

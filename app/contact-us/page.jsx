"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    // Add your email sending logic or API call here
    alert("Thank you! Your message has been sent to the Understory team.");
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center  bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto bg-white p-8 md:p-12 rounded-[3rem] shadow-xl">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <img src="/images/logo.png" alt="logo" className="h-24 w-auto" />
            </div>
            <h1 className="text-3xl font-bold text-green-color">
              Get in Touch
            </h1>
            <p className="text-black mt-2">
              Have questions about SpeakEasy AI or our Hub? We're here to help.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-semibold text-gray-700 ml-2"
              >
                Full Name
              </label>

              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-3 rounded-full border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-transparent"
                // className="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-red-500"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-semibold text-gray-700 ml-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-3 rounded-full border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-transparent"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-semibold text-gray-700 ml-2"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="How can we support you?"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-[2rem] border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-transparent resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                className="mb-3 inline w-fit bg-green-color py-3 px-6 cursor-pointer rounded-full text-white font-bold text-lg shadow-lg hover:shadow-green-200 transition-all transform hover:scale-[1.02] active:scale-95"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Optional Footer */}
          <p className=" text-sm text-gray-400 mt-8">
            Our team usually responds within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}

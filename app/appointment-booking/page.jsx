"use client";
import React, { useState } from "react";
import { FaStar, FaRegClock, FaGlobe, FaUserMd } from "react-icons/fa";

// Mock data based on "Therapist Profile Creation" in project file.jpg
const therapists = [
  {
    id: 1,
    name: "Dr. Sarah Ahmed",
    specialization: "Speech Therapy",
    languages: ["English", "Urdu"],
    rating: 4.9,
    experience: "8 years",
    price: "40",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    specialization: "Behavioral Therapy",
    languages: ["English"],
    rating: 4.7,
    experience: "5 years",
    price: "55",
    image: "https://via.placeholder.com/150",
  },
];

export default function page() {
  const [selectedTherapist, setSelectedTherapist] = useState(null);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Book a Session</h1>
        <p className="text-gray-500">
          Find and book professional therapists for your needs.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main List: Browse Therapists (Requirement 2.1 in project file.jpg) */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold mb-4">Available Therapists</h2>
          {therapists.map((therapist) => (
            <div
              key={therapist.id}
              className={`p-4 border rounded-2xl flex gap-4 cursor-pointer transition-all ${
                selectedTherapist?.id === therapist.id
                  ? "border-green-color bg-green-50"
                  : "bg-white hover:shadow-md"
              }`}
              onClick={() => setSelectedTherapist(therapist)}
            >
              <img
                src={therapist.image}
                alt={therapist.name}
                className="w-24 h-24 rounded-xl object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg text-gray-800">
                    {therapist.name}
                  </h3>
                  <span className="flex items-center gap-1 text-yellow-500 font-bold">
                    <FaStar /> {therapist.rating}
                  </span>
                </div>
                <p className="text-green-color font-medium">
                  {therapist.specialization}
                </p>

                <div className="flex gap-4 mt-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <FaRegClock /> {therapist.experience}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaGlobe /> {therapist.languages.join(", ")}
                  </span>
                </div>
              </div>
              <div className="text-right flex flex-col justify-between">
                <span className="text-xl font-bold text-gray-800">
                  ${therapist.price}
                  <small className="text-sm font-normal">/hr</small>
                </span>
                <button className="bg-green-color text-white px-4 py-2 rounded-lg text-sm">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar: Select Date & Time (Requirement 2.2 in project file.jpg) */}
        <div className="bg-white p-6 border rounded-2xl shadow-sm h-fit sticky top-24">
          <h2 className="text-xl font-semibold mb-6">Booking Details</h2>

          {selectedTherapist ? (
            <div className="space-y-6">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <FaUserMd className="text-green-color text-xl" />
                <div>
                  <p className="text-xs text-gray-500">Selected Therapist</p>
                  <p className="font-bold">{selectedTherapist.name}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-color outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Available Slots
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["09:00 AM", "11:00 AM", "02:00 PM", "04:30 PM"].map(
                    (time) => (
                      <button
                        key={time}
                        className="p-2 border rounded-lg text-sm hover:border-green-color hover:text-green-color transition-colors"
                      >
                        {time}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <button className="w-full bg-green-color text-white py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
                Confirm Booking
              </button>
              <p className="text-center text-xs text-gray-400">
                Instant confirmation via email
              </p>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-400">
              <FaUserMd className="mx-auto text-4xl mb-4 opacity-20" />
              <p>Please select a therapist to see available time slots.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

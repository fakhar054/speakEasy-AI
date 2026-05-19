"use client";
import React, { useState } from "react";
import TherapeuticSuite from "./OnlineBooking";
import AIContent from "./AIContent";
import MeditativeContent from "./MeditativeContent";

export default function Feature() {
  const [activeTab, setActiveTab] = useState("Therapeutic AI Suite");

  const tabContent = {
    "Therapeutic AI Suite": {
      component: <AIContent />,
    },
    "Meditative Suite": {
      component: <MeditativeContent />,
    },
    "Online Therapy": {
      component: <TherapeuticSuite />,
    },
  };

  const tabs = Object.keys(tabContent);

  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-gray-200 pb-4 ">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 text-sm cursor-pointer font-semibold transition-all duration-300 rounded-full border ${
                  activeTab === tab
                    ? "bg-green-color text-white shadow-md"
                    : "bg-white text-green-color border-green-color hover:bg-green-color hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Display the Separate Component */}
          <div className="animate-fadeIn">
            {tabContent[activeTab].component}
          </div>
        </div>
      </section>
    </div>
  );
}

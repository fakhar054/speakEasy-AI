"use client";
import Sidebar from "@/components/dahboardsidebar/Sidebar";
import React, { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { useRouter } from "next/navigation";
import DashboardHeader from "@/components/dashboardheader/DashboardHeader";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <div className="flex-1 flex flex-col">
          {/* <DashboardHeader toggleSidebar={toggleSidebar} /> */}
          <div className="sticky top-0 z-50 bg-white">
            <DashboardHeader toggleSidebar={toggleSidebar} />
          </div>

          <header className="lg:hidden bg-white border-b p-4">
            <button
              onClick={toggleSidebar}
              className="text-3xl text-green-color"
            >
              <HiMenuAlt2 />
            </button>
          </header>

          <main className="p-4 md:p-6 flex-1">{children}</main>
        </div>
      </div>
    </>
  );
}

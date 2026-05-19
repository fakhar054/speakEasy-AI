"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrOverview } from "react-icons/gr";
import { SiSession } from "react-icons/si";
import { IoBookOutline } from "react-icons/io5";
import { FaCalendarDays, FaXmark } from "react-icons/fa6";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { TbFileLike } from "react-icons/tb";

const menuItems = [
  { name: "Overview", href: "/dashboard", icon: GrOverview },
  {
    name: "Favourite Doctor",
    href: "/dashboard/favourite-doctors",
    icon: TbFileLike,
  },
  { name: "Gallery", href: "/dashboard/gallery", icon: SiSession },
  { name: "Reports", href: "/dashboard/reports", icon: IoBookOutline },
  {
    name: "Appointments",
    href: "/dashboard/appointment-booking",
    icon: FaCalendarDays,
  },

  {
    name: "History",
    href: "/dashboard/history",
    icon: MdOutlineHistoryToggleOff,
  },
  {
    name: "Edit Profile",
    href: "/dashboard/edit-profile",
    icon: FaUserEdit,
  },
];

export default function Sidebar({ isOpen, toggleSidebar }) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-green-color border-r flex flex-col p-6 transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:h-screen lg:sticky lg:top-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center mb-10">
          <div className="text-2xl font-bold text-white">SpeakEasy AI</div>
          <button
            onClick={toggleSidebar}
            className="text-white text-2xl lg:hidden"
          >
            <FaXmark />
          </button>
        </div>

        <nav className="h-screen relative">
          <ul className="flex flex-col gap-2 list-none p-0 m-0 relative">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      if (window.innerWidth < 1024) toggleSidebar();
                    }}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all group ${
                      isActive
                        ? "bg-white text-green-color"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon
                      className={`text-xl ${isActive ? "text-green-color" : "text-white"}`}
                    />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="absolute bottom-0 w-full ">
            <button className="button flex items-center gap-3 rounded border px-6 py-3  my-5 border-red-500 cursor-pointer hover:bg-white hover:text-green-color transition-all duration-500 text-white">
              <FaArrowRight />

              <h1 className="text-lg font-extrabold">Logout</h1>
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
}

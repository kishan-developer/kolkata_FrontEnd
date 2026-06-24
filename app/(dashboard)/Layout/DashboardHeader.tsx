"use client";

import { Bell, Search, ChevronDown } from "lucide-react";

export default function DashboardHeader({
  title,
}: {
  title: string;
}) {
  return (
    <header className="h-[72px] bg-white border-b border-[#E2E8F0] fixed top-0 right-0 left-0 md:left-[280px] z-30 flex items-center justify-between px-6">
      
      {/* Left Section */}
      <div>
        <h1 className="text-lg font-semibold text-[#0F172A]">{title}</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-[#F8FAFC] px-3 py-2 rounded-[10px] border border-[#E2E8F0] w-64">
          <Search size={16} className="text-[#64748B]" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none text-sm text-[#0F172A] w-full placeholder:text-[#64748B]"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 hover:bg-[#F8FAFC] rounded-[10px] transition-colors">
          <Bell size={20} className="text-[#64748B]" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* User Profile */}
        <button className="flex items-center gap-3 p-1 hover:bg-[#F8FAFC] rounded-[10px] transition-colors">
          <div className="w-8 h-8 rounded-[10px] bg-[#2563EB] text-white flex items-center justify-center text-sm font-semibold">
            A
          </div>
          <div className="hidden sm:flex flex-col items-start">
            <p className="text-sm font-medium text-[#0F172A]">Admin</p>
            <p className="text-xs text-[#64748B]">Super Admin</p>
          </div>
          <ChevronDown size={16} className="text-[#64748B] hidden sm:block" />
        </button>

      </div>
    </header>
  );
}

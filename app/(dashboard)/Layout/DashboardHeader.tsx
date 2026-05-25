"use client";

import { Bell, Menu, Search, Command, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function DashboardHeader({
  title,
  onMenuClick,
}: {
  title: string;
  onMenuClick?: () => void;
}) {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md z-30 px-10 flex items-center justify-between fixed top-0 right-0 left-0 md:left-80 border-b border-slate-100 transition-all duration-500">
      
      {/* Left Section */}
      <div className="flex items-center gap-6">
        <button
          className="md:hidden p-3 rounded-[1rem] bg-slate-50 text-slate-900 hover:bg-slate-100 transition-all"
          onClick={onMenuClick}
        >
          <Menu size={20} />
        </button>

        <div className="flex flex-col">
          <h2 className="text-xl font-black text-slate-900 tracking-tighter leading-none">{title}</h2>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1.5">Operational Intelligence</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-8">

        {/* Institutional Search */}
        <div className="hidden lg:flex items-center gap-3 bg-slate-50 px-5 py-2.5 rounded-[1.2rem] border border-slate-200 group focus-within:ring-2 focus-within:ring-[#2663eb]/20 transition-all w-80">
          <Search size={16} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search ecosystem..."
            className="bg-transparent border-none outline-none text-[11px] font-bold text-slate-900 w-full placeholder:text-slate-400"
          />
          <div className="flex items-center gap-1 px-1.5 py-0.5 bg-white border border-slate-200 rounded-md shadow-sm">
             <Command size={10} className="text-slate-400" />
             <span className="text-[9px] font-black text-slate-400">K</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
           {/* Notifications */}
           <button className="relative p-3 bg-white border border-slate-100 rounded-[1rem] text-slate-400 hover:text-[#2663eb] hover:shadow-lg transition-all group">
             <Bell size={20} className="group-hover:rotate-12 transition-transform" />
             <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white shadow-sm ring-2 ring-red-50" />
           </button>

           <div className="w-px h-8 bg-slate-100 mx-2" />

           {/* User Profile Hook */}
           <button className="flex items-center gap-4 p-1.5 pr-4 bg-slate-50 border border-slate-100 rounded-[1.5rem] hover:bg-white hover:shadow-xl transition-all group">
              <div className="w-10 h-10 rounded-[1.1rem] bg-slate-900 text-white flex items-center justify-center font-black text-xs overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" className="w-full h-full object-cover" />
              </div>
              <div className="text-left hidden xl:block">
                 <p className="text-[11px] font-black text-slate-900 leading-none">System Admin</p>
                 <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Superuser</p>
              </div>
              <ChevronDown size={14} className="text-slate-400 group-hover:text-slate-900 transition-colors" />
           </button>
        </div>

      </div>
    </header>
  );
}

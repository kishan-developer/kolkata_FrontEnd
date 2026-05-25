"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Route } from "next";

import {
  LayoutDashboard,
  Users,
  LogOut,
  BadgePercent,
  CalendarCheck,
  Briefcase,
  UserPlus,
  CreditCard,
  FileChartColumnIncreasing,
  LifeBuoy,
  UserCheck,
  ShieldCheck,
  MessageSquare,
  FileText,
  BarChart3,
  Clock,
  Layers,
  Settings
} from "lucide-react";

const menuItems = [
  {
    name: "Overview",
    icon: <LayoutDashboard size={20} />,
    path: "/admin",
  },
  {
    name: "User Directory",
    icon: <UserPlus size={20} />,
    path: "/admin/user_management",
  },
  {
    name: "Client Entities",
    icon: <Users size={20} />,
    path: "/admin/clients",
  },
  {
    name: "Service Master",
    icon: <Briefcase size={20} />,
    path: "/admin/services_management",
  },
  {
    name: "Service Delivery",
    icon: <Layers size={20} />,
    path: "/admin/service_delivery",
  },
  {
    name: "Strategic Tasks",
    icon: <CalendarCheck size={20} />,
    path: "/admin/task_management",
  },
  {
    name: "Specialist Teams",
    icon: <ShieldCheck size={20} />,
    path: "/admin/team_management",
  },
  {
    name: "Digital Vault",
    icon: <FileText size={20} />,
    path: "/admin/document_management",
  },
  {
    name: "Compliance Hub",
    icon: <Clock size={20} />,
    path: "/admin/filing_management",
  },
  {
    name: "Institutional Finance",
    icon: <CreditCard size={20} />,
    path: "/admin/payments_finance",
  },
  {
    name: "Secure Comms",
    icon: <MessageSquare size={20} />,
    path: "/admin/workflow",
  },
  {
    name: "Intelligence",
    icon: <BarChart3 size={20} />,
    path: "/admin/analytics_reports",
  },
  {
    name: "System Settings",
    icon: <Settings size={20} />,
    path: "/admin/setting",
  },
];

export default function AdminSidebars() {
  const pathname = usePathname();

  return (
    <div className="h-full flex flex-col py-8 px-4 z-40 bg-white border-r border-slate-100 shadow-sm overflow-y-auto no-scrollbar">
      {/* Brand Logo */}
      <div className="px-4 mb-12">
         <img src="/rr_logo.png" alt="VyaparSeva" className="h-12 w-auto object-contain" />
         <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Enterprise Active</span>
         </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-1.5 px-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.name}
              href={item.path as Route}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-[1.2rem] transition-all duration-300 group ${isActive
                ? "bg-[#2663eb] text-white font-black shadow-xl shadow-blue-100 ring-4 ring-blue-50"
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-bold"
                }`}
            >
              <div className={`transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}>
                {item.icon}
              </div>
              <span className="text-xs tracking-tight uppercase tracking-widest font-black">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="mt-12 pt-8 border-t border-slate-50 px-4">
        <Link
          href={`${"/logout"}` as Route}
          className="flex items-center gap-3 px-4 py-4 text-red-600 font-black hover:bg-red-50 rounded-[1.2rem] transition-all group border border-transparent hover:border-red-100"
        >
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs uppercase tracking-widest">Terminate Session</span>
        </Link>
      </div>
    </div>
  );
}

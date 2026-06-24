"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";

import {
  LayoutDashboard,
  Users,
  LogOut,
  CalendarCheck,
  Briefcase,
  UserPlus,
  CreditCard,
  FileText,
  ShieldCheck,
  MessageSquare,
  BarChart3,
  Clock,
  Layers,
  Settings
} from "lucide-react";

const menuItems = [
  {
    name: "Overview",
    icon: <LayoutDashboard size={18} />,
    path: "/admin",
  },
  {
    name: "User Directory",
    icon: <UserPlus size={18} />,
    path: "/admin/user_management",
  },
  {
    name: "Client Entities",
    icon: <Users size={18} />,
    path: "/admin/clients",
  },
  {
    name: "Consultancy",
    icon: <Briefcase size={18} />,
    path: "/admin/consultancy",
  },
  {
    name: "Service Master",
    icon: <Briefcase size={18} />,
    path: "/admin/services_management",
  },
  {
    name: "Service Delivery",
    icon: <Layers size={18} />,
    path: "/admin/service_delivery",
  },
  {
    name: "Strategic Tasks",
    icon: <CalendarCheck size={18} />,
    path: "/admin/task_management",
  },
  {
    name: "Specialist Teams",
    icon: <ShieldCheck size={18} />,
    path: "/admin/team_management",
  },
  {
    name: "Digital Vault",
    icon: <FileText size={18} />,
    path: "/admin/document_management",
  },
  {
    name: "Compliance Hub",
    icon: <Clock size={18} />,
    path: "/admin/filing_management",
  },
  {
    name: "Institutional Finance",
    icon: <CreditCard size={18} />,
    path: "/admin/payments_finance",
  },
  {
    name: "Secure Comms",
    icon: <MessageSquare size={18} />,
    path: "/admin/workflow",
  },
  {
    name: "Intelligence",
    icon: <BarChart3 size={18} />,
    path: "/admin/analytics_reports",
  },
  {
    name: "System Settings",
    icon: <Settings size={18} />,
    path: "/admin/setting",
  },
];

export default function AdminSidebars() {
  const pathname = usePathname();

  return (
    <div className="h-full flex flex-col bg-white border-r border-[#E2E8F0]">
      {/* Brand Logo */}
      <div className="h-[72px] flex items-center px-6 border-b border-[#E2E8F0]">
         <div className="flex items-center gap-3">
           <div className="w-8 h-8 rounded-[10px] bg-[#2563EB] flex items-center justify-center">
             <span className="text-white font-semibold text-sm">V</span>
           </div>
           <div>
             <p className="font-semibold text-[#0F172A] text-sm">VyaparSewa</p>
             <p className="text-xs text-[#64748B]">Admin Portal</p>
           </div>
         </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.name}
              href={item.path as Route}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm font-medium transition-all duration-200 ${isActive
                ? "bg-[#2563EB] text-white"
                : "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                }`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-[#E2E8F0]">
        <Link
          href={`${"/logout"}` as Route}
          className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-[#64748B] hover:bg-[#FEF2F2] hover:text-red-600 rounded-[10px] transition-all"
        >
          <LogOut size={18} />
          <span className="font-medium">Logout</span>
        </Link>
      </div>
    </div>
  );
}

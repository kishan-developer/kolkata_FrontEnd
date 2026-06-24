import React from 'react';
import { Users, UserCheck, UserX, ShieldAlert, Briefcase, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const StatCards = () => {
  const stats = [
    { label: "Total Users", value: "2,451", icon: Users, color: "text-[#2563EB]", bgColor: "bg-[#2563EB]/10" },
    { label: "Active Users", value: "1,842", icon: UserCheck, color: "text-emerald-600", bgColor: "bg-emerald-100" },
    { label: "Inactive Users", value: "412", icon: UserX, color: "text-[#64748B]", bgColor: "bg-[#F8FAFC]" },
    { label: "Team Members", value: "84", icon: Briefcase, color: "text-purple-600", bgColor: "bg-purple-100" },
    { label: "Clients", value: "1,525", icon: ShieldAlert, color: "text-indigo-600", bgColor: "bg-indigo-100" },
    { label: "Pending Approvals", value: "27", icon: Clock, color: "text-orange-600", bgColor: "bg-orange-100" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="bg-white border border-[#E2E8F0] rounded-2xl p-4 hover:shadow-md transition-all"
        >
          <div className={`${stat.bgColor} w-10 h-10 rounded-xl flex items-center justify-center mb-3`}>
            <stat.icon size={20} className={stat.color} />
          </div>
          <p className="text-2xl font-semibold text-[#0F172A]">{stat.value}</p>
          <p className="text-xs font-medium text-[#64748B] mt-1">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

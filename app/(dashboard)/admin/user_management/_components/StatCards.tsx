import React from 'react';
import { Users, UserCheck, UserX, ShieldAlert, Briefcase, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const StatCards = () => {
  const stats = [
    { label: "Total Users", value: "2,451", icon: Users, color: "bg-blue-50 text-blue-600" },
    { label: "Active Users", value: "1,842", icon: UserCheck, color: "bg-emerald-50 text-emerald-600" },
    { label: "Inactive Users", value: "412", icon: UserX, color: "bg-slate-50 text-slate-600" },
    { label: "Team Members", value: "84", icon: Briefcase, color: "bg-purple-50 text-purple-600" },
    { label: "Clients", value: "1,525", icon: ShieldAlert, color: "bg-indigo-50 text-indigo-600" },
    { label: "Pending Approvals", value: "27", icon: Clock, color: "bg-orange-50 text-orange-600" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="bg-white p-5 rounded-[1rem] border border-slate-100 shadow-sm group hover:shadow-md transition-all"
        >
          <div className={`${stat.color} w-10 h-10 rounded-[0.8rem] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
            <stat.icon size={20} />
          </div>
          <p className="text-2xl font-black text-slate-900 tracking-tighter">{stat.value}</p>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

"use client";

import { useState } from "react";
import { 
  Users, 
  UserPlus, 
  Search, 
  Filter, 
  Award, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  BarChart3, 
  MoreVertical,
  Mail,
  Phone,
  ChevronRight,
  Activity,
  Layers
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TeamManagementPage() {
  const [activeTab, setActiveTab] = useState<'Directory' | 'Performance' | 'Attendance'>('Directory');
  const [searchQuery, setSearchQuery] = useState("");

  const team = [
    { name: "Rahul Sharma", role: "Senior Partner", specialization: "Direct Tax", clients: 124, tasks: 42, efficiency: 98, status: "Active", email: "rahul@vyaparseva.in" },
    { name: "Sonal Gupta", role: "GST Expert", specialization: "Indirect Tax", clients: 98, tasks: 56, efficiency: 94, status: "Active", email: "sonal@vyaparseva.in" },
    { name: "Amit Singh", role: "Accountant", specialization: "Bookkeeping", clients: 67, tasks: 34, efficiency: 88, status: "On Leave", email: "amit@vyaparseva.in" },
    { name: "Priya Sharma", role: "IT Expert", specialization: "Tax Planning", clients: 45, tasks: 22, efficiency: 92, status: "Active", email: "priya@vyaparseva.in" },
  ];

  return (
    <div className="space-y-10 mt-10 min-h-screen bg-slate-50/30 p-8 rounded-[2rem] animate-in fade-in duration-700">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Strategic Human Capital</h1>
          <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mt-2">Team Orchestration & Performance Metrics</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 rounded-[1.2rem] shadow-sm border border-slate-100">
          <TabButton active={activeTab === 'Directory'} onClick={() => setActiveTab('Directory')} icon={<Users size={16} />} label="Team Directory" />
          <TabButton active={activeTab === 'Performance'} onClick={() => setActiveTab('Performance')} icon={<BarChart3 size={16} />} label="Productivity" />
          <TabButton active={activeTab === 'Attendance'} onClick={() => setActiveTab('Attendance')} icon={<Clock size={16} />} label="Attendance" />
        </div>
      </div>

      {activeTab === 'Directory' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
           {/* Stats Cards */}
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <StatCard label="Total Staff" value="24" icon={<Users size={24} />} color="blue" />
              <StatCard label="Active Now" value="18" icon={<Activity size={24} />} color="emerald" />
              <StatCard label="Open Positions" value="3" icon={<Layers size={24} />} color="orange" />
              <StatCard label="Efficiency Index" value="94.2%" icon={<TrendingUp size={24} />} color="purple" />
           </div>

           {/* Search & Action Bar */}
           <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="relative flex-1 max-w-md">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                 <input 
                   type="text" 
                   placeholder="Search specialists, roles or skills..." 
                   className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-[1rem] outline-none focus:ring-2 focus:ring-[#2663eb] text-sm font-medium"
                 />
              </div>
              <div className="flex items-center gap-3">
                 <button className="flex items-center gap-2 px-6 py-3 bg-[#2663eb] text-white rounded-[1rem] font-black text-[10px] uppercase tracking-widest hover:bg-[#1d4ed8] shadow-lg shadow-blue-100 transition-all border-b-4 border-[#1e40af]">
                    <UserPlus size={14} /> Onboard Member
                 </button>
              </div>
           </div>

           {/* Team Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {team.map((member, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex gap-8 border-b-8 border-b-slate-100 hover:border-b-[#2663eb]">
                   <div className="relative">
                      <div className="w-32 h-32 rounded-[2rem] bg-slate-900 overflow-hidden shadow-2xl transition-transform group-hover:scale-105 duration-500">
                         <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-[1rem] flex items-center justify-center border-4 border-white shadow-lg ${member.status === 'Active' ? 'bg-emerald-500 text-white' : 'bg-orange-500 text-white'}`}>
                         {member.status === 'Active' ? <ShieldCheck size={18} /> : <Clock size={18} />}
                      </div>
                   </div>
                   <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                         <div>
                            <h3 className="text-2xl font-black text-slate-900 tracking-tighter">{member.name}</h3>
                            <p className="text-[10px] font-black text-[#2663eb] uppercase tracking-widest mt-1">{member.role}</p>
                         </div>
                         <button className="p-2 text-slate-300 hover:text-slate-600">
                            <MoreVertical size={20} />
                         </button>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                         <div className="flex items-center gap-2 text-slate-500">
                            <Mail size={14} />
                            <span className="text-[10px] font-bold uppercase tracking-tight">{member.email}</span>
                         </div>
                         <div className="flex items-center gap-2 text-slate-500">
                            <Award size={14} />
                            <span className="text-[10px] font-bold uppercase tracking-tight">{member.specialization}</span>
                         </div>
                      </div>
                      <div className="flex items-center gap-6 pt-6 border-t border-slate-50">
                         <div className="flex flex-col">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active Clients</span>
                            <span className="text-lg font-black text-slate-900 tracking-tighter">{member.clients}</span>
                         </div>
                         <div className="flex flex-col">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Efficiency</span>
                            <span className="text-lg font-black text-emerald-500 tracking-tighter">{member.efficiency}%</span>
                         </div>
                         <button className="ml-auto p-3 bg-slate-50 text-slate-400 rounded-[1rem] hover:bg-[#2663eb] hover:text-white transition-all shadow-sm">
                            <ChevronRight size={18} />
                         </button>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </motion.div>
      )}

      {/* Performance Tab Placeholder */}
      {activeTab === 'Performance' && (
        <div className="flex flex-col items-center justify-center py-32 bg-white rounded-[3rem] border border-slate-100 shadow-inner">
           <div className="w-24 h-24 bg-slate-50 rounded-[2.5rem] flex items-center justify-center text-slate-200 mb-8">
              <BarChart3 size={48} />
           </div>
           <h3 className="text-2xl font-black text-slate-900 tracking-tight">Accessing Performance Analytics</h3>
           <p className="text-slate-400 font-medium text-sm mt-3 max-w-xs text-center">Loading institutional productivity reports, task completion rates, and billable hours...</p>
           <div className="mt-10 flex gap-3">
              <div className="w-2.5 h-2.5 bg-[#2663eb] rounded-full animate-bounce" />
              <div className="w-2.5 h-2.5 bg-[#2663eb] rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="w-2.5 h-2.5 bg-[#2663eb] rounded-full animate-bounce [animation-delay:0.4s]" />
           </div>
        </div>
      )}
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-[1rem] font-black text-[10px] uppercase tracking-widest transition-all ${active ? 'bg-[#2663eb] text-white shadow-lg shadow-blue-100' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
    >
      {icon} {label}
    </button>
  );
}

function StatCard({ label, value, icon, color }: { label: string, value: string, icon: React.ReactNode, color: string }) {
  const colors: Record<string, string> = {
    blue: 'bg-blue-50 text-[#2663eb] border-blue-100',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    orange: 'bg-orange-50 text-orange-600 border-orange-100',
    purple: 'bg-purple-50 text-purple-600 border-purple-100'
  };

  return (
    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm group hover:shadow-md transition-all">
       <div className={`p-4 rounded-[1.2rem] ${colors[color]} w-fit mb-6 transition-transform group-hover:scale-110 shadow-sm border`}>
          {icon}
       </div>
       <p className="text-3xl font-black text-slate-900 tracking-tighter">{value}</p>
       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{label}</p>
    </div>
  );
}
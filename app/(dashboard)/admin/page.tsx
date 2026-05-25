"use client";

import React from 'react';
import {
  Users,
  Briefcase,
  ListTodo,
  IndianRupee,
  AlertCircle,
  Calendar,
  Video,
  BarChart,
  Clock,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  ArrowUpRight,
  Target,
  ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";

function AdminDashboard() {
  const stats = [
    {
      label: "Total Clients",
      value: "2,451",
      change: "+12%",
      icon: Users,
      color: "bg-[#2663eb]/10 text-[#2663eb]"
    },
    {
      label: "Ongoing Projects",
      value: "184",
      change: "+5%",
      icon: Briefcase,
      color: "bg-purple-100 text-purple-600"
    },
    {
      label: "Pending Tasks",
      value: "42",
      change: "-8%",
      icon: ListTodo,
      color: "bg-orange-100 text-orange-600"
    },
    {
      label: "Revenue This Month",
      value: "₹34.2L",
      change: "+24%",
      icon: IndianRupee,
      color: "bg-emerald-100 text-emerald-600"
    },
  ];

  const secondaryStats = [
    { label: "New Clients (Weekly)", value: "28", target: "30", icon: Target, color: "text-blue-600" },
    { label: "Retention Rate", value: "94%", target: "90%", icon: ShieldCheck, color: "text-emerald-600" },
    { label: "Avg. Engagement Fee", value: "₹45k", target: "₹40k", icon: IndianRupee, color: "text-purple-600" },
    { label: "Filing Accuracy", value: "99.8%", target: "99%", icon: CheckCircle2, color: "text-indigo-600" },
  ];

  const complianceAlerts = [
    { type: "ITR Filing", client: "TechFlow AI", dueDate: "Today", priority: "critical" },
    { type: "GST GSTR-3B", client: "Horizon Mfg", dueDate: "Tomorrow", priority: "high" },
    { type: "MCA AOC-4", client: "Global Traders", dueDate: "In 3 Days", priority: "medium" },
    { type: "Statutory Audit", client: "Nexus Corp", dueDate: "Next Week", priority: "low" },
  ];

  const revenueData = [40, 65, 55, 90, 80, 110, 105, 140, 130, 160, 155, 180];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const serviceDistribution = [
    { name: "GST Services", percentage: 45, color: "bg-blue-600" },
    { name: "Income Tax", percentage: 30, color: "bg-emerald-500" },
    { name: "MCA / ROC", percentage: 15, color: "bg-purple-500" },
    { name: "Auditing", percentage: 10, color: "bg-orange-500" },
  ];

  return (
    <div className="space-y-8 mt-10 bg-slate-50 min-h-screen p-8 rounded-[1rem] animate-in fade-in duration-700">

      {/* Top Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-slate-100 rounded-[1rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-14 h-14 ${stat.color} rounded-[1rem] flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon size={28} />
                </div>
                <div className="text-right">
                  <div className={`flex items-center gap-1 text-sm font-black ${stat.change.startsWith("+") ? "text-emerald-600" : "text-red-600"}`}>
                    {stat.change.startsWith("+") ? <ArrowUpRight size={16} /> : <AlertTriangle size={16} />}
                    {stat.change}
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">vs last month</p>
                </div>
              </div>
              <p className="text-4xl font-black text-slate-900 mb-1 tracking-tighter">{stat.value}</p>
              <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Revenue Graph (2 Columns) */}
        <div className="lg:col-span-2 bg-white border border-slate-100 rounded-[1rem] p-10 shadow-sm relative overflow-hidden group">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <TrendingUp className="text-[#2663eb]" size={28} /> Revenue Velocity
              </h2>
              <p className="text-sm font-medium text-slate-500 mt-1">Monthly institutional billings across all practices.</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-black text-slate-900 tracking-tighter">₹4.2 Cr</p>
              <p className="text-xs font-black text-[#2663eb] uppercase tracking-widest">Projected Annual</p>
            </div>
          </div>

          {/* Custom SVG Graph */}
          <div className="relative h-64 w-full mt-8">
            <svg viewBox="0 0 1100 200" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2663eb" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#2663eb" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[0, 50, 100, 150, 200].map((y) => (
                <line key={y} x1="0" y1={y} x2="1100" y2={y} stroke="#f1f5f9" strokeWidth="1" />
              ))}

              {/* Area */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d={`M 0 200 ${revenueData.map((d, i) => `L ${i * 100} ${200 - d}`).join(' ')} L 1100 200 Z`}
                fill="url(#lineGradient)"
              />

              {/* Line */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d={`M 0 ${200 - revenueData[0]} ${revenueData.map((d, i) => `L ${i * 100} ${200 - d}`).join(' ')}`}
                fill="none"
                stroke="#2663eb"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data Points */}
              {revenueData.map((d, i) => (
                <motion.circle
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  cx={i * 100}
                  cy={200 - d}
                  r="6"
                  fill="white"
                  stroke="#2663eb"
                  strokeWidth="3"
                  className="cursor-pointer hover:r-8 transition-all"
                />
              ))}
            </svg>
            <div className="flex justify-between mt-6 px-2">
              {months.map((m, i) => (
                <span key={i} className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Side Stats & Distribution */}
        <div className="space-y-8">
          {/* Service Distribution */}
          <div className="bg-white border border-slate-100 rounded-[1rem] p-8 shadow-sm">
            <h2 className="text-xl font-black text-slate-900 mb-8 tracking-tight">Practice Mix</h2>
            <div className="space-y-8">
              {serviceDistribution.map((service, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <p className="text-sm font-black text-slate-700 uppercase tracking-widest">{service.name}</p>
                    <p className="text-lg font-black text-slate-900">{service.percentage}%</p>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${service.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      className={`h-full ${service.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Quick Metrics */}
          <div className="grid grid-cols-2 gap-4">
            {secondaryStats.map((s, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-[1rem] p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <s.icon size={14} className={s.color} />
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">{s.label}</p>
                </div>
                <p className="text-2xl font-black text-slate-900 tracking-tighter">{s.value}</p>
                <div className="mt-2 h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                  <div className={`h-full ${s.color.replace('text', 'bg')} opacity-20 w-3/4`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Compliance Mandates */}
        <div className="lg:col-span-2 bg-white border border-slate-100 rounded-[1rem] p-10 shadow-sm">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <AlertCircle className="text-red-500" size={28} /> Critical Mandates
            </h2>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-red-500">4 Immediate Actions</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-slate-50">
                  <th className="pb-5 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Mandate Type</th>
                  <th className="pb-5 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Entity Name</th>
                  <th className="pb-5 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Timeline</th>
                  <th className="pb-5 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Risk Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {complianceAlerts.map((alert, index) => (
                  <tr key={index} className="group hover:bg-slate-50/50 transition-all">
                    <td className="py-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-[0.8rem] flex items-center justify-center ${alert.priority === 'critical' ? 'bg-red-50 text-red-600' : 'bg-slate-50 text-slate-600'
                          }`}>
                          <Briefcase size={20} />
                        </div>
                        <p className="font-black text-slate-900 tracking-tight">{alert.type}</p>
                      </div>
                    </td>
                    <td className="py-6 font-bold text-slate-500">{alert.client}</td>
                    <td className="py-6">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className={alert.dueDate === "Today" ? "text-red-500" : "text-slate-400"} />
                        <span className={`font-black text-sm ${alert.dueDate === "Today" ? "text-red-500" : "text-slate-900"}`}>{alert.dueDate}</span>
                      </div>
                    </td>
                    <td className="py-6">
                      <span className={`text-[9px] font-black px-4 py-2 rounded-[0.8rem] uppercase tracking-widest ${alert.priority === "critical" ? "bg-red-600 text-white shadow-lg shadow-red-200" :
                        alert.priority === "high" ? "bg-orange-100 text-orange-700" :
                          alert.priority === "medium" ? "bg-yellow-100 text-yellow-700" :
                            "bg-blue-100 text-[#2663eb]"
                        }`}>
                        {alert.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upcoming Calendar */}
        <div className="bg-[#0F172A] text-white rounded-[1rem] p-10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2663eb]/10 rounded-full blur-[100px] -mr-32 -mt-32" />
          <h2 className="text-2xl font-black mb-10 tracking-tight relative z-10 flex items-center gap-3">
            <Calendar className="text-[#2663eb]" size={28} /> Strategic Pipeline
          </h2>
          <div className="space-y-6 relative z-10">
            {[
              { t: "Direct Tax Assessment", c: "Alpha Global", d: "Oct 15" },
              { t: "FEMA Compliance Review", c: "Nexus Venture", d: "Oct 18" },
              { t: "Quarterly Board Audit", c: "Horizon Mfg", d: "Oct 22" },
            ].map((d, i) => (
              <div key={i} className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-[1rem] hover:bg-white/10 transition-all cursor-pointer">
                <div className="w-16 h-16 bg-[#2663eb] rounded-[1rem] flex flex-col items-center justify-center flex-shrink-0 shadow-xl shadow-[#2663eb]/20">
                  <span className="text-[10px] font-black uppercase opacity-80">{d.d.split(' ')[0]}</span>
                  <span className="text-xl font-black">{d.d.split(' ')[1]}</span>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-black text-lg tracking-tight leading-tight">{d.t}</p>
                  <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">{d.c}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 py-5 bg-[#2663eb] text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-[1rem] hover:scale-105 transition-all shadow-xl shadow-[#2663eb]/30">
            Open Full Pipeline
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
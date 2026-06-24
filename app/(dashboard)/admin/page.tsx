"use client";

import React from 'react';
import {
  Users,
  Briefcase,
  ListTodo,
  IndianRupee,
  AlertCircle,
  Calendar,
  Clock,
  CheckCircle2,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
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
      color: "text-[#2563EB]",
      bgColor: "bg-[#2563EB]/10"
    },
    {
      label: "Ongoing Projects",
      value: "184",
      change: "+5%",
      icon: Briefcase,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      label: "Pending Tasks",
      value: "42",
      change: "-8%",
      icon: ListTodo,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      label: "Revenue This Month",
      value: "₹34.2L",
      change: "+24%",
      icon: IndianRupee,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100"
    },
  ];

  const secondaryStats = [
    { label: "New Clients (Weekly)", value: "28", target: "30", icon: Users, color: "text-blue-600" },
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
    <div className="space-y-6">

      {/* Top Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                  <Icon size={24} className={stat.color} />
                </div>
                <div className="text-right">
                  <div className={`flex items-center gap-1 text-sm font-semibold ${stat.change.startsWith("+") ? "text-emerald-600" : "text-red-600"}`}>
                    {stat.change.startsWith("+") ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                    {stat.change}
                  </div>
                  <p className="text-xs text-[#64748B]">vs last month</p>
                </div>
              </div>
              <p className="text-3xl font-semibold text-[#0F172A] mb-1">{stat.value}</p>
              <p className="text-sm font-medium text-[#64748B]">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Revenue Graph (2 Columns) */}
        <div className="lg:col-span-2 bg-white border border-[#E2E8F0] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-[#0F172A] flex items-center gap-2">
                <TrendingUp className="text-[#2563EB]" size={20} /> Revenue Velocity
              </h2>
              <p className="text-sm text-[#64748B] mt-1">Monthly institutional billings across all practices.</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-semibold text-[#0F172A]">₹4.2 Cr</p>
              <p className="text-xs text-[#2563EB] font-medium">Projected Annual</p>
            </div>
          </div>

          {/* Custom SVG Graph */}
          <div className="relative h-64 w-full mt-4">
            <svg viewBox="0 0 1100 200" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[0, 50, 100, 150, 200].map((y) => (
                <line key={y} x1="0" y1={y} x2="1100" y2={y} stroke="#E2E8F0" strokeWidth="1" />
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
                stroke="#2563EB"
                strokeWidth="3"
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
                  r="5"
                  fill="white"
                  stroke="#2563EB"
                  strokeWidth="2"
                  className="cursor-pointer hover:r-6 transition-all"
                />
              ))}
            </svg>
            <div className="flex justify-between mt-4 px-2">
              {months.map((m, i) => (
                <span key={i} className="text-xs text-[#64748B] font-medium">{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Side Stats & Distribution */}
        <div className="space-y-6">
          {/* Service Distribution */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-[#0F172A] mb-6">Practice Mix</h2>
            <div className="space-y-6">
              {serviceDistribution.map((service, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <p className="text-sm font-medium text-[#0F172A]">{service.name}</p>
                    <p className="text-sm font-semibold text-[#0F172A]">{service.percentage}%</p>
                  </div>
                  <div className="h-2 w-full bg-[#F8FAFC] rounded-full overflow-hidden">
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
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <s.icon size={16} className={s.color} />
                  <p className="text-xs text-[#64748B]">{s.label}</p>
                </div>
                <p className="text-xl font-semibold text-[#0F172A]">{s.value}</p>
                <div className="mt-2 h-1 w-full bg-[#F8FAFC] rounded-full overflow-hidden">
                  <div className={`h-full ${s.color.replace('text', 'bg')} opacity-30 w-3/4`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Compliance Mandates */}
        <div className="lg:col-span-2 bg-white border border-[#E2E8F0] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-[#0F172A] flex items-center gap-2">
              <AlertCircle className="text-red-500" size={20} /> Critical Mandates
            </h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs text-red-500 font-medium">4 Immediate Actions</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#E2E8F0]">
                  <th className="pb-4 text-xs font-semibold text-[#64748B] uppercase">Mandate Type</th>
                  <th className="pb-4 text-xs font-semibold text-[#64748B] uppercase">Entity Name</th>
                  <th className="pb-4 text-xs font-semibold text-[#64748B] uppercase">Timeline</th>
                  <th className="pb-4 text-xs font-semibold text-[#64748B] uppercase">Risk Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {complianceAlerts.map((alert, index) => (
                  <tr key={index} className="hover:bg-[#F8FAFC] transition-colors">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${alert.priority === 'critical' ? 'bg-red-50 text-red-600' : 'bg-[#F8FAFC] text-[#64748B]'
                          }`}>
                          <Briefcase size={16} />
                        </div>
                        <p className="font-medium text-[#0F172A]">{alert.type}</p>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-[#64748B]">{alert.client}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <Clock size={14} className={alert.dueDate === "Today" ? "text-red-500" : "text-[#64748B]"} />
                        <span className={`text-sm font-medium ${alert.dueDate === "Today" ? "text-red-500" : "text-[#0F172A]"}`}>{alert.dueDate}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`text-xs font-medium px-3 py-1 rounded-lg uppercase ${alert.priority === "critical" ? "bg-red-600 text-white" :
                        alert.priority === "high" ? "bg-orange-100 text-orange-700" :
                          alert.priority === "medium" ? "bg-yellow-100 text-yellow-700" :
                            "bg-blue-100 text-[#2563EB]"
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
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-6 flex items-center gap-2">
            <Calendar className="text-[#2563EB]" size={20} /> Strategic Pipeline
          </h2>
          <div className="space-y-4">
            {[
              { t: "Direct Tax Assessment", c: "Alpha Global", d: "Oct 15" },
              { t: "FEMA Compliance Review", c: "Nexus Venture", d: "Oct 18" },
              { t: "Quarterly Board Audit", c: "Horizon Mfg", d: "Oct 22" },
            ].map((d, i) => (
              <div key={i} className="flex gap-4 p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl hover:bg-[#F1F5F9] transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium opacity-80">{d.d.split(' ')[0]}</span>
                  <span className="text-sm font-semibold">{d.d.split(' ')[1]}</span>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-medium text-[#0F172A]">{d.t}</p>
                  <p className="text-xs text-[#64748B] mt-1">{d.c}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 bg-[#2563EB] text-white font-medium rounded-[10px] hover:bg-[#1D4ED8] transition-colors">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
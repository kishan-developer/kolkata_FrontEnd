"use client";

import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Star, 
  Download,
  Calendar,
  Filter,
  ArrowUpRight,
  ChevronDown
} from "lucide-react";
import { motion } from "framer-motion";

export default function AnalyticsPage() {
  const [timeFilter, setTimeFilter] = useState("Monthly");

  const metrics = [
    { label: "Avg Turnaround Time", value: "2.3 days", change: "-0.4 days", icon: Clock, trend: "down" },
    { label: "Notice Resolution", value: "5.1 days", change: "-1.2 days", icon: TrendingUp, trend: "down" },
    { label: "Customer Satisfaction", value: "4.7/5", change: "+0.2", icon: Star, trend: "up" },
    { label: "Monthly Churn Rate", value: "2.1%", change: "-0.5%", icon: Users, trend: "down" },
    { label: "Revenue per User", value: "₹1,847", change: "+12%", icon: DollarSign, trend: "up" },
    { label: "AI Accuracy Rate", value: "99.2%", change: "+0.3%", icon: BarChart3, trend: "up" },
  ];

  const userGrowthData = [20, 45, 30, 60, 50, 85, 75, 110, 95, 130];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];

  const filingDistribution = [
    { label: "GST", value: 450, color: "bg-[#2663eb]" },
    { label: "ITR", value: 320, color: "bg-emerald-500" },
    { label: "ROC", value: 180, color: "bg-purple-500" },
    { label: "Audit", value: 90, color: "bg-orange-500" },
  ];

  return (
    <div className="space-y-8 bg-slate-50 min-h-screen p-8 rounded-[1rem] animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Analytics Intelligence</h1>
          <p className="text-slate-500 font-medium mt-1">Deep-dive into institutional performance and growth trends.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <button className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-[1rem] font-black text-xs uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all">
              <Filter size={16} className="text-[#2663eb]" /> {timeFilter} <ChevronDown size={16} />
            </button>
          </div>
          <button className="flex items-center gap-3 px-8 py-3 bg-[#2663eb] text-white rounded-[1rem] font-black text-xs uppercase tracking-widest hover:bg-[#1d4ed8] shadow-xl shadow-[#2663eb]/20 transition-all">
            <Download size={18} /> Export Data
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const isPositive = metric.trend === "up" || (metric.label.includes("Time") && metric.trend === "down");
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-slate-100 rounded-[1rem] p-8 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#2663eb]/5 rounded-[1rem] flex items-center justify-center group-hover:bg-[#2663eb] group-hover:text-white transition-all">
                  <Icon size={24} className="text-[#2663eb] group-hover:text-white" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-black ${isPositive ? "text-emerald-600" : "text-red-600"}`}>
                  {metric.change}
                </div>
              </div>
              <p className="text-3xl font-black text-slate-900 mb-1 tracking-tighter">{metric.value}</p>
              <p className="text-xs font-black text-slate-500 uppercase tracking-widest">{metric.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* User Growth Trend Area Chart */}
        <div className="bg-white border border-slate-100 rounded-[1rem] p-10 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Institutional Growth</h2>
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-[0.8rem] text-[10px] font-black uppercase tracking-widest">
              <ArrowUpRight size={14} /> +24% YoY
            </div>
          </div>
          <div className="relative h-64 w-full">
            <svg viewBox="0 0 900 200" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2663eb" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#2663eb" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                d={`M 0 200 ${userGrowthData.map((d, i) => `L ${i * 100} ${200 - d}`).join(' ')} L 900 200 Z`}
                fill="url(#growthGradient)"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
                d={`M 0 ${200 - userGrowthData[0]} ${userGrowthData.map((d, i) => `L ${i * 100} ${200 - d}`).join(' ')}`}
                fill="none"
                stroke="#2663eb"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <div className="flex justify-between mt-6">
              {months.map((m, i) => (
                <span key={i} className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Filing Distribution Bar Chart */}
        <div className="bg-white border border-slate-100 rounded-[1rem] p-10 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900 mb-10 tracking-tight">Filing Distribution</h2>
          <div className="flex items-end justify-between h-64 gap-6 px-4">
            {filingDistribution.map((item, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                <div className="w-full relative flex flex-col items-center justify-end h-full">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${(item.value / 450) * 100}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className={`w-full ${item.color} rounded-t-[1rem] shadow-lg shadow-slate-200 group-hover:opacity-80 transition-all relative`}
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-black px-2 py-1 rounded-[0.4rem] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {item.value} Filings
                    </div>
                  </motion.div>
                </div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Revenue Breakdown */}
        <div className="bg-white border border-slate-100 rounded-[1rem] p-10 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900 mb-10 tracking-tight">Revenue Stream Analysis</h2>
          <div className="space-y-8">
            {[
              { service: "GST Filing", revenue: "₹12.4L", percentage: 51, color: "bg-[#2663eb]" },
              { service: "ITR Filing", revenue: "₹7.2L", percentage: 29, color: "bg-emerald-500" },
              { service: "ROC Services", revenue: "₹3.8L", percentage: 16, color: "bg-purple-500" },
              { service: "Others", revenue: "₹1.1L", percentage: 4, color: "bg-slate-400" },
            ].map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-black text-slate-700 uppercase tracking-widest">{item.service}</span>
                  <span className="text-lg font-black text-slate-900">{item.revenue}</span>
                </div>
                <div className="h-4 bg-slate-100 rounded-full overflow-hidden flex">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`h-full ${item.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing CAs */}
        <div className="bg-white border border-slate-100 rounded-[1rem] p-10 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900 mb-10 tracking-tight">Practice Leaderboard</h2>
          <div className="space-y-6">
            {[
              { name: "CA Ramesh Gupta", filings: 124, rating: 4.9, color: "from-blue-600 to-indigo-600" },
              { name: "CA Sneha Reddy", filings: 98, rating: 4.8, color: "from-emerald-500 to-teal-500" },
              { name: "CA Vikram Malhotra", filings: 67, rating: 4.7, color: "from-purple-500 to-pink-500" },
            ].map((ca, index) => (
              <div key={index} className="flex items-center justify-between p-6 bg-slate-50 rounded-[1rem] border border-transparent hover:border-[#2663eb]/20 hover:bg-white hover:shadow-xl transition-all group">
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 bg-gradient-to-br ${ca.color} rounded-[1rem] flex items-center justify-center text-white font-black text-xl shadow-lg`}>
                    {ca.name.split(' ')[1].charAt(0)}
                  </div>
                  <div>
                    <p className="font-black text-lg text-slate-900 tracking-tight">{ca.name}</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{ca.filings} mandates completed</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className={s <= Math.floor(ca.rating) ? "fill-[#2663eb] text-[#2663eb]" : "text-slate-200"} />
                    ))}
                  </div>
                  <span className="text-xl font-black text-slate-900 mt-1">{ca.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

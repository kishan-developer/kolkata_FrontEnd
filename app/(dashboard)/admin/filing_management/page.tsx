"use client";

import { useState } from "react";
import { 
  Clock, 
  Calendar, 
  AlertCircle, 
  CheckCircle2, 
  BellRing, 
  Smartphone, 
  Mail, 
  Search, 
  Filter, 
  ChevronRight, 
  ArrowUpRight,
  TrendingDown,
  ShieldAlert,
  FileClock,
  History
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ComplianceAutomationPage() {
  const [activeTab, setActiveTab] = useState<'Trackers' | 'Reminders' | 'PenaltyRisk'>('Trackers');

  const complianceItems = [
    { id: "CMP-001", type: "GSTR-1", period: "Sep 2024", due: "Oct 11, 2024", status: "Overdue", risk: "High", penalty: "₹50/day" },
    { id: "CMP-002", type: "GSTR-3B", period: "Sep 2024", due: "Oct 20, 2024", status: "Upcoming", risk: "Medium", penalty: "₹50/day" },
    { id: "CMP-003", type: "ITR-6", period: "AY 2024-25", due: "Oct 31, 2024", status: "In Progress", risk: "Low", penalty: "₹10,000" },
    { id: "CMP-004", type: "ROC MGT-7", period: "FY 2023-24", due: "Oct 29, 2024", status: "Upcoming", risk: "Medium", penalty: "₹100/day" },
  ];

  return (
    <div className="space-y-10 mt-10 min-h-screen bg-slate-50/30 p-8 rounded-[2rem] animate-in fade-in duration-700">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Compliance Intelligence</h1>
          <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mt-2">Automated Filing Trackers & Penalty Mitigation</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 rounded-[1.2rem] shadow-sm border border-slate-100">
          <TabButton active={activeTab === 'Trackers'} onClick={() => setActiveTab('Trackers')} icon={<Calendar size={16} />} label="Live Trackers" />
          <TabButton active={activeTab === 'Reminders'} onClick={() => setActiveTab('Reminders')} icon={<BellRing size={16} />} label="Reminders Hub" />
          <TabButton active={activeTab === 'PenaltyRisk'} onClick={() => setActiveTab('PenaltyRisk')} icon={<ShieldAlert size={16} />} label="Risk Alerts" />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'Trackers' && (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            {/* Compliance Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               <StatCard label="Live Mandates" value="1,240" icon={<FileClock size={24} />} color="blue" />
               <StatCard label="Filed (M)" value="842" icon={<CheckCircle2 size={24} />} color="emerald" />
               <StatCard label="Awaiting Info" value="156" icon={<Clock size={24} />} color="orange" />
               <StatCard label="Penalty Risk" value="12" icon={<AlertCircle size={24} />} color="red" />
            </div>

            {/* Tracker Table */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
               <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="relative flex-1 max-w-md">
                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                     <input type="text" placeholder="Search filings, clients or forms..." className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-[1rem] outline-none focus:ring-2 focus:ring-[#2663eb] text-sm font-medium" />
                  </div>
                  <div className="flex gap-3">
                     <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-[1rem] font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
                        <Filter size={14} /> Filter Vertical
                     </button>
                  </div>
               </div>

               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead className="bg-slate-50/50 border-b border-slate-100">
                        <tr>
                           <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Filing Type & Period</th>
                           <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Target Deadline</th>
                           <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                           <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Penalty Impact</th>
                           <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-50">
                        {complianceItems.map((item, idx) => (
                          <tr key={idx} className="group hover:bg-slate-50/50 transition-all cursor-pointer">
                             <td className="px-8 py-6">
                                <div className="flex items-center gap-4">
                                   <div className={`p-3 rounded-[1rem] border shadow-sm transition-transform group-hover:scale-110 ${item.status === 'Overdue' ? 'bg-red-50 text-red-500 border-red-100' : 'bg-blue-50 text-[#2663eb] border-blue-100'}`}>
                                      <FileClock size={18} />
                                   </div>
                                   <div>
                                      <p className="text-sm font-black text-slate-900 tracking-tight">{item.type}</p>
                                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{item.period}</p>
                                   </div>
                                </div>
                             </td>
                             <td className="px-8 py-6">
                                <div className="flex items-center gap-2">
                                   <Calendar size={14} className="text-slate-400" />
                                   <span className="text-xs font-black text-slate-900 tracking-tight">{item.due}</span>
                                </div>
                             </td>
                             <td className="px-8 py-6">
                                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${item.status === 'Overdue' ? 'bg-red-50 text-red-500 border-red-100' : item.status === 'In Progress' ? 'bg-orange-50 text-orange-500 border-orange-100' : 'bg-blue-50 text-[#2663eb] border-blue-100'}`}>{item.status}</span>
                             </td>
                             <td className="px-8 py-6">
                                <div className="flex items-center gap-2">
                                   <TrendingDown className={item.risk === 'High' ? 'text-red-500' : 'text-slate-400'} size={14} />
                                   <span className={`text-xs font-black tracking-tight ${item.risk === 'High' ? 'text-red-600' : 'text-slate-500'}`}>{item.penalty}</span>
                                </div>
                             </td>
                             <td className="px-8 py-6 text-right">
                                <button className="p-2.5 bg-slate-900 text-white rounded-[1rem] hover:scale-110 transition-transform shadow-lg">
                                   <BellRing size={16} />
                                </button>
                             </td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'Reminders' && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
                   <h3 className="text-xl font-black text-slate-900 tracking-tight mb-10 flex items-center gap-3">
                      <Smartphone size={24} className="text-emerald-500" /> WhatsApp Automation
                   </h3>
                   <div className="space-y-6">
                      <AutomationCard label="Deadline Proximity Alert" status="Enabled" trigger="2 Days Before" />
                      <AutomationCard label="Document Request Reminder" status="Enabled" trigger="Every 3 Days" />
                      <AutomationCard label="Filing Success Notification" status="Enabled" trigger="On Status Change" />
                   </div>
                </div>
                <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
                   <h3 className="text-xl font-black text-slate-900 tracking-tight mb-10 flex items-center gap-3">
                      <Mail size={24} className="text-[#2663eb]" /> Email Sequences
                   </h3>
                   <div className="space-y-6">
                      <AutomationCard label="Monthly Compliance Summary" status="Enabled" trigger="1st of Month" />
                      <AutomationCard label="Tax Planning Advisory" status="Disabled" trigger="Quarterly" />
                      <AutomationCard label="Penalty Risk Warning" status="Enabled" trigger="At Overdue" />
                   </div>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
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
    red: 'bg-red-50 text-red-600 border-red-100'
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

function AutomationCard({ label, status, trigger }: { label: string, status: string, trigger: string }) {
  return (
    <div className="flex items-center justify-between p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 hover:bg-white hover:border-[#2663eb] transition-all group">
       <div>
          <h4 className="text-sm font-black text-slate-900 tracking-tight">{label}</h4>
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Trigger: {trigger}</p>
       </div>
       <div className="flex items-center gap-3">
          <span className={`text-[9px] font-black uppercase tracking-widest ${status === 'Enabled' ? 'text-emerald-500' : 'text-slate-300'}`}>{status}</span>
          <div className={`w-10 h-5 rounded-full p-1 transition-colors ${status === 'Enabled' ? 'bg-[#2663eb]' : 'bg-slate-200'}`}>
             <div className={`w-3 h-3 bg-white rounded-full shadow-sm transition-transform ${status === 'Enabled' ? 'translate-x-5' : 'translate-x-0'}`} />
          </div>
       </div>
    </div>
  );
}
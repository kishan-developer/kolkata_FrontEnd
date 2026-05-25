"use client";

import { useState } from "react";
import {
   Building2,
   FileText,
   ShieldCheck,
   Briefcase,
   Layout,
   ChevronRight,
   Clock,
   User2,
   Upload,
   MessageSquare,
   CheckCircle2,
   AlertCircle,
   MoreVertical,
   Activity,
   ArrowRight,
   Plus
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceDeliveryPage() {
   const [selectedPanel, setSelectedPanel] = useState<'Business' | 'IncomeTax' | 'GST' | 'MCA'>('Business');
   const [selectedMandate, setSelectedMandate] = useState(0);

   const panels = [
      { id: 'Business', label: 'Business Reg', icon: <Building2 size={18} /> },
      { id: 'IncomeTax', label: 'Income Tax', icon: <FileText size={18} /> },
      { id: 'GST', label: 'GST Panels', icon: <ShieldCheck size={18} /> },
      { id: 'MCA', label: 'MCA / ROC', icon: <Briefcase size={18} /> },
   ];

   const businessWorkflows = [
      {
         client: "Malhotra Tech Solutions LLP",
         type: "LLP Formation",
         step: 3,
         totalSteps: 5,
         assigned: "Sonal Gupta",
         status: "In Progress",
         timeline: [
            { label: "DSC & DIN Generation", status: "Completed", date: "Oct 01" },
            { label: "Name Approval (RUN)", status: "Completed", date: "Oct 04" },
            { label: "Form Filing (FiLLiP)", status: "In Progress", date: "Target: Oct 10" },
            { label: "MCA Approval", status: "Pending", date: "" },
            { label: "Certificate Issuance", status: "Pending", date: "" },
         ],
         docs: ["PAN Card", "Aadhaar", "Utility Bill", "NOC from Owner"]
      },
      {
         client: "Green Earth Foundations",
         type: "Trust Registration",
         step: 1,
         totalSteps: 4,
         assigned: "Rahul Sharma",
         status: "On Hold",
         timeline: [
            { label: "Trust Deed Drafting", status: "In Progress", date: "Oct 08" },
            { label: "Sub-Registrar Filing", status: "Pending", date: "" },
            { label: "Verification", status: "Pending", date: "" },
            { label: "Final Registration", status: "Pending", date: "" },
         ],
         docs: ["Address Proof", "ID Proofs", "Photos"]
      }
   ];

   const currentMandate = businessWorkflows[selectedMandate];

   return (
      <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50/30 p-4 lg:p-8 gap-8 mt-10">

         {/* Category Sidebar */}
         <div className="w-full lg:w-72 flex flex-col gap-4">
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
               <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">Service Delivery</h2>
               <div className="space-y-2">
                  {panels.map(panel => (
                     <button
                        key={panel.id}
                        onClick={() => setSelectedPanel(panel.id as any)}
                        className={`w-full flex items-center justify-between p-4 rounded-[1.2rem] transition-all group ${selectedPanel === panel.id ? 'bg-[#2663eb] text-white shadow-lg shadow-blue-100' : 'text-slate-500 hover:bg-slate-50'}`}
                     >
                        <div className="flex items-center gap-3">
                           {panel.icon}
                           <span className="text-xs font-black uppercase tracking-tight">{panel.label}</span>
                        </div>
                        <ChevronRight size={14} className={selectedPanel === panel.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transition-opacity'} />
                     </button>
                  ))}
               </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#2663eb]/20 rounded-full blur-3xl -mr-16 -mt-16" />
               <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-blue-400">Panel Overview</h3>
               <div className="space-y-4">
                  <div className="flex justify-between items-center">
                     <span className="text-[10px] font-bold text-slate-400 uppercase">Active Cases</span>
                     <span className="text-sm font-black">128</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-[10px] font-bold text-slate-400 uppercase">Awaiting Client</span>
                     <span className="text-sm font-black text-orange-400">14</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-[10px] font-bold text-slate-400 uppercase">Completed (M)</span>
                     <span className="text-sm font-black text-emerald-400">84</span>
                  </div>
               </div>
            </div>
         </div>

         {/* Main Panel Content */}
         <div className="flex-1 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
               <div>
                  <h1 className="text-4xl font-black text-slate-900 tracking-tighter">{selectedPanel} Operations</h1>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mt-2">Specialized Service Delivery Hub</p>
               </div>
               <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-[1rem] font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
                     <Activity size={14} /> Analytics
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-[#2663eb] text-white rounded-[1rem] font-black text-[10px] uppercase tracking-widest hover:bg-[#1d4ed8] shadow-lg shadow-blue-100 transition-all border-b-4 border-[#1e40af]">
                     <Plus size={14} /> New Mandate
                  </button>
               </div>
            </div>

            {/* Mandate Selector */}
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
               {businessWorkflows.map((w, idx) => (
                  <button
                     key={idx}
                     onClick={() => setSelectedMandate(idx)}
                     className={`flex-shrink-0 w-80 p-6 rounded-[2rem] border transition-all text-left ${selectedMandate === idx ? 'bg-white border-[#2663eb] shadow-xl ring-2 ring-blue-50' : 'bg-white/50 border-slate-100 hover:bg-white hover:border-slate-200'}`}
                  >
                     <div className="flex justify-between items-start mb-4">
                        <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest ${w.status === 'In Progress' ? 'bg-blue-50 text-[#2663eb]' : 'bg-orange-50 text-orange-500'}`}>{w.status}</span>
                        <span className="text-[10px] font-black text-slate-400 uppercase">{w.step}/{w.totalSteps} Steps</span>
                     </div>
                     <h4 className="font-black text-slate-900 tracking-tight mb-1">{w.client}</h4>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{w.type}</p>
                  </button>
               ))}
            </div>

            {/* Detailed Workflow View */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="lg:col-span-2 space-y-8">
                  <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
                     <div className="flex items-center justify-between mb-12">
                        <h3 className="text-xl font-black text-slate-900 tracking-tight">Step-wise Progress</h3>
                        <div className="flex items-center gap-4">
                           <span className="text-[10px] font-black text-slate-400 uppercase">TAT: 12 Days Left</span>
                        </div>
                     </div>
                     <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-slate-50 rounded-full" />
                        <div className="space-y-12">
                           {currentMandate.timeline.map((item, idx) => (
                              <div key={idx} className="relative flex items-center gap-10 group">
                                 <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center z-10 transition-all ${item.status === 'Completed' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-100' : item.status === 'In Progress' ? 'bg-[#2663eb] text-white shadow-lg shadow-blue-100 scale-110' : 'bg-white border-2 border-slate-100 text-slate-300'}`}>
                                    {item.status === 'Completed' ? <CheckCircle2 size={24} /> : item.status === 'In Progress' ? <Activity size={24} className="animate-pulse" /> : <Clock size={24} />}
                                 </div>
                                 <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                       <h4 className={`text-lg font-black tracking-tight ${item.status === 'Pending' ? 'text-slate-300' : 'text-slate-900'}`}>{item.label}</h4>
                                       <span className={`text-[10px] font-black uppercase tracking-widest ${item.status === 'Completed' ? 'text-emerald-500' : item.status === 'In Progress' ? 'text-[#2663eb]' : 'text-slate-300'}`}>{item.status}</span>
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.date}</p>
                                 </div>
                                 {item.status === 'In Progress' && (
                                    <button className="p-3 bg-slate-900 text-white rounded-[1rem] shadow-xl hover:scale-110 transition-transform">
                                       <ArrowRight size={18} />
                                    </button>
                                 )}
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               <div className="space-y-8">
                  <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                     <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-8">Required Documentation</h3>
                     <div className="space-y-3">
                        {currentMandate.docs.map((doc, idx) => (
                           <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-[1.2rem] border border-slate-100 hover:bg-white hover:border-[#2663eb] transition-all group">
                              <div className="flex items-center gap-3">
                                 <FileText size={16} className="text-slate-400 group-hover:text-[#2663eb]" />
                                 <span className="text-[11px] font-black text-slate-700 uppercase tracking-tight">{doc}</span>
                              </div>
                              <CheckCircle2 size={16} className="text-emerald-500" />
                           </div>
                        ))}
                        <button className="w-full py-4 mt-4 border-2 border-dashed border-slate-200 rounded-[1.2rem] text-[10px] font-black text-slate-400 uppercase tracking-widest hover:bg-slate-50 hover:border-slate-300 transition-all">
                           <Upload size={14} className="inline mr-2" /> Request More
                        </button>
                     </div>
                  </div>

                  <div className="bg-[#0F172A] text-white p-8 rounded-[2.5rem] shadow-2xl overflow-hidden relative">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
                     <h3 className="text-xs font-black uppercase tracking-widest mb-8 flex items-center gap-3">
                        <MessageSquare size={18} className="text-blue-500" /> Mandate Support
                     </h3>
                     <div className="flex items-center gap-4 p-4 bg-white/5 rounded-[1.5rem] border border-white/5 mb-6">
                        <div className="w-12 h-12 rounded-[1.2rem] bg-slate-800 overflow-hidden">
                           <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${currentMandate.assigned}`} alt="" />
                        </div>
                        <div>
                           <p className="text-sm font-black tracking-tight">{currentMandate.assigned}</p>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Case Specialist</p>
                        </div>
                     </div>
                     <button className="w-full py-4 bg-[#2663eb] text-white rounded-[1.2rem] font-black text-[10px] uppercase tracking-widest shadow-xl border-b-4 border-[#1e40af] hover:bg-[#1d4ed8] transition-all">Start Direct Chat</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

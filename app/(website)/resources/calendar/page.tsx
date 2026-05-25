"use client";

import React, { useState } from 'react';
import { 
  Calendar, Clock, Download, Bell, 
  ChevronRight, ArrowRight, Filter, Info, 
  AlertCircle 
} from 'lucide-react';
import Section_Banner from '../../Components/Section_Banner';

const DATES = [
  { month: "April 2026", events: [
    { day: "07", t: "TDS Payment", d: "Due date for deposit of TDS/TCS for March 2026.", cat: "TDS" },
    { day: "15", t: "PF & ESI Payment", d: "Due date for payment of Provident Fund and ESI contributions for March 2026.", cat: "Labor" },
    { day: "20", t: "GSTR-3B Filing", d: "Due date for filing monthly GSTR-3B for March 2026 for regular taxpayers.", cat: "GST" },
    { day: "30", t: "Challan-cum-Statement", d: "Payment of TDS u/s 194-IA, 194-IB, 194M for March 2026.", cat: "Income Tax" }
  ]},
  { month: "May 2026", events: [
    { day: "15", t: "Quarterly TDS Certificate", d: "Due date for issuance of Form 16A for the quarter ending March 2026.", cat: "TDS" },
    { day: "31", t: "TDS Statement (Q4)", d: "Due date for filing of TDS statement for the quarter ending March 2026.", cat: "TDS" }
  ]}
];

export default function TaxCalendarPage() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="pt-20 pb-24 min-h-screen bg-[#F8FAFC]">
      <Section_Banner 
        title="Institutional Tax Calendar"
        paragraph="A comprehensive compliance and tax calendar for SMEs, Enterprises, and Tax Professionals in India."
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-20">
        <div className="bg-[#0F172A] rounded-[1rem] p-12 md:p-24 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#2663eb]/10 rounded-[1rem] blur-3xl -mr-32 -mt-32"></div>
           <div className="relative z-10 lg:flex items-center justify-between gap-12">
              <div className="max-w-2xl space-y-8">
                 <div className="flex items-center gap-3">
                    <div className="px-4 py-1.5 bg-[#2663eb] text-white text-[10px] font-black uppercase tracking-widest rounded-[1rem]">FY 2026-27</div>
                    <div className="flex items-center gap-1 text-slate-400 text-sm font-bold">
                       <Clock size={16} /> Last Updated: April 14, 2026
                    </div>
                 </div>
                 <h1 className="text-4xl md:text-7xl font-black leading-tight tracking-tighter">
                    Never Miss a <br/> <span className="text-[#2663eb]">Deadline</span>.
                 </h1>
                 <div className="flex flex-wrap gap-4 pt-4">
                    <button className="bg-white text-[#0F172A] px-8 py-4 rounded-[1rem] font-black flex items-center gap-2 hover:bg-[#2663eb] hover:text-white transition-all">
                       <Download size={20} /> Download PDF
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-[1rem] font-black hover:bg-white/20 transition-all flex items-center gap-2">
                       <Bell size={20} /> Set Reminders
                    </button>
                 </div>
              </div>
              <div className="hidden lg:block">
                 <div className="w-80 h-80 bg-white/5 rounded-[1rem] border border-white/10 flex items-center justify-center relative">
                    <Calendar size={120} className="text-[#2663eb] opacity-30" />
                    <div className="absolute -bottom-6 -left-6 bg-[#2663eb] p-8 rounded-[1rem] shadow-2xl">
                       <p className="text-4xl font-black italic tracking-tighter">07</p>
                       <p className="text-[10px] uppercase font-black tracking-widest opacity-80 mt-1">Next Major Date</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Calendar List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar Filters */}
            <div className="lg:w-1/4 space-y-8">
               <div className="bg-white p-8 rounded-[1rem] border border-slate-100 shadow-sm space-y-6">
                  <h3 className="font-black text-[#0F172A] flex items-center gap-2">
                     <Filter size={18} className="text-[#2663eb]" /> Filter by Type
                  </h3>
                  <div className="space-y-2">
                     {["All", "GST", "Income Tax", "TDS", "Labor", "ROC"].map(f => (
                       <button
                         key={f}
                         onClick={() => setFilter(f)}
                         className={`w-full text-left px-5 py-3 rounded-[1rem] font-bold transition-all ${
                           filter === f ? 'bg-[#F1F5F9] text-[#0F172A]' : 'text-slate-400 hover:text-[#0F172A] hover:bg-slate-50'
                         }`}
                       >
                         {f}
                       </button>
                     ))}
                  </div>
               </div>

               <div className="bg-orange-50 p-8 rounded-[1rem] border border-orange-100 space-y-4">
                  <div className="flex items-center gap-2 text-orange-600">
                     <AlertCircle size={20} />
                     <h4 className="font-black text-xs uppercase tracking-widest">Important Note</h4>
                  </div>
                  <p className="text-sm text-orange-800/80 font-medium leading-relaxed">
                     Extension of due dates by the Ministry or Department is common. We update this calendar within 4 hours of any official notification.
                  </p>
               </div>
            </div>

            {/* Dates Content */}
            <div className="lg:w-3/4 space-y-16">
               {DATES.map((monthData, mIdx) => (
                 <div key={mIdx} className="space-y-8">
                    <div className="flex items-center gap-6">
                       <h3 className="text-3xl font-black text-[#0F172A] whitespace-nowrap">{monthData.month}</h3>
                       <div className="h-px bg-slate-200 w-full"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                       {monthData.events.filter(e => filter === "All" || e.cat === filter).map((event, eIdx) => (
                         <div 
                           key={eIdx} 
                           className="bg-white p-8 rounded-[1rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-[#2663eb]/30 transition-all duration-500 group flex items-start flex-col md:flex-row gap-8"
                         >
                            <div className="md:w-32 flex flex-col items-center">
                               <span className="text-5xl font-black text-[#0F172A] group-hover:text-[#2663eb] transition-colors tracking-tighter">{event.day}</span>
                               <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] mt-1">{monthData.month.split(' ')[0]}</span>
                            </div>
                            <div className="flex-1 space-y-3">
                               <div className="flex items-center gap-3">
                                  <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-[1rem]">{event.cat}</span>
                                  <div className="w-1 h-1 bg-slate-300 rounded-[1rem]"></div>
                                  <span className="text-xs font-bold text-[#2663eb]">Final Deadline</span>
                               </div>
                               <h4 className="text-2xl font-black text-[#0F172A]">{event.t}</h4>
                               <p className="text-slate-500 font-medium leading-relaxed">
                                  {event.d}
                               </p>
                            </div>
                            <div className="pt-2">
                               <button className="bg-slate-50 p-4 rounded-[1rem] group-hover:bg-[#0F172A] group-hover:text-white transition-all">
                                  <ArrowRight size={20} />
                               </button>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
               ))}

               {/* No events placeholder */}
               {filter !== "All" && !DATES.some(m => m.events.some(e => e.cat === filter)) && (
                 <div className="text-center py-24 bg-white rounded-[1rem] border border-dashed border-slate-200">
                    <Info size={48} className="mx-auto text-slate-300 mb-4" />
                    <p className="text-slate-400 font-black">No {filter} deadlines found for the upcoming 2 months.</p>
                 </div>
               )}
            </div>

         </div>
      </section>

      {/* Subscription CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
         <div className="bg-[#2663eb] rounded-[1rem] p-12 md:p-20 flex flex-col items-center text-center gap-10">
            <div className="space-y-4 max-w-2xl">
               <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Get Deadline Alerts</h2>
               <p className="text-white/80 font-medium text-lg">We'll send you a brief WhatsApp or Email 48 hours before any major tax deadline. Zero spam, purely functional.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
               <input 
                 type="email" 
                 placeholder="Your work email" 
                 className="flex-1 bg-white/10 border border-white/20 p-5 rounded-[1rem] text-white placeholder:text-white/60 focus:bg-white focus:text-[#0F172A] outline-none transition-all font-bold"
               />
               <button className="bg-[#0F172A] text-white px-10 py-5 rounded-[1rem] font-black hover:bg-slate-900 transition-all shadow-2xl">
                  Subscribe
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}

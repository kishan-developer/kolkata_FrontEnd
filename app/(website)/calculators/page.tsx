"use client";

import React, { useState } from 'react';
import {
   Calculator, Percent, TrendingUp, HandCoins,
   ArrowRight, Info, CheckCircle2, ChevronRight
} from 'lucide-react';
import Section_Banner from '../Components/Section_Banner';

export default function CalculatorsPage() {
   const [activeTab, setActiveTab] = useState("GST");

   return (
      <div className="pt-20 pb-24 min-h-screen bg-[#F8FAFC]">
         <Section_Banner
            title="Financial Calculators"
            paragraph="Accurate compliance and planning tools to help you estimate taxes, investments, and business costs with institutional precision."
         />

         {/* Hero Section */}
         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-20 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
               <h2 className="text-[#2663eb] font-black uppercase tracking-[0.2em] text-[10px]">Financial Tools</h2>
               <h1 className="text-4xl md:text-7xl font-black text-[#0F172A] leading-tight tracking-tighter">
                  Compliance <span className="text-[#2663eb]">&</span> Planning Tools.
               </h1>
            </div>
         </section>

         {/* Calculator Interface */}
         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div className="bg-white rounded-[1rem] shadow-2xl shadow-slate-200 overflow-hidden border border-slate-100 flex flex-col lg:flex-row">

               {/* Sidebar Tabs */}
               <div className="lg:w-1/4 bg-slate-50 p-8 border-r border-slate-100 space-y-3">
                  {["GST", "Income Tax", "SIP", "Loan EMI"].map((tab) => (
                     <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`w-full text-left px-6 py-4 rounded-[1rem] font-black transition-all flex items-center justify-between group ${activeTab === tab ? 'bg-[#0F172A] text-white shadow-xl' : 'text-slate-500 hover:bg-white hover:text-[#0F172A]'
                           }`}
                     >
                        {tab}
                        <ChevronRight size={18} className={`transition-transform ${activeTab === tab ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                     </button>
                  ))}

                  <div className="pt-10 mt-10 border-t border-slate-200">
                     <div className="bg-[#2663eb]/10 p-6 rounded-[1rem] space-y-4">
                        <p className="text-xs font-black text-[#2663eb] uppercase tracking-widest leading-loose">Need Expert Help?</p>
                        <p className="text-sm text-slate-600 font-medium leading-relaxed">Calculators are for estimation. For precise tax planning, talk to our CAs.</p>
                        <button className="text-[#0F172A] font-black text-sm flex items-center gap-2 group">
                           Book a call <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                     </div>
                  </div>
               </div>

               {/* Calculator Content */}
               <div className="lg:w-3/4 p-8 md:p-16">
                  {activeTab === "GST" && <GSTCalculator />}
                  {activeTab === "Income Tax" && <IncomeTaxCalculator />}
                  {activeTab === "SIP" && <SIPCalculator />}
                  {activeTab === "Loan EMI" && <EMICalculator />}
               </div>
            </div>
         </section>

         {/* Other Resources Callout */}
         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-[#0F172A] p-12 rounded-[1rem] text-white space-y-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                     <HandCoins size={120} />
                  </div>
                  <h3 className="text-3xl font-black leading-tight">Project Report for <br /> Business Loans?</h3>
                  <p className="text-slate-400 font-medium text-lg leading-relaxed">Get a professional CMA report and detailed project profile prepared by our experts for your bank loan application.</p>
                  <button className="bg-[#2663eb] text-white px-8 py-4 rounded-[1rem] font-black hover:bg-[#1d4ed8] transition-all flex items-center gap-2">
                     Request CMA Report <ArrowRight size={20} />
                  </button>
               </div>
               <div className="bg-white border border-slate-100 p-12 rounded-[1rem] space-y-6 shadow-sm">
                  <div className="w-16 h-16 bg-[#2663eb]/10 rounded-[1rem] flex items-center justify-center text-[#2663eb]">
                     <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-3xl font-black leading-tight text-[#0F172A]">Tax Calendar 2026</h3>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed">Never miss a compliance deadline again. Access our comprehensive tax and regulatory calendar.</p>
                  <a href="/resources/calendar" className="inline-block text-[#0F172A] font-black border-b-2 border-[#2663eb] pb-1 hover:text-[#2663eb] transition-all">
                     View Important Dates
                  </a>
               </div>
            </div>
         </section>
      </div>
   );
}

function GSTCalculator() {
   const [amount, setAmount] = useState<number>(1000);
   const [rate, setRate] = useState<number>(18);
   const [type, setType] = useState("exclusive");

   const gstAmount = type === "exclusive"
      ? (amount * rate) / 100
      : (amount * rate) / (100 + rate);

   const totalAmount = type === "exclusive" ? amount + gstAmount : amount;
   const netAmount = type === "exclusive" ? amount : amount - gstAmount;

   return (
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
         <div className="space-y-2">
            <h2 className="text-3xl font-black text-[#0F172A]">GST Calculator</h2>
            <p className="text-slate-500 font-medium italic text-sm">Compute Goods and Service Tax for Inclusive/Exclusive amounts.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
               <div className="space-y-4">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Initial Amount (₹)</label>
                  <input
                     type="number"
                     value={amount}
                     onChange={(e) => setAmount(Number(e.target.value))}
                     className="w-full bg-slate-50 border-2 border-slate-100 p-6 rounded-[1rem] focus:border-[#2663eb] focus:bg-white outline-none font-black text-2xl transition-all"
                  />
               </div>
               <div className="space-y-4">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">GST Rate (%)</label>
                  <select
                     value={rate}
                     onChange={(e) => setRate(Number(e.target.value))}
                     className="w-full bg-slate-50 border-2 border-slate-100 p-6 rounded-[1rem] focus:border-[#2663eb] outline-none font-black text-xl transition-all appearance-none cursor-pointer"
                  >
                     {[5, 12, 18, 28].map(r => <option key={r} value={r}>{r}%</option>)}
                  </select>
               </div>
               <div className="flex gap-4">
                  {["exclusive", "inclusive"].map(t => (
                     <button
                        key={t}
                        onClick={() => setType(t)}
                        className={`flex-1 py-4 rounded-[1rem] font-black text-sm uppercase transition-all ${type === t ? 'bg-[#2663eb] text-white shadow-lg' : 'bg-slate-100 text-slate-500'
                           }`}
                     >
                        GST {t}
                     </button>
                  ))}
               </div>
            </div>

            <div className="bg-[#0F172A] p-10 rounded-[1rem] text-white flex flex-col justify-between shadow-2xl">
               <div className="space-y-8">
                  <div className="flex justify-between items-center pb-6 border-b border-white/10">
                     <span className="text-slate-400 font-medium">Net Amount</span>
                     <span className="text-2xl font-black">₹{netAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between items-center pb-6 border-b border-white/10">
                     <span className="text-slate-400 font-medium">GST Amount ({rate}%)</span>
                     <span className="text-2xl font-black text-[#2663eb]">₹{gstAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="space-y-2 pt-4">
                     <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Total Price</p>
                     <p className="text-5xl font-black tracking-tighter text-white">₹{totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
                  </div>
               </div>
               <div className="pt-10 flex items-center gap-3 text-slate-500 text-xs font-medium">
                  <Info size={14} /> This is an estimate based on standard tax rates.
               </div>
            </div>
         </div>
      </div>
   );
}

function SIPCalculator() {
   return (
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
         <div className="space-y-2 text-center max-w-lg mx-auto">
            <h2 className="text-3xl font-black text-[#0F172A]">Investment Planner</h2>
            <p className="text-slate-500 font-medium">Calculate the future value of your Systematic Investment Plan (SIP).</p>
         </div>
         <div className="flex items-center justify-center p-20 bg-slate-50 rounded-[1rem] border-2 border-dashed border-slate-200">
            <div className="text-center space-y-4">
               <div className="w-16 h-16 bg-white rounded-[1rem] flex items-center justify-center mx-auto shadow-sm text-slate-400">
                  <TrendingUp size={32} />
               </div>
               <p className="text-slate-400 font-black uppercase tracking-widest text-xs">Calculator Under Development</p>
               <p className="text-slate-500 text-sm">We are fine-tuning the algorithms to give you precise wealth projections.</p>
            </div>
         </div>
      </div>
   );
}

function IncomeTaxCalculator() {
   return (
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
         <div className="space-y-2 text-center max-w-lg mx-auto">
            <h2 className="text-3xl font-black text-[#0F172A]">Tax Liability Estimator</h2>
            <p className="text-slate-500 font-medium">Compare Old vs New tax regimes for FY 2025-26.</p>
         </div>
         <div className="flex items-center justify-center p-20 bg-slate-50 rounded-[1rem] border-2 border-dashed border-slate-200">
            <div className="text-center space-y-4">
               <div className="w-16 h-16 bg-white rounded-[1rem] flex items-center justify-center mx-auto shadow-sm text-slate-400">
                  <Percent size={32} />
               </div>
               <p className="text-slate-400 font-black uppercase tracking-widest text-xs">Available Soon</p>
               <p className="text-slate-500 text-sm">Updated for the latest Union Budget 2025 provisions.</p>
            </div>
         </div>
      </div>
   );
}

function EMICalculator() {
   return (
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
         <div className="space-y-2 text-center max-w-lg mx-auto">
            <h2 className="text-3xl font-black text-[#0F172A]">Loan EMI Calculator</h2>
            <p className="text-slate-500 font-medium">Plan your business or personal loans with ease.</p>
         </div>
         <div className="flex items-center justify-center p-20 bg-slate-50 rounded-[1rem] border-2 border-dashed border-slate-200">
            <div className="text-center space-y-4">
               <div className="w-16 h-16 bg-white rounded-[1rem] flex items-center justify-center mx-auto shadow-sm text-slate-400">
                  <Calculator size={32} />
               </div>
               <p className="text-slate-400 font-black uppercase tracking-widest text-xs">Under Maintenance</p>
               <p className="text-slate-500 text-sm">Refining the EMI computation engine for more accurate amortization schedules.</p>
            </div>
         </div>
      </div>
   );
}

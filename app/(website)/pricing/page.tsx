import React from 'react';
import { Check, Info, ArrowRight, Star, ShieldCheck } from 'lucide-react';
import Section_Banner from '../Components/Section_Banner';

const PLANS = [
   {
      name: "Growth Retainer",
      price: "4,999",
      period: "/quarterly",
      description: "Ideal for startups and small proprietorships.",
      features: ["GST Filing (Monthly)", "TDS Compliance", "Annual Income Tax", "Basic Bookkeeping", "Email Support Desk"],
      popular: false,
      color: "bg-slate-50"
   },
   {
      name: "Enterprise Shield",
      price: "14,999",
      period: "/quarterly",
      description: "Comprehensive compliance for growing SMEs.",
      features: ["Statutory Audit Assist", "Internal Audit (Quarterly)", "ROC / MCA Filing", "Strategic Tax Planning", "Priority Partner Access"],
      popular: true,
      color: "bg-[#0F172A]"
   },
   {
      name: "Institutional Alpha",
      price: "49,999",
      period: "/quarterly",
      description: "Dedicated resources for large corporations.",
      features: ["On-site Accounting Support", "International Taxation", "Project Syndication Assist", "Monthly Board Reporting", "24/7 VIP Concierge"],
      popular: false,
      color: "bg-white"
   }
];

export default function PricingPage() {
   return (
      <div className="pt-20 pb-24 bg-white min-h-screen">
         <Section_Banner
            title="Fee Structure"
            paragraph="Transparent, performance-vetted fee structures tailored to your entity's operational scale and complexity."
         />

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center space-y-8 mb-24 mt-20 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
               <h2 className="text-[#2663eb] font-black tracking-[0.3em] uppercase text-[10px]">Investment Scale</h2>
               <h1 className="text-4xl md:text-8xl font-black text-[#0F172A] tracking-tighter leading-tight">Investment in <br /> <span className="text-[#2663eb]">Compliance</span>.</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               {PLANS.map((plan, i) => (
                  <div
                     key={i}
                     className={`relative p-12 rounded-[1rem] border border-slate-100 flex flex-col h-full transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_50px_100px_-20px_rgba(15,23,42,0.1)] ${plan.popular ? 'bg-[#0F172A] text-white shadow-2xl' : 'bg-white text-[#0F172A]'}`}
                  >
                     {plan.popular && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2663eb] text-white text-[10px] font-black px-6 py-2 rounded-[1rem] uppercase tracking-widest shadow-2xl flex items-center gap-2">
                           <Star size={10} className="fill-current" /> Executive Pick
                        </div>
                     )}

                     <div className="mb-10">
                        <h3 className="text-2xl font-black mb-3 tracking-tight">{plan.name}</h3>
                        <p className={`${plan.popular ? 'text-slate-400' : 'text-slate-500'} font-medium text-sm leading-relaxed`}>{plan.description}</p>
                     </div>

                     <div className="flex items-baseline gap-2 mb-10">
                        <span className="text-5xl font-black tracking-tighter">₹{plan.price}</span>
                        <span className={`${plan.popular ? 'text-slate-500' : 'text-slate-400'} text-lg font-bold uppercase tracking-widest text-[10px]`}>{plan.period}</span>
                     </div>

                     <div className="flex-grow space-y-5 mb-12">
                        {plan.features.map((feature, j) => (
                           <div key={j} className="flex items-center gap-4">
                              <div className={`w-6 h-6 rounded-[1rem] flex items-center justify-center ${plan.popular ? 'bg-[#2663eb]/20' : 'bg-slate-50'} flex-shrink-0`}>
                                 <Check size={14} className={plan.popular ? 'text-[#2663eb]' : 'text-[#0F172A]'} />
                              </div>
                              <span className="text-sm font-bold tracking-tight">{feature}</span>
                           </div>
                        ))}
                     </div>

                     <button className={`w-full py-5 rounded-[1rem] font-black tracking-widest uppercase text-xs transition-all shadow-xl ${plan.popular ? 'bg-[#2663eb] text-white hover:bg-[#1d4ed8]' : 'bg-[#0F172A] text-white hover:bg-slate-900'}`}>
                        Initiate Engagement
                     </button>
                  </div>
               ))}
            </div>

            {/* Custom Quotes */}
            <div className="mt-32">
               <div className="bg-[#0F172A] rounded-[1rem] p-12 md:p-20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2663eb]/5 rounded-[1rem] blur-[100px] -mr-64 -mt-64 group-hover:bg-[#2663eb]/10 transition-all duration-1000"></div>
                  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                     <div className="space-y-6 max-w-2xl text-center lg:text-left">
                        <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">Bespoke Audit & <br /> Advisory Mandates</h3>
                        <p className="text-slate-400 font-medium text-lg leading-relaxed">For large-scale institutional projects, IPO prep, or international cross-border compliance, we offer customized engagement models.</p>
                     </div>
                     <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
                        <a href="/contact" className="bg-[#2663eb] text-white px-10 py-5 rounded-[1rem] font-black text-lg flex items-center justify-center gap-3 hover:bg-[#1d4ed8] transition-all shadow-2xl shadow-[#2663eb]/20">
                           Request Formal Proposal <ArrowRight size={22} />
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            {/* Clarifications */}
            <div className="mt-32 max-w-4xl mx-auto space-y-16">
               <div className="flex flex-col items-center gap-4 text-center">
                  <div className="p-5 bg-slate-50 rounded-[1rem] text-[#2663eb] border border-slate-100 shadow-sm">
                     <ShieldCheck size={32} />
                  </div>
                  <h3 className="font-black text-[#0F172A] text-2xl tracking-tighter">Professional Transparency</h3>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                     { q: "Are the Professional Fees inclusive of Government Levies?", a: "No, all government filing fees, challans, and GST (18%) are billed at actuals in addition to the professional service fees mentioned." },
                     { q: "How do you handle Quarterly Retainership Payments?", a: "Retainership invoices are generated at the beginning of each quarter and are payable within 7 operational days to ensure uninterrupted service." },
                     { q: "Is there a flexibility to pivot between plans?", a: "Absolutely. As your business turnover or complexity scales, you can request an engagement review to pivot to a higher-tier service model." },
                     { q: "Security of Financial Documentation?", a: "Your data is protected by bank-level encryption (AES-256) and strict NDA protocols signed at the time of initial engagement initiation." }
                  ].map((faq, k) => (
                     <div key={k} className="p-10 bg-white rounded-[1rem] border border-slate-100 hover:border-[#2663eb]/30 hover:shadow-xl hover:shadow-slate-100 transition-all duration-500">
                        <h4 className="font-black text-[#0F172A] text-lg mb-4 tracking-tight leading-snug">{faq.q}</h4>
                        <p className="text-slate-500 font-medium text-sm leading-relaxed">{faq.a}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

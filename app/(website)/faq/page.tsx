"use client";

import React, { useState } from 'react';
import { Plus, Minus, Search, MessageCircle, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import Section_Banner from '../Components/Section_Banner';

const FAQS = [
  {
    category: "Institutional",
    questions: [
      {
        q: "What defines the firm's engagement threshold?",
        a: "We cater to statutory audit mandates, HNI tax advisory, and corporate compliance oversight. Our practice is built on the pillars of absolute transparency and CAG-empanelled standards."
      },
      {
        q: "How do we initiate a corporate mandate?",
        a: "Formal engagement begins with an initial technical consultation followed by a Scope of Work (SOW) draft. Upon mutual consensus, a formal mandate is signed under bank-level confidentiality protocols."
      }
    ]
  },
  {
    category: "Audit & Assurance",
    questions: [
      {
        q: "Is the firm CAG empanelled?",
        a: "Yes, we are a CAG-empanelled firm with eligibility for PSU audits and large-scale statutory mandates. We maintain a high score on the quality peer review index."
      },
      {
        q: "What is your approach to Internal Audits?",
        a: "Our internal audit vertical uses advanced automated reconciliation tools to identify leakage and ensure 100% compliance with internal control frameworks (ICOs)."
      }
    ]
  },
  {
    category: "Statutory Compliance",
    questions: [
      {
        q: "How do you handle multi-state GST reconciliation?",
        a: "We utilize a proprietary algorithmic engine that reconciles GSTR-2A/2B across all GSTINs in real-time, ensuring zero loss of Input Tax Credit (ITC)."
      },
      {
        q: "Timelines for Private Limited Incorporation?",
        a: "Typically, corporate formation is completed within 7-10 operational days, including digital signature procurement and Ministry of Corporate Affairs (MCA) liaison."
      }
    ]
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("Institutional");
  const [openIndex, setOpenIndex] = useState<string | null>("Institutional-0");

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="pt-20 pb-24 min-h-screen bg-white">
      <Section_Banner
        title="FAQ & Knowledge Base"
        paragraph="Clarifying the complex questions regarding statutory mandates, audit protocols, and corporate compliance."
      />

      {/* Search Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 mt-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-[#2663eb] font-black tracking-[0.3em] uppercase text-[10px]">Knowledge Base</h2>
          <h1 className="text-4xl md:text-8xl font-black text-[#0F172A] leading-tight tracking-tighter">
            Clarifying the <br /> <span className="text-[#2663eb]">Complex</span>.
          </h1>
          <div className="relative max-w-2xl mx-auto mt-16 group">
            <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none text-slate-300 group-focus-within:text-[#2663eb] transition-colors">
              <Search size={28} />
            </div>
            <input
              type="text"
              placeholder="Query our professional protocols..."
              className="w-full pl-20 pr-10 py-8 bg-slate-50 border-2 border-transparent rounded-[1rem] text-xl font-bold text-[#0F172A] focus:outline-none focus:border-[#2663eb] focus:bg-white transition-all shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-48">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Categories Sidebar */}
          <div className="lg:w-[35%] space-y-4">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10 pl-6">Professional Domains</h3>
            <div className="space-y-3">
              {FAQS.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`w-full text-left px-10 py-6 rounded-[1rem] font-black text-sm uppercase tracking-widest transition-all duration-500 flex items-center justify-between group ${activeCategory === cat.category
                    ? 'bg-[#0F172A] text-white shadow-3xl shadow-slate-300'
                    : 'bg-white border border-slate-100 text-slate-400 hover:border-[#2663eb]/30 hover:text-[#0F172A]'
                    }`}
                >
                  {cat.category}
                  <ArrowRight size={20} className={`text-[#2663eb] transition-all duration-500 ${activeCategory === cat.category ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:w-[65%] space-y-6">
            {FAQS.find(c => c.category === activeCategory)?.questions.map((faq, qIdx) => {
              const id = `${activeCategory}-${qIdx}`;
              const isOpen = openIndex === id;

              return (
                <div
                  key={qIdx}
                  className={`rounded-[1rem] transition-all duration-700 overflow-hidden border-2 ${isOpen ? 'border-[#2663eb]/30 bg-[#F8FAFC] shadow-2xl shadow-slate-200' : 'border-slate-50 bg-white hover:border-slate-100'
                    }`}
                >
                  <button
                    onClick={() => toggleFAQ(id)}
                    className="w-full text-left p-10 md:p-12 flex items-center justify-between gap-6"
                  >
                    <span className={`text-xl md:text-2xl font-black leading-tight tracking-tight ${isOpen ? 'text-[#0F172A]' : 'text-slate-400'}`}>
                      {faq.q}
                    </span>
                    <div className={`w-12 h-12 rounded-[1rem] flex items-center justify-center transition-all duration-700 flex-shrink-0 ${isOpen ? 'bg-[#2663eb] text-white shadow-xl' : 'bg-slate-50 text-slate-300'}`}>
                      {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-700 ease-in-out px-10 md:px-12 ${isOpen ? 'max-h-[500px] opacity-100 pb-12' : 'max-h-0 opacity-0 overflow-hidden'
                      }`}
                  >
                    <div className="text-slate-500 font-medium leading-relaxed text-lg border-t border-slate-200 pt-8 mt-2 italic">
                      "{faq.a}"
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F172A] rounded-[1rem] p-16 md:p-24 text-center text-white relative overflow-hidden group border border-white/10 shadow-3xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2663eb]/10 rounded-[1rem] blur-[100px] -mr-64 -mt-64 group-hover:bg-[#2663eb]/20 transition-all duration-1000"></div>
          <div className="relative z-10 space-y-12">
            <div className="flex justify-center -space-x-6 mb-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-20 h-20 rounded-[1rem] border-4 border-[#0F172A] bg-slate-800 overflow-hidden shadow-2xl relative">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 100}`} alt="Practice Lead" className="grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              ))}
              <div className="w-20 h-20 rounded-[1rem] border-4 border-[#0F172A] bg-[#2663eb] flex items-center justify-center font-black text-xs tracking-widest shadow-2xl">
                +8
              </div>
            </div>
            <h2 className="text-4xl md:text-7xl font-black leading-tight tracking-tighter">Seek Technical <br /> Advisory.</h2>
            <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
              Need specific clarity on a statutory notice or a complex corporate mandate? Our partners are on standby.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 pt-4">
              <button className="bg-[#2663eb] text-white px-12 py-6 rounded-[1rem] font-black text-lg hover:bg-[#1d4ed8] transition-all flex items-center justify-center gap-4 shadow-2xl shadow-[#2663eb]/20">
                <MessageCircle size={24} /> Practice Desk
              </button>
              <button className="bg-white/5 backdrop-blur-3xl border border-white/10 text-white px-12 py-6 rounded-[1rem] font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-4 shadow-2xl">
                <Phone size={24} className="text-[#2663eb]" /> Institutional Line
              </button>
            </div>
            <div className="pt-8 flex items-center justify-center gap-4">
              <ShieldCheck size={18} className="text-[#2663eb]" />
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Secured Institutional Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

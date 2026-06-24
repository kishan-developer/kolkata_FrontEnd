"use client";

import React, { useState } from 'react';
import { Target, Users, ShieldCheck, Award, CheckCircle2, Scale, Globe, TrendingUp, Quote, Star, ChevronDown, ChevronUp, Building2, FileCheck, ClipboardCheck, TrendingUp as TrendingIcon } from 'lucide-react';
import Section_Banner from '../Components/Section_Banner';
import { motion, AnimatePresence } from 'framer-motion';

const TESTIMONIALS = [
  {
    name: "Rohan Desai",
    role: "Founder, TechFlow AI",
    text: "VyaparSewa completely transformed our tax compliance process. Their strategic insights and digital-first approach saved us significantly during our Series A funding due diligence.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "CFO, Horizon Manufacturing",
    text: "The MCA compliance used to be a massive headache for our board. Now, it's just a streamlined monthly report we review. A brilliant, highly professional team of experts.",
    rating: 5
  },
  {
    name: "Vikram Mehta",
    role: "Director, Global Traders Ltd.",
    text: "A team of genuine experts. Their audit reports are detailed, transparent, and highly actionable. They don't just audit; they provide strategic financial foresight.",
    rating: 5
  }
];

const FAQS = [
  {
    q: "What makes VyaparSewa different from other CA firms?",
    a: "We blend decades of traditional financial mastery with a modern, digital-first approach. Our firm operates on strict SLAs, ensuring absolute transparency, zero hidden costs, and proactive strategic advisory rather than just reactive compliance."
  },
  {
    q: "Do you provide tailored services for early-stage startups?",
    a: "Yes, we have a dedicated Startup Desk. We assist with Startup India Registration, DPIIT recognition, angel tax exemptions, and establishing robust early-stage accounting frameworks to make you investor-ready."
  },
  {
    q: "How does your pricing and retainer structure work?",
    a: "We believe in complete professional transparency. Our services are offered on fixed-fee retainers or project-specific milestones. You will always know the exact investment required before we commence any mandate."
  },
  {
    q: "Are my financial documents and sensitive data secure?",
    a: "Absolutely. We employ bank-grade encryption protocols, secure cloud environments, and strict internal access controls. Data confidentiality is the cornerstone of our institutional integrity."
  },
  {
    q: "Do you handle cross-border taxation and FEMA compliance?",
    a: "Yes. Our global advisory team specializes in FDI (Foreign Direct Investment), ODI (Overseas Direct Investment), DTAA (Double Taxation Avoidance Agreement) optimization, and comprehensive FEMA reporting."
  },
  {
    q: "Can your team assist with resolving complex GST notices?",
    a: "Certainly. We have a specialized litigation wing that handles assessment proceedings, first and second appeals, and complex GST/Income Tax notices with a track record of highly favorable resolutions."
  },
  {
    q: "What is the typical onboarding process and timeline?",
    a: "Post our initial strategy call, we share a customized compliance matrix. Upon execution of the engagement letter, our digital onboarding takes less than 24 hours. A dedicated Account Manager is assigned immediately."
  }
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-20 pb-24 bg-white min-h-screen overflow-hidden">

      <Section_Banner
        title="About VyaparSewa"
        paragraph="Your trusted partners in financial growth. Discover the people, vision, and values driving our decade of excellence."
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-32 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
          <div className="lg:w-1/2 space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left-8 duration-700 text-center lg:text-left">
            <h2 className="text-[#2663eb] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-[8px] md:text-[10px]">About VyaparSewa</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] leading-[1.2] md:leading-[1.1] tracking-tighter">
              Your Digital Gateway to <span className="text-[#2663eb]">Precision Compliance</span>.
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-500 leading-relaxed font-medium">
              We integrate traditional professional values with modern digital efficiency to deliver seamless taxation, auditing, and corporate advisory solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-[1rem] border-4 border-white bg-slate-200 overflow-hidden shadow-lg">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 50}`} alt="Partner" />
                  </div>
                ))}
              </div>
              <p className="text-xs md:text-sm font-bold text-[#0F172A] text-center">Led by a panel of 50+ Expert CAs & CS</p>
            </div>
          </div>
          <div className="lg:w-1/2 w-[] relative animate-in fade-in zoom-in-95 duration-1000">
            <div className="absolute -inset-2 md:-inset-4 bg-[#2663eb]/10 rounded-[1rem] blur-3xl"></div>
            <div className="relative aspect-video rounded-[1rem] overflow-hidden shadow-2xl h-[250px] md:h-[350px]">
              <img src="/Home_Banner/B1.png" alt="Office" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#0F172A]/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-32">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-[#2663eb] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-[8px] md:text-[10px]">Our Core Pillars</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tighter">What We <span className="text-[#2663eb]">Deliver</span></h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Corporate & Startup Compliance",
              desc: "End-to-end management for MCA filings, business registrations, and statutory compliance, helping startups scale effortlessly.",
              icon: Building2,
              color: "blue"
            },
            {
              title: "Precision Tax Desk",
              desc: "Specialized filing and optimization framework for Salaried Professionals, Capital Gains Traders, and NRI Clients.",
              icon: FileCheck,
              color: "emerald"
            },
            {
              title: "Audit & Financial Assurance",
              desc: "Methodical statutory and internal audits designed to ensure absolute financial integrity and regulatory alignment.",
              icon: ClipboardCheck,
              color: "purple"
            },
            {
              title: "Strategic Advisory",
              desc: "Data-backed financial planning and legal drafting for complex appellate proceedings and tax structured solutions.",
              icon: TrendingIcon,
              color: "amber"
            }
          ].map((item, idx) => {
            const colorClasses = {
              blue: { bg: "bg-blue-50", icon: "text-blue-600", border: "hover:border-blue-200" },
              emerald: { bg: "bg-emerald-50", icon: "text-emerald-600", border: "hover:border-emerald-200" },
              purple: { bg: "bg-purple-50", icon: "text-purple-600", border: "hover:border-purple-200" },
              amber: { bg: "bg-amber-50", icon: "text-amber-600", border: "hover:border-amber-200" },
            };
            const colors = colorClasses[item.color as keyof typeof colorClasses];
            return (
              <div key={idx} className={`p-8 rounded-[1rem] bg-white shadow-xl shadow-slate-200/50 border border-slate-100 ${colors.border} transition-all duration-300 hover:-translate-y-2 group`}>
                <div className="flex items-start gap-5">
                  <div className={`p-4 rounded-[1rem] ${colors.bg} group-hover:bg-opacity-80 transition-colors shrink-0`}>
                    <item.icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-black text-[#0F172A] mb-3">{item.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-slate-50 py-16 md:py-32 mb-16 md:mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="bg-white p-8 md:p-16 rounded-[1rem] shadow-xl shadow-slate-200/50 border border-white space-y-6 md:space-y-8 group hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 text-[#2663eb] rounded-[1rem] flex items-center justify-center group-hover:bg-[#2663eb] group-hover:text-white transition-colors">
                <Target className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-[#0F172A]">Core Mission</h3>
              <p className="text-slate-500 font-medium leading-relaxed italic text-base md:text-lg line-clamp-4 group-hover:text-slate-600 transition-colors">
                "To democratize world-class financial advisory and regulatory mastery, ensuring every Indian enterprise is built on a foundation of absolute legal and financial certainty."
              </p>
            </div>
            <div className="bg-white p-8 md:p-16 rounded-[1rem] shadow-xl shadow-slate-200/50 border border-white space-y-6 md:space-y-8 group hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 text-[#2663eb] rounded-[1rem] flex items-center justify-center group-hover:bg-[#2663eb] group-hover:text-white transition-colors">
                <Globe className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-[#0F172A]">Global Vision</h3>
              <p className="text-slate-500 font-medium leading-relaxed italic text-base md:text-lg line-clamp-4 group-hover:text-slate-600 transition-colors">
                "To become the apex destination for cross-border taxation and global corporate compliance, Bridging the gap between Indian ambition and global regulatory standards."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Markers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 lg:gap-32">
          <div className="lg:w-1/2 space-y-8 md:space-y-12 w-full">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] leading-tight tracking-tighter">Experts Behind the <br /> <span className="text-[#2663eb]">Mastery</span>.</h2>
              <p className="text-slate-500 font-medium leading-relaxed text-base md:text-lg">
                Our firm is structured into specialized practice leads. This ensuring that whether it is a complex demerger or a routine GST filing, you get the highest tier of technical scrutiny.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 md:gap-12">
              {[
                { label: "CAG Empanelled", icon: <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#2663eb]" /> },
                { label: "FCA Vetted", icon: <Award className="w-5 h-5 md:w-6 md:h-6 text-[#2663eb]" /> },
                { label: "FCS Corporate Lead", icon: <Scale className="w-5 h-5 md:w-6 md:h-6 text-[#2663eb]" /> },
                { label: "DISA Certified", icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-[#2663eb]" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4 group">
                  <div className="p-2 md:p-3 bg-slate-50 rounded-[1rem] group-hover:bg-[#2663eb] group-hover:text-white transition-colors">{item.icon}</div>
                  <span className="font-black text-[#0F172A] text-[10px] md:text-xs lg:text-sm uppercase tracking-wider md:tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative w-full">
            <div className="bg-[#2663eb] rounded-[1rem] p-8 md:p-16 space-y-6 md:space-y-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 md:p-10 opacity-10 group-hover:scale-110 transition-transform duration-700 text-white">
                <TrendingUp className="w-20 h-20 md:w-[140px] md:h-[140px]" />
              </div>
              <div className="space-y-4 relative z-10">
                <p className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter">99.9%</p>
                <p className="text-[10px] md:text-xs font-black uppercase text-white tracking-[0.2em] md:tracking-[0.3em]">Compliance Success Rate</p>
              </div>
              <div className="space-y-6 md:space-y-8 relative z-10 text-white font-medium leading-relaxed">
                <p className="text-sm md:text-base">From helping startups raise Series A funding to defending complex tax assessments, our results speak through the success of our 2,500+ corporate clients.</p>
                <button className="bg-white text-[#2663eb] px-6 md:px-10 py-3 md:py-5 rounded-[1rem] font-black text-sm md:text-lg hover:bg-slate-50 transition-all w-full flex items-center justify-center gap-3">
                  View Practice Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-16 md:py-32 mb-16 md:mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 md:mb-20">
            <h2 className="text-[#2663eb] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-[8px] md:text-[10px]">Client Stories</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tighter">Voices of <span className="text-[#2663eb]">Trust</span></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-6 md:p-10 rounded-[1rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500">
                <div className="space-y-4 md:space-y-6">
                  <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#2663eb]/20 group-hover:text-[#2663eb] transition-colors" />
                  <p className="text-slate-600 font-medium leading-relaxed italic text-sm md:text-base lg:text-lg line-clamp-5">"{t.text}"</p>
                </div>
                <div className="pt-6 md:pt-8 mt-6 md:mt-8 border-t border-slate-50">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-[#2663eb] text-[#2663eb]" />
                    ))}
                  </div>
                  <p className="font-black text-[#0F172A] text-base md:text-lg">{t.name}</p>
                  <p className="text-xs md:text-sm font-bold text-slate-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-32">
        <div className="text-center space-y-4 mb-12 md:mb-20">
          <h2 className="text-[#2663eb] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-[8px] md:text-[10px]">Clarity First</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tighter">Frequently Asked <span className="text-[#2663eb]">Questions</span></h3>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-slate-100 rounded-[1rem] overflow-hidden transition-all duration-300 ${openFaq === index ? 'bg-white shadow-xl shadow-slate-200/50 ring-1 ring-[#2663eb]/20' : 'bg-slate-50 hover:bg-white hover:border-[#2663eb]/30'}`}
            >
              <button
                className="w-full text-left px-4 md:px-8 py-4 md:py-6 flex items-center justify-between"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-bold text-sm md:text-lg text-[#0F172A] pr-4 md:pr-8">{faq.q}</span>
                {openFaq === index ? (
                  <ChevronUp className="text-[#2663eb] flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
                ) : (
                  <ChevronDown className="text-slate-400 flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
                )}
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-4 md:px-8 pb-4 md:pb-6 pt-2 text-slate-500 font-medium leading-relaxed text-sm md:text-base border-t border-slate-50 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

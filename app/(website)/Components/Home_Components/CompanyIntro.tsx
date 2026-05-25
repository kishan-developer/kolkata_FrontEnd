"use client";

import { CheckCircle2 } from 'lucide-react';
import React from 'react'

export default function CompanyIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="space-y-4">
              <h2 className="text-[#2663eb] text-xs font-bold uppercase tracking-widest">Our Legacy</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">Partners in your <br /> Financial Growth.</h3>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                VyaparSewa & Co. provides technical mastery in Audit, Corporate Finance, and Taxation. We blend traditional trust with modern efficiency to empower your enterprise.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "CAG Empanelled Professional Practice",
                "Over 2,500 successful corporate mandates",
                "Dedicated FCE & FCS vetted advisory desk"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#2663eb]" />
                  <span className="text-sm font-semibold text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative animate-in fade-in zoom-in-95 duration-1000 delay-200">
            <div className="aspect-square rounded-[1rem] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200">
              <img
                src="/about.png"
                alt="Our Office"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 p-8 bg-slate-900 text-white rounded-[1rem] shadow-xl hidden md:block">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#2663eb]">Years Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

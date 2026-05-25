"use client";

import React from "react";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { url } from "inspector";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 bg-contain bg-right bg-no-repeat"
      style={{
        // backgroundImage: "url('/Home_Banner/B1.png')",
        backgroundImage: "url('/home_r.png')"
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-white/80"></div> */}

      {/* Decorative Shape */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-slate-100 skew-x-12 translate-x-1/4 -z-10"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* LEFT CONTENT */}
          <div className="lg:w-1/2 space-y-10">
            <div className="space-y-6">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2663eb]/5 rounded-[1rem] border border-[#2663eb]/10">
                <span className="text-[#2663eb] text-[10px] font-black uppercase tracking-[0.2em]">
                  CAG Empanelled Practice
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-[#2663eb] leading-[1.1] tracking-tighter">
                Refined Financial <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2663eb] to-indigo-400">Mastery</span>.
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-xl">
                Providing sophisticated Audit, Taxation, and Advisory services
                for the modern enterprise. We simplify the complex world of
                compliance with precision and integrity.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-5 bg-[#2663eb] text-white text-xs font-black uppercase tracking-widest rounded-[1rem] hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-[#2663eb]/20"
              >
                Start Consultation <ArrowRight size={20} />
              </Link>

              <button className="w-full sm:w-auto px-10 py-5 bg-white border border-gray-100 text-[#2663eb] text-xs font-black uppercase tracking-widest rounded-[1rem] hover:bg-gray-50 transition-all flex items-center justify-center gap-3 shadow-antigravity">
                <Play size={20} className="fill-[#2663eb]" />
                Watch Overview
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-1 px-2 bg-blue-50 rounded-[1rem]">
                  <CheckCircle2 size={16} className="text-[#2663eb]" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  100% Digital Workflow
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-1 px-2 bg-blue-50 rounded-[1rem]">
                  <CheckCircle2 size={16} className="text-[#2663eb]" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  24h Priority Support
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE (Optional but recommended) */}
          {/* <div className="lg:w-1/2 hidden lg:block">
            <img
              src="/Home_Banner/B1.png"
              alt="Hero"
              className="w-full h-auto object-contain rounded-[1rem] shadow-lg"
            />
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default Hero;
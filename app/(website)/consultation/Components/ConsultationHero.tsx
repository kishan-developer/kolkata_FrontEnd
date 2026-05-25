"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ConsultationHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#2663eb]/5 rounded-[1rem] blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-[#2663eb]/5 rounded-[1rem] blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-[#2663eb] uppercase bg-[#2663eb]/10 rounded-[1rem]">
              Expert Advisory
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
              Direct Access to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2663eb] to-[#1d4ed8]">
                Elite Strategists
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
              Book personalized 1-on-1 sessions with industry veterans to navigate complex financial, 
              legal, and strategic business landscapes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-[1rem] border border-slate-100">
              <div className="w-2 h-2 rounded-[1rem] bg-[#2663eb]" />
              <span className="text-sm font-medium text-slate-600">Real-time Availability</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-[1rem] border border-slate-100">
              <div className="w-2 h-2 rounded-[1rem] bg-[#2663eb]" />
              <span className="text-sm font-medium text-slate-600">Expert Vetted</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-[1rem] border border-slate-100">
              <div className="w-2 h-2 rounded-[1rem] bg-[#2663eb]" />
              <span className="text-sm font-medium text-slate-600">Secure Payments</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationHero;

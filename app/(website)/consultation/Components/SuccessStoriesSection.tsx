"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

export default function SuccessStoriesSection() {
  const cases = [
    {
      title: "Startup Tax Optimization",
      summary: "Helped a Series A tech startup optimize their tax structure, saving ₹45 lakhs annually.",
      before: "High tax liability due to poor structuring",
      after: "Optimized structure with ₹45L annual savings",
      feedback: "Their strategic tax planning transformed our financial health."
    },
    {
      title: "GST Compliance Overhaul",
      summary: "Resolved GST notices and implemented compliance framework for a manufacturing unit.",
      before: "Multiple GST notices and pending litigations",
      after: "100% compliant, zero pending issues",
      feedback: "Professional handling of complex GST matters."
    },
    {
      title: "IPO Advisory",
      summary: "Guided an SME through successful IPO process with proper documentation.",
      before: "Unprepared for public listing requirements",
      after: "Successfully listed on SME exchange",
      feedback: "End-to-end support made our IPO journey smooth."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cases.map((case_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-[1rem] border border-slate-100 shadow-sm p-6"
        >
          <div className="w-12 h-12 bg-[#2663eb]/10 rounded-[1rem] flex items-center justify-center text-[#2663eb] mb-4">
            <TrendingUp size={24} />
          </div>
          <h3 className="text-lg font-black text-slate-900 mb-3">{case_.title}</h3>
          <p className="text-slate-600 text-sm mb-4">{case_.summary}</p>
          <div className="space-y-2 mb-4">
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold text-xs shrink-0">Before:</span>
              <span className="text-slate-500 text-xs">{case_.before}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500 font-bold text-xs shrink-0">After:</span>
              <span className="text-slate-500 text-xs">{case_.after}</span>
            </div>
          </div>
          <p className="text-[#2663eb] text-xs font-medium italic">"{case_.feedback}"</p>
        </motion.div>
      ))}
    </div>
  );
}

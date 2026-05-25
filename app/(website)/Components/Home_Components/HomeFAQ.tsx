"use client";

import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

const HomeFAQ = () => {
    const FAQS = [
        { q: "What documents are required for GST Registration?", a: "Typically, PAN, Aadhaar, Proof of Business Address, and Bank details are required. Our office handles the documentation flow for you." },
        { q: "Do you provide online audit services?", a: "Yes, we have an institutional digital audit desk that allows for remote statutory and internal verifications." },
        { q: "What is the timeline for Pvt Ltd registration?", a: "Incorporation usually takes 7-10 operational days, provided all documentation is verified and active." }
    ];

    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-[#2663eb] text-xs font-bold uppercase tracking-widest">Support</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Quick Answers</h3>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, idx) => (
                        <div key={idx} className="border border-slate-100 rounded-[1rem] overflow-hidden shadow-sm">
                            <button 
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-bold text-slate-900 pr-6">{faq.q}</span>
                                {openIdx === idx ? <ChevronUp size={20} className="text-[#2663eb]" /> : <ChevronDown size={20} className="text-slate-400" />}
                            </button>
                            {openIdx === idx && (
                                <div className="p-6 pt-0 bg-slate-50 border-t border-slate-50 animate-in slide-in-from-top-2 duration-300">
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeFAQ;

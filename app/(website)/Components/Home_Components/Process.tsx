"use client";

import { MessageSquare, FileText, Settings, Rocket } from 'lucide-react';
import React from 'react';

const Process = () => {
    const STEPS = [
        { icon: <MessageSquare size={20} />, title: "Consultation", desc: "Expert assessment of your audit or compliance needs." },
        { icon: <FileText size={20} />, title: "Structuring", desc: "Drafting technical roadmaps and regulatory framework." },
        { icon: <Settings size={20} />, title: "Execution", desc: "Zero-error processing with status tracking." },
        { icon: <Rocket size={20} />, title: "Delivery", desc: "Final certification and audit report handovers." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-[#2663eb] text-xs font-bold uppercase tracking-widest">Methodology</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Our Engagement Model</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-slate-100 -z-10"></div>
                    {STEPS.map((step, idx) => (
                        <div key={idx} className="space-y-6 text-center group">
                            <div className="w-12 h-12 bg-white rounded-[1rem] flex items-center justify-center text-[#2663eb] shadow-lg border border-slate-100 mx-auto group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                                {step.icon}
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-lg font-bold text-slate-900 leading-tight">{step.title}</h4>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;

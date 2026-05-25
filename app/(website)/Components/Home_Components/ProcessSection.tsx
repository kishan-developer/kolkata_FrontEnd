"use client";

import React from "react";

const STEPS = [
    {
        number: "1",
        title: "Choose a Service",
        description: "Select from GST, ITR, company registration, trademark, or any other compliance service you need.",
    },
    {
        number: "2",
        title: "Upload Your Documents",
        description: "Securely upload all required documents through your personalised online dashboard — quick and simple.",
    },
    {
        number: "3",
        title: "Expert Processing",
        description: "Our qualified CA team verifies your data, handles all filings, and ensures full legal compliance on your behalf.",
    },
    {
        number: "4",
        title: "Download Your Output",
        description: "Receive your GST return, ITR acknowledgement, incorporation certificate, or trademark receipt — directly in your dashboard.",
    },
];

const ProcessSection = () => {
    return (
        <section className="py-24 bg-[#FDFCFB]">
            <div className="max-w-7xl mx-auto px-6 font-sans">

                {/* Header */}
                <div className="text-center mb-20 space-y-4">
                    <span className="inline-block px-4 py-1.5 bg-[#2663eb]/10 text-[#2663eb] text-[10px] font-bold uppercase tracking-[0.2em] rounded-[1rem]">
                        Simple Process
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight">
                        Get Started in Four Easy Steps
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-500 font-medium leading-relaxed">
                        Our streamlined process means you spend less time on paperwork and more time running your business.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-[#2663eb]/30 -z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                        {STEPS.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center space-y-6 group">

                                {/* Step Number Circle */}
                                <div className="w-24 h-24 rounded-[1rem] bg-[#0F172A] flex items-center justify-center text-white text-3xl font-bold shadow-xl transition-all duration-300 group-hover:bg-[#2663eb] group-hover:scale-110">
                                    {step.number}...
                                </div>

                                {/* Content */}
                                <div className="space-y-3 px-4">
                                    <h3 className="text-xl font-extrabold text-[#0F172A] tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProcessSection;

"use client";

import React from 'react';

const ClientMarquee = () => {
    const CLIENTS = ["HDFC BANK", "TATA", "RELIANCE", "INFOSYS", "ADANI", "MAHINDRA", "WIPRO", "HCL"];

    return (
        <section className="py-12 bg-white border-b border-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] text-center mb-8">Trusted by Institutional Partners</p>
                <div className="flex overflow-hidden group">
                    <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
                        {[...CLIENTS, ...CLIENTS].map((client, idx) => (
                            <span key={idx} className="text-2xl font-black text-slate-800 hover:text-[#2663eb] transition-colors cursor-default tracking-tighter uppercase mb-0">
                                {client}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default ClientMarquee;

"use client";

import { Layers, UserCheck, Shield, CheckCircle2 } from 'lucide-react';
import React from 'react';

const PlatformSection = () => {

    const PLATFORM_PRODUCTS = [
        {
            title: "Executive Audit Desk",
            description: "Institutional financial integrity thru Statutory & Internal verifications.",
            icon: <Layers size={20} />,
        },
        {
            title: "Tax Architecture",
            description: "Strategizing multi-state GST and international tax frameworks.",
            icon: <UserCheck size={20} />,
        },
        {
            title: "Venture Formation",
            description: "Seamless business setup and MCA lifecycle management.",
            icon: <Shield size={20} />,
        }
    ];

    return (
        <section className="py-24 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {PLATFORM_PRODUCTS.map((product, idx) => (
                        <div key={idx} className="flex gap-6">
                            <div className="w-10 h-10 rounded-[1rem] bg-slate-50 flex items-center justify-center text-[#2663eb] border border-slate-100 shrink-0">
                                {product.icon}
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold text-slate-900 tracking-tight">{product.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">{product.description}</p>
                                <div className="flex items-center gap-2 pt-2">
                                     <CheckCircle2 size={12} className="text-[#2663eb]" />
                                     <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Verified Process</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlatformSection;

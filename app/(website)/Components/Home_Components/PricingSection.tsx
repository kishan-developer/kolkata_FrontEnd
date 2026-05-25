"use client";

import React from "react";
import { FileText, UserCheck, Building2, ShieldCheck, ArrowRight } from "lucide-react";

const PACKAGES = [
    {
        title: "GST Return Filing",
        price: "499",
        unit: "/ filing onwards",
        description: "Monthly and quarterly GST return filings with complete reconciliation, error checks, and timely submission to avoid penalties.",
        icon: <FileText size={24} className="text-[#2663eb]" />,
        isPopular: false,
    },
    {
        title: "Income Tax Return",
        price: "699",
        unit: "/ filing onwards",
        description: "CA-assisted, accurate ITR filing for salaried employees, freelancers, business owners, and capital gains income.",
        icon: <UserCheck size={24} className="text-[#2663eb]" />,
        isPopular: true,
    },
    {
        title: "Company Registration",
        price: "6,999",
        unit: "/ registration onwards",
        description: "Register your Private Limited Company, LLP, or OPC with complete MCA documentation, DSC, DIN, and incorporation certificate.",
        icon: <Building2 size={24} className="text-[#2663eb]" />,
        isPopular: false,
    },
    {
        title: "Trademark Registration",
        price: "1,499",
        unit: "/ application onwards",
        description: "Protect your brand name and logo across India with a complete trademark filing, including government fees and expert legal assistance.",
        icon: <ShieldCheck size={24} className="text-[#2663eb]" />,
        isPopular: false,
    },
];

const PricingSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16 space-y-4">
                    <span className="inline-block px-4 py-1.5 bg-[#2663eb]/10 text-[#2663eb] text-[10px] font-bold uppercase tracking-[0.2em] rounded-[1rem]">
                        Pricing
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        Most Popular Services
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-500 font-medium leading-relaxed">
                        Affordable, CA-verified services with transparent pricing. No hidden
                        charges — just expert compliance at the best value.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PACKAGES.map((pkg, idx) => (
                        <div
                            key={idx}
                            className={`relative flex flex-col p-8 rounded-[1rem] border transition-all duration-300 ${pkg.isPopular
                                ? "border-[#2663eb] shadow-2xl shadow-[#2663eb]/10 ring-1 ring-[#2663eb]"
                                : "border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100"
                                }`}
                        >
                            {pkg.isPopular && (
                                <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1.5 bg-[#2663eb] text-white text-[10px] font-bold uppercase tracking-widest rounded-[1rem] shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            {/* Icon */}
                            <div className="w-12 h-12 bg-slate-50 rounded-[1rem] flex items-center justify-center mb-8">
                                {pkg.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-grow space-y-6">
                                <h3 className="text-xl font-bold text-slate-900">{pkg.title}</h3>

                                <div className="space-y-1">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-black text-slate-900">₹{pkg.price}</span>
                                        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{pkg.unit}</span>
                                    </div>
                                    <p className="text-[10px] font-bold text-[#2663eb] uppercase tracking-widest">onwards</p>
                                </div>

                                <p className="text-sm text-slate-500 leading-relaxed min-h-[5rem]">
                                    {pkg.description}
                                </p>
                            </div>

                            {/* Action */}
                            <button className={`mt-8 w-full py-4 rounded-[1rem] font-bold transition-all flex items-center justify-center gap-2 group ${pkg.isPopular
                                ? "bg-[#2663eb] text-white shadow-lg shadow-[#2663eb]/20 hover:bg-[#1d4ed8]"
                                : "bg-white border-2 border-slate-100 text-slate-600 hover:border-[#2663eb] hover:text-[#2663eb]"
                                }`}>
                                Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;

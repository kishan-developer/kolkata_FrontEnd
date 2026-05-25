"use client";

import React from "react";
import { ArrowRight, UserCheck, FileEdit, CloudLightning, Database } from "lucide-react";

interface ServiceCard {
    title: string;
    description: string;
    icon: React.ReactNode;
    iconBg: string;
    iconColor: string;
}

const SERVICES: ServiceCard[] = [
    {
        title: "Self ITR Filing",
        description: "ITR filing for every tax situation",
        icon: <FileEdit size={24} />,
        iconBg: "bg-blue-50",
        iconColor: "text-[#2663eb]"
    },
    {
        title: "Expert Filing",
        description: "ITR filed by India's top Tax Experts",
        icon: <UserCheck size={24} />,
        iconBg: "bg-emerald-50",
        iconColor: "text-[#2663eb]"
    },
    {
        title: "Taxcloud",
        description: "ITR filing software for Tax Experts",
        icon: <CloudLightning size={24} />,
        iconBg: "bg-blue-50",
        iconColor: "text-[#2663eb]"
    },
    {
        title: "GST software",
        description: "G1-G9 filings made 3x faster",
        icon: <Database size={24} />,
        iconBg: "bg-emerald-50",
        iconColor: "text-[#2663eb]"
    }
];

const BRANDS = ["SWIGGY", "MYNTRA", "ZOMATO", "FLIPKART", "APOLLO", "BOSCH"];

const ServicesShowcase = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center lg:text-left mb-12 sm:mb-20 space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-[#0F172A] leading-[1.1] tracking-tighter max-w-4xl">
                        India's largest tax and financial services platform
                    </h2>
                    <p className="text-xl text-slate-400 font-medium tracking-tight">
                        Explore our wide range of software solutions
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-24">
                    {SERVICES.map((service, idx) => (
                        <div
                            key={idx}
                            className="p-4 md:p-8 rounded-[1rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 group cursor-pointer"
                        >
                            <div className={`w-14 h-14 ${service.iconBg} ${service.iconColor} rounded-[1rem] flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-black text-[#0F172A] mb-4 group-hover:text-[#2663eb] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 font-bold text-sm mb-10 leading-relaxed">
                                {service.description}
                            </p>
                            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0F172A] group-hover:gap-4 transition-all">
                                Know more <ArrowRight size={14} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Brands Trust Bar */}
                <div className="pt-10 border-t border-slate-100">
                    <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-10">
                        Trusted by your favorite brands
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20  hover:grayscale-0 transition-all duration-700">
                        {BRANDS.map((brand, idx) => (
                            <span key={idx} className="text-xl md:text-2xl font-black  text-black">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServicesShowcase;

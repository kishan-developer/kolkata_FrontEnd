"use client";

import { FileSearch, Landmark, Scale, Stamp, ChevronRight, ArrowRight, MonitorCog } from 'lucide-react';
import React, { ReactNode } from 'react'
import Link from 'next/link';

export default function ServicesGrid() {

    interface Service {
        title: string;
        description: string;
        icon: ReactNode;
        link: string;
    }

    const SERVICES: Service[] = [
        {
            title: "Individual Income Tax (ITR) Filing",
            description: "Strategic planning for Income Tax and GST to ensure Savings.",
            icon: <MonitorCog className="w-6 h-6" />,
            link: "/services"
        },
        {
            title: "GST Compliance",
            description: "Financial integrity through Statutory and Internal Audits.",
            icon: <FileSearch className="w-6 h-6" />,
            link: "/services"
        },
        {
            title: "Startup Launchpad",
            description: "Navigating ROC and legal frameworks for business setup.",
            icon: <Scale className="w-6 h-6" />,
            link: "/services"
        },
        {
            title: "Annual ROC & Corporate Compliance",
            description: "Growth with Project Reports and Strategic CFO services.",
            icon: <Stamp className="w-6 h-6" />,
            link: "/services"
        }
    ];

    return (
        <section id="services" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-3">
                        <h2 className="text-[#2663eb] text-xs font-bold uppercase tracking-widest">Our Expertise</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Core Specializations</h3>
                    </div>
                    <Link href="/services" className="text-sm font-bold text-[#2663eb] hover:text-slate-900 transition-colors flex items-center gap-2">
                        View all services <ChevronRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES.map((service, index) => (
                        <Link
                            key={index}
                            href={service.link}
                            className="group p-8 rounded-[1rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-white text-slate-900 rounded-[1rem] flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                            <p className="text-sm text-slate-500 mb-6 leading-relaxed font-medium">{service.description}</p>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-[#2663eb] flex items-center gap-2">
                                Learn More <ArrowRight size={14} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

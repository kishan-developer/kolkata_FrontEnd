"use client";

import React from "react";
import {
    ArrowRight,
    Landmark,
    FileSearch,
    Building2,
    ShieldCheck
} from "lucide-react";

const services = [
    {
        title: "GST Services",
        icon: <Landmark className="w-8 h-8 text-[#2663eb]" />,
        items: [
            "GST Registration",
            "GST Return Filing",
            "GST Amendment",
            "GST Reconciliation",
        ],
        linkText: "Explore GST Services",
        link: "#",
    },
    {
        title: "Income Tax",
        icon: <FileSearch className="w-8 h-8 text-[#2663eb]" />,
        items: ["ITR Filing", "TDS Filing", "Tax Planning", "Accounting Services"],
        linkText: "Explore Income Tax Services",
        link: "#",
    },
    {
        title: "Company Registration",
        icon: <Building2 className="w-8 h-8 text-[#2663eb]" />,
        items: [
            "Pvt Ltd Registration",
            "LLP / OPC Setup",
            "Annual Compliance",
            "Director KYC",
        ],
        linkText: "Start Your Company Today",
        link: "#",
    },
    {
        title: "Trademark Services",
        icon: <ShieldCheck className="w-8 h-8 text-[#2663eb]" />,
        items: [
            "Wordmark Registration",
            "Logo Registration",
            "Trademark Objection Reply",
            "Trademark Renewal",
        ],
        linkText: "Protect Your Brand",
        link: "#",
    },
];

export default function Services() {
    return (
        <section className="relative py-32 bg-white bg-cover bg-center bg-fixed min-h-screen flex flex-col justify-center"
        // style={{
        //     backgroundImage: "url('/Home_Banner/p1.png')",
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //     backgroundRepeat: "no-repeat",
        // }}
        >


            <div className="text-center mb-14 ">
                <span className="px-4 py-1 bg-[#2663eb]/10 text-[#2663eb] text-sm font-semibold rounded-[1rem]">
                    OUR SERVICES
                </span>

                <h2 className="mt-8 text-4xl md:text-6xl font-black text-[#0F172A] leading-tight tracking-tighter">
                    Complete Compliance Solutions <br /> Under One <span className="text-[#2663eb]">Roof</span>
                </h2>

                <p className="mt-6 text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                    From GST registration to trademark protection — explore expert
                    services designed to keep your business fully compliant and secure.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
                {services.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-[1rem] shadow-sm border border-slate-100 p-10 hover:shadow-2xl hover:shadow-[#2663eb]/10 transition-all duration-500 group"
                    >
                        {/* Icon */}
                        <div className="mb-6">
                            <div className="w-16 h-16 bg-slate-50 rounded-[1rem] flex items-center justify-center group-hover:bg-[#0A2342] transition-colors duration-500">
                                <div className="group-hover:text-white transition-colors duration-500">
                                    {card.icon}
                                </div>
                            </div>
                        </div>

                        <h3 className="text-lg font-bold text-[#0A2342] mb-4">
                            {card.title}
                        </h3>

                        <ul className="space-y-2 mb-6">
                            {card.items.map((item, i) => (
                                <li
                                    key={i}
                                    className="text-slate-600 text-sm flex items-center gap-2"
                                >
                                    <span className="h-2 w-2 bg-[#2663eb] rounded-[1rem]"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a
                            href={card.link}
                            className="text-[#2663eb] font-semibold text-sm flex items-center gap-1 hover:text-[#2663eb]/80"
                        >
                            {card.linkText} <ArrowRight size={16} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
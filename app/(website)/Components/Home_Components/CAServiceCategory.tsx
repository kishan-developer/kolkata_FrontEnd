"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ServiceType {
    id: string;
    title: string;
    image: string;
    description: string;
}

const SERVICES: ServiceType[] = [
    {
        id: "01",
        title: "Income Tax Filing",
        image: "/services/income-tax.jpg",
        description:
            "Accurate and seamless tax filing with expert CA oversight and complete compliance.",
    },
    {
        id: "02",
        title: "GST Registration & Returns",
        image: "/services/gst.jpg",
        description:
            "Fast GST registration, monthly/quarterly return filing and end-to-end compliance.",
    },
    {
        id: "03",
        title: "Company Registration",
        image: "/services/company-reg.jpg",
        description:
            "Private Limited, LLP, OPC and MSME registration with full documentation.",
    },
    {
        id: "04",
        title: "Accounting & Bookkeeping",
        image: "/services/accounting.jpg",
        description:
            "Monthly bookkeeping, financial statements and audit-ready reports.",
    },
    {
        id: "05",
        title: "Audit & Assurance",
        image: "/services/audit.jpg",
        description:
            "Statutory audit, internal audit and financial compliance audit for businesses.",
    },
    {
        id: "06",
        title: "Trademark Registration",
        image: "/services/trademark.jpg",
        description:
            "Trademark search, application, documentation and lifetime protection guidance.",
    },
];

export default function CAServiceCategory() {
    const [active, setActive] = useState<number>(5); // default selected service

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 xl:px-0">

                {/* Heading Section */}
                <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Our Professional <span className="text-[#2663eb]">CA Services</span>
                    </h2>

                    <p className="max-w-xl text-slate-500 text-sm md:text-base">
                        We provide complete taxation, compliance, and advisory services to
                        individuals, startups, and enterprises with guaranteed accuracy and
                        fast execution.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* LEFT - CATEGORY LIST */}
                    <div className="space-y-4">
                        {SERVICES.map((service, index) => (
                            <div
                                key={service.id}
                                onClick={() => setActive(index)}
                                className={`relative cursor-pointer transition-all rounded-[1rem] flex items-center p-6 
                  ${active === index
                                        ? "bg-gradient-to-r from-[#2663eb] to-[#C0A080] text-white shadow-lg"
                                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                    }`}
                            >
                                <div
                                    className={`w-10 h-10 flex items-center justify-center rounded-[1rem] text-sm font-bold 
                    ${active === index ? "bg-white text-[#2663eb]" : "bg-white"}
                  `}
                                >
                                    {service.id}
                                </div>
                                <span className="ml-4 font-semibold text-lg">{service.title}</span>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT - IMAGE + CONTENT */}
                    <div className="relative rounded-[1rem] overflow-hidden shadow-xl">
                        <img
                            src={SERVICES[active].image}
                            alt={SERVICES[active].title}
                            width={1000}
                            height={600}
                            className="w-full h-[450px] object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40"></div>

                        {/* Text Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <h3 className="text-3xl font-bold mb-4">
                                {SERVICES[active].title}
                            </h3>

                            <p className="text-sm opacity-90 mb-4 max-w-lg">
                                {SERVICES[active].description}
                            </p>

                            <button className="inline-flex items-center gap-2 text-[#FFDFA9] font-semibold hover:underline">
                                More About <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
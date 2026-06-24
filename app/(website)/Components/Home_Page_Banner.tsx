"use client";

import { useState } from "react";


import Image from "next/image";
import {
    Building2,
    FileText,
    ShieldCheck,
    Clock3,
    IndianRupee,
    BadgeCheck,
} from "lucide-react";
 
const services = [
    {
        title: "Business Registration",
        description: "Start your company with complete legal compliance.",
        button: "Register",
        url: "/services#registrations",
        icon: Building2,
        bg: "from-amber-500 to-orange-500",
        lightBg: "bg-amber-50",
        iconColor: "text-amber-600",
    },
    {
        title: "Income Tax Filing",
        description: "File returns accurately and maximize tax savings.",
        button: "File Now",
        url : "/services#income-tax",
        icon: FileText,
        bg: "from-emerald-500 to-green-600",
        lightBg: "bg-green-50",
        iconColor: "text-green-600",
    },
    {
        title: "GST Return Filing",
        description: "Fast and compliant GST filing for businesses.",
        button: "File Now",
        url: "/services#gst",
        icon: FileText,
        bg: "from-blue-500 to-indigo-600",
        lightBg: "bg-blue-50",
        iconColor: "text-blue-600",
    },
    {
        title: "Trademark Registration",
        description: "Protect your brand identity with trademark registration.",
        button: "Register",
        url: "/services#trademark",
        icon: ShieldCheck,
        bg: "from-purple-500 to-violet-600",
        lightBg: "bg-purple-50",
        iconColor: "text-purple-600",
    },
];


const features = [
    {
        title: "100% Secure",
        desc: "Your Data Is Safe",
        icon: ShieldCheck,
    },
    {
        title: "Expert CA Team",
        desc: "Experienced Professionals",
        icon: BadgeCheck,
    },
    {
        title: "Timely Filing",
        desc: "On-time, Everytime",
        icon: Clock3,
    },
    {
        title: "Maximum Refund",
        desc: "Legally Entitled Refund",
        icon: IndianRupee,
    },
];

export default function Home_Page_Banner() {

const [flippedCard, setFlippedCard] = useState<number | null>(null);

    return (
        <section className="bg-gradient-to-b from-white to-slate-50 overflow-hidden h-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30 lg:py-30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center  ">
                    {/* LEFT */}
                    <div> 
                        {/* Heading */}
                        <div className="mt-0">
                            <p className="uppercase tracking-[4px] text-amber-600 font-medium text-sm">
                                Trusted CA Services
                            </p>

                            <h1 className="mt-2 text-4xl md:text-4xl xl:text-6xl font-bold leading-tight text-[#0B2A5B]">
                                Expert Tax Filing & Strategic Planning.
                            </h1>

                            <div className="w-20 h-1 bg-amber-500 rounded-full mt-2" />

                            <p className="mt-2 text-lg text-slate-600 max-w-xl leading-relaxed">
                                Ensure 100% compliance and get the maximum refund you are legally entitled to.
                            </p>
                        </div>


                        {/* Services */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mt-4">
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                const isFlipped = flippedCard === index;

                                return (
                                    <div
                                        key={index}
                                        className="h-[180px] sm:h-[200px] md:h-[200px]"
                                        style={{ perspective: '1000px' }}
                                        onClick={() =>
                                            setFlippedCard(isFlipped ? null : index)
                                        }
                                    >
                                        <div
                                            className="relative h-full w-full cursor-pointer transition-all duration-700"
                                            style={{
                                                transformStyle: 'preserve-3d',
                                                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                                            }}
                                        >
                                            {/* Front */}
                                            <div
                                                className="absolute inset-0 rounded-2xl border border-slate-200 bg-white px-3 py-3 sm:px-4 sm:py-4 shadow-sm hover:shadow-xl transition-all"
                                                style={{ backfaceVisibility: 'hidden' }}
                                            >
                                                <div
                                                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${service.lightBg} flex items-center justify-center`}
                                                >
                                                    <Icon
                                                        className={`h-6 w-6 sm:h-7 sm:w-7 ${service.iconColor}`}
                                                    />
                                                </div>

                                                <h3 className="mt-2 sm:mt-3 text-sm sm:text-md font-semibold text-slate-900 line-clamp-2">
                                                    {service.title}
                                                </h3>

                                                <div className="mt-auto pt-2 sm:pt-4">
                                                    <a
                                                        href={service.url}
                                                        target="_blank"
                                                        className={`bg-gradient-to-r ${service.bg} text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium`}
                                                    >
                                                        {service.button}
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Back */}
                                            <div
                                                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.bg} p-3 sm:p-4 text-white flex flex-col justify-center`}
                                                style={{
                                                    backfaceVisibility: 'hidden',
                                                    transform: 'rotateY(180deg)'
                                                }}
                                            >
                                                <h3 className="text-sm sm:text-[16px] font-bold line-clamp-2">
                                                    {service.title}
                                                </h3>

                                                <p className="my-2 sm:my-3 text-xs sm:text-sm leading-4 sm:leading-5 text-white/90 line-clamp-3">
                                                    {service.description}
                                                </p>

                                                <a
                                                    href={service.url}
                                                    target="_blank"
                                                    className="mb-1 sm:mb-2 bg-white text-xs sm:text-sm text-slate-900 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 font-medium"
                                                >
                                                    Learn More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative rounded-lg w-auto">
                        <div className="relative h-[400px] sm:h-[500px] rounded-lg lg:h-[500px] flex items-center justify-center">
                            <img
                                src="/Home_Banner/new.png"
                                alt="CA Expert"
                               
                                
                                className="object-contain rounded-lg w-full h-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Feature Bar */}
                <div className="mt-10 rounded-2xl overflow-hidden bg-[#0B2A5B]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((item, index) => {
                            const Icon = item.icon;
                            const isLastItem = index === features.length - 1;

                            return (
                                <div
                                    key={index}
                                    className={`flex items-center gap-3 sm:gap-4 p-4 sm:p-6 border-white/10 border-b sm:border-b-0 ${!isLastItem ? 'sm:border-r' : ''}`}
                                >
                                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400 flex-shrink-0" />

                                    <div>
                                        <h4 className="text-white font-semibold text-sm sm:text-base">
                                            {item.title}
                                        </h4>

                                        <p className="text-blue-100 text-xs sm:text-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Trusted Brands */}
                <div className="mt-2 text-center">
                    <h3 className="text-2xl font-bold text-slate-900">
                        Trusted by
                        <span className="text-blue-700"> 5000+ </span>
                        Businesses & Individuals
                    </h3>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {[
                            "TATA",
                            "Infosys",
                            "Wipro",
                            "HDFC",
                            "ICICI",
                            "Airtel",
                            "Bajaj",
                            "Flipkart",
                        ].map((brand) => (
                            <div
                                key={brand}
                                className="px-8 py-4 rounded-xl bg-white border border-slate-200 shadow-sm font-semibold text-slate-700"
                            >
                                {brand}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
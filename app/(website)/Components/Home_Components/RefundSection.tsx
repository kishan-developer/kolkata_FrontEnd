"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const RefundSection = () => {
    const router = useRouter();

    const handleAction = (service: string) => {
        router.push(`/services/request?service=${encodeURIComponent(service)}`);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section className="pt-30 pb-10 lg:py-30 min-h-screen bg-blue-50 overflow-hidden flex items-center">
            <div className="max-w-8xl mx-auto px-2 lg:px-8">
                <motion.div
                    className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >

                    {/* Content Column */}
                    <motion.div className="flex-1 space-y-2 md:space-y-6" variants={itemVariants}>

                        <div className="space-y-2">
                            {/* Stat Badge */}
                            <div className="inline-flex items-center justify-center gap-2 px-2 py-2 bg-white rounded-[1rem] shadow-sm border border-blue-50">
                                <span className="text-[#2663eb] font-black tracking-tighter">₹1766.69 Cr</span>
                                <span className="text-slate-500 font-bold text-xs md:text-sm tracking-tight">Refund processed last year</span>
                            </div>

                            {/* Heading */}
                            <h2 className="text-3xl sm:text-4xl md:text-7xl font-semibold  text-[#0F172A] leading-[1.1] tracking-tighter">
                                {/* Get Maximum <br /> Tax Refund */}
                                Expert Tax Filing & Strategic Planning.
                            </h2>
                            <p>
                                Ensure 100% compliance and get the maximum refund you are legally entitled to.
                            </p>
                        </div>

                        {/* Cards Container */} 
                        <div className="grid grid-cols-4 gap-2 md:gap-3">

                            {[
                                {
                                    title: "New Business Registration",
                                    action: "Register Now",
                                    image: "/services/business-registration.jpg",
                                    desc: "End-to-end assistance in choosing the right business structure. Preparation and filing of all mandatory incorporation documents."
                                },
                                {
                                    title: "ITR Filing",
                                    action: "File Now",
                                    image: "/services/itr-filing.jpg",
                                    desc: "Accurate preparation of your Income Tax Return. Review of income, deductions, and tax-saving options. On-time filing to avoid penalties."
                                },
                                {
                                    title: "GST Return Filing",
                                    action: "File Now",
                                    image: "/services/gst-filing.jpg",
                                    desc: "Monthly/quarterly GST return preparation and submission. Reconciliation of sales, purchases, and input tax credit."
                                },
                                {
                                    title: "Trademark Registration",
                                    action: "Register Now",
                                    image: "/services/trademark.jpg",
                                    desc: "Search and verification of trademark availability. Drafting and filing of trademark application. Monitoring and handling objections."
                                }
                            ].map((service, idx) => (
                                <div key={idx} className="group relative h-50 md:h-50 w-full rounded-[1rem] overflow-hidden shadow-xl shadow-blue-900/5 border border-slate-100 cursor-pointer">
                                    {/* Background Image */}
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%2364748b'%3EService Image%3C/text%3E%3C/svg%3E";
                                        }}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                    {/* Content */}
                                    <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-xs md:text-sm font-black text-white leading-tight">{service.title}</h3>
                                        </div>
                                        <button
                                            onClick={() => handleAction(service.title)}
                                            className="w-full py-2 md:py-3 bg-[#2663eb] hover:bg-[#1d4ed8] text-white rounded-[1rem] font-black text-[10px] md:text-xs transition-all shadow-lg flex items-center justify-center gap-1 md:gap-2 group/btn"
                                        >
                                            {service.action} <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </motion.div>

                    {/* Image Column */}
                    <motion.div className="flex-1 relative" variants={itemVariants}>
                        <div className="relative z-10 rounded-[1rem] overflow-hidden shadow-2xl">
                            <img
                                // src="/b.png"
                                src="/Home_B_3.jpeg"
                                alt="Get Maximum Tax Refund"
                                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        {/* Decorative circles */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-100 rounded-[1rem] blur-3xl opacity-50 -z-10"></div>
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-100 rounded-[1rem] blur-3xl opacity-50 -z-10"></div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default RefundSection;

"use client";

import React from "react";
import { ArrowRight, Building2, FileCheck, Receipt, ShieldCheck } from "lucide-react";
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
        <section className="pt-30 pb-10 lg:py-40 min-h-screen bg-blue-50 overflow-hidden flex items-center">
            <div className="max-w-7xl mx-auto px-2 lg:px-8">
                <motion.div
                    className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >

                    {/* Content Column */}
                    <motion.div className="flex-1 space-y-4 md:space-y-10" variants={itemVariants}>

                        <div className="space-y-6">
                            {/* Stat Badge */}
                            <div className="inline-flex items-center justify-center gap-2 px-2 py-3 bg-white rounded-[1rem] shadow-sm border border-blue-50">
                                <span className="text-[#2663eb] font-black tracking-tighter">₹1766.69 Cr</span>
                                <span className="text-slate-500 font-bold text-xs md:text-sm tracking-tight">Refund processed last year</span>
                            </div>

                            {/* Heading */}
                            <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-[#0F172A] leading-[1.1] tracking-tighter">
                                {/* Get Maximum <br /> Tax Refund */}
                                Expert Tax Filing & Strategic Planning.
                            </h2>
                            <p>
                                Ensure 100% compliance and get the maximum refund you are legally entitled to.
                            </p>
                        </div>

                        {/* Cards Container */}
                        <div className="grid grid-cols-2 gap-3 md:gap-5">

                            {[
                                {
                                    title: "New Business Registration",
                                    icon: Building2,
                                    action: "Register Now",
                                    iconBg: "bg-amber-50",
                                    iconColor: "text-amber-500",
                                    desc: "End-to-end assistance in choosing the right business structure. Preparation and filing of all mandatory incorporation documents. Guidance on compliance, licenses, and initial legal setup."
                                },
                                {
                                    title: "ITR Filing",
                                    icon: FileCheck,
                                    action: "File Now",
                                    iconBg: "bg-emerald-50",
                                    iconColor: "text-emerald-500",
                                    desc: "Accurate preparation of your Income Tax Return. Review of income, deductions, and tax-saving options. On-time filing to avoid penalties and ensure compliance."
                                },
                                {
                                    title: "GST Return Filing",
                                    icon: Receipt,
                                    action: "File Now",
                                    iconBg: "bg-blue-50",
                                    iconColor: "text-blue-500",
                                    desc: "Monthly/quarterly GST return preparation and submission. Reconciliation of sales, purchases, and input tax credit. Error-free filing to maintain smooth GST compliance."
                                },
                                {
                                    title: "Trademark Registration",
                                    icon: ShieldCheck,
                                    action: "Register Now",
                                    iconBg: "bg-purple-50",
                                    iconColor: "text-purple-500",
                                    desc: "Search and verification of trademark availability. Drafting and filing of trademark application. Monitoring and handling objections until registration."
                                }
                            ].map((service, idx) => (
                                <div key={idx} className="group [perspective:1000px]">
                                    <div className="relative  h-50 md:h-50 w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                                        {/* Front */}
                                        <div className="absolute inset-0 bg-white p-3 md:p-5 rounded-[1rem] shadow-xl shadow-blue-900/5 border border-slate-100 [backface-visibility:hidden] flex flex-col">
                                            <div className={`w-10 h-10 md:w-12 md:h-12 ${service.iconBg} rounded-[1rem] flex items-center justify-center mb-3 md:mb-4`}>
                                                <service.icon className={service.iconColor} size={22} />
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between">
                                                <h3 className="text-xs md:text-sm font-black text-[#0F172A] leading-tight">{service.title}</h3>
                                                <button
                                                    onClick={() => handleAction(service.title)}
                                                    className="w-full py-2 md:py-3 bg-[#2663eb] text-white rounded-[1rem] font-black text-[10px] md:text-xs hover:bg-[#1d4ed8] transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-1 md:gap-2 group/btn mt-2"
                                                >
                                                    {service.action} <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Back */}
                                        <div className="absolute inset-0 bg-[#2663eb] p-3 md:px-4  rounded-[1rem] shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">
                                            <h3 className="text-xs md:text-sm font-black text-white mb-2 md:mb-3">{service.title}</h3>
                                            <p className="text-white/80 text-[10px] md:text-xs leading-relaxed font-medium">{service.desc}</p>
                                            <button
                                                onClick={() => handleAction(service.title)}
                                                className="w-full py-2 md:py-3 mt-3 md:mt-4 bg-white text-[#2663eb] rounded-[1rem] font-black text-[10px] md:text-xs hover:bg-slate-100 transition-all shadow-lg flex items-center justify-center gap-1 md:gap-2 group/btn"
                                            >
                                                {service.action} <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                            </button>
                                        </div>

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

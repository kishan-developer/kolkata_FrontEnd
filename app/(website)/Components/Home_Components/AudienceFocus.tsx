"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AUDIENCES = [
    {
        title: "For Individuals",
        image: "/ill_individuals.png",
        link: "/services/individuals"
    },
    {
        title: "For GST Experts",
        image: "/ill_experts.png",
        link: "/services/experts"
    },
    {
        title: "For SMEs",
        image: "/ill_sme.png",
        link: "/services/sme"
    },
    {
        title: "For Enterprise",
        image: "/ill_enterprise.png",
        link: "/services/enterprise"
    }
];

const AudienceFocus = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="py-10 md:py-24 bg-white overflow-hidden">
            <motion.div
                className="max-w-7xl mx-auto px-2 lg:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <div className="flex flex-col lg:flex-row items-center gap-2 md:gap-20">

                    {/* Left: Cards Grid */}
                    <motion.div className="flex-1 w-full order-2 lg:order-1" variants={itemVariants}>
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-6">
                            {AUDIENCES.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className="bg-slate-50 rounded-[1rem] p-2 md:p-5 flex flex-col justify-between group hover:bg-[#F0F2FF] transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-[#F0F2FF]/50"
                                    whileHover={{ y: -5 }}
                                    variants={itemVariants}
                                >
                                    <div className="mb-10 transform group-hover:scale-105 transition-transform duration-500">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-auto max-h-[180px] object-contain"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-md md:text-2xl font-black text-[#0F172A] leading-tight">
                                            {item.title}
                                        </h3>
                                        <div className="w-10 h-10 rounded-[1rem] bg-white flex items-center justify-center shadow-md group-hover:bg-[#0F172A] group-hover:text-white transition-all duration-300">
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>


                    {/* Right: Content Block */}
                    <motion.div className="flex-1 space-y-8 order-1 lg:order-2 text-center lg:text-left" variants={itemVariants}>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0F172A] leading-[1.1] tracking-tighter">
                            All Services in One Place <br />
                            <span className="text-[#2663eb]">For Individuals & Businesses</span>
                        </h2>

                        <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                            A full-stack compliance and taxation suite built for every stage—startup, growing business,
                            enterprise, or individual. GST, audits, registrations, documentation,
                            licensing, and complete advisory support handled by specialized CA teams with precision,
                            faster turnaround, and zero compliance risk.
                        </p>

                        <ul className="text-slate-500 text-sm md:text-lg text-start space-y-2 max-w-xl mx-auto lg:mx-0">
                            <li>• Business registrations, licences, and legal documentation</li>
                            <li>• GST, Income Tax, TDS, and MCA compliance management</li>
                            <li>• Financial statements, audits, and reporting</li>
                            <li>• Dedicated CA support and case-based guidance</li>
                        </ul>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
};

export default AudienceFocus;

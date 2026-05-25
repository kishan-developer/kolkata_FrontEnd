"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../../data/services';
import { motion } from 'framer-motion';

export default function ServiceCards() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
        <section id="all-services" className="py-10 md:py-24 bg-slate-50/50 relative overflow-hidden">

            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50" />
                <div className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-3xl opacity-50" />
            </div>

            <motion.div
                className="max-w-7xl mx-auto px-2 md:px-8 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <motion.div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8" variants={itemVariants}>
                    <div className="max-w-3xl space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2663eb] text-xs font-bold uppercase tracking-wider">
                            Comprehensive Solutions
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                            Our Specialized <br />
                            <span className="text-[#2663eb]">Service Portfolio</span>
                        </h2>
                        <p className="text-lg text-slate-500 font-medium max-w-2xl">
                            From business setup to complex regulatory compliance, we provide institutional-grade financial and legal expertise tailored to your growth.
                        </p>
                    </div>
                    <Link 
                        href="/services" 
                        className="group flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-900 hover:border-[#2663eb] hover:text-[#2663eb] transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        Explore All Services
                        <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#2663eb] group-hover:text-white transition-colors">
                            <ChevronRight size={14} />
                        </div>
                    </Link>
                </motion.div>


                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-8">
                    {SERVICE_CATEGORIES.map((category) => (
                        <Link
                            key={category.id}
                            href={`/services#${category.id}`}
                            className="group relative p-2 md:p-8 rounded-sm md:rounded-[1rem] bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-blue-200/40 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
                        >
                            {/* Icon Wrapper */}
                            <div className="mb-2 relative">
                                <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-blue-50 text-[#2663eb] flex items-center justify-center group-hover:bg-[#2663eb] group-hover:text-white transition-all duration-500 shadow-inner">
                                    <category.icon size={25} strokeWidth={1.5} />
                                </div>
                                <div className="absolute -inset-2 bg-blue-100 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                            </div>

                            <h3 className="text-md md:text-2xl font-black text-slate-900 mb-1 group-hover:text-[#2663eb] transition-colors">
                                {category.title}
                            </h3>
                            
                            <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6  flex-grow">
                                {category.description}
                            </p>

                            {/* Service Items Preview */}
                            <div className="md:flex flex-wrap gap-2 mb-4 hidden">
                                {category.items.slice(0, 3).map((item, idx) => (
                                    <span 
                                        key={idx}
                                        className="px-3 py-1 rounded-lg bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:bg-blue-50 group-hover:text-[#2663eb] transition-colors"
                                    >
                                        {item.name}
                                    </span>
                                ))}
                                {category.items.length > 3 && (
                                    <span className="px-3 py-1 text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                                        +{category.items.length - 3} More
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-2 ml-2 text-xs md:text-xs font-black uppercase tracking-[0.2em] text-[#2663eb] mt-auto">
                                <span className="group-hover:mr-2 transition-all duration-300">Learn More</span>
                                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                            </div>

                            
                        </Link>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

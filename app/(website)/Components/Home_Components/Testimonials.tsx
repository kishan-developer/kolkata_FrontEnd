"use client";

import React from 'react'
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialsProps {
    variant?: 'brand' | 'blue-green';
}

export default function Testimonials({ variant = 'brand' }: TestimonialsProps) {
    const isBlueGreen = variant === 'blue-green';
    const accentColor = isBlueGreen ? 'text-[#2663eb]' : 'text-[#2663eb]';
    const starColor = isBlueGreen ? 'text-[#2663eb]' : 'text-[#2663eb]';

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

    const TESTIMONIALS = [
        {
            name: "Ankit Verma",
            role: "BUSINESS OWNER",
            review: "Their financial guidance and compliance support made everything smooth and stress-free. Professional, responsive, and highly reliable throughout the process.",
            image: "/reviews/ankit.jpeg"
        },
        {
            name: "Priya Nair",
            role: "CFO",
            review: "Very transparent and knowledgeable team. From tax planning to audits, everything was handled with accuracy and professionalism.",
            image: "/reviews/Priya.jpeg"
        },
        {
            name: "Rohit Malhotra",
            role: "Director",
            review: "Excellent support and seamless execution. They simplified complex financial processes and helped our business stay fully compliant.",
            image: "/reviews/Rohit.jpeg"
        }
    ];

    return (
        <section id="testimonials" className="py-10 md:py-24 bg-white">
            <motion.div
                className="max-w-7xl mx-auto px-2 md:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <motion.div className="text-center mb-16 space-y-2" variants={itemVariants}>
                    <h2 className={`${accentColor} text-xs font-bold uppercase tracking-widest`}>Feedback</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Client Reviews</h3>
                </motion.div>

                <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-8" variants={itemVariants}>
                    {TESTIMONIALS.map((t, index) => (
                        <motion.div
                            key={index}
                            className={`md:p-8 px-2 py-2 rounded-md md:rounded-[1rem] bg-slate-50 border border-slate-100 space-y-6 hover:shadow-xl transition-shadow duration-500`}
                            whileHover={{ y: -5 }}
                            variants={itemVariants}
                        >
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} className={`${starColor} fill-current`} />
                                ))}
                            </div>
                            <p className="text-slate-600 text-xs md:text-lg font-medium leading-relaxed italic">"{t.review}"</p>
                            <div className="flex items-center space-x-2 md:space-x-4">
                                <img src={t.image} alt={t.name} className="md:w-14 md:h-14 w-8 h-8 rounded-full object-cover border border-slate-200" />
                                <div>
                                    <h5 className="font-bold text-slate-900 text-xs md:text-sm leading-none mb-1">{t.name}</h5>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

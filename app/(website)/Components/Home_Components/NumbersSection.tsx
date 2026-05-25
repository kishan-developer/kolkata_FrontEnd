"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
    FileText,
    IndianRupee,
    CloudUpload,
    Store,
    Factory,
    Plus
} from 'lucide-react';

const Counter = ({ value, duration = 2000 }: { value: string, duration?: number }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const numericPart = parseFloat(value.replace(/[^0-9.]/g, ''));
    const suffix = value.replace(/[0-9.]/g, '');
    const isDecimal = value.includes('.');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startValue = 0;
        const interval = 20;
        const steps = duration / interval;
        const increment = numericPart / steps;

        const timer = setInterval(() => {
            startValue += increment;
            if (startValue >= numericPart) {
                setCount(numericPart);
                clearInterval(timer);
            } else {
                setCount(startValue);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [isVisible, numericPart, duration]);

    return (
        <span ref={countRef}>
            {isDecimal ? count.toFixed(1) : Math.floor(count)}{suffix}
        </span>
    );
};

interface StatCardProps {
    number: string;
    label: string;
    icon: React.ReactNode;
    iconBg: string;
    prefix?: string;
    className?: string;
}

const StatCard = ({ number, label, icon, iconBg, prefix, className = "" }: StatCardProps) => (
    <div className={`p-8 bg-white rounded-[1rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50 flex flex-col items-start gap-4 transition-all hover:scale-[1.02] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] duration-500 group ${className}`}>
        <div className="w-full flex justify-between items-start mb-6">
            <div className={`w-14 h-14 ${iconBg} rounded-[1rem] flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                {icon}
            </div>
            {/* Logo/Icon on the right as per image */}
            {/* <div className="opacity-10 group-hover:opacity-20 transition-opacity">
                {icon}
            </div> */}
        </div>
        <div>
            <div className="text-3xl md:text-3xl font-bold text-slate-900 flex items-center gap-0.5 tracking-tight mb-2">
                {prefix && <span className="text-2xl md:text-3xl mt-1">{prefix}</span>}
                <Counter value={number} />
                <Plus className="w-6 h-6 text-[#2663eb] -mt-4 md:-mt-6" />
            </div>
            <p className="text-slate-500 font-semibold text-sm md:text-base leading-tight uppercase tracking-wider">
                {label}
            </p>
        </div>
    </div>
);

const NumbersSection = () => {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    <div className="max-w-xl space-y-6 sm:space-y-8">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0F172A] leading-[1.1] md:leading-[1] tracking-tighter">
                            Numbers don't <br /><span className="text-[#2663eb]">lie!</span>
                        </h2>
                        <p className="text-slate-500 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                            Products that perform seamlessly during any kind of surge, so you don't have to worry about uptime and reliability. Ingest and process any amount of data any time of the month, smoothly.
                        </p>

                        <div className="pt-4 h-1 w-24 bg-[#2663eb] rounded-[1rem] hidden lg:block"></div>
                    </div>

                    {/* Right Column: Staggered Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                        {/* Group 1: Left column of the grid */}
                        <div className="space-y-6 pt-0 sm:-translate-y-8">
                            <StatCard
                                number="8M"
                                label="tax returns filed"
                                icon={<FileText className="w-7 h-7 text-[#F59E0B]" />}
                                iconBg="bg-[#FFFBEB]"
                            />
                            <StatCard
                                number="250M"
                                label="invoices uploaded"
                                icon={<CloudUpload className="w-7 h-7 text-[#2663eb]" />}
                                iconBg="bg-[#EFF6FF]"
                            />
                            <StatCard
                                number="6M"
                                label="Businesses visible"
                                icon={<Factory className="w-7 h-7 text-[#8B5CF6]" />}
                                iconBg="bg-[#F5F3FF]"
                            />
                        </div>

                        {/* Group 2: Right column of the grid (Offset) */}
                        <div className="space-y-6 pt-0 sm:pt-24 sm:translate-y-8">
                            <StatCard
                                number="300M"
                                label="trade value filled"
                                prefix="₹"
                                icon={<IndianRupee className="w-7 h-7 text-[#2663eb]" />}
                                iconBg="bg-[#EFF6FF]"
                            />
                            <StatCard
                                number="35,000"
                                label="retail investors"
                                icon={<Store className="w-7 h-7 text-[#EF4444]" />}
                                iconBg="bg-[#FEF2F2]"
                            />
                        </div>

                        {/* Decorative elements to match premium feel */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-50 rounded-[1rem] blur-3xl -z-10 opacity-50"></div>
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-50 rounded-[1rem] blur-3xl -z-10 opacity-50"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NumbersSection;

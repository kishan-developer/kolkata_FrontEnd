"use client";

import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ value, duration = 2000 }: { value: string, duration?: number }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Parse the numeric part and suffix
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
        const interval = 20; // 20ms for smooth 60fps-ish animation
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
        <div ref={countRef}>
            {isDecimal ? count.toFixed(1) : Math.floor(count)}{suffix}
        </div>
    );
};

const Stats = () => {
    const STATS = [
        { label: "Active Corporates", value: "2.5k+" },
        { label: "Expert Associates", value: "100+" },
        { label: "Success Mandates", value: "15k+" },
        { label: "Years Excellence", value: "10+" }
    ];

    return (
        <section className="py-20 bg-[#FDFCFB]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {STATS.map((stat, idx) => (
                        <div key={idx} className="text-center space-y-3">
                            <div className="text-4xl md:text-6xl font-bold text-[#0A2A52] tracking-tight">
                                <Counter value={stat.value} />
                            </div>
                            <p className="text-sm md:text-base font-medium text-gray-600 uppercase tracking-widest">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;


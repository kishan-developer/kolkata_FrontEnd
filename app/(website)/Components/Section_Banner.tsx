"use client";

import React from "react";

interface SectionBannerProps {
    title: string;
    paragraph: string;
}

const Section_Banner: React.FC<SectionBannerProps> = ({ title, paragraph }) => {
    return (
        <section
            className="w-full py-28 bg-[#2663eb] text-white"
        >
            <div className="max-w-5xl mx-auto text-center px-6">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                    {title}
                </h1>

                <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                    {paragraph}
                </p>
            </div>
        </section>
    );
};

export default Section_Banner;
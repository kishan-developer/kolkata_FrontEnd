"use client";

import React from "react";
import { ArrowRight, Star, Cloud, FileText, Globe, MessageCircle, MessageSquare, Slack } from "lucide-react";

const DigitalFinanceSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decorative wavy line placeholder */}
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
                <svg viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M100 0C150 100 50 200 100 300C150 400 50 500 100 600C150 700 50 800 100 900" stroke="#2663eb" strokeWidth="2" />
                    <path d="M150 0C200 100 100 200 150 300C200 400 100 500 150 600C200 700 100 800 150 900" stroke="#2663eb" strokeWidth="1" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* Top Trust Bar */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-20 border-b border-slate-100 items-center">
                    
                    {/* Integrations */}
                    <div className="space-y-4">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Live for ITR on</p>
                        <div className="flex items-center gap-4 text-slate-300">
                             <div className="p-2 bg-slate-50 rounded-[1rem] group hover:bg-blue-50 transition-colors">
                                <MessageSquare size={20} className="group-hover:text-[#2663eb] transition-colors" />
                             </div>
                             <div className="p-2 bg-slate-50 rounded-[1rem] group hover:bg-blue-50 transition-colors">
                                <MessageCircle size={20} className="group-hover:text-[#2663eb] transition-colors" />
                             </div>
                             <div className="p-2 bg-slate-50 rounded-[1rem] group hover:bg-purple-50 transition-colors">
                                <Slack size={20} className="group-hover:text-purple-600 transition-colors" />
                             </div>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                            <Star className="text-amber-400 fill-amber-400" size={20} />
                            <span className="text-2xl font-black text-[#0F172A]">4.9/5</span>
                        </div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">45K+ Reviews</p>
                    </div>

                    {/* Refund Delivered */}
                    <div className="text-center md:text-left">
                        <div className="text-2xl font-black text-[#0F172A] mb-1">₹5,346 Cr+</div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">ITR Refund Delivered</p>
                    </div>

                    {/* Users Trust */}
                    <div className="text-center md:text-left">
                        <div className="text-2xl font-black text-[#0F172A] mb-1">8 M+</div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Users Trust Us</p>
                    </div>

                </div>

                {/* Main Heading */}
                <div className="py-24 text-center space-y-8 animate-in mt-10">
                    <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-[1.1] tracking-tighter max-w-5xl mx-auto">
                        Advanced finance solutions for individuals and teams worldwide
                    </h2>
                </div>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
                    
                    {/* Card 1: Cloud */}
                    <div className="flex flex-col items-center text-center space-y-8 p-12 rounded-[1rem] bg-white border border-slate-50 hover:border-[#2663eb]/20 hover:shadow-2xl hover:shadow-slate-100 transition-all duration-500 group">
                        <div className="w-20 h-20 bg-blue-50 rounded-[1rem] flex items-center justify-center group-hover:bg-[#0F172A] transition-all duration-700">
                            <Cloud size={36} className="text-[#2663eb] group-hover:text-[#2663eb] transition-all" />
                        </div>
                        <h3 className="text-2xl font-black text-[#0F172A]">Clear Finance <br/> Cloud</h3>
                        <button className="bg-[#2663eb] text-white px-10 py-4 rounded-[1rem] font-bold hover:bg-[#1d4ed8] transition-all shadow-lg shadow-[#2663eb]/20">
                            Learn more
                        </button>
                    </div>

                    {/* Card 2: ITR */}
                    <div className="flex flex-col items-center text-center space-y-8 p-12 rounded-[1rem] bg-white border border-slate-50 hover:border-[#2663eb]/20 hover:shadow-2xl hover:shadow-slate-100 transition-all duration-500 group">
                        <div className="w-20 h-20 bg-purple-50 rounded-[1rem] flex items-center justify-center group-hover:bg-[#0F172A] transition-all duration-700">
                            <FileText size={36} className="text-purple-500 group-hover:text-[#2663eb] transition-all" />
                        </div>
                        <h3 className="text-2xl font-black text-[#0F172A]">ITR <br/> Filing</h3>
                        <button className="bg-[#2663eb] text-white px-10 py-4 rounded-[1rem] font-bold hover:bg-[#1d4ed8] transition-all shadow-lg shadow-[#2663eb]/20">
                            File Now
                        </button>
                    </div>

                    {/* Card 3: e-Invoicing */}
                    <div className="flex flex-col items-center text-center space-y-8 p-12 rounded-[1rem] bg-white border border-slate-50 hover:border-[#2663eb]/20 hover:shadow-2xl hover:shadow-slate-100 transition-all duration-500 group">
                        <div className="w-20 h-20 bg-blue-50 rounded-[1rem] flex items-center justify-center group-hover:bg-[#0F172A] transition-all duration-700">
                            <Globe size={36} className="text-[#2663eb] group-hover:text-[#2663eb] transition-all" />
                        </div>
                        <h3 className="text-2xl font-black text-[#0F172A]">Global <br/> e-Invoicing</h3>
                        <button className="bg-[#2663eb] text-white px-10 py-4 rounded-[1rem] font-bold hover:bg-[#1d4ed8] transition-all shadow-lg shadow-[#2663eb]/20">
                            Learn more
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default DigitalFinanceSection;

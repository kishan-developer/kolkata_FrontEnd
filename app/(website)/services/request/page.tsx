"use client";

import React, { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    Send,
    CheckCircle2,
    ShieldCheck,
    Zap,
    Clock,
    Briefcase,
    Building2,
    User,
    Mail,
    Phone,
    MessageSquare
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

function RequestForm() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const serviceName = searchParams.get('service') || "General Inquiry";

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        businessName: '',
        serviceType: serviceName,
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        toast.success("Service request submitted successfully!", {
            duration: 5000,
            style: {
                borderRadius: '1rem',
                background: '#0F172A',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 'bold',
                padding: '16px'
            }
        });

        // Redirect back after success
        setTimeout(() => {
            router.back();
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-slate-400 hover:text-[#2663eb] font-bold text-sm uppercase tracking-widest transition-colors mb-12 group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Details
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* Left: Branding & Info */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
                                <Zap size={14} className="text-[#2663eb]" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2663eb]">Secure Onboarding</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-[1.1] tracking-tighter">
                                Start Your <br />
                                <span className="text-[#2663eb]">{serviceName}</span> <br />
                                Journey.
                            </h1>
                            <p className="text-xl text-slate-400 font-bold leading-relaxed max-w-md">
                                Provide your details below. Our institutional consultants will initialize your case file within 2 hours.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {[
                                { icon: <ShieldCheck className="text-emerald-500" />, t: "Institutional Security", d: "Your data is protected by 256-bit encryption." },
                                { icon: <Clock className="text-blue-500" />, t: "2-Hour Response", d: "Guaranteed initial consultation window." },
                                { icon: <CheckCircle2 className="text-purple-500" />, t: "Zero Hidden Costs", d: "Transparent pricing as per standard rates." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-[#0F172A]">{item.t}</h4>
                                        <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: The Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100"
                        >
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Full Name */}
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 flex items-center gap-2">
                                            <User size={12} /> Full Name
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Rahul Sharma"
                                            className="w-full bg-slate-50 border-none px-6 py-5 rounded-2xl focus:ring-2 focus:ring-[#2663eb]/20 outline-none font-bold text-slate-700 transition-all"
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        />
                                    </div>
                                    {/* Email */}
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 flex items-center gap-2">
                                            <Mail size={12} /> Email Address
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="rahul@company.com"
                                            className="w-full bg-slate-50 border-none px-6 py-5 rounded-2xl focus:ring-2 focus:ring-[#2663eb]/20 outline-none font-bold text-slate-700 transition-all"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Phone */}
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 flex items-center gap-2">
                                            <Phone size={12} /> Contact Number
                                        </label>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            className="w-full bg-slate-50 border-none px-6 py-5 rounded-2xl focus:ring-2 focus:ring-[#2663eb]/20 outline-none font-bold text-slate-700 transition-all"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    {/* Business Name */}
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 flex items-center gap-2">
                                            <Building2 size={12} /> Business Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="TechVibe Solutions"
                                            className="w-full bg-slate-50 border-none px-6 py-5 rounded-2xl focus:ring-2 focus:ring-[#2663eb]/20 outline-none font-bold text-slate-700 transition-all"
                                            value={formData.businessName}
                                            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 flex items-center gap-2">
                                        <MessageSquare size={12} /> Specific Requirements
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="Any specific details you'd like us to know..."
                                        className="w-full bg-slate-50 border-none px-6 py-5 rounded-2xl focus:ring-2 focus:ring-[#2663eb]/20 outline-none font-bold text-slate-700 transition-all resize-none"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>

                                <button
                                    disabled={isSubmitting}
                                    className="w-full bg-[#2663eb] text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-[#1a56d2] transition-all shadow-2xl shadow-blue-100 flex items-center justify-center gap-4 group disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Initializing...
                                        </div>
                                    ) : (
                                        <>
                                            Submit Service Request <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    By submitting, you agree to our <Link href="/terms" className="text-[#2663eb] hover:underline">Strategic Terms</Link>
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ServiceRequestPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <RequestForm />
        </Suspense>
    );
}

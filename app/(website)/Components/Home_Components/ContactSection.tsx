'use client';

import React, { useState } from "react";
import { Mail, Phone, Send, MessageSquare, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const ContactSection: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('http://localhost:2001/api/v1/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Consultation request submitted successfully!", {
                    duration: 4000,
                    style: {
                        borderRadius: '1rem',
                        background: '#0F172A',
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        padding: '16px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                    }
                });
                setFormData({ name: '', email: '', phone: '', message: '' });
                (e.target as HTMLFormElement).reset();
            } else {
                toast.error('Failed to submit request. Please try again.', {
                    duration: 4000,
                    style: {
                        borderRadius: '1rem',
                        background: '#ef4444',
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        padding: '16px',
                    }
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('An error occurred. Please try again.', {
                duration: 4000,
                style: {
                    borderRadius: '1rem',
                    background: '#ef4444',
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    padding: '16px',
                }
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="w-full py-10 md:py-32 px-2 lg:px-8 bg-slate-50 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 relative z-10">

                {/* LEFT: Consultation Form */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-4 md:p-8 md:p-12 rounded-[1rem] shadow-2xl shadow-slate-200/60 border border-slate-100"
                >
                    <div className="space-y-4 mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
                           <MessageSquare size={14} className="text-[#2663eb]" />
                           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2663eb]">Consultation</span>
                        </div>
                        <h2 className="text-2xl md:text-5xl font-black text-[#0F172A] tracking-tighter">
                            Schedule a Strategic Session.
                        </h2>
                        <p className="text-slate-400 font-bold text-lg leading-relaxed">
                            Connect with our specialized counsel to navigate your regulatory landscape with precision.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="e.g. Rahul Sharma"
                                    className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-[#2663eb]/20 outline-none font-bold text-slate-700 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="name@company.com"
                                    className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-[#2663eb]/20 outline-none font-bold text-slate-700 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Phone Number (Optional)</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+91 98765 43210"
                                className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-[#2663eb]/20 outline-none font-bold text-slate-700 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Detailed Message</label>
                            <textarea
                                required
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Describe your compliance or tax requirement..."
                                rows={5}
                                className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-[#2663eb]/20 outline-none font-bold text-slate-700 transition-all resize-none"
                            ></textarea>
                        </div>

                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className="w-full bg-[#2663eb] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#1a56d2] transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3 group active:scale-95 disabled:opacity-50"
                        >
                            {isSubmitting ? (
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Processing...
                                </div>
                            ) : (
                                <>
                                    Deploy Consultation <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>

                {/* RIGHT: Office Information */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:py-12 space-y-16"
                >
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-5xl font-black text-[#0F172A] tracking-tighter">
                            Institutional <br /> Presence.
                        </h2>
                        <p className="text-slate-400 font-bold text-lg leading-relaxed max-w-md">
                            Our primary command center is strategically located to serve the financial district of the region.
                        </p>
                    </div>

                    <div className="space-y-12">
                        

                        {/* Direct Inquiry */}
                        <div className="flex md:gap-6 gap-4 group">
                            <div className="md:w-16 md:h-16 w-12 h-12 bg-white rounded-2xl shadow-xl shadow-slate-200/50 flex items-center justify-center text-[#2663eb] group-hover:bg-[#2663eb] group-hover:text-white transition-all duration-500">
                                <Phone size={28} />
                            </div>
                            <div className="space-y-2 pt-2">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Direct Hotline</h4>
                                <p className="text-md md:text-xl  font-black text-[#0F172A] leading-tight hover:text-[#2663eb] cursor-pointer transition-colors">
                                   +91 98765 43210
                                </p>
                                <div className="flex items-center gap-2 text-emerald-500">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[9px] font-black uppercase tracking-widest">Counselors Online</span>
                                </div>
                            </div>
                        </div>

                        {/* Client Relations */}
                        <div className="flex md:gap-6 gap-4 group">
                            <div className="md:w-16 md:h-16 w-12 h-12 bg-white rounded-2xl shadow-xl shadow-slate-200/50 flex items-center justify-center text-[#2663eb] group-hover:bg-[#2663eb] group-hover:text-white transition-all duration-500">
                                <Mail size={28} />
                            </div>
                            <div className="space-y-2 pt-2">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Client Relations</h4>
                                <p className=" text-md md:text-xl font-black text-[#0F172A] leading-tight hover:text-[#2663eb] cursor-pointer transition-colors">
                                    info@vyaparsewa.com
                                </p>
                            </div>
                        </div>

                        {/* Operational Hours */}
                        <div className="flex gap-6 group">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-xl shadow-slate-200/50 flex items-center justify-center text-[#2663eb] group-hover:bg-[#2663eb] group-hover:text-white transition-all duration-500">
                                <Clock size={28} />
                            </div>
                            <div className="space-y-2 pt-2">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Operational Window</h4>
                                <p className="text-md md:text-xl font-black text-[#0F172A] leading-tight">
                                    Mon - Sat: 09:00 - 19:00 IST
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ContactSection;
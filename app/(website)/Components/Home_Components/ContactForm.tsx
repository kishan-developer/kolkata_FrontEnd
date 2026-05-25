"use client";

import { Send, User, Mail, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react'

export default function ContactForm() {
    type FormStatus = 'idle' | 'submitting' | 'success';
    const [formState, setFormState] = useState<FormStatus>('idle');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setFormState('submitting');
        setTimeout(() => setFormState('success'), 1000);
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-[#2663eb] text-xs font-bold uppercase tracking-widest">Connect</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Request a Call</h3>
                    <p className="text-slate-500 font-medium">Briefly describe your requirements and we'll reach out.</p>
                </div>

                {formState === 'success' ? (
                    <div className="bg-slate-50 rounded-[1rem] p-12 text-center animate-in zoom-in-95 duration-500 border border-slate-100">
                        <div className="w-16 h-16 bg-white text-[#2663eb] rounded-[1rem] flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100">
                            <CheckCircle2 size={32} />
                        </div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Received</h4>
                        <p className="text-slate-500 font-medium mb-8">We will connect with you within 24 operational hours.</p>
                        <button onClick={() => setFormState('idle')} className="text-sm font-bold text-[#2663eb] hover:text-slate-900 transition-colors">
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Full Name</label>
                                <input type="text" required className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-[1rem] focus:bg-white focus:border-[#2663eb] outline-none transition-all font-medium text-slate-900" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Email</label>
                                <input type="email" required className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-[1rem] focus:bg-white focus:border-[#2663eb] outline-none transition-all font-medium text-slate-900" placeholder="email@address.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Message</label>
                            <textarea required rows={4} className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-[1rem] focus:bg-white focus:border-[#2663eb] outline-none transition-all font-medium text-slate-900 resize-none" placeholder="How can we help?"></textarea>
                        </div>
                        <button type="submit" disabled={formState === 'submitting'} className="w-full bg-slate-900 text-white py-4 rounded-[1rem] font-bold hover:bg-[#2663eb] transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                            {formState === 'submitting' ? 'Sending...' : <>Submit Request <Send size={18} /></>}
                        </button>
                    </form>
                )}
            </div>
        </section>
    )
}

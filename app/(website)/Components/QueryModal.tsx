"use client";

import React, { useState } from 'react';
import { X, CheckCircle, MessageSquare, Send, User, Mail, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface QueryModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
}

export default function QueryModal({ isOpen, onClose, serviceName }: QueryModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: `I'm interested in ${serviceName}. Please provide more details.`
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setStep(2);
  };

  const resetAndClose = () => {
    setStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      query: `I'm interested in ${serviceName}. Please provide more details.`
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            onClick={resetAndClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[1rem] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#2663eb] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0F172A]/20 rounded-[1rem] blur-3xl -mr-24 -mt-24" />
              <button
                onClick={resetAndClose}
                className="absolute top-6 right-6 p-2 rounded-[1rem] bg-white/5 hover:bg-white/10 transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-3 text-white">
                  <MessageSquare size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Query Gateway</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Request Service Details</h2>
                <p className="text-slate-400 text-sm font-medium">Context: <span className="text-white">{serviceName}</span></p>
              </div>
            </div>

            <div className="p-8">
              {step === 1 ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <User size={12} className="text-[#2663eb]" /> Full Name
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-[1rem] bg-slate-50 border border-slate-100 focus:border-[#2663eb] focus:bg-white outline-none transition-all font-medium text-slate-900"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                          <Mail size={12} className="text-[#2663eb]" /> Email
                        </label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-6 py-4 rounded-[1rem] bg-slate-50 border border-slate-100 focus:border-[#2663eb] focus:bg-white outline-none transition-all font-medium text-slate-900"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                          <Phone size={12} className="text-[#2663eb]" /> Phone
                        </label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-6 py-4 rounded-[1rem] bg-slate-50 border border-slate-100 focus:border-[#2663eb] focus:bg-white outline-none transition-all font-medium text-slate-900"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <MessageSquare size={12} className="text-[#2663eb]" /> Your Requirement
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.query}
                        onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                        className="w-full px-6 py-4 rounded-[1rem] bg-slate-50 border border-slate-100 focus:border-[#2663eb] focus:bg-white outline-none transition-all font-medium text-slate-900 resize-none"
                      />
                    </div>
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-[#2663eb] text-white py-5 rounded-[1rem] font-bold text-sm uppercase tracking-widest hover:bg-[#2663eb] transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-[1rem] animate-spin" />
                    ) : (
                      <>
                        Send Inquiry <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-12 flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 bg-[#2663eb]/10 rounded-[1rem] flex items-center justify-center text-[#2663eb] relative">
                    <div className="absolute inset-0 bg-[#2663eb] rounded-[1rem] animate-ping opacity-20" />
                    <CheckCircle size={40} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">Inquiry Transmitted!</h3>
                    <p className="text-slate-500 font-medium">Our strategic consultants will analyze your requirement and contact you within 24 business hours.</p>
                  </div>
                  <button
                    onClick={resetAndClose}
                    className="bg-[#0F172A] text-white px-8 py-4 rounded-[1rem] font-bold text-xs uppercase tracking-widest hover:bg-[#2663eb] transition-all"
                  >
                    Close Gateway
                  </button>
                </div>
              )}
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-center gap-8">
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <CheckCircle size={14} className="text-[#2663eb]" /> Secure
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <CheckCircle size={14} className="text-[#2663eb]" /> Private
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <CheckCircle size={14} className="text-[#2663eb]" /> Expert Handled
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

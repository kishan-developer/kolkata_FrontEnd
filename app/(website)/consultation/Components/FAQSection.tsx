"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Clock, Video, Shield, FileText, RefreshCw } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the duration of the consultation?",
      answer: "Each consultation session is 30 minutes. This focused timeframe allows our experts to provide targeted advice and actionable insights for your specific needs. If you require more time, you can book multiple consecutive slots.",
      icon: Clock
    },
    {
      question: "What meeting modes are available?",
      answer: "We offer flexible consultation modes including Zoom video calls, in-person meetings (at our office), and phone consultations. You can select your preferred mode while booking. Zoom is the most popular option as it allows screen sharing and document sharing.",
      icon: Video
    },
    {
      question: "What is your refund and reschedule policy?",
      answer: "You can reschedule your consultation up to 24 hours before the scheduled time at no additional cost. Cancellations made within 24 hours are non-refundable. In case of emergencies, please contact our support team for assistance.",
      icon: RefreshCw
    },
    {
      question: "What do I need to prepare for the consultation?",
      answer: "Please have your relevant documents ready such as financial statements, tax returns, business registration papers, or any specific queries you want to discuss. Having these prepared will help our experts provide more accurate and actionable advice.",
      icon: FileText
    },
    {
      question: "Is my consultation information confidential?",
      answer: "Absolutely. All consultations are strictly confidential. Our experts follow professional ethics and data protection standards. Your business information, financial data, and discussion details are never shared with third parties without your explicit consent.",
      icon: Shield
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const Icon = faq.icon;
        const isOpen = openIndex === index;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-[1rem] border border-slate-100 shadow-sm overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 bg-[#2663eb]/10 rounded-[1rem] flex items-center justify-center text-[#2663eb] shrink-0">
                  <Icon size={20} />
                </div>
                <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
              </div>
              <ChevronDown
                size={20}
                className={`text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="px-6 pb-5 pl-22"
              >
                <p className="text-slate-600 leading-relaxed ml-16">{faq.answer}</p>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

"use client";

import React, { useState } from 'react';
import { Send, X, Mail, Phone, User } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface QuickInquiryFormProps {
  serviceName: string;
  onClose?: () => void;
}

const QuickInquiryForm = ({ serviceName, onClose }: QuickInquiryFormProps) => {
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
      const response = await fetch('http://localhost:2001/api/v1/service-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          serviceName,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Inquiry submitted successfully! We will contact you soon.', {
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
        if (onClose) onClose();
      } else {
        toast.error(data.message || 'Failed to submit inquiry', {
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
      console.error('Error submitting inquiry:', error);
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
    <div className="bg-white rounded-[1rem] shadow-2xl border border-slate-100 overflow-hidden">
      <div className="bg-gradient-to-r from-[#2663eb] to-[#1d4ed8] p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-black">Quick Inquiry</h3>
            <p className="text-sm text-white/80 mt-1">Service: {serviceName}</p>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-[1rem] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-[#2663eb] uppercase tracking-[0.2em] flex items-center gap-2">
            <User className="w-3 h-3" />
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-3 rounded-[1rem] border-2 border-slate-200 focus:border-[#2663eb] outline-none transition-all font-bold text-[#0F172A]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-[#2663eb] uppercase tracking-[0.2em] flex items-center gap-2">
            <Mail className="w-3 h-3" />
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-[1rem] border-2 border-slate-200 focus:border-[#2663eb] outline-none transition-all font-bold text-[#0F172A]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-[#2663eb] uppercase tracking-[0.2em] flex items-center gap-2">
            <Phone className="w-3 h-3" />
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 rounded-[1rem] border-2 border-slate-200 focus:border-[#2663eb] outline-none transition-all font-bold text-[#0F172A]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-[#2663eb] uppercase tracking-[0.2em]">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your requirements..."
            rows={4}
            className="w-full px-4 py-3 rounded-[1rem] border-2 border-slate-200 focus:border-[#2663eb] outline-none transition-all font-bold text-[#0F172A] resize-none"
          />
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full bg-[#2663eb] hover:bg-[#1d4ed8] text-white py-4 rounded-[1rem] font-black text-sm flex items-center justify-center gap-3 transition-all shadow-lg shadow-[#2663eb]/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Inquiry <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      <div className="px-6 pb-6">
        <p className="text-xs text-slate-500 text-center">
          We'll get back to you within 24-48 hours
        </p>
      </div>
    </div>
  );
};

export default QuickInquiryForm;

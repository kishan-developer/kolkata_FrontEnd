"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ankit Verma",
      company: "TechStart Solutions",
      rating: 5,
      review: "Their financial guidance and compliance support made everything smooth and stress-free. Professional, responsive, and highly reliable throughout the process."
    },
    {
      name: "Priya Nair",
      company: "Global Exports Ltd",
      rating: 5,
      review: "Very transparent and knowledgeable team. From tax planning to audits, everything was handled with accuracy and professionalism."
    },
    {
      name: "Rohit Malhotra",
      company: "Manufacturing Hub",
      rating: 5,
      review: "Excellent support and seamless execution. They simplified complex financial processes and helped our business stay fully compliant."
    },
    {
      name: "Sneha Sharma",
      company: "E-Commerce Ventures",
      rating: 4,
      review: "The audit process is seamless and zero-error. A trusted partner for our growing firm's compliance needs."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-[1rem] border border-slate-100 shadow-sm p-6"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-[#2663eb] rounded-[1rem] flex items-center justify-center text-white font-black text-lg shrink-0">
              {testimonial.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
              {testimonial.company && (
                <p className="text-sm text-slate-500">{testimonial.company}</p>
              )}
              <div className="flex gap-1 mt-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#2663eb] text-[#2663eb]" />
                ))}
              </div>
            </div>
            <Quote className="text-[#2663eb]/20" size={24} />
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">{testimonial.review}</p>
        </motion.div>
      ))}
    </div>
  );
}

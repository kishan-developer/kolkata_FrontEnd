"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

export default function ExpertProfilesSection() {
  const experts = [
    {
      name: "CA Mukesh Raj",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      expertise: ["Taxation", "GST Compliance", "Audit"],
      experience: "20+ Years",
      achievements: ["FCA", "DISA", "Ex-Big 4 Partner"]
    },
    {
      name: "CA Swati Mishra",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      expertise: ["Income Tax", "Corporate Tax", "International Tax"],
      experience: "15+ Years",
      achievements: ["FCA", "LLM (Taxation)", "Published Author"]
    },
    {
      name: "CS Rahul Gupta",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      expertise: ["Company Law", "MCA Compliance", "Corporate Governance"],
      experience: "18+ Years",
      achievements: ["FCS", "LLB", "SEBI Registered"]
    }
  ];

  return (
    <div className="space-y-8">
      {experts.map((expert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-[1rem] border border-slate-100 shadow-sm p-8 flex flex-col md:flex-row gap-6"
        >
          <img
            src={expert.photo}
            alt={expert.name}
            className="w-24 h-24 rounded-[1rem] object-cover shrink-0"
          />
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-black text-slate-900">{expert.name}</h3>
                <p className="text-[#2663eb] font-bold text-sm">{expert.experience} Experience</p>
              </div>
              <Award className="text-[#2663eb] shrink-0" size={24} />
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {expert.expertise.map((exp, i) => (
                <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-[1rem] text-xs font-bold uppercase">
                  {exp}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {expert.achievements.map((ach, i) => (
                <span key={i} className="flex items-center gap-1 text-xs font-medium text-slate-500">
                  <CheckCircle size={12} className="text-[#2663eb]" /> {ach}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

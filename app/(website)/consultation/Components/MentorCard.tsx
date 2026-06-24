"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Clock, Briefcase, ChevronRight } from 'lucide-react';
import { Mentor } from '../../consultation/data/mentors';

interface MentorCardProps {
  mentor: Mentor;
  onBook: (mentor: Mentor) => void;
}

const MentorCard = ({ mentor, onBook }: MentorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-[1rem] border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:shadow-[#2663eb]/5 transition-all duration-300 group"
    >
      <div className="flex items-start gap-5 mb-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-[1rem] bg-slate-100 overflow-hidden ring-4 ring-slate-50">
            <Image
              src={mentor.image}
              alt={mentor.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-[#2663eb] text-white px-2 py-0.5 rounded-[1rem] text-[10px] font-bold shadow-lg">
            {mentor.experience}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-slate-900 truncate group-hover:text-[#2663eb] transition-colors">
            {mentor.name}
          </h3>
          <p className="text-slate-500 text-sm font-medium mb-2">{mentor.title}</p>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-bold text-slate-700">{mentor.rating}</span>
            <span className="text-slate-400 text-xs">({mentor.reviews} reviews)</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {mentor.expertise.slice(0, 3).map((exp, idx) => (
            <span 
              key={idx} 
              className="px-2.5 py-1 bg-slate-50 text-slate-600 text-[11px] font-semibold rounded-[1rem] border border-slate-100"
            >
              {exp}
            </span>
          ))}
        </div>
        <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
          {mentor.bio}
        </p>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-slate-50">
        <div>
          <span className="text-xs text-slate-400 block mb-0.5">Session starting from</span>
          <span className="text-2xl font-black text-slate-900">₹{mentor.price}</span>
        </div>
        
        <button
          onClick={() => onBook(mentor)}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#2663eb] text-white rounded-[1rem] font-bold text-sm shadow-lg shadow-[#2663eb]/20 hover:bg-[#1d4ed8] hover:shadow-none transition-all active:scale-95 group/btn"
        >
          Book Session
          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export default MentorCard;

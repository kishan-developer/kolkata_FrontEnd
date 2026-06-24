"use client";

import React from 'react';
import { Star, Clock, Award, ArrowUpRight } from 'lucide-react';
import { Mentor } from '../consultation/data/mentors';

interface MentorCardProps {
  mentor: Mentor;
  onBook: (mentor: Mentor) => void;
}



export default function MentorCard({ mentor, onBook }: MentorCardProps) {
  return (
    <div className="group relative bg-white rounded-[1rem] border border-slate-200 overflow-hidden hover:border-[#2663eb]/30 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500">
      {/* Image & Header */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(mentor.name)}&background=0F172A&color=fff&size=512`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-60" />
        
        <div className="absolute bottom-4 left-6 right-6">
          <div className="flex items-center gap-2 mb-1">
            <div className="flex items-center gap-1 bg-[#2663eb] text-white px-2 py-0.5 rounded-[1rem] text-[10px] font-black uppercase tracking-wider">
              <Star size={10} fill="currentColor" />
              {mentor.rating}
            </div>
            <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">
              ({mentor.reviews} Reviews)
            </span>
          </div>
          <h3 className="text-xl font-black text-white leading-tight">{mentor.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <p className="text-[10px] font-black text-[#2663eb] uppercase tracking-[0.2em]">{mentor.title}</p>
          <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-2 italic">
            "{mentor.bio}"
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {mentor.expertise.slice(0, 3).map((exp) => (
            <span key={exp} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-[1rem] text-[10px] font-bold text-slate-600 uppercase tracking-wider">
              {exp}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[1rem] bg-[#2663eb]/5 flex items-center justify-center text-[#2663eb]">
              <Award size={14} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Exp</span>
              <span className="text-xs font-black text-slate-900">{mentor.experience}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[1rem] bg-[#2663eb]/5 flex items-center justify-center text-[#2663eb]">
              <Clock size={14} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Price</span>
              <span className="text-xs font-black text-slate-900">₹{mentor.price}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => onBook(mentor)}
          className="w-full bg-[#0F172A] text-white py-4 rounded-[1rem] font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#2663eb] transition-all duration-300 flex items-center justify-center gap-2 group/btn"
        >
          Book Consultation
          <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}

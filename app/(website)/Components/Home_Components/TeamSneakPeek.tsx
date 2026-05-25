"use client";

import { Linkedin } from 'lucide-react';
import React from 'react';

const TeamSneakPeek = () => {
    
    const TEAM = [
        { 
            name: "CA Mukesh Raj", 
            role: "Founding Partner", 
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
        },
        { 
            name: "CA Swati Mishra", 
            role: "Taxation Head", 
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" 
        },
        { 
            name: "CS Rahul Gupta", 
            role: "Corporate Legal", 
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" 
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-3">
                        <h2 className="text-[#2663eb] text-xs font-bold uppercase tracking-widest">Leadership</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Meet the Practice Leads</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TEAM.map((member, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-[1rem] bg-white border border-slate-100 p-6 flex items-center space-x-6 hover:shadow-xl transition-all duration-300">
                             <img src={member.img} alt={member.name} className="w-20 h-20 rounded-[1rem] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                             <div>
                                <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                                <p className="text-xs font-bold text-[#2663eb] uppercase tracking-widest mb-2">{member.role}</p>
                                <a href="#" className="text-slate-400 hover:text-[#0077b5] transition-colors"><Linkedin size={16} /></a>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSneakPeek;

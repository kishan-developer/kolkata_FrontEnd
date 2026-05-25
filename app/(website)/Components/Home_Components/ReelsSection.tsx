"use client"

import React from 'react'
import { Instagram, ArrowUpRight } from 'lucide-react'
import InstagramReel from './InstagramReel'

const REEL_IDS = [
  'DXKJkyoAbd8',
  'DXHe0_-AY0-',
  'DW9Jis7gVTq',
  'DW50ld3gXvz',
  'DW1LhG-ATPJ',
  'DWoXGRLgUZN',
  'DWjAUf2gdsh',
  'DWgX2iagQiK'
]

// update this data from api in database from mongodb 

export default function ReelsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-[1rem] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                <Instagram size={24} />
              </div>
              <span className="text-[#2663eb] text-xs font-black uppercase tracking-[0.2em]">Social Buzz</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#2663eb] tracking-tighter leading-tight">
              Experience Our World <br />
              <span className="text-gray-400">Through Reels</span>
            </h2>
          </div>
          
          <button 
            onClick={() => window.open('https://www.instagram.com/coralgroupoff/', '_blank')}
            className="group flex items-center gap-3 px-8 py-4 bg-gray-50 text-[#2663eb] text-xs font-black uppercase tracking-widest rounded-[1rem] border border-gray-100 hover:bg-white hover:shadow-antigravity transition-all"
          >
            Follow @coralgroupoff
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {REEL_IDS.map((id, idx) => (
            <InstagramReel key={id} reelId={id} />
          ))}
        </div>

        <div 
          className="mt-20 flex flex-col items-center gap-6 opacity-0 animate-fadeIn"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="w-20 h-[1px] bg-gray-100" />
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em]">Bringing Finance to Life</p>
        </div>
      </div>
    </section>
  )
}

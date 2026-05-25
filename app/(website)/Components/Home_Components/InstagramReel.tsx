"use client"

import React, { useState } from 'react'
import { Play, Instagram, Maximize2 } from 'lucide-react'

interface InstagramReelProps {
  reelId: string;
}

export default function InstagramReel({ reelId }: InstagramReelProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const reelUrl = `https://www.instagram.com/reel/${reelId}/`
  const embedUrl = `https://www.instagram.com/reel/${reelId}/embed`

  return (
    <div
      className="relative aspect-[9/16] w-full rounded-[1rem] overflow-hidden bg-gray-900 shadow-2xl group cursor-pointer border border-white/5 transition-all duration-500 hover:-translate-y-2"
    >
      <div className="absolute inset-0 z-0">
        {!isPlaying ? (
          <div className="w-full h-full bg-gradient-to-br from-[#2663eb]/40 to-indigo-900/40 flex flex-col items-center justify-center p-6 text-center">
             <Instagram className="w-12 h-12 text-white/10 mb-4 transition-transform group-hover:scale-110" />
             <p className="text-white/30 text-[9px] font-black uppercase tracking-[0.2em]">Featured Reel</p>
          </div>
        ) : (
          <iframe
            src={embedUrl}
            className="w-full h-full border-0"
            allowFullScreen
            scrolling="no"
          />
        )}
      </div>

      {!isPlaying && (
        <div 
          className="absolute inset-0 z-10 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300"
          onClick={() => setIsPlaying(true)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[1rem] bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform active:scale-95">
                <Play className="w-4 h-4 text-white fill-white" />
              </div>
              <div>
                <h4 className="text-white text-[11px] font-black uppercase tracking-widest truncate w-32">Play Reel</h4>
                <p className="text-white/50 text-[9px] font-medium">@coralgroupoff</p>
              </div>
            </div>
            
            <button
              className="w-8 h-8 rounded-[1rem] bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
            >
              <Maximize2 className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

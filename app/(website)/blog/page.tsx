"use client";

import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import Section_Banner from '../Components/Section_Banner';
import { CATEGORIES, POSTS } from './data';
import { motion, AnimatePresence } from 'framer-motion';

export default function BlogPage() {
   const [activeCategory, setActiveCategory] = useState("All");
   const [searchQuery, setSearchQuery] = useState("");

   const filteredPosts = POSTS.filter(post => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
   });

   return (
      <div className="pt-20 pb-24 min-h-screen bg-white">
         <Section_Banner
            title="Knowledge Repository"
            paragraph="Expert insights, legislative circulars, and strategic frameworks for the modern financial landscape."
         />

         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
            {/* Header with Search */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 mt-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
               <div className="max-w-3xl space-y-8">
                  <h2 className="text-[#2663eb] font-black tracking-[0.3em] uppercase text-[10px]">News & Insights</h2>
                  <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] tracking-tighter leading-tight">Articles & Insights</h1>
               </div>

               <div className="w-full lg:w-96 pb-2">
                  <div className="relative group">
                     <div className="absolute inset-0 bg-[#2663eb]/5 rounded-2xl blur-xl group-hover:bg-[#2663eb]/10 transition-all" />
                     <div className="relative flex items-center bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:border-[#2663eb]/30 transition-all">
                        <Search className="ml-6 text-slate-400" size={20} />
                        <input
                           type="text"
                           placeholder="Search insights..."
                           value={searchQuery}
                           onChange={(e) => setSearchQuery(e.target.value)}
                           className="w-full px-6 py-5 text-sm outline-none font-medium text-slate-900"
                        />
                     </div>
                  </div>
               </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-16 overflow-x-auto no-scrollbar pb-4">
               {CATEGORIES.map((cat) => (
                  <button
                     key={cat}
                     onClick={() => setActiveCategory(cat)}
                     className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                        activeCategory === cat 
                        ? "bg-[#2663eb] text-white shadow-xl shadow-[#2663eb]/20" 
                        : "bg-slate-50 text-slate-400 hover:bg-white hover:text-[#0F172A] hover:shadow-lg border border-transparent hover:border-slate-100"
                     }`}
                  >
                     {cat}
                  </button>
               ))}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               <AnimatePresence mode="popLayout">
                  {filteredPosts.map((post, i) => (
                     <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        key={post.slug}
                     >
                        <Link href={`/blog/${post.slug}`}>
                           <article className="group cursor-pointer space-y-8 h-full flex flex-col">
                              <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem] shadow-2xl group-hover:shadow-[#2663eb]/10 transition-all duration-700">
                                 <img
                                    src={post.image}
                                    alt={post.title}
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000 grayscale-[0.5] group-hover:grayscale-0"
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                 <div className="absolute top-8 left-8 px-5 py-2.5 bg-white/90 backdrop-blur-xl rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-[#0F172A] z-20 shadow-xl">
                                    {post.category}
                                 </div>
                              </div>

                              <div className="space-y-6 px-4 flex-grow flex flex-col">
                                 <div className="flex items-center gap-8 text-[10px] text-slate-400 font-black uppercase tracking-widest">
                                    <div className="flex items-center gap-2">
                                       <Calendar size={14} className="text-[#2663eb]" /> {post.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                       <User size={14} className="text-[#2663eb]" /> {post.author}
                                    </div>
                                 </div>

                                 <h3 className="text-xl md:text-2xl font-semibold text-[#0F172A] leading-tight group-hover:text-[#2663eb] transition-all duration-300 tracking-tight">
                                    {post.title}
                                 </h3>

                                 <p className="text-slate-500 font-medium leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                 </p>

                                 <div className="pt-4 mt-auto">
                                    <div className="flex items-center gap-3 font-black text-[#0F172A] group-hover:gap-5 transition-all uppercase tracking-[0.3em] text-[10px] border-b-2 border-transparent hover:border-[#2663eb] pb-2 w-fit">
                                       Examine Policy <ArrowRight size={18} className="text-[#2663eb]" />
                                    </div>
                                 </div>
                              </div>
                           </article>
                        </Link>
                     </motion.div>
                  ))}
               </AnimatePresence>
            </div>

            {filteredPosts.length === 0 && (
               <div className="py-32 text-center space-y-4">
                  <h3 className="text-2xl font-black text-slate-900">No mandates found.</h3>
                  <p className="text-slate-500 font-medium">Try adjusting your search or category filter.</p>
                  <button 
                     onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                     className="text-[#2663eb] font-black uppercase text-[10px] tracking-widest border-b-2 border-[#2663eb] pb-1"
                  >
                     Clear all filters
                  </button>
               </div>
            )}
         </section>
      </div>
   );
}

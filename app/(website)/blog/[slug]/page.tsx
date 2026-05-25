import React from 'react';
import { POSTS } from '../data';
import Link from 'next/link';
import {
   ArrowLeft, Calendar, User, Clock,
   Share2, MessageSquare, ShieldCheck,
   ChevronRight, ArrowRight
} from 'lucide-react';

export async function generateStaticParams() {
   return POSTS.map((post) => ({
      slug: post.slug,
   }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = await params;
   const post = POSTS.find((p) => p.slug === slug);

   if (!post) {
      return (
         <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center space-y-6">
               <h1 className="text-4xl font-black text-[#0F172A]">Policy Not Found</h1>
               <Link href="/blog" className="inline-flex items-center gap-2 text-[#2663eb] font-black uppercase tracking-widest text-xs">
                  <ArrowLeft size={16} /> Return to Archive
               </Link>
            </div>
         </div>
      );
   }

   const relatedPosts = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

   return (
      <div className="bg-white min-h-screen pt-40 pb-32 selection:bg-[#2663eb] selection:text-white">
         {/* Post Header */}
         <header className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
            <div className="flex items-center justify-between">
               <Link href="/blog" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-[#2663eb] transition-all group">
                  <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Back to Knowledge Base
               </Link>
               <div className="flex items-center gap-6">
                  <button className="w-10 h-10 rounded-[1rem] bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#2663eb] transition-all"><Share2 size={18} /></button>
               </div>
            </div>

            <div className="space-y-8 max-w-5xl">
               <div className="flex items-center gap-4">
                  <span className="px-4 py-1.5 bg-[#2663eb]/10 text-[#2663eb] rounded-[1rem] text-[10px] font-black uppercase tracking-widest border border-[#2663eb]/20">
                     {post.category}
                  </span>
                  <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest flex items-center gap-2">
                     <Clock size={14} /> 8 Min Read
                  </span>
               </div>
               <h1 className="text-4xl md:text-5xl font-semibold text-[#0F172A] tracking-tighter leading-[1.05]">
                  {post.title}
               </h1>
               <div className="flex items-center gap-8 pt-4">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-[1rem] bg-[#0F172A] flex items-center justify-center text-white font-black text-xl">
                        {post.author.charAt(0)}
                     </div>
                     <div>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Authored By</p>
                        <p className="text-sm font-black text-[#0F172A]">{post.author}</p>
                     </div>
                  </div>
                  <div className="h-10 w-px bg-slate-100" />
                  <div>
                     <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Published On</p>
                     <p className="text-sm font-black text-[#0F172A]">{post.date}</p>
                  </div>
               </div>
            </div>
         </header>

         {/* Hero Image */}
         <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-24">
            <div className="relative aspect-[21/9] rounded-[1rem] overflow-hidden shadow-4xl">
               <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
               />
            </div>
         </div>

         {/* Post Content */}
         <main className="max-w-7xl mx-auto px-6 lg:px-8 mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
               {/* Sidebar Tools */}
               <aside className="lg:col-span-3 hidden lg:block">
                  <div className="sticky top-32 space-y-12">
                     <div className="space-y-6">
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#2663eb]">In this Circular</p>
                        <ul className="space-y-4">
                           {["Policy Shift", "Vendor Strategy", "Cash Flow Impact"].map((item, i) => (
                              <li key={i} className="text-xs font-black text-slate-400 uppercase tracking-widest hover:text-[#0F172A] cursor-pointer transition-colors flex items-center gap-3">
                                 <ChevronRight size={14} className="text-[#2663eb]" /> {item}
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="p-8 bg-slate-50 rounded-[1rem] border border-slate-100 space-y-6">
                        <p className="text-xs font-black text-[#0F172A] uppercase tracking-widest">Need Clarity?</p>
                        <p className="text-[10px] text-slate-500 font-bold leading-relaxed uppercase tracking-widest">Schedule a strategic debrief with our experts.</p>
                        <Link href="/consultation" className="block text-center py-4 bg-[#0F172A] text-white rounded-[1rem] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#2663eb] transition-all">
                           Engage Advisor
                        </Link>
                     </div>
                  </div>
               </aside>

               {/* Main Article Content */}
               <article className="lg:col-span-7 prose prose-slate prose-lg max-w-none">
                  <div
                     className="text-[#0F172A] font-medium leading-[1.8] space-y-8 text-lg md:text-xl blog-content-area"
                     dangerouslySetInnerHTML={{ __html: post.content || '' }}
                  />

                  <div className="mt-24 pt-12 border-t border-slate-100 flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Filed Under:</span>
                        <div className="flex gap-2">
                           {["Compliance", "Strategy", "Taxation"].map((tag, i) => (
                              <span key={i} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-[1rem] text-[10px] font-black uppercase tracking-widest">#{tag}</span>
                           ))}
                        </div>
                     </div>
                     <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#2663eb] hover:underline">
                        Report Technical Error
                     </button>
                  </div>
               </article>

               {/* Right Sidebar - Empty or for ads/newsletter */}
               <aside className="lg:col-span-2"></aside>
            </div>
         </main>

         {/* Related Posts */}
         <section className="bg-slate-50 py-32 mt-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
               <div className="flex items-end justify-between">
                  <div className="space-y-4">
                     <span className="text-[10px] font-black text-[#2663eb] uppercase tracking-[0.5em]">Continuing Knowledge</span>
                     <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tighter">Related Circulars.</h2>
                  </div>
                  <Link href="/blog" className="hidden md:flex items-center gap-3 font-black text-[#0F172A] uppercase tracking-[0.3em] text-[10px] border-b-2 border-slate-200 pb-2 hover:border-[#2663eb] transition-all">
                     All Circulars <ArrowRight size={18} className="text-[#2663eb]" />
                  </Link>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {relatedPosts.map((post, i) => (
                     <Link key={i} href={`/blog/${post.slug}`}>
                        <div className="group bg-white p-8 rounded-[1rem] border border-slate-100 hover:border-[#2663eb]/20 hover:shadow-4xl transition-all duration-500">
                           <div className="aspect-video rounded-[1rem] overflow-hidden mb-8">
                              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                           </div>
                           <div className="space-y-4">
                              <p className="text-[10px] font-black text-[#2663eb] uppercase tracking-widest">{post.category}</p>
                              <h3 className="text-2xl font-black text-[#0F172A] group-hover:text-[#2663eb] transition-colors tracking-tight">{post.title}</h3>
                              <p className="text-sm text-slate-500 font-medium line-clamp-2">{post.excerpt}</p>
                           </div>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
         </section>

         {/* Newsletter Footer */}
         <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-32">
            <div className="bg-[#0F172A] rounded-[1rem] p-12 md:p-24 relative overflow-hidden group border border-white/10">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2663eb]/10 rounded-[1rem] blur-[120px] -mr-64 -mt-64"></div>
               <div className="lg:flex items-center gap-24 relative z-10 text-center lg:text-left">
                  <div className="flex-1 space-y-8">
                     <h2 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tighter">Stay Apprised.</h2>
                     <p className="text-xl text-slate-400 font-medium">Get technical summaries of regulatory shifts delivered to your inbox.</p>
                  </div>
                  <div className="flex-1 mt-16 lg:mt-0">
                     <div className="flex flex-col sm:flex-row gap-5 bg-white/5 backdrop-blur-xl p-3 rounded-[1rem] border border-white/10">
                        <input type="email" placeholder="Professional Email" className="px-8 py-5 rounded-[1rem] bg-transparent outline-none w-full font-black text-white placeholder:text-slate-500" />
                        <button className="bg-[#2663eb] hover:bg-[#1d4ed8] text-white px-10 py-5 rounded-[1rem] font-black transition-all">Subscribe</button>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}

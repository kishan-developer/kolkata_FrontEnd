"use client";

import React from 'react';
import { 
  Phone, Mail, MapPin, Send, MessageCircle, 
  ExternalLink, Clock, Facebook, Twitter, Linkedin 
} from 'lucide-react';
import Section_Banner from '../Components/Section_Banner';

export default function ContactPage() {
  return (
    <div className="pt-20 pb-24 bg-white min-h-screen">
      <Section_Banner 
        title="Contact VyaparSewa"
        paragraph="Seeking specific compliance advisory or interested in a retained corporate partnership? Our practice leads are ready for your mandate."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 mt-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-[#2663eb] font-black tracking-[0.3em] uppercase text-[10px]">Client Concierge</h2>
            <h1 className="text-4xl md:text-7xl font-black text-[#0F172A] leading-[1.05] tracking-tighter">
              Let's Talk <br/> <span className="text-[#2663eb]">Strategy</span>.
            </h1>
          </div>
          <div className="flex gap-4 pb-4">
             {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-5 bg-slate-50 text-[#0F172A] hover:bg-[#2663eb] hover:text-white rounded-[1rem] transition-all duration-300 border border-slate-100 shadow-sm">
                   <Icon size={24} />
                </a>
             ))}
          </div>
        </div>

        <div className="lg:flex gap-16 items-start">
           
           {/* Detailed Inquiry Form */}
           <div className="lg:w-[65%] animate-in fade-in slide-in-from-left-8 delay-200 duration-700">
              <div className="bg-[#F8FAFC] p-8 md:p-16 rounded-[1rem] border border-slate-100 shadow-sm relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#2663eb]/5 rounded-[1rem] group-hover:bg-[#2663eb]/10 transition-all duration-700"></div>
                 <form className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-[#2663eb] uppercase tracking-[0.2em] ml-1">Legal Name of Individual/Entity</label>
                       <input 
                         type="text" 
                         placeholder="John Smith & Co." 
                         className="w-full bg-white px-8 py-5 rounded-[1rem] border-2 border-transparent focus:border-[#2663eb] outline-none transition-all font-bold text-[#0F172A] shadow-sm" 
                       />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-[#2663eb] uppercase tracking-[0.2em] ml-1">Official Email Address</label>
                       <input 
                         type="email" 
                         placeholder="jsmith@corporate.com" 
                         className="w-full bg-white px-8 py-5 rounded-[1rem] border-2 border-transparent focus:border-[#2663eb] outline-none transition-all font-bold text-[#0F172A] shadow-sm" 
                       />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-[#2663eb] uppercase tracking-[0.2em] ml-1">Tele-Communication No.</label>
                       <input 
                         type="tel" 
                         placeholder="+91 --- --- ----" 
                         className="w-full bg-white px-8 py-5 rounded-[1rem] border-2 border-transparent focus:border-[#2663eb] outline-none transition-all font-bold text-[#0F172A] shadow-sm" 
                       />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-[#2663eb] uppercase tracking-[0.2em] ml-1">Matter Category</label>
                       <div className="relative">
                          <select className="w-full bg-white px-8 py-5 rounded-[1rem] border-2 border-transparent focus:border-[#2663eb] outline-none transition-all font-bold text-[#0F172A] appearance-none cursor-pointer shadow-sm">
                             <option>Statutory Audit Mandate</option>
                             <option>Income Tax Advisory</option>
                             <option>GST Legal Opinion</option>
                             <option>Corporate Restructuring</option>
                             <option>Other Operational Matter</option>
                          </select>
                       </div>
                    </div>
                    <div className="md:col-span-2 space-y-3">
                       <label className="text-[10px] font-black text-[#2663eb] uppercase tracking-[0.2em] ml-1">Brief Narrative of Mandate</label>
                       <textarea 
                         placeholder="Please provide initial context to help us assign the right practice lead..." 
                         rows={6}
                         className="w-full bg-white px-8 py-5 rounded-[1rem] border-2 border-transparent focus:border-[#2663eb] outline-none transition-all font-bold text-[#0F172A] resize-none shadow-sm" 
                       />
                    </div>
                    <div className="md:col-span-2 pt-6">
                       <button className="w-full bg-[#0F172A] hover:bg-slate-900 text-white py-6 rounded-[1rem] font-black text-lg flex items-center justify-center gap-4 transition-all shadow-2xl shadow-slate-200 group">
                          Initial Submission <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#2663eb]" />
                       </button>
                    </div>
                 </form>
              </div>
           </div>

           {/* Contact Info Sidebar */}
           <div className="lg:w-[35%] mt-20 lg:mt-0 space-y-12 animate-in fade-in slide-in-from-right-8 delay-300 duration-700">
              
              {/* WhatsApp Expedited Line */}
              <div className="bg-[#2663eb] p-12 rounded-[1rem] text-white space-y-8 shadow-2xl shadow-[#2663eb]/20 relative overflow-hidden group cursor-pointer border border-white/10">
                 <div className="absolute top-0 left-0 p-10 opacity-10 group-hover:-rotate-6 transition-transform duration-700 pointer-events-none">
                    <MessageCircle size={140} />
                 </div>
                 <h3 className="text-3xl font-black leading-none">Expedited <br/> Desk</h3>
                 <p className="text-white/80 font-medium leading-relaxed">For urgent queries regarding notices or time-bound filings.</p>
                 <button className="flex items-center gap-3 bg-[#0F172A] text-white px-8 py-4 rounded-[1rem] font-black hover:bg-slate-900 transition-all shadow-xl">
                    WhatsApp <ExternalLink size={18} className="text-[#2663eb]" />
                 </button>
              </div>

              {/* Direct Channels */}
              <div className="space-y-6">
                 {[
                   { icon: <Phone size={24}/>, label: "Institutional Hotline", val: "+91 95608 91932", bg: "bg-slate-50", text: "text-[#0F172A]" },
                   { icon: <Mail size={24}/>, label: "Engagement Mail", val: "mukesh@mukeshraj.com", bg: "bg-slate-50", text: "text-[#0F172A]" },
                   { icon: <MapPin size={24}/>, label: "Headquarters", val: "Plot 89, Okhla PH-3, New Delhi - 110020", bg: "bg-slate-50", text: "text-[#0F172A]" }
                 ].map((item, i) => (
                    <div key={i} className="flex items-start gap-6 p-8 rounded-[1rem] border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-500 group">
                       <div className={`p-4 ${item.bg} ${item.text} rounded-[1rem] group-hover:bg-[#0F172A] group-hover:text-white transition-all duration-500`}>
                         {item.icon}
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                          <p className="text-lg font-black text-[#0F172A] leading-tight">{item.val}</p>
                       </div>
                    </div>
                 ))}
              </div>

              {/* Operational Threshold */}
              <div className="p-10 rounded-[1rem] bg-slate-50 border border-slate-100 space-y-8">
                 <h4 className="font-black flex items-center gap-3 text-[#0F172A] text-lg uppercase tracking-tight">
                   <Clock size={20} className="text-[#2663eb]" /> Service Hours
                 </h4>
                 <div className="space-y-4 text-sm font-bold text-slate-500">
                    <div className="flex justify-between border-b border-slate-200 pb-4">
                       <span>Weekdays (IST)</span>
                       <span className="text-[#0F172A]">09:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-4">
                       <span>Saturday</span>
                       <span className="text-[#0F172A]">10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                       <span>Administrative Holiday</span>
                       <span className="text-[#2663eb] uppercase tracking-widest text-[10px]">Sunday Only</span>
                    </div>
                 </div>
              </div>

           </div>
        </div>

        {/* Geographic Hub */}
        <div className="mt-32">
           <div className="rounded-[1rem] overflow-hidden border-[12px] border-slate-50 bg-slate-100 aspect-video md:aspect-[21/9] relative shadow-2xl group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11211.205934395256!2d77.2612!3d28.5355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c417c8007d%3A0xc3191c964175317d!2sOkhla%20Phase%20III%2C%20Okhla%20Industrial%20Estate%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1713070000000!5m2!1sen!2sin" 
                className="w-full h-full border-0 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                allowFullScreen={true} 
                loading="lazy" 
              ></iframe>
              <div className="absolute top-10 left-10 p-6 bg-white/90 backdrop-blur-md rounded-[1rem] border border-white/20 shadow-2xl pointer-events-none group-hover:translate-x-4 transition-transform duration-700">
                 <p className="text-[10px] font-black text-[#2663eb] uppercase tracking-widest mb-1">HQ Direction</p>
                 <p className="text-sm font-black text-[#0F172A]">Sector 3, Okhla Estate <br/> New Delhi, IN</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}

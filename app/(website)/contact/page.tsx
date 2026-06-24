"use client";

import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Send, MessageCircle, 
  ExternalLink, Clock, Facebook, Twitter, Linkedin 
} from 'lucide-react';
import Section_Banner from '../Components/Section_Banner';
import { toast } from 'react-hot-toast';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    city: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:2001/api/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Your inquiry has been submitted successfully!', {
          duration: 4000,
          style: {
            borderRadius: '1rem',
            background: '#0F172A',
            color: '#fff',
            fontSize: '12px',
            fontWeight: 'bold',
            padding: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }
        });
        setFormData({ name: '', email: '', phone: '', service: '', city: '', message: '' });
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error('Failed to submit. Please try again.', {
          duration: 4000,
          style: {
            borderRadius: '1rem',
            background: '#ef4444',
            color: '#fff',
            fontSize: '12px',
            fontWeight: 'bold',
            padding: '16px',
          }
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred. Please try again.', {
        duration: 4000,
        style: {
          borderRadius: '1rem',
          background: '#ef4444',
          color: '#fff',
          fontSize: '12px',
          fontWeight: 'bold',
          padding: '16px',
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
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

        <div className="lg:flex gap-8 lg:gap-16 items-start flex-col lg:flex-row">
           
           {/* Detailed Inquiry Form */}
           <div className="lg:w-[65%] w-full animate-in fade-in slide-in-from-left-8 delay-200 duration-700">
              <div className="bg-[#F8FAFC] p-6 sm:p-8 md:p-16 rounded-[1rem] border border-slate-100 shadow-sm relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#2663eb]/5 rounded-[1rem] group-hover:bg-[#2663eb]/10 transition-all duration-700"></div>
                 <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 relative z-10">
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-[#2663eb] uppercase tracking-[0.2em] ml-1">Legal Name of Individual/Entity</label>
                       <input 
                         type="text" 
                         name="name"
                         value={formData.name}
                         onChange={handleChange}
                         required
                         placeholder="John Smith & Co." 
                         className="w-full bg-white px-4 sm:px-8 py-4 sm:py-5 rounded-[1rem] border-2 border-transparent focus:border-[#2663eb] outline-none transition-all font-bold text-[#0F172A] shadow-sm text-sm sm:text-base" 
                       />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-[#2663eb] uppercase tracking-[0.2em] ml-1">Official Email Address</label>
                       <input 
                         type="email" 
                         name="email"
                         value={formData.email}
                         onChange={handleChange}
                         required
                         placeholder="jsmith@corporate.com" 
                         className="w-full bg-white px-4 sm:px-8 py-4 sm:py-5 rounded-[1rem] border-2 border-transparent focus:border-[#2663eb] outline-none transition-all font-bold text-[#0F172A] shadow-sm text-sm sm:text-base" 
                       />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-[#2663eb] uppercase tracking-[0.2em] ml-1">Tele-Communication No.</label>
                       <input 
                         type="tel" 
                         name="phone"
                         value={formData.phone}
                         onChange={handleChange}
                         placeholder="+91 --- --- ----" 
                         className="w-full bg-white px-4 sm:px-8 py-4 sm:py-5 rounded-[1rem] border-2 border-transparent focus:border-[#2663eb] outline-none transition-all font-bold text-[#0F172A] shadow-sm text-sm sm:text-base" 
                       />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-[#2663eb] uppercase tracking-[0.2em] ml-1">Matter Category</label>
                       <div className="relative">
                          <select 
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full bg-white px-4 sm:px-8 py-4 sm:py-5 rounded-[1rem] border-2 border-transparent focus:border-[#2663eb] outline-none transition-all font-bold text-[#0F172A] appearance-none cursor-pointer shadow-sm text-sm sm:text-base"
                          >
                             <option value="">Select a service</option>
                             <option value="Statutory Audit Mandate">Statutory Audit Mandate</option>
                             <option value="Income Tax Advisory">Income Tax Advisory</option>
                             <option value="GST Legal Opinion">GST Legal Opinion</option>
                             <option value="Corporate Restructuring">Corporate Restructuring</option>
                             <option value="Company Registration">Company Registration</option>
                             <option value="GST Registration">GST Registration</option>
                             <option value="Income Tax Filing">Income Tax Filing</option>
                             <option value="Other Operational Matter">Other Operational Matter</option>
                          </select>
                       </div>
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-[#2663eb] uppercase tracking-[0.2em] ml-1">City</label>
                       <input 
                         type="text" 
                         name="city"
                         value={formData.city}
                         onChange={handleChange}
                         required
                         placeholder="Enter your city" 
                         className="w-full bg-white px-4 sm:px-8 py-4 sm:py-5 rounded-[1rem] border-2 border-transparent focus:border-[#2663eb] outline-none transition-all font-bold text-[#0F172A] shadow-sm text-sm sm:text-base" 
                       />
                    </div>
                    <div className="md:col-span-2 space-y-3">
                       <label className="text-[10px] font-black text-[#2663eb] uppercase tracking-[0.2em] ml-1">Brief Narrative of Mandate</label>
                       <textarea 
                         name="message"
                         value={formData.message}
                         onChange={handleChange}
                         required
                         placeholder="Please provide initial context to help us assign the right practice lead..." 
                         rows={6}
                         className="w-full bg-white px-4 sm:px-8 py-4 sm:py-5 rounded-[1rem] border-2 border-transparent focus:border-[#2663eb] outline-none transition-all font-bold text-[#0F172A] resize-none shadow-sm text-sm sm:text-base" 
                       />
                    </div>
                    <div className="md:col-span-2 pt-6">
                       <button
                         disabled={isSubmitting}
                         type="submit"
                         className="w-full bg-[#0F172A] hover:bg-slate-900 text-white py-4 sm:py-6 rounded-[1rem] font-black text-sm sm:text-lg flex items-center justify-center gap-4 transition-all shadow-2xl shadow-slate-200 group disabled:opacity-50 disabled:cursor-not-allowed"
                       >
                          {isSubmitting ? (
                            <div className="flex items-center gap-3">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Processing...
                            </div>
                          ) : (
                            <>
                              Initial Submission <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#2663eb]" />
                            </>
                          )}
                       </button>
                    </div>
                 </form>
              </div>
           </div>

           {/* Contact Info Sidebar */}
           <div className="lg:w-[35%] w-full mt-8 lg:mt-0 space-y-8 lg:space-y-12 animate-in fade-in slide-in-from-right-8 delay-300 duration-700">
              
              {/* WhatsApp Expedited Line */}
              <div className="bg-[#2663eb] p-6 sm:p-12 rounded-[1rem] text-white space-y-6 sm:space-y-8 shadow-2xl shadow-[#2663eb]/20 relative overflow-hidden group cursor-pointer border border-white/10">
                 <div className="absolute top-0 left-0 p-10 opacity-10 group-hover:-rotate-6 transition-transform duration-700 pointer-events-none">
                    <MessageCircle size={140} />
                 </div>
                 <h3 className="text-2xl sm:text-3xl font-black leading-none">Expedited <br/> Desk</h3>
                 <p className="text-white/80 font-medium leading-relaxed text-sm sm:text-base">For urgent queries regarding notices or time-bound filings.</p>
                 <button className="flex items-center gap-3 bg-[#0F172A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-[1rem] font-black hover:bg-slate-900 transition-all shadow-xl text-sm sm:text-base">
                    WhatsApp <ExternalLink size={18} className="text-[#2663eb]" />
                 </button>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4 sm:space-y-6">
                 {[
                   { icon: <Phone size={24}/>, label: "Institutional Hotline", val: "+91 98765 43210", bg: "bg-slate-50", text: "text-[#0F172A]" },
                   { icon: <Mail size={24}/>, label: "Engagement Mail", val: "info@vyaparsewa.com", bg: "bg-slate-50", text: "text-[#0F172A]" },
                   { icon: <MapPin size={24}/>, label: "Headquarters", val: "Plot 89, Okhla PH-3, New Delhi - 110020", bg: "bg-slate-50", text: "text-[#0F172A]" }
                 ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 sm:gap-6 p-6 sm:p-8 rounded-[1rem] border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-500 group">
                       <div className={`p-3 sm:p-4 ${item.bg} ${item.text} rounded-[1rem] group-hover:bg-[#0F172A] group-hover:text-white transition-all duration-500 shrink-0`}>
                         {item.icon}
                       </div>
                       <div className="space-y-1 min-w-0">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                          <p className="text-base sm:text-lg font-black text-[#0F172A] leading-tight break-words">{item.val}</p>
                       </div>
                    </div>
                 ))}
              </div>

              {/* Operational Threshold */}
              <div className="p-6 sm:p-10 rounded-[1rem] bg-slate-50 border border-slate-100 space-y-6 sm:space-y-8">
                 <h4 className="font-black flex items-center gap-3 text-[#0F172A] text-base sm:text-lg uppercase tracking-tight">
                   <Clock size={20} className="text-[#2663eb]" /> Service Hours
                 </h4>
                 <div className="space-y-4 text-xs sm:text-sm font-bold text-slate-500">
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

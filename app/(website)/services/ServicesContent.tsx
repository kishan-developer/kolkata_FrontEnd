"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, ArrowRight, CheckCircle2,
  Search, ExternalLink, MessageSquare,
  Shield, Clock, Activity,
  Settings, Plus, Minus, Star, Quote
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SERVICE_CATEGORIES, ServiceCategory } from '../data/services';


const FAQ_DATA = [
  {
    q: "What is the deadline for filing Income Tax Returns (ITR)?",
    a: "The standard deadline for individuals is July 31st. For businesses requiring audit, the deadline is usually October 31st of the assessment year."
  },
  {
    q: "Who needs to register for GST?",
    a: "GST registration is mandatory for businesses with a turnover exceeding ₹40 lakhs (goods) or ₹20 lakhs (services). Specific rules apply for North-Eastern states and inter-state sellers."
  },
  {
    q: "What documents are required for company registration?",
    a: "Key documents include PAN and Aadhaar of directors, proof of registered office address (utility bill), and a No Objection Certificate (NOC) from the owner."
  },
  {
    q: "How can I track my tax refund status?",
    a: "You can track your refund status on the Income Tax e-filing portal using your PAN and the assessment year for which you filed."
  },
  {
    q: "What are the benefits of MSME registration?",
    a: "Benefits include easier access to loans at lower interest rates, eligibility for government tenders, and protection against delayed payments."
  },
  {
    q: "Is audit mandatory for all businesses?",
    a: "No, statutory audit is mandatory for companies. For individuals and firms, tax audit is mandatory only if turnover exceeds specific thresholds (currently ₹1 Cr for business, ₹50 lakhs for professions)."
  },
  {
    q: "What is TDS and who is liable to deduct it?",
    a: "Tax Deducted at Source (TDS) is a system where the person making a payment (e.g., salary, rent) deducts a portion of the tax before paying the recipient."
  },
  {
    q: "Can I file ITR with multiple sources of income?",
    a: "Yes, you can file your ITR even if you have income from salary, house property, business, and capital gains. Our experts can help you choose the correct ITR form."
  },
  {
    q: "What are the penalties for late GST filing?",
    a: "Late fees for Nil returns is ₹20/day, while for others it is ₹50/day, subject to a maximum cap. Interest at 18% p.a. is also applicable on late payments."
  },
  {
    q: "How do I register my startup for tax exemptions?",
    a: "You must first register with DPIIT (Department for Promotion of Industry and Internal Trade) and then apply for Section 80-IAC tax exemption."
  },
  {
    q: "What is a Digital Signature Certificate (DSC)?",
    a: "A DSC is an electronic signature used for signing digital documents. It is mandatory for filing company and LLP forms with the MCA."
  },
  {
    q: "How often should I conduct a statutory audit?",
    a: "Statutory audits must be conducted annually at the end of each financial year for all registered companies."
  },
  {
    q: "What are the different types of GST returns?",
    a: "The main returns are GSTR-1 (sales), GSTR-3B (summary), and GSTR-9 (annual return). Filing frequency depends on turnover."
  },
  {
    q: "How can I claim tax deductions under Section 80C?",
    a: "You can claim deductions by investing in eligible instruments like PPF, ELSS, LIC, or paying tuition fees and home loan principal (up to ₹1.5 Lakhs)."
  },
  {
    q: "What is the procedure for closing a company?",
    a: "A company can be closed through the 'Fast Track Exit' scheme (Strike Off) if it hasn't carried out business for 2 years or has zero liabilities."
  }
];

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "CEO, TechVibe Solutions",
    text: "VyaparSeva transformed our compliance workflow. Their expertise in GST and ROC matters is unmatched. They feel like an extension of our own team.",
    image: "https://i.pravatar.cc/150?u=rahul"
  },
  {
    name: "Priya Mehta",
    role: "Freelance Brand Designer",
    text: "As a freelancer, taxes were always a headache. VyaparSeva made ITR filing so simple and stress-free! I finally understand where my money is going.",
    image: "https://i.pravatar.cc/150?u=priya"
  },
  {
    name: "Sanjay Gupta",
    role: "Director, Gupta Logistics",
    text: "We’ve been using their audit services for 3 years. Extremely professional, timely, and thorough. Their strategic advice has saved us millions in tax.",
    image: "https://i.pravatar.cc/150?u=sanjay"
  }
];


const ServicesContent = () => {
  const [activeCategory, setActiveCategory] = useState(SERVICE_CATEGORIES[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  const handleRequestClick = (service: string = "General Inquiry") => {
    router.push(`/services/request?service=${encodeURIComponent(service)}`);
  };

  // Update active category on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = SERVICE_CATEGORIES.map(cat => document.getElementById(cat.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveCategory(SERVICE_CATEGORIES[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const filteredCategories = SERVICE_CATEGORIES.filter(cat =>
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );


  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };


  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Hero Header */}
      <section className="bg-slate-900 pt-48 pb-32 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-5%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-indigo-400 bg-white/5 px-6 py-2 rounded-full border border-white/10">
              Institutional Practice
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Exhaustive</span> <br /> Capabilities.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Explore our comprehensive portfolio of strategic auditing, tax optimization, and regulatory advisory services.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto relative group pt-8"
          >
            <div className="absolute -inset-4 bg-indigo-500/20 rounded-lg blur-2xl group-hover:bg-indigo-500/30 transition-all" />
            <div className="relative flex items-center bg-white/5 backdrop-blur-3xl border border-white/10 rounded-lg overflow-hidden shadow-2xl">
              <Search className="ml-8 text-slate-500" size={28} />
              <input
                type="text"
                placeholder="Search for services (e.g. 'ITR', 'GST', 'Audit')"
                className="w-full bg-transparent px-8 py-8 text-white placeholder-slate-600 outline-none font-bold text-xl"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>



      {/* Main Body with Sidebar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-4 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Mobile Category Chips */}
          <div className="lg:hidden -mx-6 px-6 overflow-x-auto pb-4 no-scrollbar flex items-center gap-3 sticky top-[4.5rem] bg-slate-50/80 backdrop-blur-md z-40">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`flex-shrink-0 px-6 py-3 rounded-lg text-xs font-bold transition-all border ${activeCategory === cat.id
                  ? "bg-[#2663eb] text-white border-[#2663eb] shadow-lg shadow-[#2663eb]/20"
                  : "bg-white text-slate-500 border-slate-100"
                  }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Sticky Sidebar Navigation */}
          <aside className="hidden lg:block w-50 h-fit sticky top-32 space-y-8">
            <div className="space-y-2">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4">Categories</h4>
              <nav className="space-y-1">
                {SERVICE_CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => scrollToCategory(cat.id)}
                      className={`w-full flex items-center gap-4 px-4 py-4 rounded-lg font-bold text-sm transition-all text-left ${isActive
                        ? "bg-[#2663eb] text-white shadow-xl shadow-[#2663eb]/20 translate-x-2"
                        : "text-slate-500 hover:bg-white hover:text-slate-900 hover:translate-x-1"
                        }`}
                    >
                      <Icon size={18} className={isActive ? "text-white" : "text-[#2663eb]"} />
                      {cat.title}
                      {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, debitis?</p> */}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Support Box */}
            <div className="p-6 bg-[#0F172A] rounded-lg text-white space-y-4">
              <h5 className="font-bold text-sm">Need a custom plan?</h5>
              <p className="text-xs text-slate-400 leading-relaxed">Our partners can craft a bespoke compliance framework for your specific business needs.</p>
              <button
                onClick={() => handleRequestClick("Custom Compliance Framework")}
                className="inline-flex items-center gap-2 text-[#2663eb] text-xs font-black uppercase tracking-widest group"
              >
                Talk to expert <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </aside>


          {/* Service Sections Content */}
          <main className="flex-1 space-y-48">
            {filteredCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <section key={cat.id} id={cat.id} className="scroll-mt-48 space-y-16">

                  <div className="space-y-6 text-center lg:text-left">
                    <span className="text-[10px] font-bold text-[#2663eb] uppercase tracking-[0.5em]">{cat.id.replace("-", " ")}</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#0F172A] tracking-tight">{cat.title}.</h2>
                    <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">{cat.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {cat.items.map((item, i) => (
                      <Link
                        key={i}
                        href={`/services/${cat.id}/${item.slug}`}
                        className="group bg-white px-10 py-4 rounded-lg border border-slate-100 flex flex-col items-center justify-between gap-3 hover:border-[#2663eb]/20 hover:shadow-4xl transition-all"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-16 h-16 bg-[#2663eb]/10 rounded-lg flex items-center justify-center text-[#2663eb] group-hover:bg-[#2663eb] group-hover:text-white transition-all">
                            <CheckCircle2 size={32} />
                          </div>
                          <span className="text-xl font-bold text-slate-700 group-hover:text-slate-900 transition-colors leading-tight">{item.name}</span>
                          <p className='text-center text-slate-500'>{item.description}</p>
                        </div>
                        <div className="view_details flex items-center gap-2">
                          <span className="text-md font-semibold text-[#2663eb] group-hover:text-[#2663eb] transition-colors">View Details</span>
                          <ArrowRight size={24} className="text-slate-300 group-hover:text-[#2663eb] group-hover:translate-x-2 transition-all flex-shrink-0" />
                        </div>
                        
                      </Link>
                    ))}
                  </div>

                  <div className="pt-8 text-center lg:text-left">
                    <Link href={`/services/${cat.id}`} className="inline-flex items-center gap-4 bg-[#0F172A] text-white px-10 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-[#2663eb] transition-all shadow-xl group">
                      Explore all {cat.title} services <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>

                </section>
              );
            })}
          </main>

        </div>
      </div>


      {/* Testimonials Section */}
      <section className="bg-white py-32 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-7xl font-bold text-[#0F172A] tracking-tighter">Trusted by Leaders.</h2>
            <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">See how we're helping businesses across India achieve regulatory excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-12 rounded-lg border border-slate-100 relative group"
              >
                <Quote className="absolute top-8 right-8 text-[#2663eb]/10" size={64} />
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-[#2663eb] text-[#2663eb]" />)}
                </div>
                <p className="text-lg text-slate-600 font-medium mb-10 leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-white shadow-lg" />
                  <div>
                    <h4 className="font-bold text-[#0F172A]">{t.name}</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-32 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-7xl font-bold text-[#0F172A] tracking-tighter">Common Queries.</h2>
            <p className="text-xl text-slate-400 font-medium">Everything you need to know about our services and compliance.</p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-8 text-left group"
                >
                  <span className="text-lg font-bold text-slate-700 group-hover:text-[#2663eb] transition-colors">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === idx ? 'bg-[#2663eb] text-white rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                    <Plus size={18} className={openFaq === idx ? 'hidden' : 'block'} />
                    <Minus size={18} className={openFaq === idx ? 'block' : 'hidden'} />
                  </div>
                </button>

                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-slate-50"
                    >
                      <div className="p-8 text-slate-500 font-medium leading-relaxed bg-slate-50/30">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="mt-20 p-12 bg-[#2663eb] rounded-lg text-center text-white space-y-8 shadow-2xl shadow-[#2663eb]/20 overflow-hidden relative group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight relative z-10">Still have questions?</h3>
            <p className="text-lg text-white/80 font-medium max-w-xl mx-auto relative z-10">Our tax and legal advisors are available for a one-on-one consultation to discuss your specific requirements.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <Link href="/contact" className="w-full sm:w-auto bg-white text-[#2663eb] px-10 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">
                Book Free Consultation
              </Link>
              <button
                onClick={() => handleRequestClick("General Inquiry")}
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition-all"
              >
                Drop a Message
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesContent;

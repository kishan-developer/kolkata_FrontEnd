"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowRight, CheckCircle2,
  ShieldCheck,
  Zap, Check,
  ChevronDown, Clock,
  FileCheck, CreditCard,
  Star, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServiceDetailContent({ data }: { data: any }) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', city: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = ['overview', 'definition', 'benefits', 'included', 'process', 'documents', 'pricing', 'audience', 'faq'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 400;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRequestClick = () => {
    router.push(`/services/request?service=${encodeURIComponent(data.title)}`);
  };

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.city) return;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowThankYou(true);
    setFormData({ name: '', phone: '', city: '' });
  };

  return (
    <div className="bg-white selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden min-h-screen pt-20">

      {/* --- Breadcrumb --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-4">
        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <span>/</span>
          <span className="text-blue-600">{data.title}</span>
        </div>
      </div>

      {/* --- Hero Section --- */}
      <section id="overview" className="relative pb-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 pt-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-[10px] font-extrabold text-blue-600 uppercase tracking-[0.3em]">
                  <div className="w-8 h-[2px] bg-blue-600" />
                  {data.category || "Service Details"}
                </div>

                <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                  {data.heroTitle || `Start Your ${data.title} Business in India`}
                </h1>

                <p className="text-lg text-slate-500 font-medium max-w-xl leading-relaxed">
                  {data.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleRequestClick}
                  className="px-10 py-5 bg-blue-600 text-white rounded-lg font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
                >
                  Start Now →
                </button>
                <Link href="/consultation" className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all">
                  Free Consultation
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-8 lg:gap-12 pt-6">
                {(data.stats || [
                  { value: "1000+", label: "Registered" },
                  { value: "SECURE", label: "Documentation" }
                ]).map((stat: any, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i === 0 ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                      {i === 0 ? <CheckCircle2 size={20} /> : <ShieldCheck size={20} />}
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900 leading-none uppercase">{stat.value}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form - Quick Inquiry */}
            <div className="lg:col-span-5 relative mt-10 lg:mt-0">
              <div className="absolute -inset-4 bg-blue-600/5 rounded-lg blur-2xl" />
              <div className="relative bg-white rounded-lg border border-slate-100 shadow-2xl p-10 space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Quick Inquiry</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Get Expert Call back in 15 Minutes</p>
                </div>

                <form className="space-y-4" onSubmit={handleQuickSubmit}>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-lg outline-none focus:border-blue-600 focus:bg-white transition-all text-sm font-medium"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-lg outline-none focus:border-blue-600 focus:bg-white transition-all text-sm font-medium"
                  />
                  <input
                    type="text"
                    required
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-lg outline-none focus:border-blue-600 focus:bg-white transition-all text-sm font-medium"
                  />
                  <button
                    disabled={isSubmitting}
                    className="w-full py-5 bg-blue-600 text-white rounded-lg font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Now'
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Thank You Modal --- */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setShowThankYou(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center space-y-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowThankYou(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={16} />
              </button>
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} className="text-green-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900">Thank You!</h3>
                <p className="text-slate-500 font-medium">
                  Your inquiry has been submitted successfully. Our team will reach out to you within 15 minutes.
                </p>
              </div>
              <button
                onClick={() => setShowThankYou(false)}
                className="w-full py-4 bg-blue-600 text-white rounded-lg font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
              >
                Got It
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Section: Services Grid (Category Page) --- */}
      {data.items && (
        <section id="services" className="py-24 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">Our Offerings</span>
              <h2 className="text-5xl font-black text-slate-900 tracking-tight uppercase">Explore Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.items.map((item: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block h-full p-8 bg-white rounded-lg border border-slate-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 group"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </h3>
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- Section: Definition --- */}
      <section id="definition" className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square bg-white rounded-lg border border-slate-200 shadow-xl overflow-hidden relative group">
                <img
                  src={data.image || "/services_images/registrations.png"}
                  alt={data.title}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-all" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl" />
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">Definition</span>
                <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase">What is {data.title}?</h2>
              </div>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-600 font-medium leading-relaxed italic">
                  {data.definition || `A ${data.title} registration is the foundational step for ${data.targetAudience?.[0] || 'entrepreneurs'} to formalize their business operations in India.`}
                </p>
                <p className="text-slate-500 font-medium leading-relaxed mt-4">
                  {data.definitionLong || `Formalizing your entity as a ${data.title} provides you with legal standing, better access to banking, and eligibility for various government schemes. It is widely chosen for its simplicity and operational ease.`}
                </p>
              </div>
              <div className="p-8 bg-blue-50 border border-blue-100 rounded-lg">
                <p className="text-slate-700 font-bold leading-relaxed">
                  "{data.definitionQuote || `Best for small businesses, freelancers, shop owners, and consultants looking for minimal compliance.`}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section: Benefits --- */}
      <section id="benefits" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">The Advantages</span>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight uppercase">Key Benefits</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(data.benefitsRich || data.benefits).map((benefit: any, i: number) => {
              const isObject = typeof benefit === 'object';
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-lg bg-white border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">
                    {isObject ? benefit.title : benefit}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {isObject ? benefit.desc : `Get full control and minimal legal formalities with our streamlined process.`}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- Section: Registration Process --- */}
      {data.process && (
        <section id="process" className="py-32 bg-slate-50/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-4 mb-20">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">The Journey</span>
              <h2 className="text-5xl font-black text-slate-900 tracking-tight uppercase">Registration Process</h2>
            </div>

            <div className="relative">
              {/* Desktop Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {data.process.map((step: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative bg-white p-8 rounded-lg border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
                  >
                    <div className="w-14 h-14 bg-blue-600 text-white rounded-lg flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                      {i + 1}
                    </div>
                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-3">{step.t}</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.d}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- Section: Documents Required --- */}
      {data.docs && (
        <section id="documents" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-4 space-y-6">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">Paperwork</span>
                <h2 className="text-5xl font-black text-slate-900 tracking-tight uppercase leading-[1.1]">Documents <br /> Required</h2>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Keep these documents ready for a smooth and fast registration process. Digital copies are preferred.
                </p>
                <div className="pt-6">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 text-green-700 rounded-full text-xs font-black uppercase tracking-widest">
                    <FileCheck size={16} />
                    Verified Documentation
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array.isArray(data.docs) ? (
                  <div className="col-span-2 bg-slate-50 p-8 rounded-lg border border-slate-100">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {data.docs.map((doc: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 uppercase tracking-wide">
                          <div className="w-2 h-2 rounded-full bg-blue-600" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  Object.entries(data.docs).map(([key, docs]: [string, any], i: number) => (
                    <div key={i} className="p-8 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors">
                      <h3 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-6 border-b border-slate-200 pb-4">{key}</h3>
                      <ul className="space-y-4">
                        {docs.map((doc: string, j: number) => (
                          <li key={j} className="flex items-start gap-3 text-[13px] font-bold text-slate-700 uppercase tracking-wider leading-snug">
                            <CheckCircle2 size={14} className="mt-0.5 text-blue-600 flex-shrink-0" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- Section: Pricing & Timeline --- */}
      {(data.timeline || data.pricingFactors) && (
        <section id="pricing" className="py-32 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-4 mb-20">
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">Investment & Time</span>
              <h2 className="text-5xl font-black text-white tracking-tight uppercase">Pricing & Timeline</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Timeline */}
              <div className="space-y-8">
                <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                  <Clock className="text-blue-400" />
                  Expected Timeline
                </h3>
                <div className="space-y-4">
                  {(data.timeline || []).map((item: any, i: number) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                      <span className="text-sm font-bold uppercase tracking-widest text-slate-300">{item.label}</span>
                      <span className="text-sm font-black text-blue-400 uppercase tracking-widest">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Factors */}
              <div className="space-y-8">
                <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                  <CreditCard className="text-blue-400" />
                  Pricing Factors
                </h3>
                <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm space-y-6">
                  <p className="text-slate-400 font-medium leading-relaxed">
                    The total cost of registration is influenced by several external factors:
                  </p>
                  <ul className="space-y-4">
                    {(data.pricingFactors || []).map((factor: string, i: number) => (
                      <li key={i} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        {factor}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <button
                      onClick={handleRequestClick}
                      className="w-full py-5 bg-blue-600 text-white rounded-lg font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/40"
                    >
                      Get Exact Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- Section: Who should choose this? (Blue Banner) --- */}
      <section id="audience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-blue-600 rounded-lg p-12 lg:p-20 relative overflow-hidden shadow-2xl shadow-blue-600/30">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
                  Who Should <br /> Choose This?
                </h2>
                <p className="text-blue-50 font-medium text-lg max-w-md">
                  {data.audienceDesc || `Ideal for individual entrepreneurs and small business owners who want minimal complexity and maximum control.`}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {data.targetAudience.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg group hover:bg-white/20 transition-all">
                    <Check size={16} className="text-white" />
                    <span className="text-xs font-black text-white uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section: What's Included? --- */}
      <section id="included" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">Comprehensive Support</span>
                <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight uppercase">What's Included?</h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {(data.scope || data.included || []).map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                      <Check size={14} />
                    </div>
                    <span className="text-sm font-bold text-slate-700 uppercase tracking-wider group-hover:text-slate-900 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sticky top-32 bg-slate-900 rounded-lg p-12 text-white space-y-10 shadow-2xl">
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight">Need Specific <br /> Customisations?</h3>
                <p className="text-slate-400 font-medium leading-relaxed">Our experts can tailor a compliance package specifically for your business needs.</p>
              </div>
              <button
                onClick={handleRequestClick}
                className="w-full py-5 bg-white text-slate-900 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all"
              >
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section: Pricing & Timeline --- */}
      {data.pricingTimeline && (
        <section id="pricing" className="py-32 bg-slate-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-4 mb-20">
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">Investment & Time</span>
              <h2 className="text-5xl font-black text-white tracking-tight uppercase">Pricing & Timeline</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.pricingTimeline.map((item: any, i: number) => (
                <div key={i} className="p-10 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <Clock size={24} />
                  </div>
                  <h3 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-2">{item.label}</h3>
                  <p className="text-2xl font-black text-white uppercase tracking-tight mb-4">{item.value}</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- Section: Reviews --- */}
      <section id="reviews" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">Testimonials</span>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight uppercase">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(data.reviews || []).map((review: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-lg bg-white border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      size={16}
                      className={`${starIdx < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-8 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-black text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{review.name}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section: FAQ --- */}

      <section id="faq" className="py-32 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">Common Queries</span>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight uppercase">FAQ</h2>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq: any, i: number) => (
              <div key={i} className={`rounded-lg border transition-all duration-300 overflow-hidden ${activeFaq === i ? 'border-blue-600 bg-white shadow-xl' : 'border-slate-100 bg-white hover:border-blue-200'}`}>
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <span className="text-base font-black text-slate-900 uppercase tracking-tight pr-10">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all flex-shrink-0 ${activeFaq === i ? 'bg-blue-600 border-blue-600 text-white rotate-180' : 'text-slate-400 border-slate-100'}`}>
                    <ChevronDown size={16} strokeWidth={3} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-slate-50"
                    >
                      <div className="p-8 pt-6 text-slate-500 font-medium text-base leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Spacing */}
      <div className="h-20" />
    </div>
  );
}

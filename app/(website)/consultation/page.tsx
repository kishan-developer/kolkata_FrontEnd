"use client";

import React, { useState } from 'react';
import ConsultationHero from '../consultation/Components/ConsultationHero';
import BookingModal from '../consultation/Components/BookingModal';
import FAQSection from '../consultation/Components/FAQSection';
import SuccessStoriesSection from '../consultation/Components/SuccessStoriesSection';
import TestimonialsSection from './Components/TestimonialsSection';
import { motion } from 'framer-motion';

export default function ConsultationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBook = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* <ConsultationHero /> */}

      <section className="py-30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2663eb]/20 to-transparent opacity-50"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2663eb]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1d4ed8]/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-[#2663eb]/20 text-[#60a5fa] text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-6 border border-[#2663eb]/30">
                Expert Consultation
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Transform Your Business With Expert Guidance
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Connect with industry veterans who've helped hundreds of businesses achieve their goals. Get actionable insights and personalized strategies.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2663eb]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">15+ Years Industry Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2663eb]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">Flexible Scheduling Options</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2663eb]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">Instant Results & Actionable Plans</span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-[#60a5fa]">4.9</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Rating</div>
                </div>
                <div className="w-px h-12 bg-slate-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#60a5fa]">124+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Clients</div>
                </div>
                <div className="w-px h-12 bg-slate-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#60a5fa]">15+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Years</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#2663eb] to-[#1d4ed8] rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>

                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold text-white mb-4">Book Your Consultation</h3>
                  <p className="text-slate-400 mb-6">Get expert guidance for your business needs</p>
                  <button
                    onClick={handleBook}
                    className="px-8 py-3 bg-[#2663eb] text-white rounded-xl font-bold hover:bg-[#1d4ed8] transition-all"
                  >
                    Book Now
                  </button>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for consultation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#0F172A] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2663eb]/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Why Choose Us</h2>
            <p className="text-slate-400 font-medium text-lg">Expert guidance tailored to your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-2xl border border-slate-700/50 hover:border-[#2663eb]/50 transition-all">
              <div className="w-14 h-14 bg-[#2663eb]/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Verified Experts</h3>
              <p className="text-slate-400 leading-relaxed">All our consultants are certified professionals with proven track records in their respective fields.</p>
            </div>

            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-2xl border border-slate-700/50 hover:border-[#2663eb]/50 transition-all">
              <div className="w-14 h-14 bg-[#2663eb]/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Flexible Scheduling</h3>
              <p className="text-slate-400 leading-relaxed">Book consultations at your convenience with our easy-to-use scheduling system and multiple time slots.</p>
            </div>

            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-2xl border border-slate-700/50 hover:border-[#2663eb]/50 transition-all">
              <div className="w-14 h-14 bg-[#2663eb]/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Personalized Solutions</h3>
              <p className="text-slate-400 leading-relaxed">Get tailored advice specific to your business challenges and goals for maximum impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-[#0F172A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">How It Works</h2>
            <p className="text-slate-400 font-medium text-lg">Simple steps to get expert consultation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2663eb] to-[#1d4ed8] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-[#2663eb]/30">1</div>
              <h3 className="text-lg font-bold text-white mb-2">Choose Expert</h3>
              <p className="text-slate-400 text-sm">Select from our verified panel of experts</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2663eb] to-[#1d4ed8] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-[#2663eb]/30">2</div>
              <h3 className="text-lg font-bold text-white mb-2">Pick Time Slot</h3>
              <p className="text-slate-400 text-sm">Choose a convenient time for your consultation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2663eb] to-[#1d4ed8] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-[#2663eb]/30">3</div>
              <h3 className="text-lg font-bold text-white mb-2">Make Payment</h3>
              <p className="text-slate-400 text-sm">Secure payment with instant confirmation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2663eb] to-[#1d4ed8] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-[#2663eb]/30">4</div>
              <h3 className="text-lg font-bold text-white mb-2">Get Consultation</h3>
              <p className="text-slate-400 text-sm">Receive expert guidance via video call</p>
            </div>
          </div>
        </div>
      </section>


      {/* Expert Profiles Section - Removed personal details */}

      {/* Success Stories Section */}
      <section className="py-24 bg-[#0F172A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Success Stories</h2>
            <p className="text-slate-400 font-medium text-lg">Real results from businesses we've helped transform</p>
          </div>

          <SuccessStoriesSection />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#0F172A] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2663eb]/5 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Client Testimonials</h2>
            <p className="text-slate-400 font-medium text-lg">What our clients say about working with us</p>
          </div>

          <TestimonialsSection />
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-24 bg-[#0F172A] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400 font-medium text-lg">Everything you need to know about our consultation services</p>
          </div>

          <FAQSection />
        </div>
      </section>

      <BookingModal 
        mentor={null}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

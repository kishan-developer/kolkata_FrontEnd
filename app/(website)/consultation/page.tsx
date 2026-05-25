"use client";

import React, { useState } from 'react';
import ConsultationHero from '../consultation/Components/ConsultationHero';
import MentorCard from '../consultation/Components/MentorCard';
import BookingModal from '../consultation/Components/BookingModal';
import FAQSection from '../consultation/Components/FAQSection';
import ExpertProfilesSection from '../consultation/Components/ExpertProfilesSection';
import SuccessStoriesSection from '../consultation/Components/SuccessStoriesSection';
import TestimonialsSection from './Components/TestimonialsSection';
import { MENTORS, Mentor } from './data/mentors';
import { motion } from 'framer-motion';

export default function ConsultationPage() {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBook = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <ConsultationHero />

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Mentors</h2>
              <p className="text-slate-500">Choose from our panel of verified experts</p>
            </div>
            
            <div className="flex items-center gap-4">
              <select className="bg-slate-50 border border-slate-200 text-slate-600 px-4 py-2.5 rounded-[1rem] font-semibold focus:outline-none focus:ring-2 focus:ring-[#2663eb]/20 focus:border-[#2663eb] transition-all">
                <option>All Expertise</option>
                <option>Taxation</option>
                <option>Legal</option>
                <option>Strategy</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MENTORS.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MentorCard 
                  mentor={mentor} 
                  onBook={handleBook} 
                />
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {MENTORS.length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-[1rem] border-2 border-dashed border-slate-200">
              <p className="text-slate-400 font-medium">No mentors found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>


      {/* Expert Profiles Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Expert Profiles</h2>
            <p className="text-slate-500 font-medium text-lg">Meet our seasoned advisors with decades of combined experience</p>
          </div>

          <ExpertProfilesSection />
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Success Stories</h2>
            <p className="text-slate-500 font-medium text-lg">Real results from businesses we've helped transform</p>
          </div>

          <SuccessStoriesSection />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Client Testimonials</h2>
            <p className="text-slate-500 font-medium text-lg">What our clients say about working with us</p>
          </div>

          <TestimonialsSection />
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500 font-medium text-lg">Everything you need to know about our consultation services</p>
          </div>

          <FAQSection />
        </div>
      </section>

      {/* Trust Badges */}
      {/* <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">Trusted by founders worldwide</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
          
            <span className="text-2xl font-black italic">FORTUNE 500</span>
            <span className="text-2xl font-black italic">Y COMBINATOR</span>
            <span className="text-2xl font-black italic">TECHCRUNCH</span>
            <span className="text-2xl font-black italic">FORBES</span>
          </div>
        </div>
      </section> */}

      <BookingModal 
        mentor={selectedMentor}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

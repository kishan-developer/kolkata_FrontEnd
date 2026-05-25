"use client";

import React from 'react';
import RefundSection from './Components/Home_Components/RefundSection';
import AudienceFocus from './Components/Home_Components/AudienceFocus';
import Testimonials from './Components/Home_Components/Testimonials';
import FaqSection from './Components/Home_Components/FaqSection';
import ContactSection from './Components/Home_Components/ContactSection';
import ServiceCards from './Components/Home_Components/ServiceCards';
import AboutVyarseva from './Components/Home_Components/AboutVyarseva';
import FeaturedServices from './Components/Home_Components/FeaturedServices';
import IndustriesServed from './Components/Home_Components/IndustriesServed';
import WhyChooseUs from './Components/Home_Components/WhyChooseUs';
import ProcessFlow from './Components/Home_Components/ProcessFlow';
import ITRPricing from './Components/Home_Components/ITRPricing';
import ITRFiling from './Components/Home_Components/ITRFiling';
import GSTFiling from './Components/Home_Components/GSTFiling';


export default function Page() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#2663eb]/20 selection:text-[#2663eb] overflow-hidden">
      <style>{`
        html { scroll-behavior: smooth; }
      `}</style>

      <main>
        <RefundSection />

        <AboutVyarseva />

        <ServiceCards />

        <FeaturedServices />

        <ITRPricing />

        <ITRFiling />

        <GSTFiling />

        <IndustriesServed />

        <ProcessFlow />

        <WhyChooseUs />

        <AudienceFocus />

        <Testimonials variant="blue-green" />

        <FaqSection />

        <ContactSection />

      </main>
    </div>
  );
}


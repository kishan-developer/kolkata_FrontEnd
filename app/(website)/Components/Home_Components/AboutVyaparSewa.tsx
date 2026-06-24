"use client";

import React from "react";
import { FileText, BadgeCheck, ClipboardCheck, Star, ChevronRight, ShieldCheck, Users, TrendingUp, HeadphonesIcon as Headphones } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "ITR Filed", value: "25000+", icon: FileText, description: "Accurate tax filing for individuals" },
  { label: "Registrations", value: "500+", icon: BadgeCheck, description: "Business registrations completed" },
  { label: "Audits Completed", value: "250+", icon: ClipboardCheck, description: "Professional audit services" },
  { label: "Client Satisfaction", value: "98%", icon: Star, description: "Happy clients across India" },
];

const points = [
  { text: "End-to-end compliance and regulatory management", icon: ShieldCheck },
  { text: "Full CA support for individuals, SMEs, and startups", icon: Users },
  { text: "Expert Financial Advisory and Tax Planning", icon: TrendingUp },
  { text: "Fast, accurate documentation and filing", icon: FileText },
  { text: "Dedicated support team for all services", icon: Headphones },
];

export default function AboutVyarseva() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="w-full  py-10 md:py-24 bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-5 md:gap-16 md:px-6 px-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >

        {/* LEFT SIDE CONTENT */}
        <motion.div className="flex flex-col justify-center" variants={itemVariants}>
          <h4 className="text-blue-600 font-semibold uppercase tracking-wider mb-2">
            About VyaparSewa
          </h4>

          <h2 className="text-2xl lg:text-4xl font-bold leading-snug mb-6">
            Your Trusted Partner for CA, Tax & Compliance Services
          </h2>

          <p className="text-gray-600 mb-6">
            VyaparSewa delivers professional Chartered Accountant solutions that cover
            taxation, business registrations, auditing, GST compliance, MCA
            filings, and strategic advisory services. Our team ensures accuracy,
            transparency, and on-time delivery across all services.
          </p>

          {/* Pointer List */}
          <ul className="space-y-3 mb-8">
            {points.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700">{item.text}</p>
                </li>
              );
            })}
          </ul>

          <a
            href="/about"
            className="w-fit bg-blue-600 text-white px-7 py-3 rounded-md font-medium hover:bg-blue-700 transition"
          >
            About Us
          </a>
        </motion.div>

        {/* RIGHT SIDE – STAT BOXES */}
        <motion.div className="grid grid-cols-2 gap-2 md:gap-6" variants={itemVariants}>
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className="p-2 md:p-8 rounded-xl bg-white shadow-lg border border-gray-100 text-center hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-blue-600">{item.value}</h3>
                <p className="text-gray-700 mt-2 text-lg font-medium">{item.label}</p>
                <p className="text-gray-500 text-xs mt-1">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </motion.div>
    </section>
  );
}
"use client";

import { GraduationCap, Building2, DollarSign, Zap, Bell, HeadphonesIcon } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    title: "Expert Chartered Accountants",
    desc: "Work directly with qualified CAs who bring deep expertise in taxation, compliance, accounting, and business advisory. Every project is reviewed with precision and professional oversight.",
    icon: GraduationCap,
  },
  {
    title: "Complete Compliance Under One Roof",
    desc: "From GST and ITR to MCA, auditing, registrations, and advisory — all services are managed in-house, ensuring accuracy, consistency, and smooth coordination across departments.",
    icon: Building2,
  },
  {
    title: "Transparent and Predictable Pricing",
    desc: "Clear, upfront pricing with no hidden charges. You always know what you're paying for, with itemized service plans designed for startups, SMEs, traders, and professionals.",
    icon: DollarSign,
  },
  {
    title: "Fast Turnaround & Error-Free Execution",
    desc: "Documents, filings, and registrations are handled swiftly with a structured workflow. Our internal checks eliminate errors and ensure every submission meets compliance standards.",
    icon: Zap,
  },
  {
    title: "Automated Reminders & Compliance Follow-up",
    desc: "Never miss a due date. Automated alerts, monthly reminders, and follow-up calls ensure ROC filings, GST returns, audits, and ITRs are always submitted on time.",
    icon: Bell,
  },
  {
    title: "Dedicated Support Team",
    desc: "A responsive support desk keeps you updated, addresses queries, and ensures smooth communication through email, WhatsApp, and call-based assistance whenever required.",
    icon: HeadphonesIcon,
  },
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="w-full py-10 md:py-20 bg-white">
      <motion.div
        className="max-w-7xl mx-auto px-2 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-14" variants={itemVariants}>
          <p className="text-sm tracking-widest uppercase text-blue-600 font-semibold">Why Us</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Why Choose Vyarseva</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A trusted CA partner delivering reliable, transparent, and comprehensive compliance support
            to businesses, startups, and professionals across India.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8" variants={itemVariants}>
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="px-2 py-3 md:p-8 border border-gray-100 rounded-md md:rounded-xl bg-white shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <div className="flex items-center justify-center md:w-16 md:h-16 w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors mb-6">
                  <Icon className="md:w-8 md:h-8 w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-md md:text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
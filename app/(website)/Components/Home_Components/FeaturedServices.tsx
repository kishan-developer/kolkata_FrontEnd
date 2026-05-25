"use client";

import Link from "next/link";
import { Building2, Receipt, FileText, ShieldCheck, FileKey, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const featuredServices = [
  {
    title: "Company / LLP / Startup Registration",
    desc: "Complete assistance for new business setup, incorporation, legal structuring, and registrations under MCA for smooth launch.",
    link: "/services/registration",
    icon: Building2,
  },
  {
    title: "GST Registration & Monthly Filing",
    desc: "End-to-end GST support including registration, monthly/quarterly filing, reconciliation, and compliance monitoring.",
    link: "/services/gst",
    icon: Receipt,
  },
  {
    title: "Income Tax Return Management",
    desc: "Accurate ITR filing for individuals and businesses with tax planning, document review, and compliance assistance.",
    link: "/services/itr",
    icon: FileText,
  },
  {
    title: "Audit & Assurance Services",
    desc: "Statutory, internal, and compliance audits ensuring transparency, financial accuracy, and regulatory trust.",
    link: "/services/audit",
    icon: ShieldCheck,
  },
  {
    title: "MCA Annual Compliance",
    desc: "ROC filing, annual returns, director compliance, and event-based MCA submissions to keep your company fully compliant.",
    link: "/services/mca",
    icon: FileKey,
  },
  {
    title: "Advisory & Consultancy",
    desc: "Strategic tax planning, business advisory, compliance consulting, and growth-focused financial guidance.",
    link: "/services/advisory",
    icon: Lightbulb,
  },
];

export default function FeaturedServices() {
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
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <p className="text-sm tracking-widest text-blue-600 uppercase font-semibold">Services</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Featured Services</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Professional, compliant, and reliable CA services for your business.</p>
        </motion.div>

        <motion.div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-8" variants={itemVariants}>
          {featuredServices.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="border border-gray-100 p-2 md:p-8 rounded-sm md:rounded-xl shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 bg-white group"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors mb-6">
                  <Icon className="md:w-8 md:h-8 w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-md md:text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-3 leading-relaxed">{item.desc}</p>
                <Link
                  href={item.link}
                  className="inline-flex items-center mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:underline"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
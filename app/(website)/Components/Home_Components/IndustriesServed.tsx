"use client";

import Link from "next/link";
import { Store, Rocket, ShoppingCart, Briefcase, ShoppingBag, Factory } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  {
    title: "Small Businesses",
    desc: "Compliance, accounting, GST, and income tax solutions for small and growing businesses to keep operations smooth and legally sound.",
    link: "/industries/small-business",
    icon: Store,
  },
  {
    title: "Startups",
    desc: "Support for incorporation, taxation, ESOP structuring, fundraising compliance, and investor-ready financial documentation.",
    link: "/industries/startups",
    icon: Rocket,
  },
  {
    title: "Traders",
    desc: "GST registration, monthly filing, purchase-sale reconciliation, and inventory-linked tax compliance for traders of all scales.",
    link: "/industries/traders",
    icon: ShoppingCart,
  },
  {
    title: "Professionals",
    desc: "ITR filing, bookkeeping, compliance, and advisory for doctors, lawyers, freelancers, consultants, and service-based professionals.",
    link: "/industries/professionals",
    icon: Briefcase,
  },
  {
    title: "E-Commerce",
    desc: "Marketplace GST management, TCS reconciliation, multi-state compliance, and accounting support for D2C and online sellers.",
    link: "/industries/ecommerce",
    icon: ShoppingBag,
  },
  {
    title: "Manufacturers",
    desc: "End-to-end financial compliance, cost analysis, GST planning, audit, and documentation support for manufacturing units.",
    link: "/industries/manufacturers",
    icon: Factory,
  },
];

export default function IndustriesServed() {
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
    <section className="w-full py-10 md:py-20 bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto px-2 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-14" variants={itemVariants}>
          <p className="text-sm tracking-widest text-blue-600 uppercase font-semibold">Industries</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Industries We Serve</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Tailored compliance, taxation, and advisory solutions for diverse business sectors.
            We understand industry-specific needs and deliver precise, reliable support.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8" variants={itemVariants}>
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="border border-gray-100 gap-2 px-2 py-4 md:p-8 rounded-md md:rounded-xl shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 bg-white group"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <div className="flex items-center justify-center md:w-16 md:h-16 w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors mb-6">
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
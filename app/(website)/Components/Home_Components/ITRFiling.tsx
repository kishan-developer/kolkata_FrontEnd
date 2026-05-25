"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Globe, Users } from "lucide-react";

const pricingPlans = [
  {
    id: "salary",
    icon: Briefcase,
    title: "Salary Class Explorer",
    headline: "Salary & Single House Property",
    features: [
      "Form 16 upload",
      "HRA optimization",
      "80C/80D verification"
    ],
    hook: "Quick filing for salaried professionals. Get every deduction you deserve.",
    price: "₹999/-",
    popular: false
  },
  {
    id: "investor",
    icon: TrendingUp,
    title: "The Smart Investor (Capital Gains)",
    headline: "Stock Market & Mutual Fund Traders",
    features: [
      "P&L statement analysis",
      "Tax-loss harvesting",
      "Crypto tax reporting"
    ],
    hook: "Trading in Stocks or Crypto? Let experts handle your complex capital gains.",
    price: "₹2,499/-",
    popular: true
  },
  {
    id: "nri",
    icon: Globe,
    title: "Global Indian",
    headline: "NRI Taxation & Compliance",
    features: [
      "NRE/NRO taxation",
      "DTAA benefits",
      "Foreign asset reporting"
    ],
    hook: "Stay compliant in India, while you grow abroad. Specialized NRI desk.",
    price: "₹4,999/-",
    popular: false
  },
  {
    id: "business",
    icon: Users,
    title: "Business & Freelancers",
    headline: "Presumptive Taxation (44AD/44ADA)",
    features: [
      "Minimal documentation",
      "Maximum efficiency",
      "For Doctors, CAs, Techies"
    ],
    hook: "Business growth is your focus. Tax compliance is ours.",
    price: "₹3,499/-",
    popular: false
  }
];

export default function ITRFiling() {
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
    <section className="w-full py-10 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <motion.div
        className="max-w-7xl mx-auto px-2 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-12 md:mb-16 space-y-4" variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2663eb]">ITR Filing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Don't Just File. <span className="text-[#2663eb]">Optimize.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            A dedicated CA reviews every entry to ensure you’re not leaving a single rupee of tax savings on the table.
          </p>
        </motion.div>

        {/* Comparison Table */}
        {/* <motion.div className="mb-12 md:mb-16" variants={itemVariants}>
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-[#2663eb] to-blue-700 px-6 py-4">
              <h3 className="text-white font-black text-lg md:text-xl text-center">
                Why to opt for Expert Assisted Service
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-black text-slate-600 uppercase tracking-wider">
                      Feature
                    </th>
                    <th className="px-4 md:px-6 py-4 text-center text-xs md:text-sm font-black text-slate-600 uppercase tracking-wider">
                      Self-File (DIY)
                    </th>
                    <th className="px-4 md:px-6 py-4 text-center text-xs md:text-sm font-black text-[#2663eb] uppercase tracking-wider bg-blue-50">
                      Expert Assisted
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 md:px-6 py-4 text-sm md:text-base font-bold text-slate-800">
                      Accuracy
                    </td>
                    <td className="px-4 md:px-6 py-4 text-center text-sm md:text-base text-slate-500">
                      Risk of Notices
                    </td>
                    <td className="px-4 md:px-6 py-4 text-center text-sm md:text-base font-bold text-[#2663eb] bg-blue-50/50">
                      Double-Checked by CA
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 md:px-6 py-4 text-sm md:text-base font-bold text-slate-800">
                      Deductions
                    </td>
                    <td className="px-4 md:px-6 py-4 text-center text-sm md:text-base text-slate-500">
                      Often Missed
                    </td>
                    <td className="px-4 md:px-6 py-4 text-center text-sm md:text-base font-bold text-[#2663eb] bg-blue-50/50">
                      Maximum Optimization
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-4 md:px-6 py-4 text-sm md:text-base font-bold text-slate-800">
                      Notice Support
                    </td>
                    <td className="px-4 md:px-6 py-4 text-center text-sm md:text-base text-slate-500">
                      None
                    </td>
                    <td className="px-4 md:px-6 py-4 text-center text-sm md:text-base font-bold text-[#2663eb] bg-blue-50/50">
                      Year-round Assistance
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 md:px-6 py-4 text-sm md:text-base font-bold text-slate-800">
                      Timeline
                    </td>
                    <td className="px-4 md:px-6 py-4 text-center text-sm md:text-base text-slate-500">
                      Slow
                    </td>
                    <td className="px-4 md:px-6 py-4 text-center text-sm md:text-base font-bold text-[#2663eb] bg-blue-50/50">
                      Priority Filing
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div> */}

        {/* Pricing Cards */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" variants={itemVariants}>
          {pricingPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                className={`relative p-4 md:p-8 rounded-2xl border-2 ${plan.popular
                  ? "border-[#2663eb] bg-white shadow-2xl shadow-blue-200/30"
                  : "border-slate-200 bg-white shadow-lg hover:shadow-xl hover:border-blue-200"
                  } transition-all duration-300 group`}
                whileHover={{ y: -8 }}
                variants={itemVariants}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2663eb] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center ${plan.popular
                    ? "bg-blue-50 group-hover:bg-blue-100"
                    : "bg-slate-50 group-hover:bg-blue-50"
                    } transition-colors`}>
                    <Icon className={`w-7 h-7 md:w-8 md:h-8 ${plan.popular ? "text-[#2663eb]" : "text-slate-600 group-hover:text-[#2663eb]"} transition-colors`} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-black text-slate-900 text-center mb-2">
                  {plan.title}
                </h3>

                {/* Headline */}
                <p className="text-sm md:text-base font-bold text-slate-600 text-center mb-6 leading-tight">
                  {plan.headline}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2663eb] mt-2 flex-shrink-0" />
                      <span className="text-sm md:text-base text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hook */}
                <p className="text-xs md:text-sm text-slate-500 text-center mb-6 leading-relaxed italic">
                  "{plan.hook}"
                </p>

                {/* Price */}
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-[#2663eb] mb-1">
                    {plan.price}
                  </div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Starting Price</p>
                </div>

                {/* CTA Button */}
                <button className={`w-full mt-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all ${plan.popular
                  ? "bg-[#2663eb] text-white hover:bg-[#1d4ed8] shadow-lg shadow-blue-200"
                  : "bg-slate-100 text-slate-700 hover:bg-[#2663eb] hover:text-white"
                  }`}>
                  File Now
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

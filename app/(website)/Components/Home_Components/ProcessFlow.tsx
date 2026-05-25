"use client";

import { MessageSquare, Users, FileUp, FileCheck, Send, HeadphonesIcon } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Share Your Requirements",
    desc: "Tell us your needs through a call, WhatsApp, or form. We understand your case clearly.",
    icon: MessageSquare,
  },
  {
    title: "Get Consultation",
    desc: "A CA explains compliance, timelines, documents, and pricing tailored to your case.",
    icon: Users,
  },
  {
    title: "Submit Documents",
    desc: "Upload or send documents securely. Our team verifies them before processing.",
    icon: FileUp,
  },
  {
    title: "Processing & Review",
    desc: "We prepare filings, registrations, or audits with strict internal review.",
    icon: FileCheck,
  },
  {
    title: "Filing / Report Delivery",
    desc: "We file and submit reports, certificates, or acknowledgements on time.",
    icon: Send,
  },
  {
    title: "Post-Service Support",
    desc: "We provide future support, compliance reminders, and ongoing advisory.",
    icon: HeadphonesIcon,
  },
];

export default function ProcessFlowModern() {
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
    <section className="w-full py-10 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <motion.div
        className="max-w-7xl mx-auto px-2 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >

        {/* Header */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">Process</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">How It Works</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A smooth step-by-step workflow built for clarity, speed, and accuracy.
          </p>
        </motion.div>

        {/* Horizontal Stepper */}
        <motion.div className="relative hidden lg:flex items-center justify-between mb-16" variants={itemVariants}>
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-blue-200 rounded-full -z-10"></div>

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center w-40"
                whileHover={{ scale: 1.1 }}
                variants={itemVariants}
              >
                <div
                  className="md:w-16 md:h-16 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors"
                >
                  <Icon className="md:w-8 md:h-8 w-6 h-6" />
                </div>
                <p className="text-gray-800 font-semibold mt-4">{s.title}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Detailed Cards */}
        <motion.div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-10" variants={itemVariants}>
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                className="px-2 py-3 md:p-8 bg-white/80 backdrop-blur-xl shadow-lg rounded-md md:rounded-2xl border border-white/50 hover:shadow-xl hover:border-blue-200 transition-all group"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <div className="md:w-14 md:h-14 w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center text-blue-600 shadow-md transition-colors">
                  <Icon className="md:w-7 md:h-7 w-4 h-4" />
                </div>
                <h3 className="text-md md:text-xl font-bold text-gray-900 mt-5">{s.title}</h3>
                <p className="text-gray-600 mt-3 leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </motion.div>
    </section>
  );
}
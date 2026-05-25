'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FaqSection: React.FC = () => {
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const faqs = [
        {
            question: "What documents are required for Company/LLP/Startup Registration?",
            answer:
                "For company registration, we require PAN cards of directors/partners, address proof, passport-sized photographs, and proof of business address. For LLPs, additional partnership deed and DIN/DPIN details are needed.",
        },
        {
            question: "How does your GST Registration & Monthly Filing service work?",
            answer:
                "We handle complete GST compliance including registration, monthly GSTR-1 and GSTR-3B filing, quarterly GSTR-9, annual returns, and reconciliation. Our team ensures timely filing to avoid penalties and maintains proper documentation.",
        },
        {
            question: "What is included in your Income Tax Return Management service?",
            answer:
                "Our ITR service includes document review, tax planning, ITR-1 to ITR-7 filing for individuals and businesses, Form 16 processing, refund tracking, and representation before tax authorities if needed. We ensure 100% accuracy and on-time filing.",
        },
        {
            question: "What types of audits do you provide under Audit & Assurance Services?",
            answer:
                "We offer statutory audits under Companies Act, tax audits under Section 44AB, internal audits, GST audits, and compliance audits. Our team ensures financial accuracy, regulatory compliance, and provides actionable insights for business improvement.",
        },
        {
            question: "What does MCA Annual Compliance include?",
            answer:
                "MCA compliance includes annual ROC filing (MGT-7, AOC-4), DIR-3 KYC for directors, event-based filings for changes in capital, directors, or registered office, and maintaining statutory registers. We ensure zero penalties through timely submissions.",
        },
        {
            question: "How can your Advisory & Consultancy services help my business?",
            answer:
                "Our advisory services include strategic tax planning, business structuring, financial forecasting, compliance consulting, fundraising support, ESOP structuring, and growth-focused guidance. We provide customized solutions aligned with your business goals.",
        },
        {
            question: "What is your pricing structure and how do you ensure transparency?",
            answer:
                "We offer transparent, upfront pricing with no hidden charges. Our service plans are itemized and designed for startups, SMEs, traders, and professionals. We provide detailed quotes before engagement and ensure you know exactly what you're paying for.",
        },
    ];

    return (
        <section className="w-full bg-[#F7FAFC] py-16 px-4 md:px-8">
            <motion.div
                className="max-w-5xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >

                {/* Heading */}
                <motion.h2 className="text-3xl font-semibold text-[#0A2A52] mb-10 border-b pb-4 border-gray-300" variants={itemVariants}>
                    Frequently Asked Questions
                </motion.h2>

                {/* FAQ List */}
                <motion.div className="space-y-10" variants={itemVariants}>
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            className="pb-8 border-b border-gray-300"
                            whileHover={{ x: 5 }}
                            variants={itemVariants}
                        >
                            <h3 className=" text-md md:text-xl font-semibold text-[#0A2A52] mb-2">
                                {faq.question}
                            </h3>
                            <p className="text-gray-600 text-md md:text-lg">{faq.answer}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </motion.div>
        </section>
    );
};

export default FaqSection;
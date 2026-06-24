"use client";

import { useState } from "react";
import {
  TrendingUp,
  Shield,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MessageSquare,
  Calculator,
  FileText,
  Scale,
  Building2,
  PieChart,
  LineChart,
  BarChart3,
  ChevronRight,
} from "lucide-react";

export default function VirtualCFOPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const services = [
    {
      icon: Calculator,
      title: "Finance",
      items: [
        "Accounting and Bookkeeping",
        "MIS Reporting",
        "Tax Compliances Management",
        "Financial Strategy Development",
        "Budgeting and Financial Forecasting",
        "Cash Flow Management",
        "Risk Management and Compliance",
        "Investment and Fundraising Assistance",
        "Financial Reporting and Analysis",
      ],
    },
    {
      icon: Scale,
      title: "Legal",
      items: [
        "Drafting Legal Agreements",
        "Ongoing corporate governance",
        "Preparation and negotiation of contracts",
        "Guidance on contracts and policies",
        "Handling disputes, and compliance",
        "Registration and protection of trademarks",
        "Advising on industry-specific regulatory requirements",
        "Assistance with regulatory filings",
      ],
    },
    {
      icon: Building2,
      title: "Secretarial",
      items: [
        "Term Sheet/ SHA",
        "Due Diligence Handling",
        "Investor Relationship Management",
        "ESOPs Implementation",
        "Corporate Compliance",
        "Board Meeting Management",
        "Document Preparation and Filing",
        "Shareholder Communication",
        "Corporate Governance Advisory",
        "Entity Formation and Dissolution",
      ],
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Flexibility and Scalability",
      description: "Services can be scaled up or down based on your business needs, ensuring you get exactly what you require when you need it.",
    },
    {
      icon: Shield,
      title: "Cost-Effective",
      description: "Access to high-level financial expertise without the cost of a full-time executive, saving you significant operational costs.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Benefit from the knowledge and experience of seasoned financial professionals with proven track records.",
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Make informed decisions that drive growth and profitability with data-driven financial insights.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechStart Solutions",
      role: "Founder",
      content: "VyaparSewa has been managing our accounts efficiently. The team's expertise in financial planning and compliance has been invaluable for our growth journey.",
    },
    {
      name: "Priya Sharma",
      company: "Growth Ventures",
      role: "CEO",
      content: "The Virtual CFO services provided by VyaparSewa have transformed our financial operations. Their strategic guidance helped us secure our Series A funding.",
    },
    {
      name: "Amit Patel",
      company: "Innovate Labs",
      role: "Director",
      content: "Outstanding service! The team understands the unique challenges startups face and provides tailored solutions that actually work.",
    },
  ];

  const stats = [
    { value: "500+", label: "Companies Served" },
    { value: "15+", label: "Years Experience" },
    { value: "₹1000Cr+", label: "Financial Advisory" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Virtual CFO Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Virtual CFO Manages - Accounting, Bookkeeping, Finance, Legal Compliance, MIS Reporting, Advisory and Payroll, Operations And Optimized Financial Performance. Business CFO Services Help Businesses Optimize And Financial Management To Enhance Revenue Growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2">
                  <MessageSquare size={20} />
                  Book Free Consultation
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2">
                  <Phone size={20} />
                  Call Us Now
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Get Free Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#2563EB]"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#2563EB]"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#2563EB]"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#2563EB]"
                  />
                  <textarea
                    placeholder="Tell us about your requirements"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#2563EB]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    Get Call Back
                    <ArrowRight size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#2563EB] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#64748B] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Virtual CFO */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-6">What is Virtual CFO?</h2>
            <p className="text-xl text-[#64748B] max-w-4xl mx-auto leading-relaxed">
              A Virtual CFO is an external financial expert who provides high-level financial management and strategic advisory services to businesses on a part-time, contractual, or as-needed basis. This service is particularly beneficial for companies that require expert financial guidance without the expense of a full-time CFO.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Cost-Effective: Access to high-level financial expertise without the cost of a full-time executive.",
              "Flexibility: Services can be scaled up or down based on the business's needs.",
              "Expert Guidance: Benefit from the knowledge and experience of seasoned financial professionals.",
              "Strategic Focus: Helps businesses make informed decisions that drive growth and profitability.",
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="text-[#2563EB]" size={24} />
                </div>
                <p className="text-[#0F172A] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Services We Provide</h2>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
              At VyaparSewa, we offer a comprehensive range of Virtual CFO services designed to meet the unique financial needs of your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-[#2563EB] rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-6">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ChevronRight className="text-[#2563EB] mt-1 flex-shrink-0" size={16} />
                        <span className="text-[#64748B]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Benefits of Virtual CFO</h2>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
              A Virtual CFO plays an important role in today's business by providing essential financial expertise and strategic guidance without the commitment of a full-time executive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex gap-6 p-6 rounded-2xl border border-[#E2E8F0] hover:border-[#2563EB] transition-all">
                  <div className="w-16 h-16 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon className="text-[#2563EB]" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3">{benefit.title}</h3>
                    <p className="text-[#64748B] leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">What Our Clients Say</h2>
            <p className="text-xl text-[#64748B]">Trusted by 500+ companies across India</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#64748B] mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-[#0F172A]">{testimonial.name}</p>
                  <p className="text-sm text-[#64748B]">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Financial Operations?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get expert financial guidance and strategic advisory services tailored to your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-[#2563EB] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all flex items-center gap-2">
              <MessageSquare size={20} />
              Book Free Consultation
            </button>
            <button className="bg-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all flex items-center gap-2">
              <Phone size={20} />
              Call +91 98765 43210
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Get In Touch</h2>
              <p className="text-xl text-[#64748B] mb-8">
                Have questions about our Virtual CFO services? Our team is here to help you find the right financial solutions for your business.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
                    <Phone className="text-[#2563EB]" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-[#64748B]">Call Us</p>
                    <p className="text-lg font-semibold text-[#0F172A]">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
                    <Mail className="text-[#2563EB]" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-[#64748B]">Email Us</p>
                    <p className="text-lg font-semibold text-[#0F172A]">info@vyaparsewa.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
                    <MessageSquare className="text-[#2563EB]" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-[#64748B]">WhatsApp</p>
                    <p className="text-lg font-semibold text-[#0F172A]">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-lg text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:border-[#2563EB]"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-lg text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:border-[#2563EB]"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-lg text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:border-[#2563EB]"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-lg text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:border-[#2563EB]"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

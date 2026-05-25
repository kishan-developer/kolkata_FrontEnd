"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = [
  "Business Registrations",
  "Income Tax Returns",
  "Auditing",
  "GST",
  "MCA Services",
  "Start Up",
  "Loan",
  "Other Services",
  "Advisory",
];

const services = [
  {
    title: "Business Registrations",
    desc: "Fast and reliable business registration services.",
    img: "/images/business.png",
  },
  {
    title: "Income Tax Returns",
    desc: "Accurate and expert-assisted income tax filing.",
    img: "/images/itr.png",
  },
  {
    title: "Auditing",
    desc: "Internal, statutory and compliance audits.",
    img: "/images/audit.png",
  },
  {
    title: "GST",
    desc: "GST registration, filing and reconciliation.",
    img: "/images/gst.png",
  },
  {
    title: "MCA Services",
    desc: "ROC filings and MCA corporate compliance.",
    img: "/images/mca.png",
  },
  {
    title: "Start Up",
    desc: "Startup formation & DPIIT registration.",
    img: "/images/startup.png",
  },
  {
    title: "Loan",
    desc: "Loan documentation and advisory support.",
    img: "/images/loan.png",
  },
  {
    title: "Other Services",
    desc: "PAN, TAN, DSC, certificates and more.",
    img: "/images/other.png",
  },
  {
    title: "Advisory",
    desc: "Tax, finance, investment and business consulting.",
    img: "/images/advisory.png",
  },
];

export default function PlugAndPlaySection() {
  const [activeTab, setActiveTab] = useState("Business Registrations");

  return (
    <section className="w-full py-20 bg-[#f8f9ff]">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#0d1224]">Plug and Play</h1>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          A complete suite of cloud-based CA, tax, compliance and business
          services that work seamlessly from day one.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-center gap-6 mb-14 border-b pb-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm px-4 py-2 rounded-md transition ${
              activeTab === tab
                ? "text-blue-600 bg-blue-50"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Services List */}
        <div className="grid grid-cols-1 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex gap-5 items-start p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                <img
                  src={service.img}
                  alt={service.title}
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0d1224]">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Glass Card */}
        <div className="backdrop-blur-xl bg-white/60 shadow-lg border border-gray-200 rounded-2xl p-10">
          <h3 className="text-xl font-semibold mb-6 text-[#0d1224]">
            Choose a Template
          </h3>

          <div className="flex items-center gap-6 mb-10">
            <div className="w-28 h-36 border-2 rounded-xl border-blue-600 bg-blue-50 flex items-center justify-center text-xs font-semibold text-blue-700 shadow-sm">
              TEMPLATE 1
            </div>
            <div className="w-28 h-36 border rounded-xl bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-400">
              TEMPLATE 2
            </div>
            <div className="w-28 h-36 border rounded-xl bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-400">
              TEMPLATE 3
            </div>
          </div>

          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Enterprise-grade security
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Fast processing & automated filing
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Daily auto-reminders & updates
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
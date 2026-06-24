"use client";

import {
  Menu, X, ChevronDown, Building2, Users, Scale, Landmark,
  Banknote, Rocket, ShieldCheck, ClipboardCheck, FileText,
  TrendingUp, Briefcase, Layers,
  Award,
  MessageSquare,
  MapPin,
  Lightbulb,
  MonitorCheck,
  Calculator,
  Search,
  Percent,
  CreditCard,
  Mail
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
  dropdown?: any[]; // Allow both flat links and category objects
}

const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '/about' },
  {
    name: 'Tools',
    href: '/tools',
    dropdown: [
      { name: 'GSTIN Verification Tool', href: 'https://services.gst.gov.in/services/searchtp', icon: Search },
      { name: 'GST Calculators', href: '/calculators/gst', icon: Calculator },
      { name: 'Tax Calculators', href: 'https://eportal.incometax.gov.in/iec/foservices/#/TaxCalc/calculator', icon: Percent },
      { name: 'EMI Calculator', href: '/tools/emi-calculator', icon: CreditCard },
    ]
  },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      {
        title: 'New Business',
        id: 'new-business',
        icon: Building2,
        color: 'bg-amber-50',
        iconColor: 'text-amber-600',
        items: [
          { name: 'Proprietorship', href: '/services/new-business/proprietorship', icon: Users, color: 'bg-amber-50', iconColor: 'text-amber-600' },
          { name: 'Virtual CFO Service', href: '/services/new-business/virtual-cfo-service', icon: MonitorCheck, color: 'bg-amber-50', iconColor: 'text-amber-600' },
          { name: 'Private/Public Limited Company', href: '/services/new-business/private-limited-company', icon: Building2, color: 'bg-amber-50', iconColor: 'text-amber-600' },
          { name: 'LLP Registration', href: '/services/new-business/llp-registration', icon: Building2, color: 'bg-amber-50', iconColor: 'text-amber-600' },
          { name: 'Trust', href: '/services/new-business/trust', icon: Landmark, color: 'bg-amber-50', iconColor: 'text-amber-600' },
          { name: 'Society', href: '/services/new-business/society', icon: Users, color: 'bg-amber-50', iconColor: 'text-amber-600' },
        ]
      },
      {
        title: 'Registrations',
        id: 'registrations',
        icon: ClipboardCheck,
        color: 'bg-emerald-50',
        iconColor: 'text-emerald-600',
        items: [
          { name: 'Startup India', href: '/services/registrations/startup-india', icon: Rocket, color: 'bg-emerald-50', iconColor: 'text-emerald-600' },
          { name: 'Legal Entity Identifier (LEI)', href: '/services/registrations/lei', icon: FileText, color: 'bg-emerald-50', iconColor: 'text-emerald-600' },
          { name: '12A & 80G Registration', href: '/services/registrations/12a-80g', icon: Landmark, color: 'bg-emerald-50', iconColor: 'text-emerald-600' },
          { name: 'Digital Signature', href: '/services/registrations/digital-signature', icon: ShieldCheck, color: 'bg-emerald-50', iconColor: 'text-emerald-600' },
          { name: 'ISO Registration', href: '/services/registrations/iso', icon: Award, color: 'bg-emerald-50', iconColor: 'text-emerald-600' },
          { name: 'Shop Act Registration', href: '/services/registrations/shop-act', icon: ShieldCheck, color: 'bg-emerald-50', iconColor: 'text-emerald-600' },
          { name: 'Udyam Registration', href: '/services/registrations/udyam', icon: ShieldCheck, color: 'bg-emerald-50', iconColor: 'text-emerald-600' },
          { name: 'MSME Registration', href: '/services/registrations/msme', icon: ShieldCheck, color: 'bg-emerald-50', iconColor: 'text-emerald-600' },
          { name: 'Import Export Code', href: '/services/registrations/iec', icon: ShieldCheck, color: 'bg-emerald-50', iconColor: 'text-emerald-600' },
          { name: 'Darpan Registration', href: '/services/registrations/darpan', icon: ShieldCheck, color: 'bg-emerald-50', iconColor: 'text-emerald-600' },
          { name: 'ICEGATE Registration', href: '/services/registrations/icegate', icon: ShieldCheck, color: 'bg-emerald-50', iconColor: 'text-emerald-600' },
          { name: 'Trademark Registration', href: '/services/registrations/trademark', icon: ShieldCheck, color: 'bg-emerald-50', iconColor: 'text-emerald-600' },
          { name: 'Logo Registration', href: '/services/registrations/logo', icon: ShieldCheck, color: 'bg-emerald-50', iconColor: 'text-emerald-600' },
        ]
      },
      {
        title: 'Income Tax',
        id: 'income-tax',
        icon: FileText,
        color: 'bg-blue-50',
        iconColor: 'text-blue-600',
        items: [
          { name: 'Income Tax Return Filing (ITR Filing)', href: '/services/income-tax/itr-filing', icon: FileText, color: 'bg-blue-50', iconColor: 'text-blue-600' },
          { name: 'Revised Return Filing', href: '/services/income-tax/revised-return', icon: FileText, color: 'bg-blue-50', iconColor: 'text-blue-600' },
          { name: 'Updated Return Filing', href: '/services/income-tax/updated-return', icon: ShieldCheck, color: 'bg-blue-50', iconColor: 'text-blue-600' },
          { name: 'TDS/TCS Return Filing', href: '/services/income-tax/tds-tcs-filing', icon: TrendingUp, color: 'bg-blue-50', iconColor: 'text-blue-600' },
          { name: 'Lower Deduction Certificate', href: '/services/income-tax/lower-deduction', icon: MessageSquare, color: 'bg-blue-50', iconColor: 'text-blue-600' },
          { name: '15CA/15CB Filing', href: '/services/income-tax/15ca-15cb', icon: FileText, color: 'bg-blue-50', iconColor: 'text-blue-600' },
          { name: 'PAN Application', href: '/services/income-tax/pan-application', icon: FileText, color: 'bg-blue-50', iconColor: 'text-blue-600' },
          { name: 'TAN Application', href: '/services/income-tax/tan-application', icon: FileText, color: 'bg-blue-50', iconColor: 'text-blue-600' },
          { name: 'Income Tax Consulting Services', href: '/services/income-tax/tax-consulting', icon: FileText, color: 'bg-blue-50', iconColor: 'text-blue-600' },
          { name: 'Income Tax Audit', href: '/services/income-tax/tax-audit', icon: FileText, color: 'bg-blue-50', iconColor: 'text-blue-600' },
          { name: 'Income Tax Notice Handling', href: '/services/income-tax/tax-notice', icon: FileText, color: 'bg-blue-50', iconColor: 'text-blue-600' },
          { name: 'First Appeal Filing', href: '/services/income-tax/first-appeal', icon: FileText, color: 'bg-blue-50', iconColor: 'text-blue-600' },
          { name: 'Second Appeal Filing', href: '/services/income-tax/second-appeal', icon: FileText, color: 'bg-blue-50', iconColor: 'text-blue-600' },
          { name: 'Search, Survey, Seizure', href: '/services/income-tax/search-survey', icon: FileText, color: 'bg-blue-50', iconColor: 'text-blue-600' },
          { name: 'Other Income Tax Litigation', href: '/services/income-tax/tax-litigation', icon: FileText, color: 'bg-blue-50', iconColor: 'text-blue-600' },
        ]
      },
      {
        title: 'GST Services',
        id: 'gst',
        icon: Landmark,
        color: 'bg-purple-50',
        iconColor: 'text-purple-600',
        items: [
          { name: 'GST Registration', href: '/services/gst/gst-registration', icon: Landmark, color: 'bg-purple-50', iconColor: 'text-purple-600' },
          { name: 'GST Amendment', href: '/services/gst/gst-amendment', icon: Landmark, color: 'bg-purple-50', iconColor: 'text-purple-600' },
          { name: 'GST Return Filing', href: '/services/gst/gst-return-filing', icon: Landmark, color: 'bg-purple-50', iconColor: 'text-purple-600' },
          { name: 'GST Annual Return', href: '/services/gst/gst-annual-return', icon: Landmark, color: 'bg-purple-50', iconColor: 'text-purple-600' },
          { name: 'GST LUT Form', href: '/services/gst/gst-lut-form', icon: Landmark, color: 'bg-purple-50', iconColor: 'text-purple-600' },
          { name: 'GST Revocation', href: '/services/gst/gst-revocation', icon: Landmark, color: 'bg-purple-50', iconColor: 'text-purple-600' },
          { name: 'GST Consulting Services', href: '/services/gst/gst-consulting', icon: Landmark, color: 'bg-purple-50', iconColor: 'text-purple-600' },
          { name: 'GST Notice Handling', href: '/services/gst/gst-notice-handling', icon: Landmark, color: 'bg-purple-50', iconColor: 'text-purple-600' },
          { name: 'GST Appeal', href: '/services/gst/gst-appeal', icon: Landmark, color: 'bg-purple-50', iconColor: 'text-purple-600' },
          { name: 'GST Refund', href: '/services/gst/gst-refund', icon: Landmark, color: 'bg-purple-50', iconColor: 'text-purple-600' },
        ]
      },
      {
        title: 'MCA Services',
        id: 'mca-services',
        icon: Briefcase,
        color: 'bg-indigo-50',
        iconColor: 'text-indigo-600',
        items: [
          { name: 'New Company Formation', href: '/services/mca-services/new-company-formation', icon: Briefcase, color: 'bg-indigo-50', iconColor: 'text-indigo-600' },
          { name: 'New LLP Formation', href: '/services/mca-services/new-llp-formation', icon: Briefcase, color: 'bg-indigo-50', iconColor: 'text-indigo-600' },
          { name: 'Company Compliance', href: '/services/mca-services/company-compliance', icon: Users, color: 'bg-indigo-50', iconColor: 'text-indigo-600' },
          { name: 'LLP Compliance', href: '/services/mca-services/llp-compliance', icon: Users, color: 'bg-indigo-50', iconColor: 'text-indigo-600' },
          { name: 'Address Change', href: '/services/mca-services/address-change', icon: MapPin, color: 'bg-indigo-50', iconColor: 'text-indigo-600' },
          { name: 'Name Change', href: '/services/mca-services/name-change', icon: FileText, color: 'bg-indigo-50', iconColor: 'text-indigo-600' },
          { name: 'Director Change', href: '/services/mca-services/director-change', icon: Users, color: 'bg-indigo-50', iconColor: 'text-indigo-600' },
          { name: 'Authorised Capital Increase', href: '/services/mca-services/capital-increase', icon: Banknote, color: 'bg-indigo-50', iconColor: 'text-indigo-600' },
          { name: 'DIN KYC', href: '/services/mca-services/din-kyc', icon: Users, color: 'bg-indigo-50', iconColor: 'text-indigo-600' },
          { name: 'Any other Changes', href: '/services/mca-services/other-changes', icon: FileText, color: 'bg-indigo-50', iconColor: 'text-indigo-600' },
          { name: 'CCFS Scheme', href: '/services/mca-services/ccfs-scheme', icon: FileText, color: 'bg-indigo-50', iconColor: 'text-indigo-600' },
        ]
      },
      {
        title: 'Start Up',
        id: 'start-up',
        icon: Rocket,
        color: 'bg-rose-50',
        iconColor: 'text-rose-600',
        items: [
          { name: 'Startup Registration', href: '/services/start-up/startup-registration', icon: Rocket, color: 'bg-rose-50', iconColor: 'text-rose-600' },
          { name: 'Income Tax Exemption', href: '/services/start-up/income-tax-exemption', icon: Award, color: 'bg-rose-50', iconColor: 'text-rose-600' },
        ]
      },
      {
        title: 'Loan',
        id: 'loan',
        icon: Banknote,
        color: 'bg-cyan-50',
        iconColor: 'text-cyan-600',
        items: [
          { name: 'Project Report', href: '/services/loan/project-report', icon: FileText, color: 'bg-cyan-50', iconColor: 'text-cyan-600' },
          { name: 'CMA Data', href: '/services/loan/cma-data', icon: FileText, color: 'bg-cyan-50', iconColor: 'text-cyan-600' },
          { name: 'Home Loan Application', href: '/services/loan/home-loan', icon: Landmark, color: 'bg-cyan-50', iconColor: 'text-cyan-600' },
          { name: 'Loan Against Property Application', href: '/services/loan/loan-against-property', icon: Banknote, color: 'bg-cyan-50', iconColor: 'text-cyan-600' },
          { name: 'Other Loan', href: '/services/loan/other-loan', icon: Banknote, color: 'bg-cyan-50', iconColor: 'text-cyan-600' }
        ]
      },
      {
        title: 'Other Services',
        id: 'other-services',
        icon: Layers,
        color: 'bg-slate-50',
        iconColor: 'text-slate-600',
        items: [
          { name: 'Accounting', href: '/services/other-services/accounting', icon: FileText, color: 'bg-slate-50', iconColor: 'text-slate-600' },
          { name: 'Due Diligence', href: '/services/other-services/due-diligence', icon: FileText, color: 'bg-slate-50', iconColor: 'text-slate-600' },
          { name: 'Bank Account Assistance', href: '/services/other-services/bank-account-assistance', icon: Landmark, color: 'bg-slate-50', iconColor: 'text-slate-600' },
        ]
      },
      {
        title: 'Advisory',
        id: 'advisory',
        icon: TrendingUp,
        color: 'bg-orange-50',
        iconColor: 'text-orange-600',
        items: [
          { name: 'Income Tax', href: '/services/advisory/income-tax-advisory', icon: FileText, color: 'bg-orange-50', iconColor: 'text-orange-600' },
          { name: 'GST', href: '/services/advisory/gst-advisory', icon: FileText, color: 'bg-orange-50', iconColor: 'text-orange-600' },
          { name: 'MCA', href: '/services/advisory/mca-advisory', icon: FileText, color: 'bg-orange-50', iconColor: 'text-orange-600' },
          { name: 'Company Law', href: '/services/advisory/company-law', icon: FileText, color: 'bg-orange-50', iconColor: 'text-orange-600' },
          { name: 'LLP Law', href: '/services/advisory/llp-law', icon: FileText, color: 'bg-orange-50', iconColor: 'text-orange-600' },
          { name: 'Trademark', href: '/services/advisory/trademark-advisory', icon: FileText, color: 'bg-orange-50', iconColor: 'text-orange-600' },
        ]
      },
    ]
  },
  { name: 'Consultation', href: '/consultation' },
  { name: 'Blog', href: '/blog' },
];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeServiceTab, setActiveServiceTab] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white border-b border-gray-100 py-4 shadow-sm`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-105">
            <img src="/rrr_logo-removebg-preview.png" alt="logo" className="w-40 h-16 object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => {
                    if (link.dropdown) {
                      setActiveDropdown(link.name);
                      if (link.name === 'Services') setActiveServiceTab('New Business');
                    }
                  }}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-[13px] font-semibold uppercase tracking-[0.2em] transition-all relative ${activeDropdown === link.name ? 'text-[#2663eb]' : 'text-gray-500 hover:text-[#2663eb]'}`}
                  >
                    {link.name}
                    {link?.dropdown && <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#2663eb] transition-all ${activeDropdown === link.name ? 'w-full' : 'w-0'}`} />
                  </Link>

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${activeDropdown === link.name ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                      <div className={`bg-white/95 backdrop-blur-2xl border border-gray-100 rounded-2xl shadow-2xl overflow-hidden ${link.name === 'Services' ? 'w-[1200px]' : link.name === 'Tools' ? 'w-[600px]' : 'min-w-[260px]'} max-h-[700px]`}>
                        <div className={` ${link.name === 'Services' ? 'flex h-fit ' : 'p-6'}`}>
                          {link.name === 'Services' ? (
                            <>
                              {/* Left Sidebar - Categories */}
                              <div className="w-1/4 bg-gray-50/50 border-r border-gray-100 p-6 overflow-y-auto">
                                <div className="space-y-1">
                                  {link.dropdown.map((item: any, idx: number) => (
                                    <div
                                      key={item.id || item.name || idx}
                                      onMouseEnter={() => item.items && setActiveServiceTab(item.title)}
                                      className={`group/item flex items-center justify-between px-4 py-3 rounded-xl transition-all cursor-pointer ${(item.items ? activeServiceTab === item.title : false)
                                        ? `${item.color || 'bg-white'} shadow-sm ${item.iconColor || 'text-[#2663eb]'}`
                                        : 'hover:bg-white/50 text-gray-600'
                                        }`}
                                    >
                                      <div className="flex items-center gap-3 flex-1">
                                        {item.icon && <item.icon size={16} className={activeServiceTab === item.title ? item.iconColor : 'text-[#2663eb]'} />}
                                        <span className="text-[13px] font-bold uppercase tracking-wider">
                                          {item.title || item.name}
                                        </span>
                                      </div>
                                      {item.items && (
                                        <ChevronDown size={14} className="-rotate-90 opacity-40 group-hover/item:opacity-100 transition-opacity" />
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Right Content - Sub-items */}
                              <div className="flex-1 p-4 bg-white overflow-y-auto">
                                {activeServiceTab ? (
                                  <div className="animate-in fade-in slide-in-from-left-4 duration-300">
                                    <div className="grid grid-cols-3 gap-4 pb-5">
                                      {link.dropdown
                                        .find((d: any) => d.title === activeServiceTab)
                                        ?.items?.map((subItem: any, subIdx: number) => (
                                          <Link
                                            key={subItem.name || subIdx}
                                            href={subItem.href}
                                            className="group/sub flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-gray-100 hover:bg-gray-50/50 transition-all"
                                            onClick={() => setActiveDropdown(null)}
                                          >
                                            <div className={`w-10 h-10 ${subItem.color || 'bg-gray-50'} rounded-lg flex items-center justify-center ${subItem.iconColor || 'text-gray-400'} group-hover/sub:bg-white group-hover/sub:text-[#2663eb] transition-all`}>
                                              {subItem.icon ? <subItem.icon size={18} /> : <FileText size={18} />}
                                            </div>
                                            <div className="flex flex-col">
                                              <span className="text-[12px] font-bold uppercase tracking-wider text-gray-700 group-hover/sub:text-[#2663eb]">
                                                {subItem.name}
                                              </span>
                                              <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                                                View Details →
                                              </span>
                                            </div>
                                          </Link>
                                        ))}
                                    </div>
                                  </div>
                                ) : (
                                  <div className="h-full flex flex-col items-center justify-center text-center p-8">
                                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                                      <img src="/rrr_logo-removebg-preview.png" className="w-10 opacity-20 grayscale" alt="" />
                                    </div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                                      Select a service category
                                    </h4>
                                    <p className="text-[11px] text-gray-400 uppercase tracking-widest mt-2 max-w-[200px]">
                                      Hover over categories on the left to see more options
                                    </p>
                                  </div>
                                )}
                              </div>

                              {/* Consultation Booking Card */}
                              <div className="w-1/4 bg-gradient-to-br from-[#2663eb] to-[#1d4ed8] p-6 text-white">
                                <h3 className="text-lg font-bold mb-3">Need Expert Advice?</h3>
                                <p className="text-sm text-blue-100 mb-6 leading-relaxed">
                                  Schedule a free consultation with our expert CA team to discuss your business needs.
                                </p>
                                <div className="space-y-4">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                      <MessageSquare size={18} />
                                    </div>
                                    <div>
                                      <p className="text-xs font-medium">Call Us</p>
                                      <p className="text-sm font-bold">+91 98765 43210</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                      <Mail size={18} />
                                    </div>
                                    <div>
                                      <p className="text-xs font-medium">Email Us</p>
                                      <p className="text-sm font-bold">info@vyaparsewa.com</p>
                                    </div>
                                  </div>
                                </div>
                                <Link
                                  href="/contact"
                                  onClick={() => setActiveDropdown(null)}
                                  className="mt-6 block w-full py-3 bg-white text-[#2663eb] text-center rounded-xl font-bold text-sm hover:bg-blue-50 transition-all"
                                >
                                  Book Consultation
                                </Link>
                              </div>
                            </>
                          ) : (
                            <div className="p-6">
                              <div className="grid grid-cols-2 gap-4 mb-6">
                                {link.dropdown.map((item: any, idx: number) => {
                                  const toolConfig: Record<string, { color: string; iconColor: string; desc: string }> = {
                                    'GSTIN Verification Tool': {
                                      color: 'bg-blue-50',
                                      iconColor: 'text-blue-600',
                                      desc: 'Verify GSTIN details instantly'
                                    },
                                    'GST Calculators': {
                                      color: 'bg-emerald-50',
                                      iconColor: 'text-emerald-600',
                                      desc: 'Calculate GST amounts easily'
                                    },
                                    'Tax Calculators': {
                                      color: 'bg-purple-50',
                                      iconColor: 'text-purple-600',
                                      desc: 'Plan your tax efficiently'
                                    },
                                    'EMI Calculator': {
                                      color: 'bg-amber-50',
                                      iconColor: 'text-amber-600',
                                      desc: 'Calculate loan EMIs quickly'
                                    },
                                  };
                                  const config = toolConfig[item.name] || { color: 'bg-gray-50', iconColor: 'text-gray-500', desc: 'Use this tool' };

                                  return (
                                    <Link
                                      key={item.name || idx}
                                      href={item.href}
                                      className="group/tool flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50 transition-all bg-white"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      <div className={`w-12 h-12 ${config.color} rounded-xl flex items-center justify-center ${config.iconColor} group-hover/tool:scale-110 transition-transform flex-shrink-0`}>
                                        {item.icon ? <item.icon size={22} /> : <FileText size={22} />}
                                      </div>
                                      <div className="flex flex-col flex-1">
                                        <span className="text-[13px] font-bold uppercase tracking-wider text-gray-800 group-hover/tool:text-[#2663eb]">
                                          {item.name}
                                        </span>
                                        <span className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                                          {config.desc}
                                        </span>
                                      </div>
                                      <ChevronDown size={14} className="opacity-0 group-hover/tool:opacity-100 transition-opacity -rotate-90 text-[#2663eb] flex-shrink-0" />
                                    </Link>
                                  );
                                })}
                              </div>

                              {/* Quick Access Banner */}
                              <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-4 border border-gray-100">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#2663eb] rounded-lg flex items-center justify-center">
                                      <Lightbulb size={18} className="text-white" />
                                    </div>
                                    <div>
                                      <p className="text-[12px] font-bold text-gray-800">Need Help?</p>
                                      <p className="text-[10px] text-gray-500">Contact our experts for assistance</p>
                                    </div>
                                  </div>
                                  <Link
                                    href="/contact"
                                    onClick={() => setActiveDropdown(null)}
                                    className="px-4 py-2 bg-[#2663eb] text-white text-[10px] font-bold uppercase tracking-wider rounded-lg hover:bg-[#1d4ed8] transition-colors"
                                  >
                                    Get Help
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              ))}
            </div>
            <Link href="/contact" className="px-6 py-3 bg-[#2663eb] text-white text-[10px] font-black uppercase tracking-widest rounded-[1rem] hover:opacity-90 transition-all shadow-lg shadow-[#2663eb]/20">
              Book Consultation
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-500 hover:text-[#2663eb] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 absolute top-full left-0 w-full p-8 max-h-[80vh] overflow-y-auto space-y-6 shadow-2xl animate-fadeIn">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="space-y-4">
              <div className="flex items-center justify-between">
                <Link
                  href={link.href}
                  className="text-xs font-black uppercase tracking-widest text-gray-600 hover:text-[#2663eb]"
                  onClick={() => !link.dropdown && setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <button onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}>
                    <ChevronDown size={16} className={`text-gray-400 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>

              {link.dropdown && activeDropdown === link.name && (
                <div className="pl-4 space-y-3 animate-in slide-in-from-top-2 duration-300">
                  {link.dropdown.map((item: any, idx: number) => {
                    if (item.items) {
                      return (
                        <div key={item.id || idx} className="mb-2">
                          <Link href={`/services/${item.id}`} className="block text-xs font-bold uppercase text-[#2663eb] mb-2 hover:opacity-80" onClick={() => setIsOpen(false)}>
                            {item.title}
                          </Link>
                          <div className="pl-2 border-l-2 border-gray-100 space-y-2">
                            {item.items.map((subItem: any, subIdx: number) => (
                              <Link
                                key={subItem.name || subIdx}
                                href={subItem.href}
                                className="block text-[10px] font-medium uppercase tracking-widest text-gray-500 hover:text-[#2663eb]"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    return (
                      <Link
                        key={item.name || idx}
                        href={item.href}
                        className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#2663eb]"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="block w-full py-4 bg-[#2663eb] text-white text-center rounded-[1rem] text-xs font-black uppercase tracking-widest" onClick={() => setIsOpen(false)}>
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}

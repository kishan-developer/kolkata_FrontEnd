"use client";

import React, { useState } from 'react';
import { 
  X, 
  Mail, 
  Phone, 
  ShieldCheck, 
  ShieldAlert, 
  Briefcase, 
  Clock, 
  FileText, 
  CheckCircle2, 
  AlertTriangle,
  History,
  CreditCard,
  Layers,
  ChevronDown,
  Upload,
  Download,
  Plus,
  Building2,
  Calendar,
  Globe,
  MapPin,
  TrendingUp,
  MessageSquare
} from "lucide-react";
import { Client, ClientStatus, EntityType } from "./types";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}

function Modal({ isOpen, onClose, children, maxWidth = "max-w-lg" }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
        onClick={onClose}
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className={`relative bg-white w-full ${maxWidth} rounded-[2rem] shadow-2xl overflow-hidden z-10`}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function AddClientModal({ isOpen, onClose, onAdd }: { isOpen: boolean, onClose: () => void, onAdd: (client: any) => void }) {
  const [step, setStep] = useState(1);

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-3xl">
      <div className="flex h-[600px]">
        {/* Sidebar Steps */}
        <div className="w-64 bg-slate-900 p-10 hidden md:flex flex-col">
          <h2 className="text-xl font-black text-white tracking-tighter mb-10">Entity Onboarding</h2>
          <div className="space-y-8">
            <StepItem number={1} label="Core Details" active={step === 1} completed={step > 1} />
            <StepItem number={2} label="Business Info" active={step === 2} completed={step > 2} />
            <StepItem number={3} label="Service & Team" active={step === 3} completed={step > 3} />
            <StepItem number={4} label="Verification" active={step === 4} completed={step > 4} />
          </div>
          <div className="mt-auto">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Client Lifecycle Management</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col bg-white">
          <div className="p-8 border-b border-slate-50 flex items-center justify-between">
             <h2 className="text-2xl font-black text-slate-900 tracking-tight">Step {step}: {step === 1 ? 'Primary Contact' : step === 2 ? 'Entity Structure' : step === 3 ? 'Mandate Setup' : 'Finalize'}</h2>
             <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-all">
                <X size={20} className="text-slate-400" />
             </button>
          </div>
          
          <div className="p-10 flex-1 overflow-y-auto">
             {step === 1 && (
               <div className="space-y-6">
                 <InputGroup label="Entity Representative Name" placeholder="Full Legal Name" />
                 <InputGroup label="Business Email" type="email" placeholder="corporate@entity.com" />
                 <InputGroup label="Primary Phone" placeholder="+91 XXXXX XXXXX" />
               </div>
             )}

             {step === 2 && (
               <div className="space-y-6">
                 <InputGroup label="Registered Business Name" placeholder="As per PAN/GST" />
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Entity Structure</label>
                      <select className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-[1rem] outline-none text-sm font-bold">
                        <option>LLP</option>
                        <option>Private Limited</option>
                        <option>Proprietorship</option>
                        <option>Trust</option>
                      </select>
                    </div>
                    <InputGroup label="PAN / GSTIN" placeholder="AAXXXXX0000X" />
                 </div>
               </div>
             )}

             {step === 3 && (
               <div className="space-y-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Assigned Package</label>
                    <select className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-[1rem] outline-none text-sm font-bold">
                      <option>Platinum Business Bundle</option>
                      <option>Corporate Compliance Pro</option>
                      <option>Standard GST Filing</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Primary Manager</label>
                    <select className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-[1rem] outline-none text-sm font-bold">
                      <option>Rahul Sharma (Senior Partner)</option>
                      <option>Sonal Gupta (Tax Expert)</option>
                      <option>Amit Singh (Accountant)</option>
                    </select>
                 </div>
               </div>
             )}

             {step === 4 && (
               <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center">
                    <ShieldCheck size={40} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">Ready for Onboarding</h3>
                  <p className="text-slate-400 font-medium text-sm max-w-xs">All primary data has been validated. The client will receive an automated welcome kit and document request.</p>
               </div>
             )}
          </div>

          <div className="p-8 border-t border-slate-50 flex gap-4">
            {step > 1 && (
              <button onClick={() => setStep(step - 1)} className="px-8 py-3 bg-slate-100 text-slate-600 rounded-[1rem] font-black text-[10px] uppercase tracking-widest">Back</button>
            )}
            <button 
              onClick={() => step < 4 ? setStep(step + 1) : onAdd({ name: 'New Client' })} 
              className="flex-1 py-4 bg-[#2663eb] text-white rounded-[1rem] font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-blue-100 border-b-4 border-[#1e40af]"
            >
              {step === 4 ? 'Complete Onboarding' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export function ClientProfileDetail({ isOpen, onClose, client }: { isOpen: boolean, onClose: () => void, client: Client }) {
  const [activeTab, setActiveTab] = useState('Overview');
  if (!client || !isOpen) return null;

  const tabs = ['Overview', 'Documents', 'Tasks', 'Services', 'Payments', 'Compliance Calendar'];

  return (
    <div className="fixed inset-0 z-[110] flex items-end justify-center sm:items-center p-0 sm:p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={onClose} />
      <motion.div 
        initial={{ y: "100%" }} 
        animate={{ y: 0 }} 
        exit={{ y: "100%" }} 
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative bg-[#F8FAFC] w-full h-[95vh] sm:h-[90vh] max-w-7xl rounded-t-[2.5rem] sm:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header Section */}
        <div className="bg-white border-b border-slate-100 p-8 sm:p-12 pb-0 flex-shrink-0">
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 mb-10">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-10">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-[2.5rem] bg-slate-900 flex items-center justify-center text-white shadow-2xl relative">
                <Building2 size={60} />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-[1.2rem] shadow-lg flex items-center justify-center text-[#2663eb] border-4 border-slate-50">
                  <TrendingUp size={24} />
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                   <span className="px-3 py-1 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest rounded-full">{client.entityType}</span>
                   <span className="px-3 py-1 bg-blue-50 text-[#2663eb] text-[9px] font-black uppercase tracking-widest rounded-full border border-blue-100">PLATINUM TIER</span>
                   <span className="px-3 py-1 bg-emerald-50 text-emerald-500 text-[9px] font-black uppercase tracking-widest rounded-full border border-emerald-100">KYC VERIFIED</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none mb-3">{client.businessName}</h1>
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.25em]">Registered under {client.name} &bull; Joined {client.joinedDate}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-4 bg-white border border-slate-200 text-slate-600 rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all border-b-4 shadow-sm">Communication Log</button>
              <button className="px-6 py-4 bg-[#2663eb] text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest hover:bg-[#1d4ed8] transition-all shadow-xl shadow-blue-100 border-b-4 border-[#1e40af]">Assign New Task</button>
            </div>
          </div>

          <div className="flex gap-10 overflow-x-auto no-scrollbar">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-8 text-[11px] font-black uppercase tracking-[0.2em] relative transition-all whitespace-nowrap ${activeTab === tab ? 'text-[#2663eb]' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {tab}
                {activeTab === tab && <motion.div layoutId="tab-underline-client" className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#2663eb] rounded-t-full" />}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-8 sm:p-12">
          {activeTab === 'Overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <ContactCard icon={<Mail />} label="Primary Corporate Email" value={client.email} />
                   <ContactCard icon={<Phone />} label="Registered Phone Number" value={client.phone} />
                   <ContactCard icon={<Globe />} label="Website / Domain" value="malhotratech.com" />
                   <ContactCard icon={<MapPin />} label="Principal Place of Business" value="Gurugram, Haryana, India" />
                </div>
                
                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                   <div className="flex items-center justify-between mb-10">
                      <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Mandate Compliance Health</h3>
                      <div className="flex items-center gap-2">
                         <span className="text-3xl font-black text-[#2663eb] tracking-tighter">{client.complianceScore}%</span>
                         <TrendingUp className="text-emerald-500" size={24} />
                      </div>
                   </div>
                   <div className="space-y-8">
                      <HealthBar label="GST Returns (GSTR-1, 3B)" score={98} />
                      <HealthBar label="Income Tax Compliance" score={85} />
                      <HealthBar label="ROC / MCA Filings" score={100} />
                   </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-[#0F172A] text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-40 h-40 bg-[#2663eb]/20 rounded-full blur-[100px] -mr-20 -mt-20" />
                   <h3 className="text-sm font-black uppercase tracking-widest mb-8 flex items-center gap-3">
                     <ShieldCheck size={20} className="text-[#2663eb]" /> Institutional Assigned Team
                   </h3>
                   <div className="space-y-6">
                      {client.assignedTeam.map((member, idx) => (
                        <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                           <div className="w-12 h-12 rounded-[1.2rem] bg-white/10 p-0.5 border border-white/10 overflow-hidden group-hover:border-white/30 transition-all">
                              <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${member}`} className="w-full h-full rounded-[1.1rem]" alt="" />
                           </div>
                           <div>
                              <p className="text-sm font-black tracking-tight">{member}</p>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{idx === 0 ? 'Lead Partner' : 'Mandate Associate'}</p>
                           </div>
                        </div>
                      ))}
                      <button className="w-full py-4 mt-4 bg-white/5 border border-white/10 rounded-[1.2rem] text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Modify Team Assignment</button>
                   </div>
                </div>

                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                   <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Next Compliance Deadline</h3>
                   <div className="p-6 bg-red-50 border border-red-100 rounded-[2rem] flex flex-col items-center text-center">
                      <Clock className="text-red-500 mb-3" size={32} />
                      <p className="text-lg font-black text-slate-900 tracking-tight">GSTR-1 (September)</p>
                      <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mt-1">Due in 2 Days &bull; Oct 11, 2024</p>
                      <button className="mt-6 w-full py-3 bg-red-600 text-white rounded-[1rem] font-black text-[9px] uppercase tracking-widest shadow-lg shadow-red-100">Send WhatsApp Alert</button>
                   </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Compliance Calendar' && (
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
               <div className="flex items-center justify-between mb-12">
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">Fiscal Compliance Roadmap</h3>
                  <div className="flex items-center gap-4">
                     <span className="flex items-center gap-2 text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" /> Completed
                     </span>
                     <span className="flex items-center gap-2 text-[10px] font-black text-red-500 uppercase tracking-widest">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" /> Overdue
                     </span>
                  </div>
               </div>
               <div className="space-y-4">
                  {[
                    { m: 'GST Returns (Monthly)', d: 'Oct 11, 2024', s: 'Overdue' },
                    { m: 'TDS Payment', d: 'Oct 07, 2024', s: 'Completed' },
                    { m: 'MCA AOC-4 (Annual)', d: 'Oct 30, 2024', s: 'Upcoming' },
                    { m: 'ITR-6 (Corporate)', d: 'Oct 31, 2024', s: 'In Progress' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 hover:bg-white hover:shadow-lg transition-all group">
                       <div className="flex items-center gap-6">
                          <div className={`w-14 h-14 rounded-[1.2rem] flex items-center justify-center font-black text-lg ${item.s === 'Overdue' ? 'bg-red-100 text-red-600' : 'bg-blue-50 text-[#2663eb]'}`}>
                            <Calendar size={24} />
                          </div>
                          <div>
                             <p className="font-black text-slate-900 tracking-tight">{item.m}</p>
                             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Institutional Filing Mandate</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <p className="text-sm font-black text-slate-900 tracking-tight">{item.d}</p>
                          <span className={`text-[9px] font-black uppercase tracking-widest mt-1 ${item.s === 'Overdue' ? 'text-red-500' : item.s === 'Completed' ? 'text-emerald-500' : 'text-[#2663eb]'}`}>{item.s}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          )}

          {/* Placeholders for other tabs */}
          {['Documents', 'Tasks', 'Services', 'Payments'].includes(activeTab) && (
            <div className="flex flex-col items-center justify-center py-32 bg-white rounded-[3rem] border border-slate-100 shadow-inner">
               <div className="w-24 h-24 bg-slate-50 rounded-[2.5rem] flex items-center justify-center text-slate-200 mb-8">
                  {activeTab === 'Documents' ? <FileText size={48} /> : activeTab === 'Tasks' ? <Layers size={48} /> : activeTab === 'Services' ? <Briefcase size={48} /> : <CreditCard size={48} />}
               </div>
               <h3 className="text-2xl font-black text-slate-900 tracking-tight">Accessing Secure {activeTab} Vault</h3>
               <p className="text-slate-400 font-medium text-sm mt-3 max-w-xs text-center">Opening institutional data records and mandate files for {client.businessName}...</p>
               <div className="mt-10 flex gap-3">
                  <div className="w-2.5 h-2.5 bg-[#2663eb] rounded-full animate-bounce" />
                  <div className="w-2.5 h-2.5 bg-[#2663eb] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2.5 h-2.5 bg-[#2663eb] rounded-full animate-bounce [animation-delay:0.4s]" />
               </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function StepItem({ number, label, active, completed }: { number: number, label: string, active: boolean, completed: boolean }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className={`w-10 h-10 rounded-[1rem] flex items-center justify-center text-xs font-black transition-all ${completed ? 'bg-emerald-500 text-white' : active ? 'bg-[#2663eb] text-white shadow-lg shadow-blue-500/20' : 'bg-slate-800 text-slate-500 border border-slate-700'}`}>
        {completed ? <CheckCircle2 size={18} /> : number}
      </div>
      <span className={`text-[11px] font-black uppercase tracking-widest transition-all ${active ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>{label}</span>
    </div>
  );
}

function InputGroup({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">{label}</label>
      <input type={type} placeholder={placeholder} className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-[1.2rem] outline-none focus:ring-2 focus:ring-[#2663eb] text-sm font-medium transition-all" />
    </div>
  );
}

function ContactCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-5 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm group hover:shadow-md transition-all">
       <div className="p-4 bg-slate-50 text-slate-400 rounded-[1.2rem] group-hover:bg-blue-50 group-hover:text-[#2663eb] transition-all">
          {icon}
       </div>
       <div>
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">{label}</p>
          <p className="text-sm font-black text-slate-900 tracking-tight">{value}</p>
       </div>
    </div>
  );
}

function HealthBar({ label, score }: { label: string, score: number }) {
  return (
    <div className="space-y-2">
       <div className="flex justify-between items-end">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</span>
          <span className="text-xs font-black text-slate-900">{score}%</span>
       </div>
       <div className="w-full h-2 bg-slate-50 rounded-full border border-slate-100 overflow-hidden">
          <div className={`h-full rounded-full transition-all duration-1000 ${score >= 90 ? 'bg-emerald-500' : score >= 70 ? 'bg-amber-400' : 'bg-red-500'}`} style={{ width: `${score}%` }} />
       </div>
    </div>
  );
}

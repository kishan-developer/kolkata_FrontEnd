"use client";

import React, { useState } from 'react';
import {
  X,
  Mail,
  Phone,
  ShieldCheck,
  ShieldAlert,
  PenSquare,
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
  ClipboardList
} from "lucide-react";
import { User, UserRole, UserStatus } from "./types";
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
        className={`relative bg-white w-full ${maxWidth} rounded-[1.5rem] shadow-2xl overflow-hidden z-10`}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function AddUserModal({ isOpen, onClose, onAdd }: { isOpen: boolean, onClose: () => void, onAdd: (user: any) => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-2xl">
      <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Register Institutional Profile</h2>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Create new admin, team, or client accounts</p>
        </div>
        <button onClick={onClose} className="p-3 hover:bg-white rounded-[1rem] transition-all shadow-sm border border-transparent hover:border-slate-200">
          <X size={20} className="text-slate-400" />
        </button>
      </div>
      <form className="p-8" onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        onAdd({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          role: formData.get('role'),
          assignedServices: formData.getAll('services') as string[],
          manager: formData.get('manager'),
          status: 'active'
        });
      }}>
        <div className="grid grid-cols-2 gap-6">
          <InputGroup label="Full Name" name="name" placeholder="Legal Name" required />
          <InputGroup label="Email Address" name="email" type="email" placeholder="corporate@entity.com" required />
          <InputGroup label="Phone Number" name="phone" placeholder="+91 XXXXX XXXXX" required />

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Institutional Role</label>
            <select name="role" className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-[1rem] outline-none focus:ring-2 focus:ring-[#2663eb] text-sm font-bold">
              <option value="Client">Client</option>
              <option value="GST Expert">GST Expert</option>
              <option value="IT Expert">IT Expert</option>
              <option value="Accountant">Accountant</option>
              <option value="Manager">Manager</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="col-span-2 space-y-4">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Assign Service Verticals</label>
            <div className="grid grid-cols-3 gap-3">
              {['GST', 'ITR', 'MCA', 'Audit', 'Loan', 'Legal'].map(service => (
                <label key={service} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-[1rem] cursor-pointer hover:bg-blue-50 transition-all border-b-2 border-r-2 group">
                  <input type="checkbox" name="services" value={service} className="w-4 h-4 rounded border-slate-300 text-[#2663eb] focus:ring-[#2663eb]" />
                  <span className="text-xs font-black text-slate-600 uppercase tracking-widest group-hover:text-[#2663eb]">{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="col-span-2">
            <InputGroup label="Assign Reporting Manager (Optional)" name="manager" placeholder="Search Manager..." />
          </div>
        </div>

        <div className="pt-10 flex gap-4">
          <button type="button" onClick={onClose} className="flex-1 py-4 bg-slate-100 text-slate-600 font-black text-xs uppercase tracking-widest rounded-[1rem] hover:bg-slate-200 transition-all active:scale-95">Cancel</button>
          <button type="submit" className="flex-1 py-4 bg-[#2663eb] text-white font-black text-xs uppercase tracking-widest rounded-[1rem] hover:bg-[#1d4ed8] shadow-lg shadow-blue-100 transition-all active:scale-95 border-b-4 border-[#1e40af]">Complete Registration</button>
        </div>
      </form>
    </Modal>
  );
}

export function TaskAssignmentModal({ isOpen, onClose, user }: { isOpen: boolean, onClose: () => void, user: User }) {
  if (!user) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-xl">
      <div className="p-8 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Assign Strategic Task</h2>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Assigning mandate to {user.name}</p>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-all">
          <X size={20} className="text-slate-400" />
        </button>
      </div>
      <form className="p-8 space-y-6">
        <InputGroup label="Task Title" name="title" placeholder="e.g., GST Reconciliation Q3" required />
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Service Category</label>
            <select className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-[1rem] outline-none focus:ring-2 focus:ring-[#2663eb] text-sm font-bold">
              {user.assignedServices.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <InputGroup label="Deadline" name="deadline" type="date" required />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Priority Level</label>
          <div className="flex gap-2">
            {['Low', 'Medium', 'High', 'Critical'].map(p => (
              <label key={p} className="flex-1 text-center py-2 border rounded-[0.8rem] text-[10px] font-black uppercase cursor-pointer hover:border-[#2663eb] has-[:checked]:bg-blue-50 has-[:checked]:border-[#2663eb] has-[:checked]:text-[#2663eb] transition-all">
                <input type="radio" name="priority" value={p} className="hidden" defaultChecked={p === 'Medium'} />
                {p}
              </label>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Instructions / Notes</label>
          <textarea className="w-full h-32 p-4 bg-slate-50 border border-slate-200 rounded-[1rem] outline-none focus:ring-2 focus:ring-[#2663eb] text-sm font-medium resize-none" placeholder="Provide detailed mandate instructions..." />
        </div>
        <div className="pt-4">
          <button className="w-full py-4 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.2em] rounded-[1rem] hover:bg-black transition-all shadow-xl shadow-slate-200 border-b-4 border-slate-700">
            Assign Mandate
          </button>
        </div>
      </form>
    </Modal>
  );
}

export function ServiceAssignmentModal({ isOpen, onClose, user }: { isOpen: boolean, onClose: () => void, user: User }) {
  if (!user) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-xl">
      <div className="p-8 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Assign New Service</h2>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Expanding services for {user.name}</p>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-all">
          <X size={20} className="text-slate-400" />
        </button>
      </div>
      <form className="p-8 space-y-6">
        <div className="space-y-4">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Select Service Bundle</label>
          <div className="grid grid-cols-2 gap-4">
            {['Income Tax Filing', 'GST Compliance', 'ROC Annual Filing', 'Statutory Audit', 'Payroll Management', 'FEMA Compliance'].map(s => (
              <label key={s} className="flex flex-col gap-1 p-4 bg-slate-50 border border-slate-100 rounded-[1rem] cursor-pointer hover:bg-blue-50 hover:border-[#2663eb] transition-all group">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black text-slate-900 uppercase tracking-tight">{s}</span>
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#2663eb]" />
                </div>
                <span className="text-[9px] text-slate-400 font-bold uppercase">Quarterly Mandate</span>
              </label>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Onboarding Documents</label>
          <div className="border-2 border-dashed border-slate-200 rounded-[1rem] p-8 flex flex-col items-center justify-center bg-slate-50 hover:bg-blue-50 hover:border-[#2663eb] transition-all cursor-pointer group">
            <Upload size={32} className="text-slate-300 group-hover:text-[#2663eb] mb-2" />
            <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Drop Required Documents</p>
            <p className="text-[9px] text-slate-400 font-bold uppercase mt-1">PAN, Aadhaar, GST Cert, etc.</p>
          </div>
        </div>
        <div className="pt-4 flex gap-4">
          <button type="button" onClick={onClose} className="flex-1 py-4 bg-slate-100 text-slate-600 font-black text-xs uppercase tracking-widest rounded-[1rem]">Cancel</button>
          <button className="flex-1 py-4 bg-[#2663eb] text-white font-black text-xs uppercase tracking-widest rounded-[1rem] border-b-4 border-[#1e40af]">Finalize Assignment</button>
        </div>
      </form>
    </Modal>
  );
}

export function UserProfileDetail({ isOpen, onClose, user }: { isOpen: boolean, onClose: () => void, user: User }) {
  const [activeTab, setActiveTab] = useState('Overview');
  if (!user || !isOpen) return null;

  const tabs = ['Overview', 'Assigned Services', 'Tasks', 'Documents', 'Activity Log', 'Payments'];

  return (
    <div className="fixed inset-0 z-[110] flex items-end justify-center sm:items-center p-0 sm:p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={onClose} />
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative bg-[#F8FAFC] w-full h-[95vh] sm:h-[90vh] max-w-6xl rounded-t-[2.5rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header Section */}
        <div className="bg-white border-b border-slate-100 p-8 sm:p-12 pb-0 flex-shrink-0">
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-8 mb-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-8">
              <div className="relative group">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-[2rem] bg-gradient-to-br from-blue-500 to-[#1d4ed8] p-1.5 shadow-2xl overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`} className="w-full h-full object-cover rounded-[1.8rem]" alt="" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-[1rem] shadow-lg flex items-center justify-center text-emerald-500 border-2 border-slate-50">
                  <ShieldCheck size={24} />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter leading-none mb-4">{user.name}</h1>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <span className="px-3 py-1 bg-blue-50 text-[#2663eb] text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-100">{user.role}</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-full border border-slate-200">ID: {user.id}</span>
                  <div className="flex items-center gap-2 text-emerald-500 font-black text-[10px] uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    System Active
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-[1.2rem] font-black text-[11px] uppercase tracking-widest hover:bg-slate-50 transition-all border-b-4 active:scale-95">Edit Details</button>
              <button className="px-6 py-3 bg-red-600 text-white rounded-[1.2rem] font-black text-[11px] uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg shadow-red-100 border-b-4 border-red-800 active:scale-95">Block Access</button>
            </div>
          </div>

          <div className="flex gap-8 overflow-x-auto no-scrollbar">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-6 text-[11px] font-black uppercase tracking-[0.2em] relative transition-all whitespace-nowrap ${activeTab === tab ? 'text-[#2663eb]' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {tab}
                {activeTab === tab && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-[#2663eb] rounded-t-full" />}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-8 sm:p-12">
          {activeTab === 'Overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <ContactCard icon={<Mail />} label="Email Address" value={user.email} />
                  <ContactCard icon={<Phone />} label="Phone Number" value={user.phone} />
                </div>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">Filing Performance Index</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Compliance Health</span>
                      <span className="text-xl font-black text-slate-900">94.2%</span>
                    </div>
                    <div className="w-full h-4 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                      <div className="w-[94.2%] h-full bg-gradient-to-r from-blue-500 to-[#2663eb] rounded-full shadow-lg" />
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <StatSmall label="Avg. Response" value="4.2h" />
                      <StatSmall label="Error Rate" value="0.08%" />
                      <StatSmall label="Filing Count" value="128" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-[#0F172A] text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#2663eb]/20 rounded-full blur-3xl -mr-16 -mt-16" />
                  <h3 className="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                    <ShieldAlert size={16} className="text-[#2663eb]" /> Security Status
                  </h3>
                  <div className="space-y-4">
                    <SecurityItem label="Two-Factor Auth" status="Enabled" color="text-emerald-400" />
                    <SecurityItem label="Last Password Reset" status="14 Days ago" />
                    <SecurityItem label="Access Level" status="Tier 1 Institutional" />
                  </div>
                </div>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">Assigned Manager</h3>
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-[1.5rem] border border-slate-100">
                    <div className="w-12 h-12 rounded-[1rem] bg-slate-200 overflow-hidden">
                      <img src="https://api.dicebear.com/7.x/initials/svg?seed=RS" alt="" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900">{user.manager || 'Not Assigned'}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Senior Partner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'Assigned Services' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {user.assignedServices.map(s => (
                <div key={s} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group border-b-8 border-b-slate-100 hover:border-b-[#2663eb]">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 bg-blue-50 text-[#2663eb] rounded-[1.2rem] group-hover:scale-110 transition-transform">
                      <Layers size={24} />
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Mandate</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">{s} Compliance</h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Institutional Management</p>
                  <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Status</span>
                      <span className="text-[11px] font-black text-emerald-500 uppercase tracking-widest">In Progress</span>
                    </div>
                    <button className="p-3 bg-slate-50 text-slate-400 rounded-[1rem] hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                      <ChevronDown size={18} />
                    </button>
                  </div>
                </div>
              ))}
              <button className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] p-8 flex flex-col items-center justify-center gap-4 hover:bg-white hover:border-[#2663eb] hover:border-solid transition-all group">
                <div className="p-4 bg-white rounded-full shadow-sm group-hover:bg-[#2663eb] group-hover:text-white transition-all">
                  <Plus size={24} />
                </div>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest group-hover:text-[#2663eb]">Assign New Vertical</span>
              </button>
            </div>
          )}
          {/* Add placeholders for other tabs to keep the UI clean */}
          {['Tasks', 'Documents', 'Activity Log', 'Payments'].includes(activeTab) && (
            <div className="flex flex-col items-center justify-center py-24 bg-white rounded-[3rem] border border-slate-100 shadow-inner">
              <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center text-slate-200 mb-6">
                {activeTab === 'Tasks' ? <ClipboardList size={40} /> : activeTab === 'Documents' ? <FileText size={40} /> : activeTab === 'Payments' ? <CreditCard size={40} /> : <History size={40} />}
              </div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">Accessing {activeTab}</h3>
              <p className="text-slate-400 font-medium text-sm mt-2 max-w-xs text-center">Loading institutional records and secure vaults for {user.name}...</p>
              <div className="mt-8 flex gap-2">
                <div className="w-2 h-2 bg-[#2663eb] rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-[#2663eb] rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 bg-[#2663eb] rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
        </div>

        <button onClick={onClose} className="absolute top-8 right-8 p-4 bg-slate-900 text-white rounded-[1.5rem] shadow-2xl hover:bg-black transition-all active:scale-90 sm:hidden">
          <X size={24} />
        </button>
      </motion.div>
    </div>
  );
}

function InputGroup({ label, name, type = "text", placeholder, required = false }: { label: string, name: string, type?: string, placeholder?: string, required?: boolean }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-[1rem] outline-none focus:ring-2 focus:ring-[#2663eb] text-sm font-medium placeholder:text-slate-300 transition-all"
      />
    </div>
  );
}

function ContactCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-4 p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm group hover:shadow-md transition-all">
      <div className="p-4 bg-slate-50 text-slate-400 rounded-[1.2rem] group-hover:bg-blue-50 group-hover:text-[#2663eb] transition-all">
        {icon}
      </div>
      <div>
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-sm font-black text-slate-900 tracking-tight">{value}</p>
      </div>
    </div>
  );
}

function StatSmall({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{label}</span>
      <span className="text-sm font-black text-slate-900 tracking-tight mt-0.5">{value}</span>
    </div>
  );
}

function SecurityItem({ label, status, color = "text-slate-400" }: { label: string, status: string, color?: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
      <span className={`text-[10px] font-black uppercase tracking-widest ${color}`}>{status}</span>
    </div>
  );
}

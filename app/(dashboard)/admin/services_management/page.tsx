"use client";

import { useState } from "react";
import {
  Briefcase,
  Plus,
  Search,
  Filter,
  Layers,
  CheckCircle2,
  Clock,
  AlertCircle,
  LayoutGrid,
  List,
  ChevronRight,
  Settings2,
  FileText,
  BarChart3,
  Users
} from "lucide-react";
import { Service, ServiceCategory, ServiceTask } from "./_components/types";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesManagementPage() {
  const [activeTab, setActiveTab] = useState<'Catalog' | 'Mandates'>('Catalog');
  const [searchQuery, setSearchQuery] = useState("");

  const categories: ServiceCategory[] = [
    'Business Registration', 'Income Tax', 'GST', 'Audit', 'MCA', 'Startup', 'Loan', 'Legal', 'Advisory'
  ];

  const services: Service[] = [
    {
      id: "SRV-001",
      name: "Private Limited Incorporation",
      category: "Business Registration",
      basePrice: 15000,
      timeline: "15-20 Days",
      requiredDocs: ["PAN", "Aadhaar", "Address Proof", "MoA/AoA"],
      activeClients: 42,
      status: "Active",
      description: "End-to-end company incorporation including DSC, DIN, and PAN/TAN."
    },
    {
      id: "SRV-002",
      name: "GSTR-3B Monthly Filing",
      category: "GST",
      basePrice: 2000,
      timeline: "Monthly",
      requiredDocs: ["Sales Register", "Purchase Register", "E-way Bills"],
      activeClients: 156,
      status: "Active",
      description: "Regular monthly GST return filing and reconciliation."
    },
    {
      id: "SRV-003",
      name: "Statutory Audit (FY 2023-24)",
      category: "Audit",
      basePrice: 25000,
      timeline: "30-45 Days",
      requiredDocs: ["Financials", "Vouchers", "Bank Statements"],
      activeClients: 18,
      status: "Active",
      description: "Mandatory annual statutory audit for private limited companies."
    }
  ];

  const mandates: ServiceTask[] = [
    { id: "MND-101", clientName: "Malhotra Tech", serviceName: "Private Limited Incorporation", assignedTo: "Sonal Gupta", progress: 75, status: "In Progress", dueDate: "Oct 15, 2024" },
    { id: "MND-102", clientName: "Singhania Exports", serviceName: "Statutory Audit", assignedTo: "Rahul Sharma", progress: 30, status: "In Progress", dueDate: "Oct 30, 2024" },
    { id: "MND-103", clientName: "Das Textiles", serviceName: "GST Filing", assignedTo: "Amit Singh", progress: 100, status: "Completed", dueDate: "Oct 11, 2024" },
  ];

  return (
    <div className="space-y-10 mt-10 min-h-screen bg-slate-50/30 p-8 rounded-[2rem] animate-in fade-in duration-700">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Services & Mandates</h1>
          <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mt-2">Master Service Catalog & Live Fulfillment Tracking</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 rounded-[1.2rem] shadow-sm border border-slate-100">
          <TabButton
            active={activeTab === 'Catalog'}
            onClick={() => setActiveTab('Catalog')}
            icon={<LayoutGrid size={16} />}
            label="Master Catalog"
          />
          <TabButton
            active={activeTab === 'Mandates'}
            onClick={() => setActiveTab('Mandates')}
            icon={<BarChart3 size={16} />}
            label="Live Mandates"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'Catalog' ? (
          <motion.div
            key="catalog"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-8"
          >
            {/* Catalog Controls */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-[1rem] outline-none focus:ring-2 focus:ring-[#2663eb] text-sm font-medium"
                />
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-[1rem] font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all">
                  <Filter size={14} /> Filter Categories
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-[#2663eb] text-white rounded-[1rem] font-black text-[10px] uppercase tracking-widest hover:bg-[#1d4ed8] shadow-lg shadow-blue-100 transition-all border-b-4 border-[#1e40af]">
                  <Plus size={14} /> Create New Service
                </button>
              </div>
            </div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full border-b-8 border-b-slate-100 hover:border-b-[#2663eb]">
                  <div className="flex items-center justify-between mb-8">
                    <span className="px-3 py-1 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest rounded-full">{service.category}</span>
                    <Settings2 className="text-slate-300 hover:text-slate-600 cursor-pointer transition-colors" size={18} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3 group-hover:text-[#2663eb] transition-colors">{service.name}</h3>
                  <p className="text-sm text-slate-500 font-medium line-clamp-2 mb-6">{service.description}</p>

                  <div className="space-y-4 mt-auto">
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-[1.2rem]">
                      <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Base Premium</p>
                        <p className="text-lg font-black text-slate-900 tracking-tighter">₹{service.basePrice.toLocaleString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">TAT</p>
                        <p className="text-xs font-black text-slate-900 uppercase tracking-widest">{service.timeline}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <div className="flex items-center gap-2">
                        <Users size={14} className="text-slate-400" />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{service.activeClients} Active Clients</span>
                      </div>
                      <button className="p-3 bg-blue-50 text-[#2663eb] rounded-[1rem] hover:bg-[#2663eb] hover:text-white transition-all shadow-sm">
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="mandates"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            {/* Mandate Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatSmall label="Total Ongoing" value="142" icon={<Layers size={20} />} color="blue" />
              <StatSmall label="Pending Review" value="12" icon={<Clock size={20} />} color="orange" />
              <StatSmall label="Completed (M)" value="84" icon={<CheckCircle2 size={20} />} color="emerald" />
            </div>

            {/* Mandate Table */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50/50 border-b border-slate-100">
                  <tr>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Mandate ID & Client</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Service Vertical</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Progress</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Assigned Specialist</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Due Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {mandates.map((mandate, idx) => (
                    <tr key={idx} className="group hover:bg-slate-50/50 transition-all cursor-pointer">
                      <td className="px-8 py-6">
                        <div>
                          <p className="text-sm font-black text-slate-900 tracking-tight">{mandate.clientName}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{mandate.id}</p>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-blue-50 text-[#2663eb] text-[9px] font-black uppercase tracking-widest rounded-full border border-blue-100">{mandate.serviceName}</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className={`text-[9px] font-black uppercase tracking-widest ${mandate.status === 'Completed' ? 'text-emerald-500' : 'text-[#2663eb]'}`}>{mandate.status}</span>
                            <span className="text-[10px] font-black text-slate-900">{mandate.progress}%</span>
                          </div>
                          <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full transition-all duration-1000 ${mandate.status === 'Completed' ? 'bg-emerald-500' : 'bg-[#2663eb]'}`} style={{ width: `${mandate.progress}%` }} />
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-[10px] uppercase tracking-tighter">
                            {mandate.assignedTo.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-xs font-black text-slate-600 tracking-tight">{mandate.assignedTo}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="text-slate-400" />
                          <span className="text-xs font-black text-slate-900 tracking-tight">{mandate.dueDate}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-[1rem] font-black text-[10px] uppercase tracking-widest transition-all ${active ? 'bg-[#2663eb] text-white shadow-lg shadow-blue-100' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
    >
      {icon} {label}
    </button>
  );
}

function StatSmall({ label, value, icon, color }: { label: string, value: string, icon: React.ReactNode, color: string }) {
  const colors: Record<string, string> = {
    blue: 'bg-blue-50 text-[#2663eb] border-blue-100',
    orange: 'bg-orange-50 text-orange-600 border-orange-100',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100'
  };

  return (
    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-6 group hover:shadow-md transition-all">
      <div className={`p-4 rounded-[1.2rem] ${colors[color]} border transition-transform group-hover:scale-110`}>
        {icon}
      </div>
      <div>
        <p className="text-2xl font-black text-slate-900 tracking-tighter">{value}</p>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{label}</p>
      </div>
    </div>
  );
}

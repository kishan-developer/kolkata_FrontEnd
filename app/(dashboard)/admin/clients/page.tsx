"use client";

import { useState, useMemo } from "react";
import { 
  Users, 
  UserPlus, 
  Download, 
  Filter, 
  Search, 
  Briefcase, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  RefreshCw,
  LayoutGrid,
  FileText
} from "lucide-react";
import { Client, ClientFilters, ClientStatus, EntityType } from "./_components/types";
import { ClientTable } from "./_components/ClientTable";
import { AddClientModal, ClientProfileDetail } from "./_components/ClientModals";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const [filters, setFilters] = useState<ClientFilters>({
    status: "all",
    entityType: "all",
    servicePackage: "all",
    team: "all",
    searchQuery: ""
  });

  const [clients, setClients] = useState<Client[]>([
    {
      id: "CLT-1024",
      name: "Rajesh Malhotra",
      businessName: "Malhotra Tech Solutions LLP",
      email: "rajesh@malhotratech.com",
      phone: "+91 98220 11223",
      entityType: "LLP",
      status: "Active",
      assignedTeam: ["Sonal Gupta", "Amit Singh"],
      servicePackage: "Platinum Business Bundle",
      complianceScore: 98,
      lastFiling: "GST Q3 - Sep 2024",
      joinedDate: "Jan 12, 2024",
      riskProfile: "Low"
    },
    {
      id: "CLT-1025",
      name: "Priya Das",
      businessName: "Das & Sons Textiles",
      email: "priya@dastextiles.in",
      phone: "+91 98220 11224",
      entityType: "Proprietorship",
      status: "Pending",
      assignedTeam: ["Rahul Sharma"],
      servicePackage: "Standard GST Filing",
      complianceScore: 65,
      lastFiling: "None",
      joinedDate: "Oct 01, 2024",
      riskProfile: "Medium"
    },
    {
      id: "CLT-1026",
      name: "Vikram Singhania",
      businessName: "Singhania Global Exports",
      email: "vikram@singhania.com",
      phone: "+91 98220 11225",
      entityType: "Private Limited",
      status: "Active",
      assignedTeam: ["Rahul Sharma", "Sonal Gupta"],
      servicePackage: "Corporate Compliance Pro",
      complianceScore: 82,
      lastFiling: "MCA AOC-4",
      joinedDate: "Mar 15, 2024",
      riskProfile: "Low"
    },
    {
      id: "CLT-1027",
      name: "Anita Verma",
      businessName: "Anita Verma (Individual)",
      email: "anita@gmail.com",
      phone: "+91 98220 11226",
      entityType: "Individual",
      status: "On-Hold",
      assignedTeam: ["Amit Singh"],
      servicePackage: "ITR Filing Plus",
      complianceScore: 42,
      lastFiling: "ITR-1 (2023)",
      joinedDate: "Aug 20, 2024",
      riskProfile: "High"
    }
  ]);

  const filteredClients = useMemo(() => {
    return clients.filter(client => {
      const matchesSearch =
        client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.id.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = filters.status === "all" || client.status === filters.status;
      const matchesEntity = filters.entityType === "all" || client.entityType === filters.entityType;

      return matchesSearch && matchesStatus && matchesEntity;
    });
  }, [searchQuery, filters, clients]);

  const stats = [
    { label: "Total Clients", value: "1,248", icon: Users, color: "text-[#2563EB]", bgColor: "bg-[#2563EB]/10" },
    { label: "Active Mandates", value: "842", icon: Briefcase, color: "text-emerald-600", bgColor: "bg-emerald-100" },
    { label: "Pending Onboarding", value: "15", icon: Clock, color: "text-orange-600", bgColor: "bg-orange-100" },
    { label: "Compliance Risk", value: "4", icon: AlertTriangle, color: "text-red-600", bgColor: "bg-red-100" },
  ];

  return (
    <div className="space-y-10 mt-10 min-h-screen bg-slate-50/30 p-8 rounded-[2rem] animate-in fade-in duration-700">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Client Management</h1>
          <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mt-2">Institutional Entity Directory & Mandate Tracking</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-[#2663eb] text-white rounded-[1rem] font-black text-[10px] uppercase tracking-widest hover:bg-[#1d4ed8] shadow-lg shadow-blue-100 transition-all active:scale-95 border-b-4 border-[#1e40af]"
          >
            <UserPlus size={14} /> Add New Client
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white p-8 rounded-[1.5rem] border border-slate-100 shadow-sm group hover:shadow-md transition-all"
          >
            <div className={`${stat.color} w-12 h-12 rounded-[1rem] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
              <stat.icon size={24} />
            </div>
            <p className="text-3xl font-black text-slate-900 tracking-tighter">{stat.value}</p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Table & Filters */}
      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by client name, business, or ID..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-[1rem] outline-none focus:ring-2 focus:ring-[#2663eb] text-sm font-medium transition-all"
            />
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-6 py-3 rounded-[1rem] font-black text-[10px] uppercase tracking-widest transition-all border ${showFilters ? 'bg-slate-900 text-white shadow-xl' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
            >
              <Filter size={14} /> Filter Entity
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-[1rem] font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all">
              <Download size={14} /> Export Directory
            </button>
          </div>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 pb-2 border-t border-slate-50">
                <FilterSelect 
                  label="Entity Type" 
                  options={['LLP', 'Proprietorship', 'Private Limited', 'Individual', 'Partnership']} 
                  onChange={(v) => setFilters(f => ({ ...f, entityType: v }))} 
                />
                <FilterSelect 
                  label="Client Status" 
                  options={['Active', 'Pending', 'Completed', 'On-Hold']} 
                  onChange={(v) => setFilters(f => ({ ...f, status: v }))} 
                />
                <FilterSelect 
                  label="Assigned Team" 
                  options={['Rahul Sharma', 'Sonal Gupta', 'Amit Singh']} 
                  onChange={(v) => setFilters(f => ({ ...f, team: v }))} 
                />
                <div className="flex items-end">
                  <button 
                    onClick={() => { setSearchQuery(""); setFilters({ status: "all", entityType: "all", servicePackage: "all", team: "all", searchQuery: "" }); }}
                    className="w-full h-11 flex items-center justify-center gap-2 text-slate-400 hover:text-slate-600 transition-all font-black text-[10px] uppercase tracking-widest"
                  >
                    <RefreshCw size={14} /> Reset Directory
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <ClientTable 
          clients={filteredClients} 
          onView={(c) => { setSelectedClient(c); setIsDetailOpen(true); }}
        />
      </div>

      {/* Modals */}
      <AddClientModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onAdd={(data) => {
          setClients(prev => [{ ...data, id: `CLT-${Math.floor(Math.random()*9000)+1000}`, joinedDate: 'Today', complianceScore: 100, lastFiling: 'Pending' }, ...prev]);
          setIsAddModalOpen(false);
        }}
      />

      {selectedClient && (
        <ClientProfileDetail 
          isOpen={isDetailOpen} 
          onClose={() => setIsDetailOpen(false)} 
          client={selectedClient} 
        />
      )}
    </div>
  );
}

function FilterSelect({ label, options, onChange }: { label: string, options: string[], onChange: (val: string) => void }) {
  return (
    <div className="space-y-2">
      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1">{label}</label>
      <select 
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-[1rem] outline-none text-xs font-bold uppercase tracking-tight"
      >
        <option value="all">All {label}s</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

"use client";

import { useState } from "react";
import { 
  FileText, 
  Search, 
  Filter, 
  Eye, 
  Download, 
  CheckCircle2, 
  AlertCircle, 
  Clock,
  ShieldCheck,
  FolderLock,
  Upload,
  Calendar,
  Key,
  ChevronRight,
  MoreVertical,
  BellRing,
  Smartphone
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DocumentManagementPage() {
  const [activeTab, setActiveTab] = useState<'Vault' | 'Expiry' | 'DSC'>('Vault');

  const documents = [
    { id: "DOC-8821", name: "Incorporation_Cert.pdf", client: "Malhotra Tech", category: "Corporate", date: "Oct 01, 2024", size: "2.4 MB", status: "Verified" },
    { id: "DOC-8822", name: "GST_Reg_Certificate.pdf", client: "Das Textiles", category: "GST", date: "Oct 05, 2024", size: "1.1 MB", status: "Verified" },
    { id: "DOC-8823", name: "PAN_Card_Anita.png", client: "Anita Verma", category: "Personal", date: "Oct 08, 2024", size: "850 KB", status: "Pending" },
  ];

  const expiryAlerts = [
    { item: "DSC - Rajesh Malhotra", client: "Malhotra Tech", type: "Class 3", expiry: "Oct 15, 2024", daysLeft: 4, priority: "Critical" },
    { item: "Trademark - Logo V1", client: "Singhania Exports", type: "Intellectual Property", expiry: "Nov 20, 2024", daysLeft: 40, priority: "Medium" },
    { item: "GST LUT Filing", client: "Global Solutions", type: "GST Mandate", expiry: "Oct 12, 2024", daysLeft: 1, priority: "Critical" },
  ];

  const dscInventory = [
    { holder: "Rajesh Malhotra", type: "Class 3 - Combo", provider: "e-Mudhra", expiry: "Oct 15, 2024", status: "In Use", location: "Mumbai Office" },
    { holder: "Sonal Gupta", type: "Class 3 - Sign", provider: "VSign", expiry: "Dec 30, 2025", status: "Available", location: "Safe Vault" },
  ];

  return (
    <div className="space-y-10 mt-10 min-h-screen bg-slate-50/30 p-8 rounded-[2rem] animate-in fade-in duration-700">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Digital Asset Vault</h1>
          <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mt-2">Secure Document Lifecycle & Compliance Storage</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 rounded-[1.2rem] shadow-sm border border-slate-100">
          <TabButton active={activeTab === 'Vault'} onClick={() => setActiveTab('Vault')} icon={<FolderLock size={16} />} label="Client Vault" />
          <TabButton active={activeTab === 'Expiry'} onClick={() => setActiveTab('Expiry')} icon={<BellRing size={16} />} label="Expiry Tracker" />
          <TabButton active={activeTab === 'DSC'} onClick={() => setActiveTab('DSC')} icon={<Key size={16} />} label="DSC Manager" />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'Vault' && (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               <StatCard label="Total Assets" value="4,821" icon={<FileText size={24} />} color="blue" />
               <StatCard label="Verified" value="4,612" icon={<CheckCircle2 size={24} />} color="emerald" />
               <StatCard label="Pending AI" value="128" icon={<Clock size={24} />} color="orange" />
               <StatCard label="Compliance Gaps" value="14" icon={<AlertCircle size={24} />} color="red" />
            </div>

            {/* Content Table */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
               <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="relative flex-1 max-w-md">
                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                     <input type="text" placeholder="Search the secure vault..." className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-[1rem] outline-none focus:ring-2 focus:ring-[#2663eb] text-sm font-medium" />
                  </div>
                  <div className="flex gap-3">
                     <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-[1rem] font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
                        <Filter size={14} /> Refine Vault
                     </button>
                     <button className="flex items-center gap-2 px-6 py-3 bg-[#2663eb] text-white rounded-[1rem] font-black text-[10px] uppercase tracking-widest hover:bg-[#1d4ed8] shadow-lg shadow-blue-100 transition-all border-b-4 border-[#1e40af]">
                        <Upload size={14} /> Bulk Deposit
                     </button>
                  </div>
               </div>

               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead className="bg-slate-50/50 border-b border-slate-100">
                        <tr>
                           <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Document Name</th>
                           <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Client Entity</th>
                           <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Vertical</th>
                           <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Deposit Date</th>
                           <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-50">
                        {documents.map((doc, idx) => (
                          <tr key={idx} className="group hover:bg-slate-50/50 transition-all cursor-pointer">
                             <td className="px-8 py-6">
                                <div className="flex items-center gap-4">
                                   <div className="p-3 bg-blue-50 text-[#2663eb] rounded-[0.8rem] border border-blue-100 group-hover:scale-110 transition-transform shadow-sm">
                                      <FileText size={18} />
                                   </div>
                                   <div>
                                      <p className="text-sm font-black text-slate-900 tracking-tight">{doc.name}</p>
                                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{doc.size} &bull; {doc.id}</p>
                                   </div>
                                </div>
                             </td>
                             <td className="px-8 py-6">
                                <span className="text-xs font-black text-slate-600 tracking-tight">{doc.client}</span>
                             </td>
                             <td className="px-8 py-6">
                                <span className="px-3 py-1 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest rounded-full">{doc.category}</span>
                             </td>
                             <td className="px-8 py-6">
                                <span className="text-xs font-black text-slate-900 tracking-tight">{doc.date}</span>
                             </td>
                             <td className="px-8 py-6 text-right">
                                <div className="flex items-center justify-end gap-2">
                                   <button className="p-2.5 bg-slate-50 text-slate-400 hover:text-[#2663eb] hover:bg-white rounded-[0.8rem] transition-all shadow-sm border border-transparent hover:border-slate-100">
                                      <Eye size={16} />
                                   </button>
                                   <button className="p-2.5 bg-slate-50 text-slate-400 hover:text-emerald-500 hover:bg-white rounded-[0.8rem] transition-all shadow-sm border border-transparent hover:border-slate-100">
                                      <Download size={16} />
                                   </button>
                                </div>
                             </td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'Expiry' && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {expiryAlerts.map((alert, idx) => (
                  <div key={idx} className={`p-8 rounded-[2.5rem] border bg-white shadow-sm transition-all group border-b-8 ${alert.priority === 'Critical' ? 'border-b-red-500 hover:shadow-red-50' : 'border-b-orange-400 hover:shadow-orange-50'}`}>
                     <div className="flex items-center justify-between mb-8">
                        <div className={`p-4 rounded-[1.5rem] ${alert.priority === 'Critical' ? 'bg-red-50 text-red-500' : 'bg-orange-50 text-orange-500'}`}>
                           <AlertCircle size={24} />
                        </div>
                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${alert.priority === 'Critical' ? 'text-red-500' : 'text-orange-500'}`}>{alert.daysLeft} Days Left</span>
                     </div>
                     <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">{alert.item}</h3>
                     <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">{alert.client}</p>
                     <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                        <div className="flex items-center gap-2 text-slate-400">
                           <Calendar size={14} />
                           <span className="text-[10px] font-black uppercase tracking-widest">Expires: {alert.expiry}</span>
                        </div>
                        <button className="p-3 bg-slate-900 text-white rounded-[1rem] hover:scale-110 transition-transform shadow-lg">
                           <BellRing size={16} />
                        </button>
                     </div>
                  </div>
                ))}
             </div>
          </motion.div>
        )}

        {activeTab === 'DSC' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
             <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between mb-12">
                   <h3 className="text-2xl font-black text-slate-900 tracking-tighter">Digital Signature Inventory</h3>
                   <button className="px-6 py-3 bg-[#2663eb] text-white rounded-[1.2rem] font-black text-[10px] uppercase tracking-widest shadow-lg border-b-4 border-[#1e40af]">Deposit New DSC</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {dscInventory.map((dsc, idx) => (
                     <div key={idx} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                        <div className="flex items-center justify-between mb-6">
                           <div className="p-4 bg-white rounded-[1.2rem] text-[#2663eb] shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                              <Smartphone size={24} />
                           </div>
                           <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${dsc.status === 'In Use' ? 'bg-blue-50 text-[#2663eb] border-blue-100' : 'bg-emerald-50 text-emerald-500 border-emerald-100'}`}>{dsc.status}</span>
                        </div>
                        <h4 className="text-lg font-black text-slate-900 tracking-tight mb-1">{dsc.holder}</h4>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{dsc.type} &bull; {dsc.provider}</p>
                        <div className="flex items-center justify-between pt-6 border-t border-slate-200/50">
                           <div className="flex flex-col">
                              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Safe Location</span>
                              <span className="text-xs font-black text-slate-700 tracking-tight">{dsc.location}</span>
                           </div>
                           <div className="text-right">
                              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Valid Until</span>
                              <span className="text-xs font-black text-red-500 tracking-tight block">{dsc.expiry}</span>
                           </div>
                        </div>
                     </div>
                   ))}
                </div>
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

function StatCard({ label, value, icon, color }: { label: string, value: string, icon: React.ReactNode, color: string }) {
  const colors: Record<string, string> = {
    blue: 'bg-blue-50 text-[#2663eb] border-blue-100',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    orange: 'bg-orange-50 text-orange-600 border-orange-100',
    red: 'bg-red-50 text-red-600 border-red-100'
  };

  return (
    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm group hover:shadow-md transition-all">
       <div className={`p-4 rounded-[1.2rem] ${colors[color]} w-fit mb-6 transition-transform group-hover:scale-110 shadow-sm border`}>
          {icon}
       </div>
       <p className="text-3xl font-black text-slate-900 tracking-tighter">{value}</p>
       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{label}</p>
    </div>
  );
}
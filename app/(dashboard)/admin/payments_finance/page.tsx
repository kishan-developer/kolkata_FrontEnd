"use client";

import { useState } from "react";
import { 
  CreditCard, 
  Download, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Plus,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Receipt,
  Wallet,
  Building2,
  Calendar,
  MoreVertical,
  ChevronRight,
  PieChart
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PaymentsFinancePage() {
  const [activeTab, setActiveTab] = useState<'Transactions' | 'Invoices' | 'Subscriptions'>('Transactions');

  const transactions = [
    { id: "TXN-9921", client: "Malhotra Tech", service: "Statutory Audit", amount: "₹25,000", date: "Oct 08, 2024", status: "Successful", method: "Razorpay" },
    { id: "TXN-9922", client: "Anita Verma", service: "ITR Filing", amount: "₹1,500", date: "Oct 07, 2024", status: "Successful", method: "UPI" },
    { id: "TXN-9923", client: "Singhania Exports", service: "GST Professional", amount: "₹4,500", date: "Oct 05, 2024", status: "Pending", method: "Net Banking" },
    { id: "TXN-9924", client: "Das Textiles", service: "ROC Filing", amount: "₹8,000", date: "Oct 03, 2024", status: "Failed", method: "Card" },
  ];

  const invoices = [
    { id: "INV-2024-042", client: "Malhotra Tech", amount: "₹25,000", due: "Oct 15, 2024", status: "Unpaid" },
    { id: "INV-2024-041", client: "Global Solutions", amount: "₹12,400", due: "Oct 10, 2024", status: "Paid" },
    { id: "INV-2024-040", client: "Anita Verma", amount: "₹1,500", due: "Oct 05, 2024", status: "Paid" },
  ];

  return (
    <div className="space-y-10 mt-10 min-h-screen bg-slate-50/30 p-8 rounded-[2rem] animate-in fade-in duration-700">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Financial Ecosystem</h1>
          <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mt-2">Revenue Tracking & Institutional Billing</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 rounded-[1.2rem] shadow-sm border border-slate-100">
          <TabButton active={activeTab === 'Transactions'} onClick={() => setActiveTab('Transactions')} icon={<CreditCard size={16} />} label="Transactions" />
          <TabButton active={activeTab === 'Invoices'} onClick={() => setActiveTab('Invoices')} icon={<Receipt size={16} />} label="Invoices" />
          <TabButton active={activeTab === 'Subscriptions'} onClick={() => setActiveTab('Subscriptions')} icon={<PieChart size={16} />} label="Subscriptions" />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'Transactions' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            {/* Finance Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               <StatCard label="Total Revenue (Q3)" value="₹42.5L" icon={<TrendingUp size={24} />} color="blue" />
               <StatCard label="Net Realized" value="₹38.2L" icon={<ArrowUpRight size={24} />} color="emerald" />
               <StatCard label="Outstanding" value="₹4.3L" icon={<Clock size={24} />} color="orange" />
               <StatCard label="Client Wallet" value="₹1.2L" icon={<Wallet size={24} />} color="purple" />
            </div>

            {/* Transactions Table */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
               <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="relative flex-1 max-w-md">
                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                     <input type="text" placeholder="Search transactions, clients or IDs..." className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-[1rem] outline-none focus:ring-2 focus:ring-[#2663eb] text-sm font-medium" />
                  </div>
                  <div className="flex gap-3">
                     <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-[1rem] font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
                        <Download size={14} /> Export Report
                     </button>
                     <button className="flex items-center gap-2 px-6 py-3 bg-[#2663eb] text-white rounded-[1rem] font-black text-[10px] uppercase tracking-widest hover:bg-[#1d4ed8] shadow-lg shadow-blue-100 transition-all border-b-4 border-[#1e40af]">
                        <Plus size={14} /> Create Payment Link
                     </button>
                  </div>
               </div>

               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead className="bg-slate-50/50 border-b border-slate-100">
                        <tr>
                           <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Transaction ID & Client</th>
                           <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Service Vertical</th>
                           <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                           <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Gateway</th>
                           <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                           <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Status</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-50">
                        {transactions.map((txn, idx) => (
                          <tr key={idx} className="group hover:bg-slate-50/50 transition-all cursor-pointer">
                             <td className="px-8 py-6">
                                <div>
                                   <p className="text-sm font-black text-slate-900 tracking-tight">{txn.client}</p>
                                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{txn.id}</p>
                                </div>
                             </td>
                             <td className="px-8 py-6">
                                <span className="px-3 py-1 bg-blue-50 text-[#2663eb] text-[9px] font-black uppercase tracking-widest rounded-full border border-blue-100">{txn.service}</span>
                             </td>
                             <td className="px-8 py-6">
                                <p className="text-sm font-black text-slate-900 tracking-tighter">{txn.amount}</p>
                             </td>
                             <td className="px-8 py-6 text-xs font-bold text-slate-500 uppercase tracking-widest">{txn.method}</td>
                             <td className="px-8 py-6 text-xs font-black text-slate-900 tracking-tight">{txn.date}</td>
                             <td className="px-8 py-6 text-right">
                                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${txn.status === 'Successful' ? 'bg-emerald-50 text-emerald-500 border-emerald-100' : txn.status === 'Pending' ? 'bg-orange-50 text-orange-500 border-orange-100' : 'bg-red-50 text-red-500 border-red-100'}`}>{txn.status}</span>
                             </td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'Invoices' && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
             <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-10 px-4">
                   <h3 className="text-xl font-black text-slate-900 tracking-tighter">Billing Archive</h3>
                   <button className="flex items-center gap-2 px-6 py-3 bg-[#2663eb] text-white rounded-[1rem] font-black text-[10px] uppercase tracking-widest shadow-lg border-b-4 border-[#1e40af]">
                      <Plus size={14} /> Generate Invoice
                   </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {invoices.map((inv, idx) => (
                     <div key={idx} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all group relative overflow-hidden">
                        <div className={`absolute top-0 right-0 w-2 h-full ${inv.status === 'Paid' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                        <div className="flex items-center justify-between mb-8">
                           <div className="p-3 bg-white rounded-[1rem] shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                              <Receipt size={20} className="text-[#2663eb]" />
                           </div>
                           <span className={`text-[9px] font-black uppercase tracking-widest ${inv.status === 'Paid' ? 'text-emerald-500' : 'text-red-500'}`}>{inv.status}</span>
                        </div>
                        <h4 className="text-sm font-black text-slate-900 tracking-tight mb-1">{inv.client}</h4>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{inv.id}</p>
                        <div className="flex items-center justify-between pt-6 border-t border-slate-200/50">
                           <div>
                              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Invoice Amount</p>
                              <p className="text-lg font-black text-slate-900 tracking-tighter">{inv.amount}</p>
                           </div>
                           <div className="text-right">
                              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Due Date</p>
                              <p className="text-xs font-black text-slate-900 tracking-tight">{inv.due}</p>
                           </div>
                        </div>
                        <div className="mt-6 flex gap-2">
                           <button className="flex-1 py-3 bg-slate-900 text-white rounded-[0.8rem] text-[9px] font-black uppercase tracking-widest">Download PDF</button>
                           {inv.status === 'Unpaid' && (
                             <button className="p-3 bg-blue-50 text-[#2663eb] rounded-[0.8rem] hover:bg-[#2663eb] hover:text-white transition-all">
                                <ChevronRight size={16} />
                             </button>
                           )}
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
    purple: 'bg-purple-50 text-purple-600 border-purple-100'
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
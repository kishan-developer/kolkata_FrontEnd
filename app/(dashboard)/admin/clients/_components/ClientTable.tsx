"use client";

import React from 'react';
import { 
  Eye, 
  MoreVertical, 
  ShieldCheck, 
  Briefcase, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  FileText,
  UserCheck,
  ChevronRight,
  TrendingUp
} from "lucide-react";
import { Client } from "./types";
import { motion } from "framer-motion";

interface ClientTableProps {
  clients: Client[];
  onView: (client: Client) => void;
}

export function ClientTable({ clients, onView }: ClientTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-50/50 border-b border-slate-100">
            <th className="px-6 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Entity & Contact</th>
            <th className="px-6 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Business Structure</th>
            <th className="px-6 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Status & Health</th>
            <th className="px-6 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Assigned Team</th>
            <th className="px-6 py-5 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest pr-10">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {clients.map((client) => (
            <tr key={client.id} className="group hover:bg-slate-50/50 transition-all cursor-pointer" onClick={() => onView(client)}>
              <td className="px-6 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[1.2rem] bg-blue-50 flex items-center justify-center text-[#2663eb] border border-blue-100 group-hover:scale-110 transition-transform">
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <p className="font-black text-slate-900 text-sm tracking-tight">{client.businessName}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{client.name}</span>
                      <span className="w-1 h-1 bg-slate-200 rounded-full" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ID: {client.id}</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-6">
                <div className="space-y-1.5">
                  <span className="inline-flex items-center px-2 py-0.5 bg-slate-900 text-white text-[9px] font-black uppercase rounded-[0.4rem] tracking-widest">
                    {client.entityType}
                  </span>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{client.servicePackage}</p>
                </div>
              </td>
              <td className="px-6 py-6">
                <div className="space-y-3">
                  <StatusBadge status={client.status} />
                  <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden max-w-[100px]">
                     <div 
                      className={`h-full transition-all duration-1000 ${client.complianceScore >= 90 ? 'bg-emerald-500' : client.complianceScore >= 70 ? 'bg-amber-400' : 'bg-red-500'}`}
                      style={{ width: `${client.complianceScore}%` }}
                     />
                  </div>
                </div>
              </td>
              <td className="px-6 py-6">
                <div className="flex -space-x-3 overflow-hidden group-hover:space-x-1 transition-all duration-500">
                  {client.assignedTeam.map((member, i) => (
                    <div key={i} className="w-9 h-9 rounded-full bg-white p-0.5 border border-slate-100 shadow-sm" title={member}>
                      <img 
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${member}`} 
                        className="w-full h-full rounded-full object-cover"
                        alt={member}
                      />
                    </div>
                  ))}
                  {client.assignedTeam.length > 2 && (
                    <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] font-black text-slate-500">
                      +{client.assignedTeam.length - 2}
                    </div>
                  )}
                </div>
              </td>
              <td className="px-6 py-6 text-right pr-10">
                <button className="p-3 text-slate-400 hover:text-[#2663eb] hover:bg-blue-50 rounded-[1rem] transition-all">
                  <ChevronRight size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Active: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    Pending: 'bg-orange-50 text-orange-600 border-orange-100',
    Completed: 'bg-blue-50 text-[#2663eb] border-blue-100',
    'On-Hold': 'bg-slate-50 text-slate-400 border-slate-200'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${styles[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === 'Active' ? 'bg-emerald-500' : status === 'Pending' ? 'bg-orange-500' : 'bg-current opacity-50'}`} />
      {status}
    </span>
  );
}

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
          <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
            <th className="px-4 py-4 text-left text-xs font-semibold text-[#64748B] uppercase">Entity & Contact</th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-[#64748B] uppercase">Business Structure</th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-[#64748B] uppercase">Status & Health</th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-[#64748B] uppercase">Assigned Team</th>
            <th className="px-4 py-4 text-right text-xs font-semibold text-[#64748B] uppercase pr-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E2E8F0]">
          {clients.map((client) => (
            <tr key={client.id} className="group hover:bg-[#F8FAFC] transition-colors cursor-pointer" onClick={() => onView(client)}>
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] border border-[#2563EB]/20 group-hover:scale-110 transition-transform">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-[#0F172A] text-sm">{client.businessName}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-[#64748B]">{client.name}</span>
                      <span className="w-1 h-1 bg-[#E2E8F0] rounded-full" />
                      <span className="text-xs text-[#64748B]">ID: {client.id}</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="space-y-1.5">
                  <span className="inline-flex items-center px-2 py-0.5 bg-[#0F172A] text-white text-xs font-medium rounded-lg">
                    {client.entityType}
                  </span>
                  <p className="text-xs text-[#64748B]">{client.servicePackage}</p>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="space-y-3">
                  <StatusBadge status={client.status} />
                  <div className="w-full h-1.5 bg-[#F8FAFC] rounded-full overflow-hidden max-w-[100px]">
                     <div
                      className={`h-full transition-all duration-1000 ${client.complianceScore >= 90 ? 'bg-emerald-500' : client.complianceScore >= 70 ? 'bg-amber-400' : 'bg-red-500'}`}
                      style={{ width: `${client.complianceScore}%` }}
                     />
                  </div>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="flex -space-x-2 overflow-hidden group-hover:space-x-0 transition-all duration-500">
                  {client.assignedTeam.map((member, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white p-0.5 border border-[#E2E8F0] shadow-sm" title={member}>
                      <img
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${member}`}
                        className="w-full h-full rounded-full object-cover"
                        alt={member}
                      />
                    </div>
                  ))}
                  {client.assignedTeam.length > 2 && (
                    <div className="w-8 h-8 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-xs font-medium text-[#64748B]">
                      +{client.assignedTeam.length - 2}
                    </div>
                  )}
                </div>
              </td>
              <td className="px-4 py-4 text-right pr-4">
                <button className="p-2 text-[#64748B] hover:text-[#2563EB] hover:bg-[#F8FAFC] rounded-[10px] transition-colors">
                  <ChevronRight size={16} />
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
    Active: 'bg-emerald-100 text-emerald-600',
    Pending: 'bg-orange-100 text-orange-600',
    Completed: 'bg-blue-100 text-[#2563EB]',
    'On-Hold': 'bg-[#F8FAFC] text-[#64748B]'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium ${styles[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === 'Active' ? 'bg-emerald-500' : status === 'Pending' ? 'bg-orange-500' : 'bg-current opacity-50'}`} />
      {status}
    </span>
  );
}

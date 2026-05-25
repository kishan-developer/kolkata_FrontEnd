"use client";

import React from 'react';
import { Shield, ShieldCheck, ShieldAlert, Lock, Unlock, Eye, History, UserCheck, Key } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Permission Control Panel ---
export const PermissionPanel = () => {
  const roles = [
    { name: 'Super Admin', permissions: ['All Access', 'User Management', 'Financial Data', 'System Config'] },
    { name: 'Admin', permissions: ['User Management', 'Service Management', 'Document Access'] },
    { name: 'Manager', permissions: ['Team Management', 'Task Assignment', 'Client Communication'] },
    { name: 'GST Expert', permissions: ['GST Portal Access', 'Client Documents', 'Filing'] },
    { name: 'IT Expert', permissions: ['Income Tax Access', 'Tax Planning', 'Filing'] },
    { name: 'Accountant', permissions: ['Invoicing', 'Payment Tracking', 'Bookkeeping'] },
    { name: 'Client', permissions: ['My Documents', 'My Tasks', 'Support'] },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {roles.map((role, idx) => (
          <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm group hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-50 text-[#2663eb] rounded-[1.2rem] group-hover:bg-[#2663eb] group-hover:text-white transition-all">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">{role.name}</h3>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Access Tier {idx + 1}</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-slate-900 text-white rounded-[0.8rem] text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">Edit Scope</button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {role.permissions.map((p, pIdx) => (
                <div key={pIdx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-[1rem] border border-slate-100 group/item hover:bg-white hover:border-[#2663eb] transition-all">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <ShieldCheck size={12} />
                  </div>
                  <span className="text-[11px] font-black text-slate-600 uppercase tracking-tight">{p}</span>
                </div>
              ))}
              <button className="flex items-center gap-2 p-4 border-2 border-dashed border-slate-200 rounded-[1rem] text-[10px] font-black text-slate-400 uppercase tracking-widest hover:bg-white hover:border-[#2663eb] hover:text-[#2663eb] transition-all">
                <Lock size={12} /> Add Permission
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Activity Logs Module ---
export const ActivityLogTable = () => {
  const logs = [
    { user: 'Amit Singh', action: 'Login Attempt', target: 'System Dashboard', time: '2 mins ago', status: 'Success', ip: '192.168.1.1' },
    { user: 'Sonal Gupta', action: 'Document Upload', target: 'GST_Cert_TechFlow.pdf', time: '15 mins ago', status: 'Success', ip: '10.0.4.22' },
    { user: 'Rahul Sharma', action: 'Role Update', target: 'Priya Sharma (Client -> Expert)', time: '1 hour ago', status: 'Admin Action', ip: '172.16.0.5' },
    { user: 'System', action: 'Auto-Backup', target: 'Encrypted Vault 04', time: '3 hours ago', status: 'Automatic', ip: 'Internal' },
    { user: 'External IP', action: 'Failed Login', target: 'Admin Portal', time: '5 hours ago', status: 'Blocked', ip: '203.0.113.1' },
  ];

  return (
    <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
      <div className="p-8 border-b border-slate-50 flex items-center justify-between">
        <h3 className="text-xl font-black text-slate-900 tracking-tight">System-wide Audit Trail</h3>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-[0.8rem] text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all border border-slate-200">
          <History size={14} /> Download Full Logs
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">User / Entity</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Operation</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Target Object</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Timestamp</th>
              <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Outcome</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {logs.map((log, idx) => (
              <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xs uppercase">
                      {log.user.slice(0, 1)}
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900 tracking-tight">{log.user}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">{log.ip}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                   <span className="px-3 py-1 bg-blue-50 text-[#2663eb] text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-100">{log.action}</span>
                </td>
                <td className="px-8 py-6 font-bold text-slate-500 text-sm">{log.target}</td>
                <td className="px-8 py-6 text-xs font-black text-slate-900 tracking-tight">{log.time}</td>
                <td className="px-8 py-6">
                   <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${log.status === 'Blocked' ? 'bg-red-500' : 'bg-emerald-500'}`} />
                      <span className={`text-[10px] font-black uppercase tracking-widest ${log.status === 'Blocked' ? 'text-red-500' : 'text-emerald-500'}`}>{log.status}</span>
                   </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

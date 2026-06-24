"use client";

import React, { useState } from 'react';
import {
  Eye,
  Lock,
  Unlock,
  Trash2,
  Calendar,
  CheckCircle2,
  AlertCircle,
  X,
  ShieldAlert,
  PenSquare,
  Search,
  MoreVertical,
  Key,
  ShieldX,
  ClipboardList,
  Layers,
  MessageSquare,
  Download,
  ChevronRight
} from "lucide-react";
import { User, UserStatus } from "./types";
import { motion, AnimatePresence } from "framer-motion";

interface UserTableProps {
  users: User[];
  onView: (user: User) => void;
  onEdit: (user: User) => void;
  onAction: (action: string, user: User) => void;
  onBulkAction: (action: string, selectedIds: (string | number)[]) => void;
  onReset: () => void;
}

export function UserTable({ users, onView, onEdit, onAction, onBulkAction, onReset }: UserTableProps) {
  const [selectedUsers, setSelectedUsers] = useState<(string | number)[]>([]);

  const toggleSelectAll = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users.map(u => u.id));
    }
  };

  const toggleSelectUser = (id: string | number) => {
    setSelectedUsers(prev => 
      prev.includes(id) ? prev.filter(uid => uid !== id) : [...prev, id]
    );
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {selectedUsers.length > 0 && (
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="absolute -top-16 left-0 right-0 bg-[#0F172A] text-white p-4 rounded-[1rem] flex items-center justify-between z-20 shadow-2xl"
          >
            <div className="flex items-center gap-4 ml-4">
              <span className="text-sm font-black uppercase tracking-widest">{selectedUsers.length} Users Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <BulkActionButton label="Activate" icon={<CheckCircle2 size={14} />} onClick={() => onBulkAction('activate', selectedUsers)} />
              <BulkActionButton label="Deactivate" icon={<ShieldX size={14} />} onClick={() => onBulkAction('deactivate', selectedUsers)} />
              <BulkActionButton label="Delete" icon={<Trash2 size={14} />} color="text-red-400" onClick={() => onBulkAction('delete', selectedUsers)} />
              <div className="w-px h-6 bg-white/10 mx-2" />
              <button 
                onClick={() => setSelectedUsers([])}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-white rounded-[1rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-5 text-left w-12">
                  <input 
                    type="checkbox" 
                    checked={selectedUsers.length === users.length && users.length > 0}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 rounded border-slate-300 text-[#2663eb] focus:ring-[#2663eb]"
                  />
                </th>
                <th className="px-6 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">User Details</th>
                <th className="px-6 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Role & Services</th>
                <th className="px-6 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Account Status</th>
                <th className="px-6 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Login</th>
                <th className="px-6 py-5 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest pr-10">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {users.length > 0 ? (
                users.map((user) => (
                  <UserRow
                    key={user.id}
                    user={user}
                    isSelected={selectedUsers.includes(user.id)}
                    onSelect={() => toggleSelectUser(user.id)}
                    onView={onView}
                    onEdit={onEdit}
                    onAction={onAction}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-24 text-center">
                    <EmptyState onReset={onReset} />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function UserRow({ user, isSelected, onSelect, onView, onEdit, onAction }: {
  user: User,
  isSelected: boolean,
  onSelect: () => void,
  onView: (user: User) => void,
  onEdit: (user: User) => void,
  onAction: (action: string, user: User) => void
}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <tr className={`group transition-colors ${isSelected ? 'bg-[#F8FAFC]' : 'hover:bg-[#F8FAFC]'}`}>
      <td className="px-4 py-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onSelect}
          className="w-4 h-4 rounded border-[#E2E8F0] text-[#2563EB] focus:ring-[#2563EB]"
        />
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] flex items-center justify-center text-[#64748B] font-semibold text-sm border-2 border-white shadow-sm overflow-hidden">
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`} alt="" />
          </div>
          <div>
            <p className="font-medium text-[#0F172A] text-sm">{user.name}</p>
            <p className="text-xs text-[#64748B] mt-0.5">{user.email}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-4">
        <div className="space-y-2">
          <span className="inline-flex items-center px-2.5 py-1 bg-[#2563EB]/10 text-[#2563EB] text-xs font-medium rounded-lg">
            {user.role}
          </span>
          <div className="flex flex-wrap gap-1">
            {user.assignedServices.map((s, idx) => (
              <span key={idx} className="text-xs px-2 py-0.5 bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0] rounded-lg">
                {s}
              </span>
            ))}
          </div>
        </div>
      </td>
      <td className="px-4 py-4">
        <StatusBadge status={user.status} />
        <p className="text-xs text-[#64748B] mt-2">ID: #{user.id.toString().slice(-4)}</p>
      </td>
      <td className="px-4 py-4">
        <p className="text-sm font-medium text-[#0F172A]">{user.lastLogin}</p>
        <p className="text-xs text-[#64748B] mt-1">Joined {user.createdDate}</p>
      </td>
      <td className="px-4 py-4 text-right relative pr-4">
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => onView(user)}
            className="p-2 text-[#64748B] hover:text-[#2563EB] hover:bg-[#F8FAFC] rounded-[10px] transition-colors"
            title="View Profile"
          >
            <Eye size={16} />
          </button>
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className={`p-2 rounded-[10px] transition-colors ${showMenu ? 'bg-[#0F172A] text-white' : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]'}`}
            >
              <MoreVertical size={16} />
            </button>
            
            <AnimatePresence>
              {showMenu && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setShowMenu(false)} />
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="absolute right-0 mt-2 w-56 bg-white border border-slate-100 rounded-[1rem] shadow-2xl z-40 py-2 overflow-hidden"
                  >
                    <MenuAction label="Edit User" icon={<PenSquare size={16} />} onClick={() => { onEdit(user); setShowMenu(false); }} />
                    <MenuAction label="Assign Task" icon={<ClipboardList size={16} />} onClick={() => { onAction('assign_task', user); setShowMenu(false); }} />
                    <MenuAction label="Assign Service" icon={<Layers size={16} />} onClick={() => { onAction('assign_service', user); setShowMenu(false); }} />
                    <div className="h-px bg-slate-50 my-1" />
                    <MenuAction label="Reset Password" icon={<Key size={16} />} onClick={() => { onAction('reset_password', user); setShowMenu(false); }} />
                    <MenuAction label="Send Message" icon={<MessageSquare size={16} />} onClick={() => { onAction('send_message', user); setShowMenu(false); }} />
                    <MenuAction label="Download Data" icon={<Download size={16} />} onClick={() => { onAction('download_data', user); setShowMenu(false); }} />
                    <div className="h-px bg-slate-50 my-1" />
                    {user.status === 'blocked' ? (
                      <MenuAction label="Unblock User" icon={<Unlock size={16} />} color="text-emerald-600" onClick={() => { onAction('unblock', user); setShowMenu(false); }} />
                    ) : (
                      <MenuAction label="Block User" icon={<ShieldX size={16} />} color="text-red-600" onClick={() => { onAction('block', user); setShowMenu(false); }} />
                    )}
                    <MenuAction label="Delete Profile" icon={<Trash2 size={16} />} color="text-red-600" onClick={() => { onAction('delete', user); setShowMenu(false); }} />
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </td>
    </tr>
  );
}

function StatusBadge({ status }: { status: UserStatus }) {
  const styles = {
    active: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    inactive: 'bg-slate-100 text-slate-500 border-slate-200',
    blocked: 'bg-red-50 text-red-600 border-red-100',
    pending: 'bg-orange-50 text-orange-600 border-orange-100'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[1rem] text-[10px] font-black uppercase tracking-wider border ${styles[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === 'active' ? 'bg-emerald-500' : status === 'blocked' ? 'bg-red-500' : 'bg-current opacity-40'}`} />
      {status}
    </span>
  );
}

function MenuAction({ label, icon, onClick, color = "text-slate-600" }: { label: string, icon: React.ReactNode, onClick: () => void, color?: string }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-colors ${color}`}
    >
      <span className="opacity-60">{icon}</span>
      <span className="text-[11px] font-black uppercase tracking-widest">{label}</span>
    </button>
  );
}

function BulkActionButton({ label, icon, onClick, color = "text-white" }: { label: string, icon: React.ReactNode, onClick: () => void, color?: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-[0.8rem] transition-all text-xs font-black uppercase tracking-widest ${color}`}
    >
      {icon} {label}
    </button>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-16 h-16 bg-[#F8FAFC] rounded-xl flex items-center justify-center mb-6 text-[#64748B]">
        <Search size={32} />
      </div>
      <h3 className="text-lg font-semibold text-[#0F172A]">No Users Found</h3>
      <p className="text-[#64748B] text-sm mt-2 max-w-xs text-center">We couldn&apos;t find any users matching your criteria. Try adjusting your filters.</p>
      <button 
        onClick={onReset}
        className="mt-6 px-6 py-2 bg-[#2563EB] text-white font-medium text-sm rounded-[10px] hover:bg-[#1D4ED8] transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );
}

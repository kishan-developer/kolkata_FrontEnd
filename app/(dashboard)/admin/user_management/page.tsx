"use client";

import { useState, useMemo, useCallback } from "react";
import {
  Download,
  UserPlus,
  Users,
  ShieldCheck,
  History,
  LayoutGrid,
  Search,
  Filter,
  RefreshCw,
  MoreVertical
} from "lucide-react";
import { User, UserFilters, UserRole, UserStatus } from "./_components/types";
import { StatCards } from "./_components/StatCards";
import { FilterPanel } from "./_components/FilterPanel";
import { UserTable } from "./_components/UserTable";
import { Pagination } from "./_components/Pagination";
import {
  AddUserModal,
  TaskAssignmentModal,
  ServiceAssignmentModal,
  UserProfileDetail
} from "./_components/UserModals";
import { PermissionPanel, ActivityLogTable } from "./_components/AdvancedModules";
import { motion, AnimatePresence } from "framer-motion";

export default function UserManagementPage() {
  const [activeTab, setActiveTab] = useState<'Users' | 'Roles' | 'Logs'>('Users');
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [filters, setFilters] = useState<UserFilters>({
    role: "all",
    status: "all",
    serviceType: "all",
    dateRange: "all",
    searchQuery: "",
    kyc: "all",
    plan: "all",
    compliance: "all",
    risk: "all",
    frequency: "all",
    manager: "all",
    lastActive: "all"
  });

  const [users, setUsers] = useState<User[]>([
    {
      id: "USR-8421",
      name: "Rajesh Kumar",
      email: "rajesh@techflow.ai",
      phone: "+91 98765 43210",
      role: "Client",
      status: "active",
      assignedServices: ["GST", "ITR"],
      lastLogin: "2 mins ago",
      createdDate: "Jan 15, 2024",
      manager: "Rahul Sharma",
      complianceScore: 94
    },
    {
      id: "USR-8422",
      name: "Priya Sharma",
      email: "priya@expert.com",
      phone: "+91 98765 43211",
      role: "GST Expert",
      status: "active",
      assignedServices: ["GST", "Audit"],
      lastLogin: "1 hour ago",
      createdDate: "Feb 20, 2024",
      manager: "Rahul Sharma",
      complianceScore: 88
    },
    {
      id: "USR-8423",
      name: "Amit Patel",
      email: "amit@corp.com",
      phone: "+91 98765 43212",
      role: "Manager",
      status: "inactive",
      assignedServices: ["MCA", "Audit", "Loan"],
      lastLogin: "2 days ago",
      createdDate: "Dec 10, 2023",
      manager: "System",
      complianceScore: 72
    },
    {
      id: "USR-8424",
      name: "Suresh Raina",
      email: "suresh@global.com",
      phone: "+91 98765 43213",
      role: "Client",
      status: "blocked",
      assignedServices: ["GST"],
      lastLogin: "1 week ago",
      createdDate: "Mar 05, 2024",
      manager: "Amit Singh",
      complianceScore: 45
    }
  ]);

  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phone.includes(searchQuery);

      const matchesStatus = filters.status === "all" || user.status === filters.status;
      const matchesRole = filters.role === "all" || user.role === filters.role;
      const matchesService = filters.serviceType === "all" || user.assignedServices.includes(filters.serviceType);

      return matchesSearch && matchesStatus && matchesRole && matchesService;
    });
  }, [searchQuery, filters, users]);

  const handleAction = (action: string, user: User) => {
    setSelectedUser(user);
    if (action === 'assign_task') setIsTaskModalOpen(true);
    if (action === 'assign_service') setIsServiceModalOpen(true);
    if (action === 'delete') {
      if (confirm(`Confirm deletion of ${user.name}?`)) {
        setUsers(prev => prev.filter(u => u.id !== user.id));
      }
    }
    if (action === 'block') {
      setUsers(prev => prev.map(u => u.id === user.id ? { ...u, status: 'blocked' } : u));
    }
    if (action === 'unblock') {
      setUsers(prev => prev.map(u => u.id === user.id ? { ...u, status: 'active' } : u));
    }
  };

  const handleBulkAction = (action: string, ids: (string | number)[]) => {
    if (action === 'delete') {
      if (confirm(`Delete ${ids.length} users?`)) {
        setUsers(prev => prev.filter(u => !ids.includes(u.id)));
      }
    }
    if (action === 'activate') {
      setUsers(prev => prev.map(u => ids.includes(u.id) ? { ...u, status: 'active' } : u));
    }
    if (action === 'deactivate') {
      setUsers(prev => prev.map(u => ids.includes(u.id) ? { ...u, status: 'inactive' } : u));
    }
  };

  return (
    <div className="space-y-10 mt-10 min-h-screen bg-slate-50/30 p-8 rounded-[2rem] animate-in fade-in duration-700">

      {/* Institutional Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Global User Management</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Live Directory &bull; Institutional Access Control</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 rounded-[1.2rem] shadow-sm border border-slate-100">
          <TabButton
            active={activeTab === 'Users'}
            onClick={() => setActiveTab('Users')}
            icon={<Users size={16} />}
            label="Directory"
          />
          <TabButton
            active={activeTab === 'Roles'}
            onClick={() => setActiveTab('Roles')}
            icon={<ShieldCheck size={16} />}
            label="Permissions"
          />
          <TabButton
            active={activeTab === 'Logs'}
            onClick={() => setActiveTab('Logs')}
            icon={<History size={16} />}
            label="Audit Trail"
          />
        </div>
      </div>

      {activeTab === 'Users' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          <StatCards />

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="Search by name, email or phone..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-[1rem] outline-none focus:ring-2 focus:ring-[#2663eb] text-sm font-medium transition-all"
                />
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-[1rem] font-black text-[10px] uppercase tracking-widest transition-all border ${showFilters ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                >
                  <Filter size={14} /> Filter Database
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-[1rem] font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all">
                  <Download size={14} /> Export CSV
                </button>
                <button
                  onClick={() => setIsAddModalOpen(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-[#2663eb] text-white rounded-[1rem] font-black text-[10px] uppercase tracking-widest hover:bg-[#1d4ed8] shadow-lg shadow-blue-100 transition-all active:scale-95 border-b-4 border-[#1e40af]"
                >
                  <UserPlus size={14} /> Register User
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
                      label="Account Role"
                      options={['Admin', 'Manager', 'Accountant', 'GST Expert', 'IT Expert', 'Client']}
                      onChange={(v) => setFilters(f => ({ ...f, role: v }))}
                    />
                    <FilterSelect
                      label="Service Type"
                      options={['GST', 'ITR', 'MCA', 'Audit', 'Loan']}
                      onChange={(v) => setFilters(f => ({ ...f, serviceType: v }))}
                    />
                    <FilterSelect
                      label="Status"
                      options={['active', 'inactive', 'blocked', 'pending']}
                      onChange={(v) => setFilters(f => ({ ...f, status: v }))}
                    />
                    <div className="flex items-end">
                      <button
                        onClick={() => { setSearchQuery(""); setFilters({ role: "all", status: "all", serviceType: "all", dateRange: "all", searchQuery: "", kyc: "all", plan: "all", compliance: "all", risk: "all", frequency: "all", manager: "all", lastActive: "all" }); }}
                        className="w-full h-11 flex items-center justify-center gap-2 text-slate-400 hover:text-slate-600 transition-all font-black text-[10px] uppercase tracking-widest"
                      >
                        <RefreshCw size={14} /> Reset Filters
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <UserTable
              users={filteredUsers}
              onView={(u) => { setSelectedUser(u); setIsDetailOpen(true); }}
              onEdit={(u) => { setSelectedUser(u); setIsDetailOpen(true); }}
              onAction={handleAction}
              onBulkAction={handleBulkAction}
              onReset={() => setSearchQuery("")}
            />

            <Pagination totalResults={filteredUsers.length} currentPage={1} />
          </div>
        </motion.div>
      )}

      {activeTab === 'Roles' && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <PermissionPanel />
        </motion.div>
      )}

      {activeTab === 'Logs' && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <ActivityLogTable />
        </motion.div>
      )}

      {/* Modals & Details */}
      <AddUserModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={(data) => {
          setUsers(prev => [{ ...data, id: `USR-${Math.floor(Math.random() * 9000) + 1000}`, lastLogin: 'Never', createdDate: 'Today', complianceScore: 100 }, ...prev]);
          setIsAddModalOpen(false);
        }}
      />

      {selectedUser && (
        <>
          <TaskAssignmentModal
            isOpen={isTaskModalOpen}
            onClose={() => setIsTaskModalOpen(false)}
            user={selectedUser}
          />
          <ServiceAssignmentModal
            isOpen={isServiceModalOpen}
            onClose={() => setIsServiceModalOpen(false)}
            user={selectedUser}
          />
          <UserProfileDetail
            isOpen={isDetailOpen}
            onClose={() => setIsDetailOpen(false)}
            user={selectedUser}
          />
        </>
      )}
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-[10px] text-sm font-medium transition-all ${active ? 'bg-[#2563EB] text-white' : 'text-[#64748B] hover:bg-[#F8FAFC]'}`}
    >
      {icon} {label}
    </button>
  );
}

function FilterSelect({ label, options, onChange }: { label: string, options: string[], onChange: (val: string) => void }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-medium text-[#64748B]">{label}</label>
      <select
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
      >
        <option value="all">All {label}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
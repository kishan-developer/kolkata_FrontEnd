"use client";

import { useState } from "react";
import { 
  Trello, 
  List as ListIcon, 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Clock, 
  AlertCircle,
  CheckCircle2,
  Calendar,
  Users,
  ChevronRight,
  UserCheck
} from "lucide-react";
import { Task, TaskPriority, TaskStatus, TeamWorkload } from "./_components/types";
import { motion, AnimatePresence } from "framer-motion";

export default function TaskManagementPage() {
  const [viewMode, setViewMode] = useState<'Kanban' | 'List'>('Kanban');
  const [searchQuery, setSearchQuery] = useState("");

  const tasks: Task[] = [
    { id: "TSK-4021", title: "GSTR-3B Reconciliation", clientName: "Malhotra Tech", serviceName: "GST Filing", priority: "Critical", status: "In Progress", assignedTo: "Sonal Gupta", dueDate: "Oct 11, 2024" },
    { id: "TSK-4022", title: "PAN Linkage Audit", clientName: "Das Textiles", serviceName: "Income Tax", priority: "High", status: "To Do", assignedTo: "Rahul Sharma", dueDate: "Oct 15, 2024" },
    { id: "TSK-4023", title: "MoA Drafting", clientName: "New Entity", serviceName: "Incorporation", priority: "Medium", status: "Review", assignedTo: "Amit Singh", dueDate: "Oct 12, 2024" },
    { id: "TSK-4024", title: "AOC-4 Filing FY23", clientName: "Singhania Exports", serviceName: "MCA Compliance", priority: "Critical", status: "To Do", assignedTo: "Rahul Sharma", dueDate: "Oct 30, 2024" },
    { id: "TSK-4025", title: "Voucher Verification", clientName: "Malhotra Tech", serviceName: "Audit", priority: "Low", status: "Completed", assignedTo: "Sonal Gupta", dueDate: "Oct 05, 2024" },
  ];

  const columns: TaskStatus[] = ['To Do', 'In Progress', 'Review', 'Completed'];

  return (
    <div className="space-y-10 mt-10 min-h-screen bg-slate-50/30 p-8 rounded-[2rem] animate-in fade-in duration-700">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Strategic Operations</h1>
          <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mt-2">Workflow Orchestration & Task Fulfillment</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="flex items-center gap-2 bg-white p-2 rounded-[1.2rem] shadow-sm border border-slate-100">
              <ViewButton active={viewMode === 'Kanban'} onClick={() => setViewMode('Kanban')} icon={<Trello size={16} />} label="Kanban" />
              <ViewButton active={viewMode === 'List'} onClick={() => setViewMode('List')} icon={<ListIcon size={16} />} label="List" />
           </div>
           <button className="flex items-center gap-2 px-6 py-4 bg-[#2663eb] text-white rounded-[1.2rem] font-black text-[10px] uppercase tracking-widest hover:bg-[#1d4ed8] shadow-lg shadow-blue-100 transition-all border-b-4 border-[#1e40af]">
              <Plus size={14} /> Create Mandate
           </button>
        </div>
      </div>

      {/* Task Filters */}
      <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
         <div className="relative flex-1 max-w-md">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
           <input 
             type="text" 
             placeholder="Search tasks, clients or specialists..." 
             className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-[1.2rem] outline-none focus:ring-2 focus:ring-[#2663eb] text-sm font-medium"
           />
         </div>
         <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
            {['Critical', 'Overdue', 'My Tasks', 'Unassigned'].map(f => (
              <button key={f} className="px-4 py-2 bg-slate-50 border border-slate-100 text-slate-500 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:border-[#2663eb] hover:text-[#2663eb] transition-all whitespace-nowrap">
                {f}
              </button>
            ))}
            <div className="w-px h-6 bg-slate-100 mx-2" />
            <button className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-all px-2">
               <Filter size={16} />
               <span className="text-[10px] font-black uppercase tracking-widest">More Filters</span>
            </button>
         </div>
      </div>

      {viewMode === 'Kanban' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {columns.map(status => (
             <div key={status} className="flex flex-col gap-6">
                <div className="flex items-center justify-between px-2">
                   <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${status === 'To Do' ? 'bg-slate-300' : status === 'In Progress' ? 'bg-blue-500' : status === 'Review' ? 'bg-orange-400' : 'bg-emerald-500'}`} />
                      <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest">{status}</h3>
                   </div>
                   <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-black rounded-full">
                      {tasks.filter(t => t.status === status).length}
                   </span>
                </div>
                <div className="space-y-4 min-h-[500px]">
                   {tasks.filter(t => t.status === status).map((task, idx) => (
                     <TaskCard key={idx} task={task} />
                   ))}
                   <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-[1.5rem] flex items-center justify-center text-slate-300 hover:border-slate-300 hover:text-slate-400 transition-all group">
                      <Plus size={20} className="group-hover:scale-110 transition-transform" />
                   </button>
                </div>
             </div>
           ))}
        </div>
      ) : (
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
           <table className="w-full text-left">
              <thead className="bg-slate-50/50 border-b border-slate-100">
                 <tr>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Mandate Description</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Client Entity</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Priority</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Specialist</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Deadline</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                 {tasks.map((task, idx) => (
                   <tr key={idx} className="group hover:bg-slate-50/50 transition-all cursor-pointer">
                      <td className="px-8 py-6">
                         <div>
                            <p className="text-sm font-black text-slate-900 tracking-tight">{task.title}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{task.serviceName}</p>
                         </div>
                      </td>
                      <td className="px-8 py-6">
                         <span className="text-xs font-black text-slate-600 tracking-tight">{task.clientName}</span>
                      </td>
                      <td className="px-8 py-6">
                         <PriorityBadge priority={task.priority} />
                      </td>
                      <td className="px-8 py-6">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-[10px] uppercase">
                               {task.assignedTo.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="text-xs font-black text-slate-600 tracking-tight">{task.assignedTo}</span>
                         </div>
                      </td>
                      <td className="px-8 py-6">
                         <div className="flex items-center gap-2">
                            <Clock size={14} className={task.priority === 'Critical' ? 'text-red-500' : 'text-slate-400'} />
                            <span className={`text-xs font-black tracking-tight ${task.priority === 'Critical' ? 'text-red-600' : 'text-slate-900'}`}>{task.dueDate}</span>
                         </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                         <button className="p-3 text-slate-400 hover:text-slate-900 hover:bg-white rounded-[1rem] transition-all">
                            <MoreHorizontal size={18} />
                         </button>
                      </td>
                   </tr>
                 ))}
              </tbody>
           </table>
        </div>
      )}
    </div>
  );
}

function TaskCard({ task }: { task: Task }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group cursor-grab active:cursor-grabbing border-b-4 border-b-slate-100 hover:border-b-[#2663eb]"
    >
      <div className="flex items-center justify-between mb-4">
         <PriorityBadge priority={task.priority} />
         <button className="text-slate-300 hover:text-slate-600 transition-colors">
            <MoreHorizontal size={16} />
         </button>
      </div>
      <h4 className="text-sm font-black text-slate-900 tracking-tight leading-snug mb-2 group-hover:text-[#2663eb] transition-colors">{task.title}</h4>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">{task.clientName}</p>
      
      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
         <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-[8px] font-black">
               {task.assignedTo.split(' ').map(n => n[0]).join('')}
            </div>
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{task.assignedTo.split(' ')[0]}</span>
         </div>
         <div className="flex items-center gap-1.5 text-[9px] font-black text-slate-400 uppercase tracking-widest">
            <Clock size={12} />
            {task.dueDate.split(',')[0]}
         </div>
      </div>
    </motion.div>
  );
}

function ViewButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-2.5 rounded-[1rem] font-black text-[10px] uppercase tracking-widest transition-all ${active ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
    >
      {icon} {label}
    </button>
  );
}

function PriorityBadge({ priority }: { priority: TaskPriority }) {
  const styles: Record<TaskPriority, string> = {
    Critical: 'bg-red-50 text-red-600 border-red-100',
    High: 'bg-orange-50 text-orange-600 border-orange-100',
    Medium: 'bg-blue-50 text-[#2663eb] border-blue-100',
    Low: 'bg-slate-50 text-slate-400 border-slate-100'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border ${styles[priority]}`}>
       {priority}
    </span>
  );
}

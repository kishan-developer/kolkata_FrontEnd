"use client";

import { useState, useEffect } from "react";
import {
  ClipboardCheck,
  Users,
  FileText,
  AlertTriangle,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  MessageSquare,
  Calendar,
  Zap,
  Target,
} from "lucide-react";

interface Task {
  id: string;
  title: string;
  type: string;
  priority: "high" | "medium" | "low";
  status: "pending" | "in_progress" | "completed";
  assignedTo: string;
  dueDate: string;
}

interface SupportTicket {
  id: string;
  subject: string;
  client: string;
  status: "open" | "in_progress" | "resolved";
  priority: "high" | "medium" | "low";
  createdAt: string;
}

interface OperationsMetrics {
  totalTasks: number;
  completedTasks: number;
  pendingApprovals: number;
  openTickets: number;
  serviceDeliveryRate: number;
  avgResponseTime: string;
}

export default function OperationsDashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [metrics, setMetrics] = useState<OperationsMetrics>({
    totalTasks: 0,
    completedTasks: 0,
    pendingApprovals: 0,
    openTickets: 0,
    serviceDeliveryRate: 0,
    avgResponseTime: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load dummy data
    const dummyTasks: Task[] = [
      {
        id: "1",
        title: "Review GST Filing documents",
        type: "Document Review",
        priority: "high",
        status: "in_progress",
        assignedTo: "CA Ramesh",
        dueDate: "2024-10-15",
      },
      {
        id: "2",
        title: "Approve company incorporation",
        type: "Approval",
        priority: "high",
        status: "pending",
        assignedTo: "CA Priya",
        dueDate: "2024-10-15",
      },
      {
        id: "3",
        title: "Process ITR filing request",
        type: "Filing",
        priority: "medium",
        status: "in_progress",
        assignedTo: "CA Vikram",
        dueDate: "2024-10-16",
      },
      {
        id: "4",
        title: "Update client records",
        type: "Data Entry",
        priority: "low",
        status: "completed",
        assignedTo: "Admin",
        dueDate: "2024-10-14",
      },
      {
        id: "5",
        title: "Send reminder for pending payments",
        type: "Communication",
        priority: "medium",
        status: "pending",
        assignedTo: "Support",
        dueDate: "2024-10-16",
      },
    ];

    const dummyTickets: SupportTicket[] = [
      {
        id: "1",
        subject: "Unable to upload documents",
        client: "Rajesh Kumar",
        status: "open",
        priority: "high",
        createdAt: "2 hours ago",
      },
      {
        id: "2",
        subject: "Payment not reflecting",
        client: "Priya Sharma",
        status: "in_progress",
        priority: "high",
        createdAt: "4 hours ago",
      },
      {
        id: "3",
        subject: "Need consultation rescheduling",
        client: "Amit Patel",
        status: "open",
        priority: "medium",
        createdAt: "1 day ago",
      },
      {
        id: "4",
        subject: "GST portal login issue",
        client: "Sneha Reddy",
        status: "resolved",
        priority: "medium",
        createdAt: "2 days ago",
      },
    ];

    setTasks(dummyTasks);
    setTickets(dummyTickets);
    setMetrics({
      totalTasks: 234,
      completedTasks: 198,
      pendingApprovals: 12,
      openTickets: 8,
      serviceDeliveryRate: 94.5,
      avgResponseTime: "2.5 hours",
    });
    setLoading(false);
  }, []);

  const statCards = [
    {
      title: "Total Tasks",
      value: metrics.totalTasks,
      change: "+15 this week",
      icon: ClipboardCheck,
      color: "bg-blue-500",
    },
    {
      title: "Completed",
      value: metrics.completedTasks,
      change: "85% completion",
      icon: CheckCircle,
      color: "bg-emerald-500",
    },
    {
      title: "Pending Approvals",
      value: metrics.pendingApprovals,
      change: "Requires attention",
      icon: AlertTriangle,
      color: "bg-orange-500",
    },
    {
      title: "Open Tickets",
      value: metrics.openTickets,
      change: "Avg 2.5h response",
      icon: MessageSquare,
      color: "bg-purple-500",
    },
    {
      title: "Service Delivery Rate",
      value: `${metrics.serviceDeliveryRate}%`,
      change: "+2.3% improvement",
      icon: Target,
      color: "bg-cyan-500",
    },
    {
      title: "Avg Response Time",
      value: metrics.avgResponseTime,
      change: "-30min faster",
      icon: Clock,
      color: "bg-green-500",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-[#0F172A]">Operations Dashboard</h1>
          <p className="text-sm text-[#64748B]">Manage day-to-day operations and service delivery</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-[10px] text-sm font-medium hover:bg-[#1D4ED8] transition-colors">
            <ClipboardCheck size={16} />
            Create Task
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E2E8F0] text-[#0F172A] rounded-[10px] text-sm font-medium hover:bg-[#F8FAFC] transition-colors">
            <MessageSquare size={16} />
            View Tickets
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="bg-white p-4 rounded-2xl border border-[#E2E8F0]">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 ${card.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="text-white" size={20} />
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-600">
                  <TrendingUp size={12} />
                  {card.change}
                </div>
              </div>
              <p className="text-sm text-[#64748B] mb-1">{card.title}</p>
              <p className="text-xl font-semibold text-[#0F172A]">{card.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Task Management */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-[#E2E8F0]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#0F172A]">Task Management</h2>
            <button className="text-sm text-[#2563EB] hover:underline">View All Tasks</button>
          </div>
          <div className="space-y-3">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-center gap-4 p-4 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-md transition-all">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  task.status === "completed" ? "bg-emerald-50 text-emerald-600" :
                  task.status === "in_progress" ? "bg-blue-50 text-blue-600" :
                  "bg-gray-50 text-gray-600"
                }`}>
                  {task.status === "completed" && <CheckCircle size={20} />}
                  {task.status === "in_progress" && <Zap size={20} />}
                  {task.status === "pending" && <Clock size={20} />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-[#0F172A]">{task.title}</p>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      task.priority === "high" ? "bg-red-100 text-red-600" :
                      task.priority === "medium" ? "bg-orange-100 text-orange-600" :
                      "bg-gray-100 text-gray-600"
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[#64748B]">
                    <span className="flex items-center gap-1">
                      <FileText size={12} />
                      {task.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={12} />
                      {task.assignedTo}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {task.dueDate}
                    </span>
                  </div>
                </div>
                <button className="text-sm text-[#2563EB] hover:underline">Action</button>
              </div>
            ))}
          </div>
        </div>

        {/* Support Tickets */}
        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#0F172A]">Support Tickets</h2>
            <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium">
              {tickets.filter(t => t.status === "open").length} Open
            </span>
          </div>
          <div className="space-y-3">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-md transition-all cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    ticket.priority === "high" ? "bg-red-100 text-red-600" :
                    ticket.priority === "medium" ? "bg-orange-100 text-orange-600" :
                    "bg-gray-100 text-gray-600"
                  }`}>
                    {ticket.priority}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    ticket.status === "open" ? "bg-blue-100 text-blue-600" :
                    ticket.status === "in_progress" ? "bg-yellow-100 text-yellow-600" :
                    "bg-emerald-100 text-emerald-600"
                  }`}>
                    {ticket.status.replace("_", " ")}
                  </span>
                </div>
                <p className="font-medium text-[#0F172A] text-sm mb-1">{ticket.subject}</p>
                <p className="text-xs text-[#64748B] mb-2">{ticket.client}</p>
                <p className="text-xs text-[#64748B]">{ticket.createdAt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pending Approvals & Compliance Deadlines */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#0F172A]">Pending Approvals</h2>
            <button className="text-sm text-[#2563EB] hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] transition-all">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                <AlertTriangle className="text-orange-600" size={20} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-[#0F172A]">Company Incorporation - TechCorp Pvt Ltd</p>
                <p className="text-xs text-[#64748B]">Pending director verification</p>
              </div>
              <button className="px-3 py-1.5 bg-[#2563EB] text-white rounded-lg text-xs font-medium hover:bg-[#1D4ED8] transition-colors">
                Review
              </button>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] transition-all">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                <XCircle className="text-red-600" size={20} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-[#0F172A]">GST Registration - StartupXYZ</p>
                <p className="text-xs text-[#64748B]">Document verification failed</p>
              </div>
              <button className="px-3 py-1.5 bg-[#2563EB] text-white rounded-lg text-xs font-medium hover:bg-[#1D4ED8] transition-colors">
                Review
              </button>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] transition-all">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <FileText className="text-blue-600" size={20} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-[#0F172A]">ITR Filing - Rajesh Kumar</p>
                <p className="text-xs text-[#64748B]">Awaiting Form 16 upload</p>
              </div>
              <button className="px-3 py-1.5 bg-[#2563EB] text-white rounded-lg text-xs font-medium hover:bg-[#1D4ED8] transition-colors">
                Review
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#0F172A]">Compliance Deadlines</h2>
            <button className="text-sm text-[#2563EB] hover:underline">View Calendar</button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 rounded-xl border border-red-200 bg-red-50">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="text-red-600" size={20} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-[#0F172A]">GSTR-3B Filing - Q2 FY 2024-25</p>
                <p className="text-xs text-red-600 font-medium">Due in 2 days</p>
              </div>
              <span className="px-2 py-1 bg-red-600 text-white rounded-lg text-xs font-medium">
                Urgent
              </span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl border border-orange-200 bg-orange-50">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <Clock className="text-orange-600" size={20} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-[#0F172A]">TDS Return Filing - September</p>
                <p className="text-xs text-orange-600 font-medium">Due in 5 days</p>
              </div>
              <span className="px-2 py-1 bg-orange-600 text-white rounded-lg text-xs font-medium">
                Soon
              </span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl border border-[#E2E8F0]">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <Calendar className="text-blue-600" size={20} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-[#0F172A]">Annual ROC Filing</p>
                <p className="text-xs text-[#64748B]">Due in 30 days</p>
              </div>
              <span className="px-2 py-1 bg-[#E2E8F0] text-[#64748B] rounded-lg text-xs font-medium">
                Normal
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

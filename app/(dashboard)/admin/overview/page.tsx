"use client";

import { useState, useEffect } from "react";
import { 
  Users, FileText, Upload, AlertTriangle, TrendingUp, DollarSign, CheckCircle2, Clock,
  Bell, Zap, Calendar, MessageSquare, BarChart, Settings, Activity, Shield,
  ArrowUpRight, ArrowDownRight, MoreHorizontal, PieChart
} from "lucide-react";

interface Notification {
  id: number;
  message: string;
  time: string;
  type: string;
}

interface PendingAction {
  id: number;
  title: string;
  priority: string;
  count: number;
}

interface TeamPerformance {
  name: string;
  completed: number;
  rating: number;
  revenue: number;
}

interface ComplianceDeadline {
  id: number;
  task: string;
  dueDate: string;
  priority: string;
  status: string;
}

function Page() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [pendingActions, setPendingActions] = useState<PendingAction[]>([]);
  const [teamPerformance, setTeamPerformance] = useState<TeamPerformance[]>([]);
  const [complianceDeadlines, setComplianceDeadlines] = useState<ComplianceDeadline[]>([]);

  useEffect(() => {
    // Load dummy data for new features
    setNotifications([
      { id: 1, message: "New user registration: john.doe@example.com", time: "2 mins ago", type: "info" },
      { id: 2, message: "Payment received: ₹15,000 for GST Filing", time: "5 mins ago", type: "success" },
      { id: 3, message: "System backup completed", time: "15 mins ago", type: "success" },
      { id: 4, message: "Failed login attempt detected", time: "20 mins ago", type: "warning" },
    ]);

    setPendingActions([
      { id: 1, title: "Approve company incorporation", priority: "high", count: 3 },
      { id: 2, title: "Review document submissions", priority: "medium", count: 12 },
      { id: 3, title: "Process refund requests", priority: "low", count: 5 },
    ]);

    setTeamPerformance([
      { name: "CA Ramesh", completed: 45, rating: 4.8, revenue: 125000 },
      { name: "CA Priya", completed: 38, rating: 4.7, revenue: 98000 },
      { name: "CA Vikram", completed: 42, rating: 4.9, revenue: 135000 },
      { name: "CA Sneha", completed: 35, rating: 4.6, revenue: 87000 },
    ]);

    setComplianceDeadlines([
      { id: 1, task: "GSTR-3B Filing - Q2 FY 2024-25", dueDate: "Oct 20, 2024", priority: "high", status: "pending" },
      { id: 2, task: "TDS Return Filing - September", dueDate: "Oct 18, 2024", priority: "high", status: "pending" },
      { id: 3, task: "Annual ROC Filing", dueDate: "Nov 15, 2024", priority: "medium", status: "pending" },
    ]);
  }, []);

  const stats = [
    { label: "Total Users", value: "10,247", change: "+12%", icon: Users, color: "bg-blue-100 text-[#2663eb]" },
    { label: "Active Filings", value: "1,543", change: "+8%", icon: FileText, color: "bg-green-100 text-[#2663eb]" },
    { label: "Documents Today", value: "892", change: "+15%", icon: Upload, color: "bg-purple-100 text-purple-600" },
    { label: "Pending Notices", value: "47", change: "-5%", icon: AlertTriangle, color: "bg-orange-100 text-orange-600" },
    { label: "Revenue (MTD)", value: "₹24.5L", change: "+18%", icon: DollarSign, color: "bg-emerald-100 text-emerald-600" },
    { label: "AI Accuracy", value: "99.2%", change: "+0.3%", icon: TrendingUp, color: "bg-indigo-100 text-indigo-600" },
  ];

  const recentActivity = [
    { user: "Rajesh Kumar", action: "Uploaded Form 16", time: "2 mins ago", status: "completed" },
    { user: "Priya Sharma", action: "Filed GSTR-3B", time: "5 mins ago", status: "completed" },
    { user: "Amit Patel", action: "Submitted ITR-2", time: "12 mins ago", status: "pending-review" },
    { user: "Sneha Reddy", action: "Response to GST notice", time: "18 mins ago", status: "in-progress" },
  ];

  const filingQueue = [
    { type: "ITR-1", user: "Vikram M", priority: "high", assignedTo: "CA Ramesh", status: "in-review" },
    { type: "GSTR-3B", user: "Ananya S", priority: "medium", assignedTo: "CA Sneha", status: "processing" },
    { type: "ROC MGT-7", user: "ABC Corp", priority: "low", assignedTo: "CA Vikram", status: "queued" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-[#0F172A]">Admin Dashboard</h1>
          <p className="text-sm text-[#64748B]">Platform overview and key metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E2E8F0] text-[#0F172A] rounded-[10px] text-sm font-medium hover:bg-[#F8FAFC] transition-colors">
            <Bell size={16} />
            Notifications ({notifications.length})
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-[10px] text-sm font-medium hover:bg-[#1D4ED8] transition-colors">
            <Settings size={16} />
            Quick Actions
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white border border-[#E2E8F0] rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-sm font-medium ${
                  stat.change.startsWith("+") ? "text-emerald-600" : "text-red-600"
                }`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-[#0F172A] mb-1">{stat.value}</p>
              <p className="text-sm text-[#64748B]">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Pending Actions & Notifications */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-[#E2E8F0] rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-4">Pending Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {pendingActions.map((action) => (
              <div key={action.id} className={`p-4 rounded-xl border ${
                action.priority === "high" ? "border-red-200 bg-red-50" :
                action.priority === "medium" ? "border-orange-200 bg-orange-50" :
                "border-[#E2E8F0] bg-white"
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    action.priority === "high" ? "bg-red-600 text-white" :
                    action.priority === "medium" ? "bg-orange-600 text-white" :
                    "bg-gray-600 text-white"
                  }`}>
                    {action.priority}
                  </span>
                  <span className="text-2xl font-bold text-[#0F172A]">{action.count}</span>
                </div>
                <p className="text-sm font-medium text-[#0F172A]">{action.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-4">Recent Notifications</h2>
          <div className="space-y-3">
            {notifications.slice(0, 4).map((notification) => (
              <div key={notification.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F8FAFC] transition-colors">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  notification.type === "success" ? "bg-emerald-100 text-emerald-600" :
                  notification.type === "warning" ? "bg-orange-100 text-orange-600" :
                  "bg-blue-100 text-blue-600"
                }`}>
                  {notification.type === "success" && <CheckCircle2 size={16} />}
                  {notification.type === "warning" && <AlertTriangle size={16} />}
                  {notification.type === "info" && <Bell size={16} />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#0F172A]">{notification.message}</p>
                  <p className="text-xs text-[#64748B]">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Performance & Compliance Deadlines */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-4">Team Performance</h2>
          <div className="space-y-3">
            {teamPerformance.map((member, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] transition-all">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">{member.name.charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-[#0F172A]">{member.name}</p>
                  <div className="flex items-center gap-4 text-xs text-[#64748B]">
                    <span>{member.completed} completed</span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 size={12} />
                      {member.rating}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-[#0F172A]">₹{(member.revenue / 1000).toFixed(0)}K</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-4">Compliance Deadlines</h2>
          <div className="space-y-3">
            {complianceDeadlines.map((deadline) => (
              <div key={deadline.id} className={`p-4 rounded-xl border ${
                deadline.priority === "high" ? "border-red-200 bg-red-50" :
                "border-[#E2E8F0] bg-white"
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-[#0F172A] text-sm">{deadline.task}</p>
                  {deadline.priority === "high" && (
                    <span className="px-2 py-0.5 bg-red-600 text-white rounded-full text-xs font-medium">
                      Urgent
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between text-xs text-[#64748B]">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {deadline.dueDate}
                  </span>
                  <button className="text-[#2563EB] hover:underline">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity & Filing Queue */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#0F172A]">Recent Activity</h2>
            <button className="text-sm text-[#2563EB] hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] last:border-0">
                <div>
                  <p className="font-medium text-[#0F172A]">{activity.user}</p>
                  <p className="text-sm text-[#64748B]">{activity.action}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[#64748B]">{activity.time}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activity.status === "completed" ? "bg-emerald-100 text-emerald-600" :
                    activity.status === "in-progress" ? "bg-blue-100 text-[#1d4ed8]" :
                    "bg-orange-100 text-orange-600"
                  }`}>
                    {activity.status.replace("-", " ")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filing Queue */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#0F172A]">Filing Queue</h2>
            <button className="text-sm text-[#2563EB] hover:underline">Manage Queue</button>
          </div>
          <div className="space-y-4">
            {filingQueue.map((filing, index) => (
              <div key={index} className="p-4 bg-[#F8FAFC] rounded-xl">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-[#0F172A]">{filing.type}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        filing.priority === "high" ? "bg-red-100 text-red-600" :
                        filing.priority === "medium" ? "bg-yellow-100 text-yellow-600" :
                        "bg-gray-100 text-gray-600"
                      }`}>
                        {filing.priority}
                      </span>
                    </div>
                    <p className="text-sm text-[#64748B]">{filing.user}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    filing.status === "in-review" ? "bg-blue-100 text-[#1d4ed8]" :
                    filing.status === "processing" ? "bg-purple-100 text-purple-600" :
                    "bg-gray-100 text-gray-600"
                  }`}>
                    {filing.status}
                  </span>
                </div>
                <p className="text-sm text-[#64748B]">Assigned to: {filing.assignedTo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-4">Revenue Trend</h2>
          <div className="h-64 flex items-center justify-center bg-[#F8FAFC] rounded-xl">
            <div className="text-center">
              <BarChart size={48} className="mx-auto mb-2 text-[#64748B]" />
              <p className="text-[#64748B]">Chart: Monthly revenue trend</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-4">Filing Distribution</h2>
          <div className="h-64 flex items-center justify-center bg-[#F8FAFC] rounded-xl">
            <div className="text-center">
              <PieChart size={48} className="mx-auto mb-2 text-[#64748B]" />
              <p className="text-[#64748B]">Chart: ITR vs GST vs ROC filings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Page;
"use client";

import { useState, useEffect } from "react";
import {
  Users,
  Activity,
  DollarSign,
  AlertCircle,
  Settings,
  Shield,
  Database,
  Globe,
  TrendingUp,
  Zap,
  CheckCircle,
  XCircle,
  Clock,
  Server,
  Lock,
  FileText,
} from "lucide-react";

interface SystemMetrics {
  totalUsers: number;
  activeUsers: number;
  totalRevenue: number;
  systemHealth: string;
  apiLatency: number;
  serverUptime: string;
  activeServices: number;
  totalIntegrations: number;
}

interface RecentActivity {
  id: string;
  type: string;
  description: string;
  timestamp: string;
  status: string;
}

export default function SuperAdminDashboard() {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    totalUsers: 0,
    activeUsers: 0,
    totalRevenue: 0,
    systemHealth: "healthy",
    apiLatency: 0,
    serverUptime: "99.9%",
    activeServices: 0,
    totalIntegrations: 0,
  });
  const [activities, setActivities] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load dummy data
    setMetrics({
      totalUsers: 15420,
      activeUsers: 8234,
      totalRevenue: 12500000,
      systemHealth: "healthy",
      apiLatency: 45,
      serverUptime: "99.9%",
      activeServices: 12,
      totalIntegrations: 8,
    });

    setActivities([
      {
        id: "1",
        type: "user",
        description: "New user registered: john.doe@example.com",
        timestamp: "2 minutes ago",
        status: "completed",
      },
      {
        id: "2",
        type: "payment",
        description: "Payment processed: ₹15,000 for GST Filing",
        timestamp: "5 minutes ago",
        status: "completed",
      },
      {
        id: "3",
        type: "system",
        description: "Database backup completed successfully",
        timestamp: "15 minutes ago",
        status: "completed",
      },
      {
        id: "4",
        type: "security",
        description: "Failed login attempt detected",
        timestamp: "20 minutes ago",
        status: "warning",
      },
      {
        id: "5",
        type: "integration",
        description: "QuickBooks sync completed",
        timestamp: "30 minutes ago",
        status: "completed",
      },
      {
        id: "6",
        type: "system",
        description: "API rate limit warning",
        timestamp: "45 minutes ago",
        status: "warning",
      },
    ]);

    setLoading(false);
  }, []);

  const statCards = [
    {
      title: "Total Users",
      value: metrics.totalUsers.toLocaleString(),
      change: "+12.5%",
      icon: Users,
      color: "bg-blue-500",
      trend: "up",
    },
    {
      title: "Active Users",
      value: metrics.activeUsers.toLocaleString(),
      change: "+8.2%",
      icon: Activity,
      color: "bg-green-500",
      trend: "up",
    },
    {
      title: "Total Revenue",
      value: `₹${(metrics.totalRevenue / 100000).toFixed(1)}L`,
      change: "+15.3%",
      icon: DollarSign,
      color: "bg-purple-500",
      trend: "up",
    },
    {
      title: "System Health",
      value: metrics.systemHealth,
      change: "Optimal",
      icon: Shield,
      color: metrics.systemHealth === "healthy" ? "bg-emerald-500" : "bg-red-500",
      trend: "stable",
    },
    {
      title: "API Latency",
      value: `${metrics.apiLatency}ms`,
      change: "-5ms",
      icon: Zap,
      color: "bg-orange-500",
      trend: "down",
    },
    {
      title: "Server Uptime",
      value: metrics.serverUptime,
      change: "Stable",
      icon: Server,
      color: "bg-cyan-500",
      trend: "stable",
    },
  ];

  const quickActions = [
    {
      title: "Manage Users",
      description: "Add, edit, or remove users",
      icon: Users,
      href: "/dashboard/admin/users",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "System Settings",
      description: "Configure system settings",
      icon: Settings,
      href: "/dashboard/super-admin/settings",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Security Center",
      description: "Monitor security events",
      icon: Shield,
      href: "/dashboard/super-admin/security",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "Integrations",
      description: "Manage third-party integrations",
      icon: Globe,
      href: "/dashboard/super-admin/integrations",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Database",
      description: "Database management",
      icon: Database,
      href: "/dashboard/super-admin/database",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Audit Logs",
      description: "View system audit logs",
      icon: FileText,
      href: "/dashboard/super-admin/audit-logs",
      color: "text-gray-600",
      bgColor: "bg-gray-50",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-[#0F172A]">Super Admin Dashboard</h1>
          <p className="text-sm text-[#64748B]">System overview and management</p>
        </div>
        <div className="flex items-center gap-2">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
            metrics.systemHealth === "healthy" ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
          }`}>
            <div className={`w-2 h-2 rounded-full ${
              metrics.systemHealth === "healthy" ? "bg-emerald-500" : "bg-red-500"
            } animate-pulse`} />
            <span className="text-sm font-medium">System {metrics.systemHealth}</span>
          </div>
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
                <div className={`flex items-center gap-1 text-xs ${
                  card.trend === "up" ? "text-emerald-600" : 
                  card.trend === "down" ? "text-emerald-600" : "text-[#64748B]"
                }`}>
                  {card.trend === "up" && <TrendingUp size={12} />}
                  {card.change}
                </div>
              </div>
              <p className="text-sm text-[#64748B] mb-1">{card.title}</p>
              <p className="text-xl font-semibold text-[#0F172A]">{card.value}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0]">
        <h2 className="text-lg font-semibold text-[#0F172A] mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <a
                key={index}
                href={action.href}
                className="flex items-center gap-4 p-4 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-md transition-all group"
              >
                <div className={`w-12 h-12 ${action.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className={action.color} size={24} />
                </div>
                <div>
                  <p className="font-medium text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                    {action.title}
                  </p>
                  <p className="text-sm text-[#64748B]">{action.description}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-[#E2E8F0]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#0F172A]">Recent Activities</h2>
            <button className="text-sm text-[#2563EB] hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#F8FAFC] transition-colors">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.status === "completed" ? "bg-emerald-100 text-emerald-600" :
                  activity.status === "warning" ? "bg-orange-100 text-orange-600" :
                  "bg-red-100 text-red-600"
                }`}>
                  {activity.status === "completed" && <CheckCircle size={16} />}
                  {activity.status === "warning" && <AlertCircle size={16} />}
                  {activity.status === "error" && <XCircle size={16} />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#0F172A]">{activity.description}</p>
                  <p className="text-xs text-[#64748B] flex items-center gap-1">
                    <Clock size={12} />
                    {activity.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Information */}
        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0]">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-4">System Information</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Server className="text-[#64748B]" size={16} />
                <span className="text-sm text-[#64748B]">Active Services</span>
              </div>
              <span className="text-sm font-medium text-[#0F172A]">{metrics.activeServices}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="text-[#64748B]" size={16} />
                <span className="text-sm text-[#64748B]">Integrations</span>
              </div>
              <span className="text-sm font-medium text-[#0F172A]">{metrics.totalIntegrations}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database className="text-[#64748B]" size={16} />
                <span className="text-sm text-[#64748B]">Database Status</span>
              </div>
              <span className="text-sm font-medium text-emerald-600">Connected</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock className="text-[#64748B]" size={16} />
                <span className="text-sm text-[#64748B]">Security Status</span>
              </div>
              <span className="text-sm font-medium text-emerald-600">Secure</span>
            </div>
            <div className="pt-4 border-t border-[#E2E8F0]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#64748B]">Storage Usage</span>
                <span className="text-sm font-medium text-[#0F172A]">68%</span>
              </div>
              <div className="w-full h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                <div className="h-full bg-[#2563EB] rounded-full" style={{ width: "68%" }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#64748B]">API Quota</span>
                <span className="text-sm font-medium text-[#0F172A]">45%</span>
              </div>
              <div className="w-full h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: "45%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

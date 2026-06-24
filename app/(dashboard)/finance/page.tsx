"use client";

import { useState, useEffect } from "react";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  CreditCard,
  FileText,
  AlertCircle,
  CheckCircle,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  PieChart,
  BarChart,
} from "lucide-react";

interface Payment {
  id: string;
  client: string;
  service: string;
  amount: number;
  status: "pending" | "processing" | "completed" | "failed";
  date: string;
  method: string;
}

interface Invoice {
  id: string;
  client: string;
  amount: number;
  dueDate: string;
  status: "paid" | "pending" | "overdue";
}

interface FinancialMetrics {
  totalRevenue: number;
  pendingPayments: number;
  completedPayments: number;
  outstandingInvoices: number;
  monthlyRevenue: number;
  paymentSuccessRate: number;
}

export default function FinanceDashboard() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [metrics, setMetrics] = useState<FinancialMetrics>({
    totalRevenue: 0,
    pendingPayments: 0,
    completedPayments: 0,
    outstandingInvoices: 0,
    monthlyRevenue: 0,
    paymentSuccessRate: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load dummy data
    const dummyPayments: Payment[] = [
      {
        id: "1",
        client: "Rajesh Kumar",
        service: "GST Filing",
        amount: 2500,
        status: "completed",
        date: "2024-10-15",
        method: "UPI",
      },
      {
        id: "2",
        client: "Priya Sharma",
        service: "ITR Filing",
        amount: 3500,
        status: "completed",
        date: "2024-10-14",
        method: "Card",
      },
      {
        id: "3",
        client: "Amit Patel",
        service: "Company Incorporation",
        amount: 15000,
        status: "processing",
        date: "2024-10-15",
        method: "Net Banking",
      },
      {
        id: "4",
        client: "Sneha Reddy",
        service: "GST Registration",
        amount: 5000,
        status: "pending",
        date: "2024-10-15",
        method: "UPI",
      },
      {
        id: "5",
        client: "Vikram Malhotra",
        service: "GST Notice Response",
        amount: 8000,
        status: "failed",
        date: "2024-10-14",
        method: "Card",
      },
    ];

    const dummyInvoices: Invoice[] = [
      {
        id: "INV-001",
        client: "TechCorp Pvt Ltd",
        amount: 45000,
        dueDate: "2024-10-20",
        status: "pending",
      },
      {
        id: "INV-002",
        client: "StartupXYZ",
        amount: 25000,
        dueDate: "2024-10-18",
        status: "overdue",
      },
      {
        id: "INV-003",
        client: "Rajesh Kumar",
        amount: 2500,
        dueDate: "2024-10-25",
        status: "pending",
      },
      {
        id: "INV-004",
        client: "Priya Sharma",
        amount: 3500,
        dueDate: "2024-10-10",
        status: "paid",
      },
    ];

    setPayments(dummyPayments);
    setInvoices(dummyInvoices);
    setMetrics({
      totalRevenue: 12500000,
      pendingPayments: 45000,
      completedPayments: 12455000,
      outstandingInvoices: 70000,
      monthlyRevenue: 1850000,
      paymentSuccessRate: 94.5,
    });
    setLoading(false);
  }, []);

  const statCards = [
    {
      title: "Total Revenue",
      value: `₹${(metrics.totalRevenue / 100000).toFixed(1)}L`,
      change: "+18.5%",
      positive: true,
      icon: DollarSign,
      color: "bg-emerald-500",
    },
    {
      title: "Monthly Revenue",
      value: `₹${(metrics.monthlyRevenue / 1000).toFixed(0)}K`,
      change: "+12.3%",
      positive: true,
      icon: TrendingUp,
      color: "bg-blue-500",
    },
    {
      title: "Pending Payments",
      value: `₹${(metrics.pendingPayments / 1000).toFixed(0)}K`,
      change: "5 transactions",
      positive: false,
      icon: Clock,
      color: "bg-orange-500",
    },
    {
      title: "Outstanding Invoices",
      value: `₹${(metrics.outstandingInvoices / 1000).toFixed(0)}K`,
      change: "3 invoices",
      positive: false,
      icon: FileText,
      color: "bg-red-500",
    },
    {
      title: "Payment Success Rate",
      value: `${metrics.paymentSuccessRate}%`,
      change: "+2.1%",
      positive: true,
      icon: CheckCircle,
      color: "bg-purple-500",
    },
    {
      title: "Completed Payments",
      value: `₹${(metrics.completedPayments / 100000).toFixed(1)}L`,
      change: "156 transactions",
      positive: true,
      icon: CreditCard,
      color: "bg-cyan-500",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-[#0F172A]">Finance Dashboard</h1>
          <p className="text-sm text-[#64748B]">Manage payments, invoices, and financial reports</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-[10px] text-sm font-medium hover:bg-[#1D4ED8] transition-colors">
            <FileText size={16} />
            Generate Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E2E8F0] text-[#0F172A] rounded-[10px] text-sm font-medium hover:bg-[#F8FAFC] transition-colors">
            <Wallet size={16} />
            Payment Settings
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
                <div className={`flex items-center gap-1 text-xs ${
                  card.positive ? "text-emerald-600" : "text-red-600"
                }`}>
                  {card.positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
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
        {/* Recent Payments */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-[#E2E8F0]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#0F172A]">Recent Payments</h2>
            <button className="text-sm text-[#2563EB] hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#64748B] uppercase">Client</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#64748B] uppercase">Service</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#64748B] uppercase">Amount</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#64748B] uppercase">Method</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#64748B] uppercase">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#64748B] uppercase">Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-b border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors">
                    <td className="px-4 py-4 font-medium text-[#0F172A]">{payment.client}</td>
                    <td className="px-4 py-4 text-sm text-[#64748B]">{payment.service}</td>
                    <td className="px-4 py-4 font-medium text-[#0F172A]">₹{payment.amount}</td>
                    <td className="px-4 py-4 text-sm text-[#64748B]">{payment.method}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        payment.status === "completed" ? "bg-emerald-100 text-emerald-600" :
                        payment.status === "processing" ? "bg-blue-100 text-blue-600" :
                        payment.status === "pending" ? "bg-orange-100 text-orange-600" :
                        "bg-red-100 text-red-600"
                      }`}>
                        {payment.status === "completed" && <CheckCircle size={12} />}
                        {payment.status === "processing" && <Clock size={12} />}
                        {payment.status === "pending" && <Clock size={12} />}
                        {payment.status === "failed" && <AlertCircle size={12} />}
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-[#64748B]">{payment.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#0F172A]">Revenue Breakdown</h2>
            <select className="text-sm border border-[#E2E8F0] rounded-lg px-3 py-1.5">
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Quarter</option>
            </select>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#64748B]">GST Services</span>
                <span className="text-sm font-medium text-[#0F172A]">₹7,50,000</span>
              </div>
              <div className="w-full h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: "40%" }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#64748B]">ITR Filing</span>
                <span className="text-sm font-medium text-[#0F172A]">₹5,50,000</span>
              </div>
              <div className="w-full h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: "30%" }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#64748B]">Company Incorporation</span>
                <span className="text-sm font-medium text-[#0F172A]">₹3,50,000</span>
              </div>
              <div className="w-full h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: "20%" }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#64748B]">Other Services</span>
                <span className="text-sm font-medium text-[#0F172A]">₹2,00,000</span>
              </div>
              <div className="w-full h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 rounded-full" style={{ width: "10%" }} />
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#F8FAFC] text-[#0F172A] rounded-[10px] text-sm font-medium hover:bg-[#E2E8F0] transition-colors">
              <PieChart size={16} />
              View Detailed Report
            </button>
          </div>
        </div>
      </div>

      {/* Outstanding Invoices */}
      <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[#0F172A]">Outstanding Invoices</h2>
          <button className="text-sm text-[#2563EB] hover:underline">View All Invoices</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {invoices.map((invoice) => (
            <div key={invoice.id} className={`p-4 rounded-xl border ${
              invoice.status === "overdue" ? "border-red-200 bg-red-50" :
              invoice.status === "pending" ? "border-orange-200 bg-orange-50" :
              "border-emerald-200 bg-emerald-50"
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-[#64748B]">{invoice.id}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  invoice.status === "overdue" ? "bg-red-600 text-white" :
                  invoice.status === "pending" ? "bg-orange-600 text-white" :
                  "bg-emerald-600 text-white"
                }`}>
                  {invoice.status}
                </span>
              </div>
              <p className="font-medium text-[#0F172A] mb-1">{invoice.client}</p>
              <p className="text-lg font-semibold text-[#0F172A] mb-2">₹{invoice.amount}</p>
              <div className="flex items-center justify-between text-xs text-[#64748B]">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  Due: {invoice.dueDate}
                </span>
                <button className="text-[#2563EB] hover:underline">Send Reminder</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <button className="flex items-center gap-3 p-4 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-md transition-all text-left">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
            <CreditCard className="text-blue-600" size={20} />
          </div>
          <div>
            <p className="font-medium text-[#0F172A]">Process Payment</p>
            <p className="text-xs text-[#64748B]">Manual payment entry</p>
          </div>
        </button>
        <button className="flex items-center gap-3 p-4 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-md transition-all text-left">
          <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
            <FileText className="text-emerald-600" size={20} />
          </div>
          <div>
            <p className="font-medium text-[#0F172A]">Create Invoice</p>
            <p className="text-xs text-[#64748B]">Generate new invoice</p>
          </div>
        </button>
        <button className="flex items-center gap-3 p-4 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-md transition-all text-left">
          <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
            <BarChart className="text-purple-600" size={20} />
          </div>
          <div>
            <p className="font-medium text-[#0F172A]">Financial Reports</p>
            <p className="text-xs text-[#64748B]">View analytics</p>
          </div>
        </button>
        <button className="flex items-center gap-3 p-4 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-md transition-all text-left">
          <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
            <Wallet className="text-orange-600" size={20} />
          </div>
          <div>
            <p className="font-medium text-[#0F172A]">Refunds</p>
            <p className="text-xs text-[#64748B]">Process refunds</p>
          </div>
        </button>
      </div>
    </div>
  );
}

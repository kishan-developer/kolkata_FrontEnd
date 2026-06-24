"use client";

import { useState, useEffect } from "react";
import {
  Shield,
  LayoutGrid,
  FileSearch,
  MessageSquareHeart,
  Calendar,
  FileText,
  CreditCard,
  AlertCircle,
  CheckCircle,
  Clock,
  Upload,
  MessageSquare,
  TrendingUp,
  Bell,
  Settings,
  DollarSign,
} from "lucide-react";

interface ServiceRequest {
  id: string;
  service: string;
  status: "pending" | "in_progress" | "completed";
  date: string;
}

interface Appointment {
  id: string;
  title: string;
  date: string;
  time: string;
  mode: "video" | "phone" | "in-person";
  status: "confirmed" | "pending";
}

interface Payment {
  id: string;
  service: string;
  amount: number;
  date: string;
  status: "paid" | "pending";
}

export default function UserDashboard() {
  const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [complianceStatus, setComplianceStatus] = useState<string>("98");

  useEffect(() => {
    // Load dummy data
    setServiceRequests([
      { id: "1", service: "GST Filing", status: "in_progress", date: "2024-10-15" },
      { id: "2", service: "ITR Filing", status: "completed", date: "2024-10-10" },
      { id: "3", service: "Company Incorporation", status: "pending", date: "2024-10-20" },
    ]);

    setAppointments([
      { id: "1", title: "GST Consultation", date: "2024-10-16", time: "2:00 PM", mode: "video", status: "confirmed" },
      { id: "2", title: "ITR Review", date: "2024-10-18", time: "11:00 AM", mode: "phone", status: "pending" },
    ]);

    setPayments([
      { id: "1", service: "GST Filing", amount: 2500, date: "2024-10-10", status: "paid" },
      { id: "2", service: "ITR Filing", amount: 3500, date: "2024-10-15", status: "pending" },
    ]);
  }, []);

  const statCards = [
    {
      title: "Active Services",
      value: "3",
      change: "2 in progress",
      icon: LayoutGrid,
      color: "bg-blue-500",
    },
    {
      title: "Upcoming Appointments",
      value: "2",
      change: "Next: Oct 16",
      icon: Calendar,
      color: "bg-emerald-500",
    },
    {
      title: "Pending Payments",
      value: "₹3,500",
      change: "1 invoice",
      icon: CreditCard,
      color: "bg-orange-500",
    },
    {
      title: "Compliance Score",
      value: `${complianceStatus}%`,
      change: "Excellent",
      icon: Shield,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-[#0F172A]">My Dashboard</h1>
          <p className="text-sm text-[#64748B]">Welcome back! Here's your compliance overview</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E2E8F0] text-[#0F172A] rounded-[10px] text-sm font-medium hover:bg-[#F8FAFC] transition-colors">
            <MessageSquare size={16} />
            Messages
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-[10px] text-sm font-medium hover:bg-[#1D4ED8] transition-colors">
            <Calendar size={16} />
            Book Consultation
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-2xl border border-[#E2E8F0]">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span className="text-xs text-emerald-600">{card.change}</span>
              </div>
              <p className="text-2xl font-semibold text-[#0F172A] mb-1">{card.value}</p>
              <p className="text-sm text-[#64748B]">{card.title}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <button className="flex items-center gap-3 p-4 rounded-xl border border-[#E2E8F0] bg-white hover:border-[#2563EB] hover:shadow-md transition-all text-left">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
            <Calendar className="text-blue-600" size={20} />
          </div>
          <div>
            <p className="font-medium text-[#0F172A]">Book Consultation</p>
            <p className="text-xs text-[#64748B]">Schedule with CA</p>
          </div>
        </button>
        <button className="flex items-center gap-3 p-4 rounded-xl border border-[#E2E8F0] bg-white hover:border-[#2563EB] hover:shadow-md transition-all text-left">
          <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
            <Upload className="text-emerald-600" size={20} />
          </div>
          <div>
            <p className="font-medium text-[#0F172A]">Upload Document</p>
            <p className="text-xs text-[#64748B]">Submit files</p>
          </div>
        </button>
        <button className="flex items-center gap-3 p-4 rounded-xl border border-[#E2E8F0] bg-white hover:border-[#2563EB] hover:shadow-md transition-all text-left">
          <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
            <CreditCard className="text-purple-600" size={20} />
          </div>
          <div>
            <p className="font-medium text-[#0F172A]">Make Payment</p>
            <p className="text-xs text-[#64748B]">Pay invoices</p>
          </div>
        </button>
        <button className="flex items-center gap-3 p-4 rounded-xl border border-[#E2E8F0] bg-white hover:border-[#2563EB] hover:shadow-md transition-all text-left">
          <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
            <FileText className="text-orange-600" size={20} />
          </div>
          <div>
            <p className="font-medium text-[#0F172A]">My Documents</p>
            <p className="text-xs text-[#64748B]">View repository</p>
          </div>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Service Requests */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-[#E2E8F0]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#0F172A]">Service Requests</h2>
            <button className="text-sm text-[#2563EB] hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {serviceRequests.map((request) => (
              <div key={request.id} className="flex items-center gap-4 p-4 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] transition-all">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  request.status === "completed" ? "bg-emerald-50 text-emerald-600" :
                  request.status === "in_progress" ? "bg-blue-50 text-blue-600" :
                  "bg-gray-50 text-gray-600"
                }`}>
                  {request.status === "completed" && <CheckCircle size={20} />}
                  {request.status === "in_progress" && <Clock size={20} />}
                  {request.status === "pending" && <AlertCircle size={20} />}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-[#0F172A]">{request.service}</p>
                  <p className="text-sm text-[#64748B]">{request.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  request.status === "completed" ? "bg-emerald-100 text-emerald-600" :
                  request.status === "in_progress" ? "bg-blue-100 text-blue-600" :
                  "bg-gray-100 text-gray-600"
                }`}>
                  {request.status.replace("_", " ")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#0F172A]">Appointments</h2>
            <button className="text-sm text-[#2563EB] hover:underline">Schedule</button>
          </div>
          <div className="space-y-3">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] transition-all">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-[#0F172A]">{appointment.title}</p>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    appointment.status === "confirmed" ? "bg-emerald-100 text-emerald-600" :
                    "bg-orange-100 text-orange-600"
                  }`}>
                    {appointment.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-[#64748B]">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {appointment.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {appointment.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment History & Important Deadlines */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#0F172A]">Payment History</h2>
            <button className="text-sm text-[#2563EB] hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {payments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 rounded-xl border border-[#E2E8F0]">
                <div>
                  <p className="font-medium text-[#0F172A]">{payment.service}</p>
                  <p className="text-sm text-[#64748B]">{payment.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-[#0F172A]">₹{payment.amount}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    payment.status === "paid" ? "bg-emerald-100 text-emerald-600" :
                    "bg-orange-100 text-orange-600"
                  }`}>
                    {payment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#0F172A]">Important Deadlines</h2>
            <button className="text-sm text-[#2563EB] hover:underline">Calendar</button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 rounded-xl border border-red-200 bg-red-50">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <AlertCircle className="text-red-600" size={20} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-[#0F172A]">GSTR-3B Filing</p>
                <p className="text-xs text-red-600 font-medium">Due in 5 days</p>
              </div>
              <button className="text-sm text-[#2563EB] hover:underline">Action</button>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl border border-orange-200 bg-orange-50">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <Clock className="text-orange-600" size={20} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-[#0F172A]">TDS Return Filing</p>
                <p className="text-xs text-orange-600 font-medium">Due in 12 days</p>
              </div>
              <button className="text-sm text-[#2563EB] hover:underline">Action</button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CA Assistant */}
      <button className="fixed bottom-6 right-6 bg-[#FF8F00] text-white p-4 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 transition">
        <MessageSquareHeart size={24} />
      </button>
    </div>
  );
}
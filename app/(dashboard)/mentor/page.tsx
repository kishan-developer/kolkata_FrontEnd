"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Users,
  DollarSign,
  Star,
  Video,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  MessageSquare,
  FileText,
} from "lucide-react";

interface Consultation {
  id: string;
  clientName: string;
  clientEmail: string;
  serviceType: string;
  date: string;
  time: string;
  duration: string;
  mode: "zoom" | "phone" | "in-person";
  status: "pending" | "confirmed" | "completed" | "cancelled";
  price: number;
}

interface PerformanceMetrics {
  totalConsultations: number;
  completedConsultations: number;
  averageRating: number;
  totalRevenue: number;
  pendingConsultations: number;
}

export default function MentorDashboard() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    totalConsultations: 0,
    completedConsultations: 0,
    averageRating: 0,
    totalRevenue: 0,
    pendingConsultations: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load dummy data
    const dummyConsultations: Consultation[] = [
      {
        id: "1",
        clientName: "Rajesh Kumar",
        clientEmail: "rajesh.kumar@example.com",
        serviceType: "GST Filing",
        date: "2024-10-15",
        time: "10:00 AM",
        duration: "30 mins",
        mode: "zoom",
        status: "confirmed",
        price: 2500,
      },
      {
        id: "2",
        clientName: "Priya Sharma",
        clientEmail: "priya.sharma@example.com",
        serviceType: "ITR Filing",
        date: "2024-10-15",
        time: "2:00 PM",
        duration: "45 mins",
        mode: "phone",
        status: "confirmed",
        price: 3500,
      },
      {
        id: "3",
        clientName: "Amit Patel",
        clientEmail: "amit.patel@example.com",
        serviceType: "Company Incorporation",
        date: "2024-10-16",
        time: "11:30 AM",
        duration: "60 mins",
        mode: "in-person",
        status: "pending",
        price: 15000,
      },
      {
        id: "4",
        clientName: "Sneha Reddy",
        clientEmail: "sneha.reddy@example.com",
        serviceType: "GST Registration",
        date: "2024-10-16",
        time: "3:00 PM",
        duration: "30 mins",
        mode: "zoom",
        status: "completed",
        price: 5000,
      },
      {
        id: "5",
        clientName: "Vikram Malhotra",
        clientEmail: "vikram.malhotra@example.com",
        serviceType: "GST Notice Response",
        date: "2024-10-17",
        time: "4:00 PM",
        duration: "45 mins",
        mode: "zoom",
        status: "pending",
        price: 8000,
      },
    ];

    setConsultations(dummyConsultations);
    setMetrics({
      totalConsultations: 156,
      completedConsultations: 142,
      averageRating: 4.8,
      totalRevenue: 425000,
      pendingConsultations: 5,
    });
    setLoading(false);
  }, []);

  const todayConsultations = consultations.filter(c => c.date === "2024-10-15");
  const upcomingConsultations = consultations.filter(c => c.status === "confirmed" || c.status === "pending");

  const statCards = [
    {
      title: "Total Consultations",
      value: metrics.totalConsultations,
      change: "+12 this month",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Completed",
      value: metrics.completedConsultations,
      change: "91% completion rate",
      icon: CheckCircle,
      color: "bg-emerald-500",
    },
    {
      title: "Average Rating",
      value: metrics.averageRating.toFixed(1),
      change: "4.8/5.0",
      icon: Star,
      color: "bg-yellow-500",
    },
    {
      title: "Revenue Earned",
      value: `₹${(metrics.totalRevenue / 1000).toFixed(0)}K`,
      change: "+18% this month",
      icon: DollarSign,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-[#0F172A]">Mentor Dashboard</h1>
          <p className="text-sm text-[#64748B]">Manage your consultations and client interactions</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-[10px] text-sm font-medium hover:bg-[#1D4ED8] transition-colors">
            <Calendar size={16} />
            Set Availability
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E2E8F0] text-[#0F172A] rounded-[10px] text-sm font-medium hover:bg-[#F8FAFC] transition-colors">
            <MessageSquare size={16} />
            Messages
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
                <div className="flex items-center gap-1 text-xs text-emerald-600">
                  <TrendingUp size={12} />
                  {card.change}
                </div>
              </div>
              <p className="text-sm text-[#64748B] mb-1">{card.title}</p>
              <p className="text-2xl font-semibold text-[#0F172A]">{card.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-[#E2E8F0]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#0F172A]">Today's Schedule</h2>
            <div className="flex items-center gap-2 text-sm text-[#64748B]">
              <Calendar size={16} />
              October 15, 2024
            </div>
          </div>
          <div className="space-y-3">
            {todayConsultations.map((consultation) => (
              <div key={consultation.id} className="flex items-center gap-4 p-4 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-md transition-all">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  consultation.mode === "zoom" ? "bg-blue-50 text-blue-600" :
                  consultation.mode === "phone" ? "bg-green-50 text-green-600" :
                  "bg-purple-50 text-purple-600"
                }`}>
                  {consultation.mode === "zoom" && <Video size={24} />}
                  {consultation.mode === "phone" && <Phone size={24} />}
                  {consultation.mode === "in-person" && <MapPin size={24} />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-[#0F172A]">{consultation.clientName}</p>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      consultation.status === "confirmed" ? "bg-emerald-100 text-emerald-600" :
                      consultation.status === "pending" ? "bg-orange-100 text-orange-600" :
                      "bg-gray-100 text-gray-600"
                    }`}>
                      {consultation.status}
                    </span>
                  </div>
                  <p className="text-sm text-[#64748B]">{consultation.serviceType}</p>
                  <div className="flex items-center gap-4 mt-1 text-xs text-[#64748B]">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {consultation.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {consultation.duration}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-[#0F172A]">₹{consultation.price}</p>
                  <button className="text-xs text-[#2563EB] hover:underline mt-1">View Details</button>
                </div>
              </div>
            ))}
            {todayConsultations.length === 0 && (
              <div className="text-center py-8 text-[#64748B]">
                <Calendar size={48} className="mx-auto mb-2 opacity-50" />
                <p>No consultations scheduled for today</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0]">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-4 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-md transition-all text-left">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <Calendar className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="font-medium text-[#0F172A]">My Calendar</p>
                <p className="text-xs text-[#64748B]">View upcoming appointments</p>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 p-4 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-md transition-all text-left">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                <Users className="text-green-600" size={20} />
              </div>
              <div>
                <p className="font-medium text-[#0F172A]">My Clients</p>
                <p className="text-xs text-[#64748B]">View assigned clients</p>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 p-4 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-md transition-all text-left">
              <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                <FileText className="text-purple-600" size={20} />
              </div>
              <div>
                <p className="font-medium text-[#0F172A]">Documents</p>
                <p className="text-xs text-[#64748B]">Access client documents</p>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 p-4 rounded-xl border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-md transition-all text-left">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                <DollarSign className="text-orange-600" size={20} />
              </div>
              <div>
                <p className="font-medium text-[#0F172A]">Earnings</p>
                <p className="text-xs text-[#64748B]">View payment history</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Consultations */}
      <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[#0F172A]">Upcoming Consultations</h2>
          <button className="text-sm text-[#2563EB] hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#64748B] uppercase">Client</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#64748B] uppercase">Service</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#64748B] uppercase">Date & Time</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#64748B] uppercase">Mode</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#64748B] uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#64748B] uppercase">Price</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#64748B] uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {upcomingConsultations.map((consultation) => (
                <tr key={consultation.id} className="border-b border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors">
                  <td className="px-4 py-4">
                    <div>
                      <p className="font-medium text-[#0F172A]">{consultation.clientName}</p>
                      <p className="text-xs text-[#64748B]">{consultation.clientEmail}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-2 py-1 bg-[#0F172A] text-white text-xs rounded-lg">
                      {consultation.serviceType}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-[#0F172A]">
                    <div className="flex flex-col">
                      <span>{consultation.date}</span>
                      <span className="text-[#64748B]">{consultation.time}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      {consultation.mode === "zoom" && <Video size={16} className="text-[#64748B]" />}
                      {consultation.mode === "phone" && <Phone size={16} className="text-[#64748B]" />}
                      {consultation.mode === "in-person" && <MapPin size={16} className="text-[#64748B]" />}
                      <span className="text-sm capitalize">{consultation.mode}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      consultation.status === "confirmed" ? "bg-emerald-100 text-emerald-600" :
                      consultation.status === "pending" ? "bg-orange-100 text-orange-600" :
                      "bg-gray-100 text-gray-600"
                    }`}>
                      {consultation.status === "confirmed" && <CheckCircle size={12} />}
                      {consultation.status === "pending" && <AlertCircle size={12} />}
                      {consultation.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-[#0F172A]">₹{consultation.price}</td>
                  <td className="px-4 py-4">
                    <button className="text-sm text-[#2563EB] hover:underline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

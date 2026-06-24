"use client";

import { useState, useEffect } from "react";
import {
  Users,
  Calendar,
  Clock,
  Search,
  Video,
  Phone,
  DollarSign,
  Eye,
  Edit,
  Trash2,
  X,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Plus
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Consultation {
  _id: string;
  user: {
    name: string;
    email: string;
    phone: string;
  };
  mentorName: string;
  mentorExpertise: string;
  mentorImage?: string;
  date: string;
  time: string;
  duration: string;
  mode: 'zoom' | 'phone' | 'in-person';
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'rescheduled';
  consultationType: string;
  price: number;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  notes?: string;
  meetingLink?: string;
  location?: string;
  phoneNumber?: string;
  createdAt: string;
}

interface ConsultationStats {
  total: number;
  pending: number;
  confirmed: number;
}

export default function ConsultancyPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [stats, setStats] = useState<ConsultationStats>({ total: 0, pending: 0, confirmed: 0 });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [modeFilter, setModeFilter] = useState("all");
  
  // Detail Modal
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedConsultation, setSelectedConsultation] = useState<Consultation | null>(null);
  
  // Edit Modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({
    status: '',
    meetingLink: '',
    location: '',
    phoneNumber: '',
    notes: ''
  });

  // Add New Consultation Modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addFormData, setAddFormData] = useState({
    userName: '',
    userEmail: '',
    userPhone: '',
    mentorName: '',
    mentorExpertise: '',
    date: '',
    time: '',
    duration: '30 mins',
    mode: 'zoom' as 'zoom' | 'phone' | 'in-person',
    status: 'pending' as 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'rescheduled',
    consultationType: '',
    price: '',
    paymentStatus: 'pending' as 'pending' | 'paid' | 'refunded',
    meetingLink: '',
    location: '',
    phoneNumber: '',
    notes: ''
  });

  useEffect(() => {
    fetchConsultations();
    fetchStats();
  }, []);

  const fetchConsultations = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/consultations`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      if (data.success) {
        setConsultations(data.data);
      }
    } catch (error) {
      console.error('Error fetching consultations:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/consultations/stats`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      if (data.success) {
        setStats(data.data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const handleView = (consultation: Consultation) => {
    setSelectedConsultation(consultation);
    setIsDetailModalOpen(true);
  };

  const handleEdit = (consultation: Consultation) => {
    setSelectedConsultation(consultation);
    setEditFormData({
      status: consultation.status,
      meetingLink: consultation.meetingLink || '',
      location: consultation.location || '',
      phoneNumber: consultation.phoneNumber || '',
      notes: consultation.notes || ''
    });
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = async () => {
    if (!selectedConsultation) return;
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/consultations/${selectedConsultation._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(editFormData)
      });
      const data = await response.json();
      if (data.success) {
        fetchConsultations();
        setIsEditModalOpen(false);
        setSelectedConsultation(null);
      }
    } catch (error) {
      console.error('Error updating consultation:', error);
    }
  };

  const deleteConsultation = async (id: string) => {
    if (!confirm('Are you sure you want to delete this consultation?')) return;
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/consultations/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      if (data.success) {
        fetchConsultations();
        fetchStats();
      }
    } catch (error) {
      console.error('Error deleting consultation:', error);
    }
  };

  const updateConsultationStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/consultations/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ status })
      });
      const data = await response.json();
      if (data.success) {
        fetchConsultations();
        fetchStats();
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const updatePaymentStatus = async (id: string, paymentStatus: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/consultations/${id}/payment`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ paymentStatus })
      });
      const data = await response.json();
      if (data.success) {
        fetchConsultations();
      }
    } catch (error) {
      console.error('Error updating payment status:', error);
    }
  };

  const handleAddConsultation = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/consultations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          user: {
            name: addFormData.userName,
            email: addFormData.userEmail,
            phone: addFormData.userPhone
          },
          mentorName: addFormData.mentorName,
          mentorExpertise: addFormData.mentorExpertise,
          date: addFormData.date,
          time: addFormData.time,
          duration: addFormData.duration,
          mode: addFormData.mode,
          status: addFormData.status,
          consultationType: addFormData.consultationType,
          price: parseInt(addFormData.price) || 0,
          paymentStatus: addFormData.paymentStatus,
          meetingLink: addFormData.meetingLink,
          location: addFormData.location,
          phoneNumber: addFormData.phoneNumber,
          notes: addFormData.notes
        })
      });
      const data = await response.json();
      if (data.success) {
        fetchConsultations();
        fetchStats();
        setIsAddModalOpen(false);
        setAddFormData({
          userName: '',
          userEmail: '',
          userPhone: '',
          mentorName: '',
          mentorExpertise: '',
          date: '',
          time: '',
          duration: '30 mins',
          mode: 'zoom',
          status: 'pending',
          consultationType: '',
          price: '',
          paymentStatus: 'pending',
          meetingLink: '',
          location: '',
          phoneNumber: '',
          notes: ''
        });
      }
    } catch (error) {
      console.error('Error adding consultation:', error);
    }
  };

  const filteredConsultations = consultations.filter(consultation => {
    const matchesSearch = searchTerm === '' || 
      consultation.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consultation.user?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consultation.mentorName?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || consultation.status === statusFilter;
    const matchesMode = modeFilter === 'all' || consultation.mode === modeFilter;
    
    return matchesSearch && matchesStatus && matchesMode;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-[#0F172A]">Consultation Management</h1>
          <p className="text-sm text-[#64748B]">Manage all consultation bookings</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E2E8F0] text-[#0F172A] rounded-[10px] text-sm font-medium hover:bg-[#F8FAFC] transition-colors"
          >
            <RefreshCw size={16} />
            Refresh
          </button>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-[10px] text-sm font-medium hover:bg-[#1D4ED8] transition-colors"
          >
            <Plus size={16} />
            Add New Consultation
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#64748B]">Total Consultations</p>
              <p className="text-3xl font-semibold text-[#0F172A]">{stats.total}</p>
            </div>
            <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
              <Users className="text-[#2563EB]" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#64748B]">Pending</p>
              <p className="text-3xl font-semibold text-[#0F172A]">{stats.pending}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <AlertCircle className="text-orange-600" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#64748B]">Confirmed</p>
              <p className="text-3xl font-semibold text-[#0F172A]">{stats.confirmed}</p>
            </div>
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="text-emerald-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-2xl border border-[#E2E8F0]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]" size={16} />
              <input
                type="text"
                placeholder="Search by name, email, or mentor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-10 pl-10 pr-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
              />
            </div>
          </div>
          <FilterSelect
            label="Status"
            options={['all', 'pending', 'confirmed', 'completed', 'cancelled', 'rescheduled']}
            value={statusFilter}
            onChange={setStatusFilter}
          />
          <FilterSelect
            label="Mode"
            options={['all', 'zoom', 'phone', 'in-person']}
            value={modeFilter}
            onChange={setModeFilter}
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-[#64748B]">Loading...</div>
        ) : filteredConsultations.length === 0 ? (
          <div className="p-8 text-center text-[#64748B]">No consultations found</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#64748B] uppercase">Client & Mentor</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#64748B] uppercase">Date & Time</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#64748B] uppercase">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#64748B] uppercase">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#64748B] uppercase">Payment</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[#64748B] uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredConsultations.map((consultation) => (
                  <tr key={consultation._id} className="border-b border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors">
                    <td className="px-4 py-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#2563EB]/10 flex items-center justify-center">
                            <Users size={12} className="text-[#2563EB]" />
                          </div>
                          <div>
                            <p className="font-medium text-[#0F172A] text-sm">{consultation.user?.name}</p>
                            <p className="text-xs text-[#64748B]">{consultation.user?.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#2563EB]/10 flex items-center justify-center">
                            {consultation.mentorImage ? (
                              <img src={consultation.mentorImage} alt="" className="w-full h-full rounded-full object-cover" />
                            ) : (
                              <Users size={12} className="text-[#2563EB]" />
                            )}
                          </div>
                          <p className="text-xs text-[#64748B]">{consultation.mentorName}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-[#64748B]" />
                          <p className="text-sm font-medium text-[#0F172A]">{consultation.date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="text-[#64748B]" />
                          <p className="text-sm text-[#64748B]">{consultation.time} ({consultation.duration})</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="space-y-2">
                        <span className="inline-flex items-center px-2 py-0.5 bg-[#0F172A] text-white text-xs font-medium rounded-lg">
                          {consultation.consultationType}
                        </span>
                        <div className="flex items-center gap-2">
                          {consultation.mode === 'zoom' && <Video size={14} className="text-[#64748B]" />}
                          {consultation.mode === 'phone' && <Phone size={14} className="text-[#64748B]" />}
                          <p className="text-xs text-[#64748B] capitalize">{consultation.mode}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <StatusBadge status={consultation.status} />
                    </td>
                    <td className="px-4 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <DollarSign size={14} className="text-[#64748B]" />
                          <p className="text-sm font-medium text-[#0F172A]">₹{consultation.price}</p>
                        </div>
                        <PaymentBadge status={consultation.paymentStatus} />
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleView(consultation)}
                          className="p-2 text-[#64748B] hover:text-[#2563EB] hover:bg-[#F8FAFC] rounded-[10px] transition-colors"
                          title="View Details"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleEdit(consultation)}
                          className="p-2 text-[#64748B] hover:text-[#2563EB] hover:bg-[#F8FAFC] rounded-[10px] transition-colors"
                          title="Edit"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => deleteConsultation(consultation._id)}
                          className="p-2 text-[#64748B] hover:text-red-600 hover:bg-[#FEF2F2] rounded-[10px] transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {isDetailModalOpen && selectedConsultation && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 border-b border-[#E2E8F0] flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[#0F172A]">Consultation Details</h2>
                <button
                  onClick={() => setIsDetailModalOpen(false)}
                  className="p-2 hover:bg-[#F8FAFC] rounded-[10px] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-medium text-[#64748B] mb-1">Client Name</p>
                    <p className="text-sm font-medium text-[#0F172A]">{selectedConsultation.user?.name}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#64748B] mb-1">Client Email</p>
                    <p className="text-sm text-[#64748B]">{selectedConsultation.user?.email}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#64748B] mb-1">Client Phone</p>
                    <p className="text-sm text-[#64748B]">{selectedConsultation.user?.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#64748B] mb-1">Mentor</p>
                    <p className="text-sm font-medium text-[#0F172A]">{selectedConsultation.mentorName}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#64748B] mb-1">Date</p>
                    <p className="text-sm text-[#0F172A]">{selectedConsultation.date}</p>
                  </div>IsDlMdaOp(fl
                  <div>
                    <p className="text-xs font-medium text-[#64748B] mb-1">Time</p>
                    <p className="text-sm text-[#0F172A]">{selectedConsultation.time}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#64748B] mb-1">Duration</p>
                    <p className="text-sm text-[#0F172A]">{selectedConsultation.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#64748B] mb-1">Mode</p>
                    <p className="text-sm text-[#0F172A] capitalize">{selectedConsultation.mode}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#64748B] mb-1">Type</p>
                    <p className="text-sm text-[#0F172A]">{selectedConsultation.consultationType}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#64748B] mb-1">Price</p>
                    <p className="text-sm font-medium text-[#0F172A]">₹{selectedConsultation.price}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-medium text-[#64748B] mb-1">Status</p>IsDlMaO(fle
                    <StatusBadge status={selectedConsultation.status} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#64748B] mb-1">Payment Status</p>
                    <PaymentBadge status={selectedConsultation.paymentStatus} />
                  </div>
                </div>
                {selectedConsultation.notes && (
                  <div>
                    <p className="text-xs font-medium text-[#64748B] mb-1">Notes</p>
                    <p className="text-sm text-[#0F172A]">{selectedConsultation.notes}</p>
                  </div>
                )}
                {selectedConsultation.meetingLink && (
                  <div>
                    <p className="text-xs font-medium text-[#64748B] mb-1">Meeting Link</p>
                    <a href={selectedConsultation.meetingLink} target="_blank" rel="noopener noreferrer" className="text-sm text-[#2563EB] hover:underline">
                      {selectedConsultation.meetingLink}
                    </a>
                  </div>
                )}
                <div className="flex gap-2 pt-4 border-t border-[#E2E8F0]">
                  {selectedConsultation.status === 'pending' && (
                    <button
                      onClick={() => { updateConsultationStatus(selectedConsultation._id, 'confirmed'); setSelectedConsultation({ ...selectedConsultation, status: 'confirmed' }); }}
                      className="flex-1 px-4 py-2 bg-[#2563EB] text-white rounded-[10px] text-sm font-medium hover:bg-[#1D4ED8] transition-colors"
                    >
                      Confirm Booking
                    </button>
                  )}
                  {selectedConsultation.status === 'confirmed' && (
                    <button
                      onClick={() => { updateConsultationStatus(selectedConsultation._id, 'completed'); setSelectedConsultation({ ...selectedConsultation, status: 'completed' }); setIsDetailModalOpen(false); }}
                      className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-[10px] text-sm font-medium hover:bg-emerald-700 transition-colors"
                    >
                      Mark Complete
                    </button>
                  )}
                  {(selectedConsultation.status === 'pending' || selectedConsultation.status === 'confirmed') && (
                    <button
                      onClick={() => { updateConsultationStatus(selectedConsultation._id, 'cancelled'); setSelectedConsultation({ ...selectedConsultation, status: 'cancelled' }); setIsDetailModalOpen(false); }}
                      className="flex-1 px-4 py-2 bg-red-600 text-white rounded-[10px] text-sm font-medium hover:bg-red-700 transition-colors"
                    >
                      Cancel Booking
                    </button>
                  )}
                  {selectedConsultation.paymentStatus === 'pending' && (
                    <button
                      onClick={() => { updatePaymentStatus(selectedConsultation._id, 'paid'); setSelectedConsultation({ ...selectedConsultation, paymentStatus: 'paid' }); }}
                      className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-[10px] text-sm font-medium hover:bg-emerald-700 transition-colors"
                    >
                      Mark Paid
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Edit Modal */}
      <AnimatePresence>
        {isEditModalOpen && selectedConsultation && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 border-b border-[#E2E8F0] flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[#0F172A]">Edit Consultation</h2>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="p-2 hover:bg-[#F8FAFC] rounded-[10px] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#64748B] mb-2">Status</label>
                  <select
                    value={editFormData.status}
                    onChange={(e) => setEditFormData({ ...editFormData, status: e.target.value as any })}
                    className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="rescheduled">Rescheduled</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#64748B] mb-2">Meeting Link</label>
                  <input
                    type="text"
                    value={editFormData.meetingLink}
                    onChange={(e) => setEditFormData({ ...editFormData, meetingLink: e.target.value })}
                    placeholder="https://zoom.us/..."
                    className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#64748B] mb-2">Location</label>
                  <input
                    type="text"
                    value={editFormData.location}
                    onChange={(e) => setEditFormData({ ...editFormData, location: e.target.value })}
                    placeholder="Office address or location"
                    className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#64748B] mb-2">Phone Number</label>
                  <input
                    type="text"
                    value={editFormData.phoneNumber}
                    onChange={(e) => setEditFormData({ ...editFormData, phoneNumber: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#64748B] mb-2">Notes</label>
                  <textarea
                    value={editFormData.notes}
                    onChange={(e) => setEditFormData({ ...editFormData, notes: e.target.value })}
                    placeholder="Add any notes..."
                    rows={3}
                    className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A] resize-none"
                  />
                </div>
                <div className="flex gap-2 pt-4">
                  <button
                    onClick={() => setIsEditModalOpen(false)}
                    className="flex-1 px-4 py-2 bg-[#F8FAFC] text-[#0F172A] rounded-[10px] text-sm font-medium hover:bg-[#E2E8F0] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleEditSubmit}
                    className="flex-1 px-4 py-2 bg-[#2563EB] text-white rounded-[10px] text-sm font-medium hover:bg-[#1D4ED8] transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Add New Consultation Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 border-b border-[#E2E8F0] flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[#0F172A]">Add New Consultation</h2>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="p-2 hover:bg-[#F8FAFC] rounded-[10px] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#64748B] mb-2">Client Name *</label>
                    <input
                      type="text"
                      value={addFormData.userName}
                      onChange={(e) => setAddFormData({ ...addFormData, userName: e.target.value })}
                      placeholder="Enter client name"
                      className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#64748B] mb-2">Client Email *</label>
                    <input
                      type="email"
                      value={addFormData.userEmail}
                      onChange={(e) => setAddFormData({ ...addFormData, userEmail: e.target.value })}
                      placeholder="client@example.com"
                      className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#64748B] mb-2">Client Phone *</label>
                    <input
                      type="text"
                      value={addFormData.userPhone}
                      onChange={(e) => setAddFormData({ ...addFormData, userPhone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#64748B] mb-2">Mentor Name *</label>
                    <input
                      type="text"
                      value={addFormData.mentorName}
                      onChange={(e) => setAddFormData({ ...addFormData, mentorName: e.target.value })}
                      placeholder="Enter mentor name"
                      className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#64748B] mb-2">Mentor Expertise</label>
                    <input
                      type="text"
                      value={addFormData.mentorExpertise}
                      onChange={(e) => setAddFormData({ ...addFormData, mentorExpertise: e.target.value })}
                      placeholder="e.g., GST & Income Tax"
                      className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#64748B] mb-2">Consultation Type *</label>
                    <input
                      type="text"
                      value={addFormData.consultationType}
                      onChange={(e) => setAddFormData({ ...addFormData, consultationType: e.target.value })}
                      placeholder="e.g., GST Filing"
                      className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#64748B] mb-2">Date *</label>
                    <input
                      type="date"
                      value={addFormData.date}
                      onChange={(e) => setAddFormData({ ...addFormData, date: e.target.value })}
                      className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#64748B] mb-2">Time *</label>
                    <input
                      type="time"
                      value={addFormData.time}
                      onChange={(e) => setAddFormData({ ...addFormData, time: e.target.value })}
                      className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#64748B] mb-2">Duration</label>
                    <select
                      value={addFormData.duration}
                      onChange={(e) => setAddFormData({ ...addFormData, duration: e.target.value })}
                      className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
                    >
                      <option value="15 mins">15 mins</option>
                      <option value="30 mins">30 mins</option>
                      <option value="45 mins">45 mins</option>
                      <option value="60 mins">60 mins</option>
                      <option value="90 mins">90 mins</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#64748B] mb-2">Mode</label>
                    <select
                      value={addFormData.mode}
                      onChange={(e) => setAddFormData({ ...addFormData, mode: e.target.value as any })}
                      className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
                    >
                      <option value="zoom">Zoom</option>
                      <option value="phone">Phone</option>
                      <option value="in-person">In-Person</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#64748B] mb-2">Price (₹) *</label>
                    <input
                      type="number"
                      value={addFormData.price}
                      onChange={(e) => setAddFormData({ ...addFormData, price: e.target.value })}
                      placeholder="Enter price"
                      className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#64748B] mb-2">Status</label>
                    <select
                      value={addFormData.status}
                      onChange={(e) => setAddFormData({ ...addFormData, status: e.target.value as any })}
                      className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#64748B] mb-2">Payment Status</label>
                  <select
                    value={addFormData.paymentStatus}
                    onChange={(e) => setAddFormData({ ...addFormData, paymentStatus: e.target.value as any })}
                    className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
                  >
                    <option value="pending">Pending</option>
                    <option value="paid">Paid</option>
                    <option value="refunded">Refunded</option>
                  </select>
                </div>
                {addFormData.mode === 'zoom' && (
                  <div>
                    <label className="block text-xs font-medium text-[#64748B] mb-2">Meeting Link</label>
                    <input
                      type="text"
                      value={addFormData.meetingLink}
                      onChange={(e) => setAddFormData({ ...addFormData, meetingLink: e.target.value })}
                      placeholder="https://zoom.us/..."
                      className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
                    />
                  </div>
                )}
                {addFormData.mode === 'in-person' && (
                  <div>
                    <label className="block text-xs font-medium text-[#64748B] mb-2">Location</label>
                    <input
                      type="text"
                      value={addFormData.location}
                      onChange={(e) => setAddFormData({ ...addFormData, location: e.target.value })}
                      placeholder="Office address or location"
                      className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
                    />
                  </div>
                )}
                {addFormData.mode === 'phone' && (
                  <div>
                    <label className="block text-xs font-medium text-[#64748B] mb-2">Phone Number</label>
                    <input
                      type="text"
                      value={addFormData.phoneNumber}
                      onChange={(e) => setAddFormData({ ...addFormData, phoneNumber: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-xs font-medium text-[#64748B] mb-2">Notes</label>
                  <textarea
                    value={addFormData.notes}
                    onChange={(e) => setAddFormData({ ...addFormData, notes: e.target.value })}
                    placeholder="Add any notes..."
                    rows={3}
                    className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A] resize-none"
                  />
                </div>
                <div className="flex gap-2 pt-4">
                  <button
                    onClick={() => setIsAddModalOpen(false)}
                    className="flex-1 px-4 py-2 bg-[#F8FAFC] text-[#0F172A] rounded-[10px] text-sm font-medium hover:bg-[#E2E8F0] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddConsultation}
                    className="flex-1 px-4 py-2 bg-[#2563EB] text-white rounded-[10px] text-sm font-medium hover:bg-[#1D4ED8] transition-colors"
                  >
                    Add Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    pending: 'bg-orange-100 text-orange-600',
    confirmed: 'bg-emerald-100 text-emerald-600',
    completed: 'bg-blue-100 text-[#2563EB]',
    cancelled: 'bg-red-100 text-red-600',
    rescheduled: 'bg-purple-100 text-purple-600'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium ${styles[status] || styles.pending}`}>
      {status}
    </span>
  );
}

function PaymentBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    paid: 'bg-emerald-100 text-emerald-600',
    pending: 'bg-orange-100 text-orange-600',
    refunded: 'bg-red-100 text-red-600'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg text-xs font-medium ${styles[status] || styles.pending}`}>
      {status}
    </span>
  );
}

function FilterSelect({ label, options, value, onChange }: { label: string, options: string[], value: string, onChange: (val: string) => void }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-medium text-[#64748B]">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-10 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] outline-none text-sm text-[#0F172A]"
      >
        {options.map(o => <option key={o} value={o} className="capitalize">{o === 'all' ? 'All' : o}</option>)}
      </select>
    </div>
  );
}

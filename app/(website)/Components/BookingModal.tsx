"use client";

import React, { useState, useRef, useEffect } from 'react';
import { X, Calendar as CalendarIcon, Clock, CheckCircle, ChevronLeft, ChevronRight, Lock } from 'lucide-react';
import { Mentor } from '../consultation/data/mentors';

interface BookingModalProps {
  mentor: Mentor | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ mentor, isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', query: '' });
  const scrollRef = useRef<HTMLDivElement>(null);

  // Generate next 14 daysßßß
  const dates = Array.from({ length: 14 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      day: d.toLocaleDateString('en-US', { weekday: 'short' }),
      date: d.getDate().toString(),
      month: d.toLocaleDateString('en-US', { month: 'short' }),
      full: d.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })
    };
  });

  useEffect(() => {
    if (isOpen && step === 1) {
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [isOpen, step]);

  if (!isOpen || !mentor) return null;

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const resetAndClose = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: '', email: '', query: '' });
    onClose();
  };

  const isSlotBooked = (time: string) => {
    if (!selectedDate || !mentor.bookedSlots) return false;
    return mentor.bookedSlots[selectedDate]?.includes(time);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300"
        onClick={resetAndClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-[1rem] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-8 duration-500">
        {/* Header */}
        <div className="bg-[#0F172A] p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2663eb]/10 rounded-[1rem] blur-3xl -mr-32 -mt-32" />
          <button
            onClick={resetAndClose}
            className="absolute top-6 right-6 p-2 rounded-[1rem] bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-4">
              <img
                src={mentor.image}
                className="w-16 h-16 rounded-[1rem] object-cover border-2 border-white/10"
                alt={mentor.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(mentor.name)}&background=2663eb&color=fff&size=512`;
                }}
              />
              <div>
                <h2 className="text-2xl font-black tracking-tight">{mentor.name}</h2>
                <p className="text-[#2663eb] text-[10px] font-black uppercase tracking-widest">{mentor.title}</p>
              </div>
            </div>

            {/* Progress Stepper */}
            <div className="flex items-center gap-2 pt-4">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1 flex-grow rounded-[1rem] transition-all duration-500 ${step >= s ? 'bg-[#2663eb]' : 'bg-white/10'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 min-h-[450px] flex flex-col">
          {step === 1 && (
            <div className="space-y-10 animate-in slide-in-from-right-8 duration-500">
              {/* Sliding Date Selector */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                    <CalendarIcon size={24} className="text-[#2663eb]" /> Select Date
                  </h3>
                  <div className="flex gap-2">
                    <button onClick={() => scroll('left')} className="p-2 rounded-[1rem] bg-slate-50 hover:bg-slate-100 transition-colors">
                      <ChevronLeft size={16} />
                    </button>
                    <button onClick={() => scroll('right')} className="p-2 rounded-[1rem] bg-slate-50 hover:bg-slate-100 transition-colors">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <div
                  ref={scrollRef}
                  className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x"
                >
                  {dates.map((d) => (
                    <button
                      key={d.full}
                      onClick={() => {
                        setSelectedDate(d.full);
                        setSelectedTime(null); // Reset time when date changes
                      }}
                      className={`flex-shrink-0 w-24 flex flex-col items-center py-5 rounded-[1rem] border transition-all duration-300 snap-center ${selectedDate === d.full
                        ? 'border-[#2663eb] bg-[#2663eb]/5 shadow-lg shadow-[#2663eb]/10'
                        : 'border-slate-100 hover:border-slate-200 bg-slate-50/50'
                        }`}
                    >
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{d.day}</span>
                      <span className={`text-2xl font-black ${selectedDate === d.full ? 'text-[#2663eb]' : 'text-slate-900'}`}>{d.date}</span>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{d.month}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Advanced Slot Rendering */}
              <div className="space-y-4">
                <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                  <Clock size={24} className="text-[#2663eb]" /> Available Slots
                </h3>
                {!selectedDate ? (
                  <div className="py-12 bg-slate-50/50 rounded-[1rem] border border-dashed border-slate-200 text-center">
                    <p className="text-sm font-medium text-slate-400 italic">Please select a date first</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {mentor.availability.map((time) => {
                      const booked = isSlotBooked(time);
                      return (
                        <button
                          key={time}
                          disabled={booked}
                          onClick={() => setSelectedTime(time)}
                          className={`relative py-4 rounded-[1rem] border font-black text-xs uppercase tracking-widest transition-all duration-300 overflow-hidden group ${booked
                            ? 'border-slate-100 bg-slate-50/50 text-slate-300 cursor-not-allowed opacity-60'
                            : selectedTime === time
                              ? 'border-[#2663eb] bg-[#2663eb] text-white shadow-lg shadow-[#2663eb]/20'
                              : 'border-slate-100 hover:border-slate-200 bg-slate-50 text-slate-600'
                            }`}
                        >
                          {booked && (
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-200/50 backdrop-blur-[1px]">
                              <span className="text-[8px] bg-slate-400 text-white px-2 py-0.5 rounded-[1rem] flex items-center gap-1">
                                <Lock size={8} /> FULL
                              </span>
                            </div>
                          )}
                          {time} <span className="text-[8px] opacity-70">30 min</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in slide-in-from-right-8 duration-500">
              <h3 className="text-xl font-black text-slate-900 tracking-tight">Personal Details</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-6 py-4 rounded-[1rem] bg-slate-50 border border-slate-100 focus:border-[#2663eb] focus:bg-white outline-none transition-all font-medium text-slate-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email for confirmation"
                    className="w-full px-6 py-4 rounded-[1rem] bg-slate-50 border border-slate-100 focus:border-[#2663eb] focus:bg-white outline-none transition-all font-medium text-slate-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">General Query</label>
                  <textarea
                    value={formData.query}
                    onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                    placeholder="Briefly describe your requirement"
                    rows={3}
                    className="w-full px-6 py-4 rounded-[1rem] bg-slate-50 border border-slate-100 focus:border-[#2663eb] focus:bg-white outline-none transition-all font-medium text-slate-900 resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col items-center justify-center py-12 space-y-6 animate-in zoom-in-95 duration-700">
              <div className="w-24 h-24 bg-[#2663eb] rounded-[1rem] flex items-center justify-center text-white relative">
                <div className="absolute inset-0 bg-[#2663eb] rounded-[1rem] animate-ping opacity-20 scale-150" />
                <CheckCircle size={48} />
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-3xl font-black text-slate-900 tracking-tighter">Booking Confirmed!</h3>
                <p className="text-slate-500 font-medium max-w-xs mx-auto">
                  Your consultation with <span className="text-[#0F172A] font-black">{mentor.name}</span> is scheduled for <span className="text-[#2663eb] font-black">{selectedDate}</span> at <span className="text-[#2663eb] font-black">{selectedTime}</span>.
                </p>
                <p className="text-[10px] font-black text-[#2663eb] uppercase tracking-widest pt-4">Check your email for instructions.</p>
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="mt-auto pt-8 flex items-center justify-between">
            {step < 3 ? (
              <>
                <button
                  onClick={step === 1 ? resetAndClose : handleBack}
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <ChevronLeft size={16} /> Back
                </button>
                <button
                  disabled={step === 1 ? (!selectedDate || !selectedTime) : (!formData.name || !formData.email)}
                  onClick={handleNext}
                  className="bg-[#0F172A] text-white px-10 py-5 rounded-[1rem] font-black text-[10px] uppercase tracking-widest hover:bg-[#2663eb] disabled:opacity-30 disabled:hover:bg-[#0F172A] transition-all flex items-center gap-2"
                >
                  {step === 2 ? 'Confirm Booking' : 'Next Step'} <ChevronRight size={16} />
                </button>
              </>
            ) : (
              <button
                onClick={resetAndClose}
                className="w-full bg-[#0F172A] text-white py-5 rounded-[1rem] font-black text-[10px] uppercase tracking-widest hover:bg-slate-800 transition-all"
              >
                Close Gateway
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

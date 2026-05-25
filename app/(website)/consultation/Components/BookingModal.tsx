"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, CheckCircle2, ChevronRight, MapPin } from 'lucide-react';
import { Mentor } from '../../consultation/data/mentors';

interface BookingModalProps {
  mentor: Mentor | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ mentor, isOpen, onClose }: BookingModalProps) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  if (!mentor) return null;

  const dates = mentor.bookedSlots ? Object.keys(mentor.bookedSlots) : ["Mon 24 Apr", "Tue 25 Apr", "Wed 26 Apr"];
  const timeSlots = mentor.availability;

  const handleBook = () => {
    setStep(3);
    // In a real app, this would call an API
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setSelectedDate(null);
      setSelectedTime(null);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-[1rem] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-[1rem] bg-[#2663eb]/10 flex items-center justify-center text-[#2663eb] font-bold">
                  {mentor.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{mentor.name}</h3>
                  <p className="text-xs text-slate-500">{mentor.title}</p>
                </div>
              </div>
              <button 
                onClick={handleClose}
                className="p-2 hover:bg-slate-100 rounded-[1rem] transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <div className="p-8">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="flex items-center gap-2 mb-6 text-[#2663eb]">
                    <Calendar className="w-5 h-5" />
                    <h4 className="font-bold">Select Date</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {dates.map((date) => (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`p-4 rounded-[1rem] border-2 transition-all text-center ${
                          selectedDate === date 
                            ? 'border-[#2663eb] bg-[#2663eb]/5 text-[#2663eb]' 
                            : 'border-slate-100 hover:border-slate-200 text-slate-600'
                        }`}
                      >
                        <span className="block text-xs font-bold uppercase tracking-wider mb-1">
                          {date.split(' ')[0]}
                        </span>
                        <span className="block text-lg font-black">
                          {date.split(' ')[1]}
                        </span>
                        <span className="block text-xs opacity-60">
                          {date.split(' ')[2]}
                        </span>
                      </button>
                    ))}
                  </div>

                  <button
                    disabled={!selectedDate}
                    onClick={() => setStep(2)}
                    className="w-full py-4 bg-[#2663eb] text-white rounded-[1rem] font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#2663eb]/20"
                  >
                    Next: Choose Time
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="flex items-center gap-2 mb-6 text-[#2663eb]">
                    <Clock className="w-5 h-5" />
                    <h4 className="font-bold">Select Time Slot</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {timeSlots.map((time) => {
                      const isBooked = mentor.bookedSlots?.[selectedDate!]?.includes(time);
                      return (
                        <button
                          key={time}
                          disabled={isBooked}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-[1rem] border-2 transition-all font-bold text-sm ${
                            selectedTime === time 
                              ? 'border-[#2663eb] bg-[#2663eb]/5 text-[#2663eb]' 
                              : isBooked
                                ? 'border-slate-50 bg-slate-50 text-slate-300 cursor-not-allowed line-through'
                                : 'border-slate-100 hover:border-slate-200 text-slate-600'
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-[1rem] font-bold"
                    >
                      Back
                    </button>
                    <button
                      disabled={!selectedTime}
                      onClick={handleBook}
                      className="flex-[2] py-4 bg-[#2663eb] text-white rounded-[1rem] font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#2663eb]/20"
                    >
                      Confirm Booking
                      <CheckCircle2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-[#2663eb]/10 rounded-[1rem] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#2663eb]" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-2">Booking Confirmed!</h4>
                  <p className="text-slate-500 mb-8">
                    Your session with {mentor.name} has been scheduled for {selectedDate} at {selectedTime}.
                  </p>
                  <button
                    onClick={handleClose}
                    className="w-full py-4 bg-[#2663eb] text-white rounded-[1rem] font-bold"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </div>

            {/* Footer Summary */}
            {step < 3 && (
              <div className="bg-slate-50 p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-[1rem] border border-slate-200">
                    <MapPin className="w-4 h-4 text-[#2663eb]" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Virtual Session</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Total Amount</span>
                  <span className="text-xl font-black text-slate-900">₹{mentor.price}</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;

// components/user/UserDashboard.tsx
import React from 'react';
import { Shield, LayoutGrid, FileSearch, MessageSquareHeart } from 'lucide-react';
// import { ComplianceHealthGauge } from './ComplianceHealthGauge'; // Custom component

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] p-6 space-y-6">
      {/* 1. Advanced Search Command Center */}
      <div className="relative group max-w-4xl mx-auto">
        <input 
          type="text" 
          placeholder="Type what you need: 'Start a Company' or 'GST Notice Help'..."
          className="w-full p-5 pl-14 rounded-[1rem] border-none shadow-xl focus:ring-2 focus:ring-[#1A237E] transition-all bg-white text-lg"
        />
        <FileSearch className="absolute left-5 top-5 text-[#1A237E]" size={28} />
      </div>

      {/* 2. Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
        
        {/* Compliance Health Tile */}
        <div className="md:col-span-4 bg-white p-6 rounded-[1rem] shadow-sm border-t-8 border-[#2E7D32]">
          <h3 className="text-[#1A237E] font-bold mb-4">Compliance Health</h3>
          {/* <ComplianceHealthGauge percentage={98} /> Gauge UI */}
          <p className="text-center mt-4 text-[#2E7D32] font-semibold">"All returns filed on time"</p>
        </div>

        {/* Dynamic Deadline Tracker */}
        <div className="md:col-span-8 bg-white p-6 rounded-[1rem] shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-[#1A237E]">Upcoming Deadlines</h3>
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-[1rem] text-xs font-bold animate-pulse">
              GST R1 Filing ends in: 04 Days
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-[1rem] hover:bg-gray-100 transition">
              <span className="font-medium">GSTR-3B (Feb 2026)</span>
              <button className="bg-[#1A237E] text-white px-4 py-2 rounded-[1rem] text-sm">File Now</button>
            </div>
          </div>
        </div>

        {/* Document Vault */}
        <div className="md:col-span-12 lg:col-span-6 bg-[#1A237E] text-white p-8 rounded-[1rem] relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Secure Document Vault</h2>
            <p className="opacity-80 mb-6 italic">"Snapshot & Fill" automatically parses your forms.</p>
            <div className="border-2 border-dashed border-[#60a5fa]/50 rounded-[1rem] p-10 text-center hover:bg-[#1e40af] transition cursor-pointer">
              <p>Drag & Drop AIS/TIS or GST data here</p>
            </div>
          </div>
          <Shield className="absolute -right-10 -bottom-10 opacity-10" size={240} />
        </div>
      </div>

      {/* 3. Floating CA Assistant Overlay */}
      <button className="fixed bottom-6 right-6 bg-[#FF8F00] text-white p-4 rounded-[1rem] shadow-2xl flex items-center gap-2 hover:scale-105 transition">
        <MessageSquareHeart />
        <span className="font-bold">Ask [CA Name]'s </span>
      </button>
    </div>
  );
}
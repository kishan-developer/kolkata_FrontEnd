"use client";

import { useState } from "react";
import { 
  MessageSquare, 
  Send, 
  Search, 
  MoreVertical, 
  Smartphone, 
  Mail, 
  Users, 
  User2, 
  Plus, 
  ChevronRight,
  ShieldCheck,
  Clock,
  Layout,
  Bell,
  Mic,
  Paperclip,
  Smile
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CommunicationHubPage() {
  const [activeTab, setActiveTab] = useState<'Internal' | 'Client' | 'Broadcast'>('Client');
  const [selectedChat, setSelectedChat] = useState(0);

  const chats = [
    { name: "Malhotra Tech", lastMsg: "Please check the GST draft...", time: "2m ago", unread: 2, type: "Client", avatar: "MT" },
    { name: "Sonal Gupta", lastMsg: "ITR-6 filed for Singhania Exports", time: "15m ago", unread: 0, type: "Internal", avatar: "SG" },
    { name: "Anita Verma", lastMsg: "DSC token received. Thank you.", time: "1h ago", unread: 0, type: "Client", avatar: "AV" },
    { name: "Rahul Sharma", lastMsg: "Meeting at 4 PM regarding audit", time: "3h ago", unread: 1, type: "Internal", avatar: "RS" },
  ];

  return (
    <div className="flex h-[calc(100vh-140px)] bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden mt-10 animate-in fade-in zoom-in-95 duration-700">
      
      {/* Chat Sidebar */}
      <div className="w-96 border-r border-slate-100 flex flex-col bg-slate-50/50">
        <div className="p-8 pb-4">
           <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-black text-slate-900 tracking-tighter">Secure Comms</h1>
              <button className="p-2.5 bg-[#2663eb] text-white rounded-[1rem] shadow-lg shadow-blue-100 border-b-4 border-[#1e40af]">
                 <Plus size={18} />
              </button>
           </div>
           <div className="flex gap-2 bg-white p-1.5 rounded-[1.2rem] border border-slate-200 shadow-sm mb-6">
              <button onClick={() => setActiveTab('Client')} className={`flex-1 py-2 text-[9px] font-black uppercase tracking-widest rounded-[0.8rem] transition-all ${activeTab === 'Client' ? 'bg-[#2663eb] text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}>Clients</button>
              <button onClick={() => setActiveTab('Internal')} className={`flex-1 py-2 text-[9px] font-black uppercase tracking-widest rounded-[0.8rem] transition-all ${activeTab === 'Internal' ? 'bg-[#2663eb] text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}>Internal</button>
           </div>
           <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input type="text" placeholder="Search conversations..." className="w-full h-11 pl-11 pr-4 bg-white border border-slate-200 rounded-[1rem] outline-none focus:ring-2 focus:ring-[#2663eb] text-[11px] font-bold" />
           </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2 no-scrollbar">
           {chats.filter(c => c.type === activeTab).map((chat, idx) => (
             <button 
               key={idx}
               onClick={() => setSelectedChat(idx)}
               className={`w-full flex items-center gap-4 p-4 rounded-[1.5rem] transition-all group ${selectedChat === idx ? 'bg-white shadow-xl border border-slate-100 ring-2 ring-blue-50' : 'hover:bg-white/80 border border-transparent hover:border-slate-100'}`}
             >
                <div className="relative">
                   <div className={`w-12 h-12 rounded-[1.2rem] flex items-center justify-center font-black text-xs shadow-sm ${selectedChat === idx ? 'bg-[#2663eb] text-white' : 'bg-slate-200 text-slate-500'}`}>
                      {chat.avatar}
                   </div>
                   {chat.unread > 0 && (
                     <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[8px] font-black rounded-full flex items-center justify-center border-2 border-white">
                        {chat.unread}
                     </div>
                   )}
                </div>
                <div className="flex-1 text-left min-w-0">
                   <div className="flex justify-between items-center mb-0.5">
                      <h4 className="text-sm font-black text-slate-900 tracking-tight truncate">{chat.name}</h4>
                      <span className="text-[8px] font-black text-slate-400 uppercase">{chat.time}</span>
                   </div>
                   <p className="text-[10px] font-medium text-slate-400 truncate tracking-tight">{chat.lastMsg}</p>
                </div>
             </button>
           ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
         {/* Chat Header */}
         <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white shadow-sm z-10">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-[1.2rem] bg-blue-50 text-[#2663eb] flex items-center justify-center font-black">
                  {chats[selectedChat].avatar}
               </div>
               <div>
                  <h3 className="text-lg font-black text-slate-900 tracking-tighter">{chats[selectedChat].name}</h3>
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Intelligence</span>
                  </div>
               </div>
            </div>
            <div className="flex items-center gap-2">
               <button className="p-3 text-slate-400 hover:text-slate-900 transition-all rounded-[1rem] hover:bg-slate-50">
                  <Smartphone size={20} />
               </button>
               <button className="p-3 text-slate-400 hover:text-slate-900 transition-all rounded-[1rem] hover:bg-slate-50">
                  <Mail size={20} />
               </button>
               <div className="w-px h-6 bg-slate-100 mx-2" />
               <button className="p-3 text-slate-400 hover:text-slate-900 transition-all rounded-[1rem] hover:bg-slate-50">
                  <MoreVertical size={20} />
               </button>
            </div>
         </div>

         {/* Chat Messages Placeholder */}
         <div className="flex-1 p-8 overflow-y-auto bg-slate-50/30 space-y-6 no-scrollbar">
            <div className="flex justify-center mb-8">
               <span className="px-4 py-1.5 bg-white border border-slate-200 text-[9px] font-black text-slate-400 uppercase tracking-widest rounded-full shadow-sm">Today, Oct 11</span>
            </div>
            
            <div className="flex gap-4 max-w-lg">
               <div className="w-8 h-8 rounded-lg bg-slate-200 flex-shrink-0 flex items-center justify-center text-[9px] font-black">{chats[selectedChat].avatar}</div>
               <div className="p-5 bg-white rounded-[1.5rem] rounded-tl-none border border-slate-100 shadow-sm">
                  <p className="text-sm text-slate-700 font-medium leading-relaxed tracking-tight">Hello Team, I've uploaded the GST invoices for September. Can we prioritize the filing today as I have an audit tomorrow?</p>
                  <p className="text-[8px] font-black text-slate-400 uppercase mt-3 tracking-widest">10:42 AM</p>
               </div>
            </div>

            <div className="flex gap-4 max-w-lg ml-auto flex-row-reverse">
               <div className="w-8 h-8 rounded-lg bg-[#2663eb] text-white flex-shrink-0 flex items-center justify-center text-[9px] font-black">AD</div>
               <div className="p-5 bg-[#2663eb] text-white rounded-[1.5rem] rounded-tr-none shadow-xl shadow-blue-100 border-b-4 border-[#1e40af]">
                  <p className="text-sm font-medium leading-relaxed tracking-tight">Absolutely! I've assigned this to our GST specialist, Sonal. She's already reconciling the GSTR-2B. We'll aim for completion by 4 PM.</p>
                  <p className="text-[8px] font-black text-blue-200 uppercase mt-3 tracking-widest">10:45 AM</p>
               </div>
            </div>
         </div>

         {/* Chat Input */}
         <div className="p-6 bg-white border-t border-slate-100">
            <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-[2rem] border border-slate-200 shadow-inner group focus-within:ring-2 focus-within:ring-[#2663eb]/20 transition-all">
               <button className="p-3 text-slate-400 hover:text-[#2663eb] transition-all rounded-full hover:bg-white">
                  <Paperclip size={20} />
               </button>
               <input type="text" placeholder="Type your strategic response..." className="flex-1 bg-transparent border-none outline-none py-2 px-2 text-sm font-medium text-slate-700 placeholder:text-slate-400" />
               <button className="p-3 text-slate-400 hover:text-orange-500 transition-all rounded-full hover:bg-white">
                  <Smile size={20} />
               </button>
               <button className="p-3 text-slate-400 hover:text-[#2663eb] transition-all rounded-full hover:bg-white">
                  <Mic size={20} />
               </button>
               <button className="p-4 bg-[#2663eb] text-white rounded-[1.5rem] shadow-lg shadow-blue-100 hover:scale-105 transition-transform border-b-4 border-[#1e40af]">
                  <Send size={18} />
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
"use client";

import React, { useState, useEffect } from 'react';
import { Phone, ChevronUp, Bot, X, MessageCircle, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { text: "Hi there! 👋 How can we help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    setChatMessages([...chatMessages, { text: inputValue, isBot: false }]);
    setInputValue("");
    
    // Simulate bot response
    setTimeout(() => {
      setChatMessages(prev => [...prev, { text: "Thanks for your message! One of our experts will reply shortly. For immediate assistance, feel free to use the WhatsApp option above.", isBot: true }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 items-end">
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[320px] bg-white rounded-[1rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
            style={{ height: "450px" }}
          >
            {/* Chat Header */}
            <div className="bg-[#2663eb] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <h3 className="font-semibold">Support Chat</h3>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* WhatsApp Integration Banner */}
            <a 
              href="https://wa.me/91XXXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366]/10 p-3 flex items-center gap-3 border-b border-[#25D366]/20 hover:bg-[#25D366]/20 transition-colors"
            >
              <div className="bg-[#25D366] text-white p-2 rounded-full">
                <MessageCircle size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Prefer WhatsApp?</p>
                <p className="text-xs text-gray-600">Chat with us directly</p>
              </div>
            </a>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`max-w-[80%] p-3 rounded-[1rem] text-sm ${msg.isBot ? "bg-white border border-gray-200 text-gray-800 self-start rounded-tl-sm" : "bg-[#2663eb] text-white self-end rounded-tr-sm"}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..." 
                className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-[1rem] text-sm focus:outline-none focus:ring-1 focus:ring-[#2663eb]"
              />
              <button 
                type="submit"
                className="p-2 bg-[#2663eb] text-white rounded-[1rem] hover:bg-[#1d4ed8] transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-4">
        <AnimatePresence>
          {/* Chatbot Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="p-4 bg-[#0F172A] text-white rounded-[1rem] shadow-2xl flex items-center justify-center hover:shadow-gray-500/20 transition-all"
            title="Chat with us"
          >
            {isChatOpen ? <X size={24} /> : <Bot size={24} />}
          </motion.button>

          {/* Call Button */}
          <motion.a
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="tel:+91XXXXXXXXXX" // Replace with actual number
            className="p-4 bg-[#2663eb] text-white rounded-[1rem] shadow-2xl flex items-center justify-center hover:shadow-blue-500/20 transition-all"
            title="Call Us"
          >
            <Phone size={24} />
          </motion.a>

          {/* Scroll to Top Button */}
          {isVisible && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-4 bg-white text-[#0F172A] rounded-[1rem] shadow-2xl border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-all"
              title="Scroll to Top"
            >
              <ChevronUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FloatingActions;

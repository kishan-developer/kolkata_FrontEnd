"use client";

import React, { useState } from 'react';
import { Calculator, Copy, RefreshCw, Download, Info, ArrowRight, CheckCircle2, X } from 'lucide-react';
import Section_Banner from '../../Components/Section_Banner';

export default function GSTCalculatorPage() {
  const [mode, setMode] = useState<'add' | 'remove'>('add');
  const [amount, setAmount] = useState<number>(1000);
  const [gstRate, setGstRate] = useState<number>(18);
  const [customRate, setCustomRate] = useState<number>(0);
  const [isCustomRate, setIsCustomRate] = useState<boolean>(false);
  const [showCopied, setShowCopied] = useState<boolean>(false);

  const effectiveRate = isCustomRate ? customRate : gstRate;

  // Calculate GST
  const gstAmount = mode === 'add' 
    ? (amount * effectiveRate) / 100 
    : (amount * effectiveRate) / (100 + effectiveRate);

  const totalAmount = mode === 'add' ? amount + gstAmount : amount;
  const netAmount = mode === 'add' ? amount : amount - gstAmount;

  // CGST/SGST/IGST breakdown
  const cgst = gstAmount / 2;
  const sgst = gstAmount / 2;
  const igst = gstAmount;

  const handleReset = () => {
    setAmount(1000);
    setGstRate(18);
    setCustomRate(0);
    setIsCustomRate(false);
    setMode('add');
  };

  const handleCopy = () => {
    const result = mode === 'add'
      ? `Original Amount: ₹${netAmount.toFixed(2)}\nGST (${effectiveRate}%): ₹${gstAmount.toFixed(2)}\nTotal Amount: ₹${totalAmount.toFixed(2)}\nCGST: ₹${cgst.toFixed(2)}\nSGST: ₹${sgst.toFixed(2)}`
      : `Total Amount: ₹${amount.toFixed(2)}\nGST (${effectiveRate}%): ₹${gstAmount.toFixed(2)}\nNet Amount: ₹${netAmount.toFixed(2)}\nCGST: ₹${cgst.toFixed(2)}\nSGST: ₹${sgst.toFixed(2)}`;
    
    navigator.clipboard.writeText(result);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  const handleDownload = () => {
    const result = mode === 'add'
      ? `GST Calculation Result (Add GST)\n\nOriginal Amount: ₹${netAmount.toFixed(2)}\nGST (${effectiveRate}%): ₹${gstAmount.toFixed(2)}\nTotal Amount: ₹${totalAmount.toFixed(2)}\n\nBreakdown:\nCGST: ₹${cgst.toFixed(2)}\nSGST: ₹${sgst.toFixed(2)}\nIGST: ₹${igst.toFixed(2)} (for interstate)`
      : `GST Calculation Result (Remove GST)\n\nTotal Amount: ₹${amount.toFixed(2)}\nGST (${effectiveRate}%): ₹${gstAmount.toFixed(2)}\nNet Amount: ₹${netAmount.toFixed(2)}\n\nBreakdown:\nCGST: ₹${cgst.toFixed(2)}\nSGST: ₹${sgst.toFixed(2)}\nIGST: ₹${igst.toFixed(2)} (for interstate)`;

    const blob = new Blob([result], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gst-calculation.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pt-20 pb-24 min-h-screen bg-[#F8FAFC]">
      <Section_Banner
        title="GST Calculator"
        paragraph="Quick calculation for GST-inclusive and GST-exclusive amounts with detailed breakdown."
      />

       {/* GSt calculation 12% remove  */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight tracking-tighter mb-4">
            GST Calculator
          </h1>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
            Calculate Goods and Service Tax for both inclusive and exclusive amounts with detailed CGST/SGST/IGST breakdown.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-2 rounded-[1rem] flex gap-2">
            <button
              onClick={() => setMode('add')}
              className={`px-8 py-4 rounded-[1rem] font-black text-sm uppercase transition-all ${mode === 'add' ? 'bg-[#0F172A] text-white shadow-lg' : 'text-slate-500 hover:text-[#0F172A]'}`}
            >
              Add GST (Exclusive → Inclusive)
            </button>
            <button
              onClick={() => setMode('remove')}
              className={`px-8 py-4 rounded-[1rem] font-black text-sm uppercase transition-all ${mode === 'remove' ? 'bg-[#0F172A] text-white shadow-lg' : 'text-slate-500 hover:text-[#0F172A]'}`}
            >
              Remove GST (Inclusive → Exclusive)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Input Section */}
          <div className="bg-white rounded-[1rem] shadow-xl shadow-slate-200 p-8 border border-slate-100">
            <div className="space-y-8">
              {/* Amount Input */}
              <div className="space-y-4">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  {mode === 'add' ? 'Enter Amount (Exclusive of GST)' : 'Enter Total Amount (Inclusive of GST)'}
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value) || 0)}
                  placeholder="Enter amount"
                  className="w-full bg-slate-50 border-2 border-slate-100 p-6 rounded-[1rem] focus:border-[#2663eb] focus:bg-white outline-none font-black text-2xl transition-all"
                />
              </div>

              {/* GST Rate Selection */}
              <div className="space-y-4">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">GST Rate (%)</label>
                
                {/* Preset Buttons */}
                <div className="flex flex-wrap gap-3">
                  {[0, 5, 18, 28].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => {
                        setGstRate(rate);
                        setIsCustomRate(false);
                      }}
                      className={`px-6 py-3 rounded-[1rem] font-black text-sm transition-all ${!isCustomRate && gstRate === rate ? 'bg-[#2663eb] text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    >
                      {rate}%
                    </button>
                  ))}
                </div>

                {/* Custom Rate */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsCustomRate(!isCustomRate)}
                    className={`px-4 py-2 rounded-[1rem] font-black text-xs uppercase transition-all ${isCustomRate ? 'bg-[#2663eb] text-white' : 'bg-slate-100 text-slate-600'}`}
                  >
                    Custom Rate
                  </button>
                  {isCustomRate && (
                    <input
                      type="number"
                      value={customRate}
                      onChange={(e) => setCustomRate(Number(e.target.value) || 0)}
                      placeholder="Enter custom %"
                      className="flex-1 bg-slate-50 border-2 border-slate-100 p-3 rounded-[1rem] focus:border-[#2663eb] outline-none font-bold transition-all"
                    />
                  )}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleReset}
                  className="flex-1 py-4 rounded-[1rem] border-2 border-slate-200 font-black text-sm uppercase text-slate-600 hover:border-[#2663eb] hover:text-[#2663eb] transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw size={16} /> Reset
                </button>
                <button
                  onClick={handleCopy}
                  className="flex-1 py-4 rounded-[1rem] bg-[#2663eb] text-white font-black text-sm uppercase hover:bg-[#1d4ed8] transition-all flex items-center justify-center gap-2 relative"
                >
                  <Copy size={16} /> {showCopied ? 'Copied!' : 'Copy Result'}
                </button>
              </div>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-[#0F172A] rounded-[1rem] shadow-xl p-8 text-white">
            <div className="space-y-8">
              <div className="flex items-center gap-3 pb-6 border-b border-white/10">
                <Calculator size={24} className="text-[#2663eb]" />
                <h2 className="text-xl font-black uppercase tracking-widest">Calculation Result</h2>
              </div>

              {mode === 'add' ? (
                <>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-slate-400 font-medium">Original Amount</span>
                    <span className="text-2xl font-black">₹{netAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-slate-400 font-medium">GST Amount ({effectiveRate}%)</span>
                    <span className="text-2xl font-black text-[#2663eb]">₹{gstAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-slate-400 font-medium">Final Amount (Including GST)</span>
                    <span className="text-4xl font-black text-white">₹{totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-slate-400 font-medium">Total Amount (Including GST)</span>
                    <span className="text-2xl font-black">₹{amount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-slate-400 font-medium">GST Amount Extracted ({effectiveRate}%)</span>
                    <span className="text-2xl font-black text-[#2663eb]">₹{gstAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-slate-400 font-medium">Net Amount (Without GST)</span>
                    <span className="text-4xl font-black text-white">₹{netAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                  </div>
                </>
              )}

              {/* CGST/SGST/IGST Breakdown */}
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Tax Breakdown</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 p-4 rounded-[1rem]">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">CGST</p>
                    <p className="text-lg font-black">₹{cgst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-[1rem]">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">SGST</p>
                    <p className="text-lg font-black">₹{sgst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-[1rem]">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">IGST</p>
                    <p className="text-lg font-black">₹{igst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleDownload}
                className="w-full py-4 rounded-[1rem] bg-[#2663eb] text-white font-black text-sm uppercase hover:bg-[#1d4ed8] transition-all flex items-center justify-center gap-2"
              >
                <Download size={16} /> Download as PDF
              </button>
            </div>
          </div>
        </div>

        {/* Additional Tools Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* GST Slab Information */}
          <div className="bg-white rounded-[1rem] shadow-xl p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <Info size={24} className="text-[#2663eb]" />
              <h2 className="text-xl font-black text-[#0F172A]">GST Slab Information</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-[1rem]">
                <span className="font-bold text-slate-700">0%</span>
                <span className="text-sm text-slate-500">Essential goods, food grains</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-[1rem]">
                <span className="font-bold text-slate-700">5%</span>
                <span className="text-sm text-slate-500">Household items, transport</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-[1rem]">
                <span className="font-bold text-slate-700">12%</span>
                <span className="text-sm text-slate-500">Processed foods, restaurants</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-[1rem]">
                <span className="font-bold text-slate-700">18%</span>
                <span className="text-sm text-slate-500">Most goods and services</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-[1rem]">
                <span className="font-bold text-slate-700">28%</span>
                <span className="text-sm text-slate-500">Luxury items, automobiles</span>
              </div>
            </div>
          </div>

          {/* Formula Information */}
          <div className="bg-white rounded-[1rem] shadow-xl p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <Calculator size={24} className="text-[#2663eb]" />
              <h2 className="text-xl font-black text-[#0F172A]">GST Formulas</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-black text-slate-700 mb-3">Add GST Formula</h3>
                <div className="bg-slate-50 p-4 rounded-[1rem] font-mono text-sm text-slate-600 mb-2">
                  GST Amount = (Amount × GST%) / 100
                </div>
                <div className="bg-slate-50 p-4 rounded-[1rem] font-mono text-sm text-slate-600">
                  Total = Amount + GST Amount
                </div>
              </div>
              <div>
                <h3 className="text-sm font-black text-slate-700 mb-3">Remove GST Formula</h3>
                <div className="bg-slate-50 p-4 rounded-[1rem] font-mono text-sm text-slate-600 mb-2">
                  GST Amount = (Total × GST%) / (100 + GST%)
                </div>
                <div className="bg-slate-50 p-4 rounded-[1rem] font-mono text-sm text-slate-600">
                  Net Amount = Total - GST Amount
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-500 leading-relaxed">
                  <strong>CGST/SGST:</strong> Half of GST amount for intrastate transactions.<br />
                  <strong>IGST:</strong> Full GST amount for interstate transactions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#0F172A] rounded-[1rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2663eb]/10 rounded-[1rem] blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Need Expert GST Advisory?</h2>
            <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto">
              Calculators are for estimation. For precise GST compliance, filing, and strategic planning, consult our expert CAs.
            </p>
            <a href="/consultation" className="inline-flex items-center gap-2 bg-[#2663eb] text-white px-8 py-4 rounded-[1rem] font-black hover:bg-[#1d4ed8] transition-all">
              Book Consultation <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

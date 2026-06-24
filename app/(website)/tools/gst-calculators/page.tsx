"use client";

import { useState } from "react";
import { Calculator, RefreshCw, Info } from "lucide-react";

export default function GSTCalculatorsPage() {
  const [calculator, setCalculator] = useState("gst");

  // GST Calculator State
  const [gstAmount, setGstAmount] = useState("");
  const [gstRate, setGstRate] = useState("18");
  const [gstType, setGstType] = useState<"exclusive" | "inclusive">("exclusive");
  const [gstResult, setGstResult] = useState<any>(null);

  const calculateGST = () => {
    const amount = parseFloat(gstAmount);
    const rate = parseFloat(gstRate);

    if (isNaN(amount) || isNaN(rate)) return;

    let baseAmount: number, gst: number, total: number;

    if (gstType === "exclusive") {
      baseAmount = amount;
      gst = (amount * rate) / 100;
      total = amount + gst;
    } else {
      total = amount;
      baseAmount = (amount * 100) / (100 + rate);
      gst = total - baseAmount;
    }

    setGstResult({
      baseAmount: baseAmount.toFixed(2),
      gst: gst.toFixed(2),
      total: total.toFixed(2),
      cgst: (gst / 2).toFixed(2),
      sgst: (gst / 2).toFixed(2),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0F172A] mb-4">GST Calculators</h1>
          <p className="text-xl text-[#64748B]">
            Calculate GST amounts, CGST, SGST, and more with our easy-to-use tools
          </p>
        </div>

        {/* Calculator Tabs */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex border-b border-[#E2E8F0]">
            <button
              onClick={() => setCalculator("gst")}
              className={`flex-1 px-6 py-4 font-semibold transition-all ${
                calculator === "gst"
                  ? "bg-[#2563EB] text-white"
                  : "bg-white text-[#64748B] hover:bg-gray-50"
              }`}
            >
              <Calculator size={20} className="inline mr-2" />
              GST Calculator
            </button>
          </div>

          <div className="p-8">
            {calculator === "gst" && (
              <div className="animate-in fade-in duration-300">
                <h2 className="text-2xl font-bold text-[#0F172A] mb-6">GST Calculator</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Input Section */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Amount (₹)
                      </label>
                      <input
                        type="number"
                        value={gstAmount}
                        onChange={(e) => setGstAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        GST Rate (%)
                      </label>
                      <select
                        value={gstRate}
                        onChange={(e) => setGstRate(e.target.value)}
                        className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                      >
                        <option value="5">5%</option>
                        <option value="12">12%</option>
                        <option value="18">18%</option>
                        <option value="28">28%</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        GST Type
                      </label>
                      <div className="flex gap-4">
                        <button
                          onClick={() => setGstType("exclusive")}
                          className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all ${
                            gstType === "exclusive"
                              ? "bg-[#2563EB] text-white"
                              : "bg-gray-100 text-[#64748B] hover:bg-gray-200"
                          }`}
                        >
                          Exclusive
                        </button>
                        <button
                          onClick={() => setGstType("inclusive")}
                          className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all ${
                            gstType === "inclusive"
                              ? "bg-[#2563EB] text-white"
                              : "bg-gray-100 text-[#64748B] hover:bg-gray-200"
                          }`}
                        >
                          Inclusive
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={calculateGST}
                      className="w-full px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <Calculator size={20} />
                      Calculate GST
                    </button>
                  </div>

                  {/* Result Section */}
                  <div>
                    {gstResult ? (
                      <div className="bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-2xl p-6 text-white animate-in fade-in slide-in-from-right-4 duration-500">
                        <h3 className="text-xl font-bold mb-6">Calculation Result</h3>
                        
                        <div className="space-y-4">
                          <div className="flex justify-between items-center pb-3 border-b border-white/20">
                            <span className="text-blue-100">Base Amount</span>
                            <span className="text-2xl font-bold">₹{gstResult.baseAmount}</span>
                          </div>
                          
                          <div className="flex justify-between items-center pb-3 border-b border-white/20">
                            <span className="text-blue-100">GST Amount</span>
                            <span className="text-2xl font-bold">₹{gstResult.gst}</span>
                          </div>

                          <div className="flex justify-between items-center pb-3 border-b border-white/20">
                            <span className="text-blue-100">CGST ({(parseFloat(gstRate) / 2).toFixed(0)}%)</span>
                            <span className="text-xl font-bold">₹{gstResult.cgst}</span>
                          </div>

                          <div className="flex justify-between items-center pb-3 border-b border-white/20">
                            <span className="text-blue-100">SGST ({(parseFloat(gstRate) / 2).toFixed(0)}%)</span>
                            <span className="text-xl font-bold">₹{gstResult.sgst}</span>
                          </div>

                          <div className="flex justify-between items-center pt-2">
                            <span className="text-lg font-semibold">Total Amount</span>
                            <span className="text-3xl font-bold">₹{gstResult.total}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => setGstResult(null)}
                          className="mt-6 w-full px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                        >
                          <RefreshCw size={16} />
                          Reset
                        </button>
                      </div>
                    ) : (
                      <div className="bg-gray-50 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center">
                        <Calculator size={48} className="text-[#64748B] mb-4" />
                        <p className="text-[#64748B]">Enter amount and click calculate to see the result</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Info Section */}
                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-start gap-3">
                    <Info className="text-[#2563EB] flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-semibold text-[#0F172A] mb-2">About GST Calculation</h4>
                      <div className="text-sm text-[#64748B] space-y-2">
                        <p><strong>Exclusive:</strong> GST is added to the base amount. Total = Base + GST</p>
                        <p><strong>Inclusive:</strong> GST is already included in the total amount. Base = Total / (1 + GST%)</p>
                        <p><strong>CGST & SGST:</strong> For intra-state transactions, GST is split equally between Central GST (CGST) and State GST (SGST).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

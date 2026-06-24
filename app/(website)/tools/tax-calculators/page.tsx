"use client";

import { useState } from "react";
import { Percent, RefreshCw, Info } from "lucide-react";

export default function TaxCalculatorsPage() {
  const [calculator, setCalculator] = useState("income");

  // Income Tax Calculator State
  const [annualIncome, setAnnualIncome] = useState("");
  const [ageGroup, setAgeGroup] = useState<"below60" | "60to80" | "above80">("below60");
  const [taxResult, setTaxResult] = useState<any>(null);

  const calculateIncomeTax = () => {
    const income = parseFloat(annualIncome);
    if (isNaN(income) || income < 0) return;

    // New Regime Tax Slabs FY 2024-25
    let tax = 0;
    let slabDetails: any[] = [];

    if (income <= 300000) {
      tax = 0;
    } else if (income <= 700000) {
      tax = (income - 300000) * 0.05;
      slabDetails = [{ slab: "3L - 7L", rate: "5%", amount: ((income - 300000) * 0.05).toFixed(2) }];
    } else if (income <= 1000000) {
      tax = 400000 * 0.05 + (income - 700000) * 0.10;
      slabDetails = [
        { slab: "3L - 7L", rate: "5%", amount: (400000 * 0.05).toFixed(2) },
        { slab: "7L - 10L", rate: "10%", amount: ((income - 700000) * 0.10).toFixed(2) },
      ];
    } else if (income <= 1200000) {
      tax = 400000 * 0.05 + 300000 * 0.10 + (income - 1000000) * 0.15;
      slabDetails = [
        { slab: "3L - 7L", rate: "5%", amount: (400000 * 0.05).toFixed(2) },
        { slab: "7L - 10L", rate: "10%", amount: (300000 * 0.10).toFixed(2) },
        { slab: "10L - 12L", rate: "15%", amount: ((income - 1000000) * 0.15).toFixed(2) },
      ];
    } else if (income <= 1500000) {
      tax = 400000 * 0.05 + 300000 * 0.10 + 200000 * 0.15 + (income - 1200000) * 0.20;
      slabDetails = [
        { slab: "3L - 7L", rate: "5%", amount: (400000 * 0.05).toFixed(2) },
        { slab: "7L - 10L", rate: "10%", amount: (300000 * 0.10).toFixed(2) },
        { slab: "10L - 12L", rate: "15%", amount: (200000 * 0.15).toFixed(2) },
        { slab: "12L - 15L", rate: "20%", amount: ((income - 1200000) * 0.20).toFixed(2) },
      ];
    } else {
      tax = 400000 * 0.05 + 300000 * 0.10 + 200000 * 0.15 + 300000 * 0.20 + (income - 1500000) * 0.30;
      slabDetails = [
        { slab: "3L - 7L", rate: "5%", amount: (400000 * 0.05).toFixed(2) },
        { slab: "7L - 10L", rate: "10%", amount: (300000 * 0.10).toFixed(2) },
        { slab: "10L - 12L", rate: "15%", amount: (200000 * 0.15).toFixed(2) },
        { slab: "12L - 15L", rate: "20%", amount: (300000 * 0.20).toFixed(2) },
        { slab: "Above 15L", rate: "30%", amount: ((income - 1500000) * 0.30).toFixed(2) },
      ];
    }

    const cess = tax * 0.04; // 4% Health and Education Cess
    const totalTax = tax + cess;
    const taxableIncome = income > 300000 ? income - 300000 : 0;

    setTaxResult({
      taxableIncome: taxableIncome.toFixed(2),
      tax: tax.toFixed(2),
      cess: cess.toFixed(2),
      totalTax: totalTax.toFixed(2),
      effectiveRate: ((totalTax / income) * 100).toFixed(2),
      slabDetails,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0F172A] mb-4">Tax Calculators</h1>
          <p className="text-xl text-[#64748B]">
            Calculate your income tax, TDS, and more with our comprehensive tax tools
          </p>
        </div>

        {/* Calculator Tabs */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex border-b border-[#E2E8F0]">
            <button
              onClick={() => setCalculator("income")}
              className={`flex-1 px-6 py-4 font-semibold transition-all ${
                calculator === "income"
                  ? "bg-[#2563EB] text-white"
                  : "bg-white text-[#64748B] hover:bg-gray-50"
              }`}
            >
              <Percent size={20} className="inline mr-2" />
              Income Tax Calculator
            </button>
          </div>

          <div className="p-8">
            {calculator === "income" && (
              <div className="animate-in fade-in duration-300">
                <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Income Tax Calculator (New Regime FY 2024-25)</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Input Section */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Annual Income (₹)
                      </label>
                      <input
                        type="number"
                        value={annualIncome}
                        onChange={(e) => setAnnualIncome(e.target.value)}
                        placeholder="Enter your annual income"
                        className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Age Group
                      </label>
                      <select
                        value={ageGroup}
                        onChange={(e) => setAgeGroup(e.target.value as any)}
                        className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                      >
                        <option value="below60">Below 60 Years</option>
                        <option value="60to80">60 to 80 Years</option>
                        <option value="above80">Above 80 Years</option>
                      </select>
                    </div>

                    <button
                      onClick={calculateIncomeTax}
                      className="w-full px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <Percent size={20} />
                      Calculate Tax
                    </button>
                  </div>

                  {/* Result Section */}
                  <div>
                    {taxResult ? (
                      <div className="bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-2xl p-6 text-white animate-in fade-in slide-in-from-right-4 duration-500">
                        <h3 className="text-xl font-bold mb-6">Tax Calculation Result</h3>
                        
                        <div className="space-y-4">
                          <div className="flex justify-between items-center pb-3 border-b border-white/20">
                            <span className="text-blue-100">Taxable Income</span>
                            <span className="text-2xl font-bold">₹{taxResult.taxableIncome}</span>
                          </div>
                          
                          <div className="flex justify-between items-center pb-3 border-b border-white/20">
                            <span className="text-blue-100">Tax Before Cess</span>
                            <span className="text-2xl font-bold">₹{taxResult.tax}</span>
                          </div>

                          <div className="flex justify-between items-center pb-3 border-b border-white/20">
                            <span className="text-blue-100">Cess (4%)</span>
                            <span className="text-xl font-bold">₹{taxResult.cess}</span>
                          </div>

                          <div className="flex justify-between items-center pt-2">
                            <span className="text-lg font-semibold">Total Tax</span>
                            <span className="text-3xl font-bold">₹{taxResult.totalTax}</span>
                          </div>

                          <div className="flex justify-between items-center pt-2">
                            <span className="text-blue-100">Effective Rate</span>
                            <span className="text-xl font-bold">{taxResult.effectiveRate}%</span>
                          </div>
                        </div>

                        {taxResult.slabDetails && taxResult.slabDetails.length > 0 && (
                          <div className="mt-6 pt-6 border-t border-white/20">
                            <h4 className="font-semibold mb-3">Tax Breakdown</h4>
                            {taxResult.slabDetails.map((slab: any, index: number) => (
                              <div key={index} className="flex justify-between items-center py-1 text-sm">
                                <span className="text-blue-100">{slab.slab} @ {slab.rate}</span>
                                <span>₹{slab.amount}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        <button
                          onClick={() => setTaxResult(null)}
                          className="mt-6 w-full px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                        >
                          <RefreshCw size={16} />
                          Reset
                        </button>
                      </div>
                    ) : (
                      <div className="bg-gray-50 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center">
                        <Percent size={48} className="text-[#64748B] mb-4" />
                        <p className="text-[#64748B]">Enter your annual income to calculate tax</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Info Section */}
                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-start gap-3">
                    <Info className="text-[#2563EB] flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-semibold text-[#0F172A] mb-2">About New Tax Regime FY 2024-25</h4>
                      <div className="text-sm text-[#64748B] space-y-2">
                        <p><strong>Basic Exemption Limit:</strong> ₹3 Lakhs (increased from ₹2.5 Lakhs)</p>
                        <p><strong>Standard Deduction:</strong> ₹75,000 for salaried employees (increased from ₹50,000)</p>
                        <p><strong>Family Pension Deduction:</strong> Increased to ₹25,000</p>
                        <p><strong>Cess:</strong> 4% Health and Education Cess on income tax</p>
                        <p>This calculator follows the new tax regime slabs. No deductions available under this regime.</p>
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

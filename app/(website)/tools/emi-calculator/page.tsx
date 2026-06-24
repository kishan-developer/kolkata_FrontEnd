"use client";

import { useState } from "react";
import { CreditCard, RefreshCw, Info, Percent } from "lucide-react";

export default function EMICalculatorPage() {
  const [calculator, setCalculator] = useState("emi");

  // EMI Calculator State
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [tenureType, setTenureType] = useState<"years" | "months">("years");
  const [emiResult, setEmiResult] = useState<any>(null);

  // Percentage Calculator State
  const [percentAmount, setPercentAmount] = useState("");
  const [percentRate, setPercentRate] = useState("");
  const [percentResult, setPercentResult] = useState<any>(null);


  const calculateEMI = () => {
    const P = parseFloat(principal);
    const R = parseFloat(interestRate) / 12 / 100; // Monthly interest rate
    const N = tenureType === "years" ? parseFloat(tenure) * 12 : parseFloat(tenure); // Total months

    if (isNaN(P) || isNaN(R) || isNaN(N) || P <= 0 || N <= 0) return;

    // EMI Formula: [P x R x (1+R)^N]/[(1+R)^N-1]
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalAmount = emi * N;
    const totalInterest = totalAmount - P;

    setEmiResult({
      emi: emi.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      principal: P.toFixed(2),
    });
  };

  const calculatePercentage = () => {
    const amount = parseFloat(percentAmount);
    const rate = parseFloat(percentRate);

    if (isNaN(amount) || isNaN(rate)) return;

    // Using the correct method: Amount × Rate ÷ 100
    const result = amount * rate / 100;

    
    setPercentResult({
      amount: amount.toFixed(2),
      rate: rate.toFixed(2),
      result: result.toFixed(2),
      formula: `${amount} × ${rate} ÷ 100 = ${result.toFixed(2)}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-[#0F172A] to-[#1e293b] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2663eb]/20 text-[#60a5fa] text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-6">
              <CreditCard size={16} />
              Financial Tools
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              EMI Calculator
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Calculate your Equated Monthly Installment (EMI) for loans with our easy-to-use tool. Plan your finances better.
            </p>
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-[#60a5fa]">Fast</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Calculation</div>
              </div>
              <div className="w-px h-12 bg-slate-700"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#60a5fa]">100%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Accurate</div>
              </div>
              <div className="w-px h-12 bg-slate-700"></div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#60a5fa]">Free</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">To Use</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex border-b border-[#E2E8F0]">
            <button
              onClick={() => setCalculator("emi")}
              className={`flex-1 px-6 py-4 font-semibold transition-all ${
                calculator === "emi"
                  ? "bg-[#2563EB] text-white"
                  : "bg-white text-[#64748B] hover:bg-gray-50"
              }`}
            >
              <CreditCard size={20} className="inline mr-2" />
              EMI Calculator
            </button>
            <button
              onClick={() => setCalculator("percentage")}
              className={`flex-1 px-6 py-4 font-semibold transition-all ${
                calculator === "percentage"
                  ? "bg-[#2563EB] text-white"
                  : "bg-white text-[#64748B] hover:bg-gray-50"
              }`}
            >
              <Percent size={20} className="inline mr-2" />
              Percentage Calculator
            </button>
          </div>

          <div className="p-8">
            {calculator === "emi" && (
              <div className="animate-in fade-in duration-300">
                <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Loan EMI Calculator</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Input Section */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Loan Amount (₹)
                      </label>
                      <input
                        type="number"
                        value={principal}
                        onChange={(e) => setPrincipal(e.target.value)}
                        placeholder="Enter loan amount"
                        className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Interest Rate (% per annum)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        placeholder="Enter interest rate"
                        className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Loan Tenure
                      </label>
                      <div className="flex gap-4">
                        <input
                          type="number"
                          value={tenure}
                          onChange={(e) => setTenure(e.target.value)}
                          placeholder="Enter tenure"
                          className="flex-1 px-4 py-3 border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                        />
                        <select
                          value={tenureType}
                          onChange={(e) => setTenureType(e.target.value as any)}
                          className="px-4 py-3 border border-[#E2E8F0] rounded-xl text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                        >
                          <option value="years">Years</option>
                          <option value="months">Months</option>
                        </select>
                      </div>
                    </div>

                    <button
                      onClick={calculateEMI}
                      className="w-full px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <CreditCard size={20} />
                      Calculate EMI
                    </button>
                  </div>

                  {/* Result Section */}
                  <div>
                    {emiResult ? (
                      <div className="bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-2xl p-6 text-white animate-in fade-in slide-in-from-right-4 duration-500">
                        <h3 className="text-xl font-bold mb-6">EMI Calculation Result</h3>
                        
                        <div className="text-center mb-6">
                          <p className="text-blue-100 mb-2">Monthly EMI</p>
                          <p className="text-5xl font-bold">₹{emiResult.emi}</p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-3 border-b border-white/20">
                            <span className="text-blue-100">Principal Amount</span>
                            <span className="text-xl font-bold">₹{emiResult.principal}</span>
                          </div>
                          
                          <div className="flex justify-between items-center pb-3 border-b border-white/20">
                            <span className="text-blue-100">Total Interest</span>
                            <span className="text-xl font-bold">₹{emiResult.totalInterest}</span>
                          </div>

                          <div className="flex justify-between items-center pt-2">
                            <span className="text-lg font-semibold">Total Amount</span>
                            <span className="text-2xl font-bold">₹{emiResult.totalAmount}</span>
                          </div>
                        </div>

                        {/* Simple Pie Chart Representation */}
                        <div className="mt-6 pt-6 border-t border-white/20">
                          <h4 className="font-semibold mb-3">Payment Breakdown</h4>
                          <div className="flex h-4 rounded-full overflow-hidden">
                            <div
                              className="bg-white/80"
                              style={{ width: `${(parseFloat(emiResult.principal) / parseFloat(emiResult.totalAmount)) * 100}%` }}
                            ></div>
                            <div
                              className="bg-blue-300"
                              style={{ width: `${(parseFloat(emiResult.totalInterest) / parseFloat(emiResult.totalAmount)) * 100}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-2 text-sm">
                            <span className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                              Principal: {((parseFloat(emiResult.principal) / parseFloat(emiResult.totalAmount)) * 100).toFixed(1)}%
                            </span>
                            <span className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                              Interest: {((parseFloat(emiResult.totalInterest) / parseFloat(emiResult.totalAmount)) * 100).toFixed(1)}%
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => setEmiResult(null)}
                          className="mt-6 w-full px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                        >
                          <RefreshCw size={16} />
                          Reset
                        </button>
                      </div>
                    ) : (
                      <div className="bg-gray-50 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center">
                        <CreditCard size={48} className="text-[#64748B] mb-4" />
                        <p className="text-[#64748B]">Enter loan details to calculate EMI</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Info Section */}
                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-start gap-3">
                    <Info className="text-[#2563EB] flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-semibold text-[#0F172A] mb-2">About EMI Calculation</h4>
                      <div className="text-sm text-[#64748B] space-y-2">
                        <p><strong>EMI Formula:</strong> EMI = [P x R x (1+R)^N]/[(1+R)^N-1]</p>
                        <p><strong>P:</strong> Principal loan amount</p>
                        <p><strong>R:</strong> Monthly interest rate (Annual rate / 12 / 100)</p>
                        <p><strong>N:</strong> Loan tenure in months</p>
                        <p>This calculator helps you plan your loan repayments by showing the monthly installment, total interest payable, and total amount to be repaid over the loan tenure.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {calculator === "percentage" && (
              <div className="animate-in fade-in duration-300">
                <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Percentage Calculator</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Input Section */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Amount (₹)
                      </label>
                      <input
                        type="number"
                        value={percentAmount}
                        onChange={(e) => setPercentAmount(e.target.value)}
                        placeholder="Enter amount (e.g., 90000)"
                        className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Percentage Rate (%)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={percentRate}
                        onChange={(e) => setPercentRate(e.target.value)}
                        placeholder="Enter percentage (e.g., 8)"
                        className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                      />
                    </div>

                    <button
                      onClick={calculatePercentage}
                      className="w-full px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <Percent size={20} />
                      Calculate Percentage
                    </button>
                  </div>

                  {/* Result Section */}
                  <div>
                    {percentResult ? (
                      <div className="bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-2xl p-6 text-white animate-in fade-in slide-in-from-right-4 duration-500">
                        <h3 className="text-xl font-bold mb-6">Calculation Result</h3>
                        
                        <div className="text-center mb-6">
                          <p className="text-blue-100 mb-2">{percentResult.rate}% of ₹{percentResult.amount}</p>
                          <p className="text-5xl font-bold">₹{percentResult.result}</p>
                        </div>

                        <div className="bg-white/10 rounded-xl p-4 mb-4">
                          <p className="text-sm text-blue-100 mb-2">Calculation Method:</p>
                          <p className="text-lg font-mono font-semibold">{percentResult.formula}</p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-3 border-b border-white/20">
                            <span className="text-blue-100">Amount</span>
                            <span className="text-xl font-bold">₹{percentResult.amount}</span>
                          </div>
                          
                          <div className="flex justify-between items-center pb-3 border-b border-white/20">
                            <span className="text-blue-100">Percentage</span>
                            <span className="text-xl font-bold">{percentResult.rate}%</span>
                          </div>

                          <div className="flex justify-between items-center pt-2">
                            <span className="text-lg font-semibold">Result</span>
                            <span className="text-2xl font-bold">₹{percentResult.result}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => setPercentResult(null)}
                          className="mt-6 w-full px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                        >
                          <RefreshCw size={16} />
                          Reset
                        </button>
                      </div>
                    ) : (
                      <div className="bg-gray-50 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center">
                        <Percent size={48} className="text-[#64748B] mb-4" />
                        <p className="text-[#64748B]">Enter amount and percentage to calculate</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Info Section */}
                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-start gap-3">
                    <Info className="text-[#2563EB] flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-semibold text-[#0F172A] mb-2">About Percentage Calculation</h4>
                      <div className="text-sm text-[#64748B] space-y-2">
                        <p><strong>Formula:</strong> Amount × Percentage ÷ 100 = Result</p>
                        <p><strong>Example:</strong> 8% of ₹90,000 = 90,000 × 8 ÷ 100 = ₹7,200</p>
                        <p>This calculator uses the standard percentage calculation method to find the percentage value of any amount.</p>
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
    </div>
  );
}

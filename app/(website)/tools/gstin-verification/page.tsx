"use client";

import { useState } from "react";
import { Search, CheckCircle, XCircle, AlertCircle, Copy } from "lucide-react";

export default function GSTINVerificationPage() {
  const [gstin, setGstin] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = async () => {
    if (!gstin || gstin.length !== 15) {
      setError("Please enter a valid 15-character GSTIN");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    // Simulate API call - Replace with actual API call
    setTimeout(() => {
      // Mock response
      setResult({
        status: "Active",
        gstin: gstin.toUpperCase(),
        legalName: "Example Private Limited",
        tradeName: "Example Company",
        constitution: "Private Limited Company",
        state: "Maharashtra",
        address: "123 Business Street, Mumbai, Maharashtra - 400001",
        registrationDate: "01-04-2017",
        statusOfTaxpayer: "Active",
        blockStatus: "Not Blocked",
        natureOfBusiness: ["Factory / Manufacturing", "Office / Sale Office"],
      });
      setLoading(false);
    }, 1500);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0F172A] mb-4">GSTIN Verification Tool</h1>
          <p className="text-xl text-[#64748B]">
            Verify GST identification numbers instantly and get detailed taxpayer information
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                Enter GSTIN
              </label>
              <input
                type="text"
                value={gstin}
                onChange={(e) => setGstin(e.target.value.toUpperCase())}
                placeholder="Enter 15-digit GSTIN (e.g., 27ABCDE1234F1Z5)"
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                maxLength={15}
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={handleVerify}
                disabled={loading}
                className="w-full md:w-auto px-8 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Verifying...
                  </>
                ) : (
                  <>
                    <Search size={20} />
                    Verify GSTIN
                  </>
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
              <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-red-600">{error}</p>
            </div>
          )}
        </div>

        {/* Results */}
        {result && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-500">
            {/* Status Banner */}
            <div className={`p-6 flex items-center gap-4 ${
              result.status === "Active" ? "bg-emerald-50" : "bg-red-50"
            }`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                result.status === "Active" ? "bg-emerald-500" : "bg-red-500"
              }`}>
                {result.status === "Active" ? (
                  <CheckCircle className="text-white" size={24} />
                ) : (
                  <XCircle className="text-white" size={24} />
                )}
              </div>
              <div>
                <p className={`text-lg font-bold ${
                  result.status === "Active" ? "text-emerald-700" : "text-red-700"
                }`}>
                  {result.status}
                </p>
                <p className="text-sm text-[#64748B]">GSTIN Status</p>
              </div>
            </div>

            {/* Details */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Taxpayer Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#64748B] mb-1">GSTIN</label>
                    <div className="flex items-center gap-2">
                      <p className="text-[#0F172A] font-medium">{result.gstin}</p>
                      <button onClick={() => copyToClipboard(result.gstin)} className="text-[#2563EB] hover:text-[#1D4ED8]">
                        <Copy size={16} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#64748B] mb-1">Legal Name</label>
                    <p className="text-[#0F172A] font-medium">{result.legalName}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#64748B] mb-1">Trade Name</label>
                    <p className="text-[#0F172A] font-medium">{result.tradeName}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#64748B] mb-1">Constitution</label>
                    <p className="text-[#0F172A] font-medium">{result.constitution}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#64748B] mb-1">State</label>
                    <p className="text-[#0F172A] font-medium">{result.state}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#64748B] mb-1">Registration Date</label>
                    <p className="text-[#0F172A] font-medium">{result.registrationDate}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#64748B] mb-1">Status of Taxpayer</label>
                    <p className="text-[#0F172A] font-medium">{result.statusOfTaxpayer}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#64748B] mb-1">Block Status</label>
                    <p className="text-[#0F172A] font-medium">{result.blockStatus}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                <label className="block text-sm font-semibold text-[#64748B] mb-2">Address</label>
                <p className="text-[#0F172A] font-medium">{result.address}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                <label className="block text-sm font-semibold text-[#64748B] mb-2">Nature of Business</label>
                <div className="flex flex-wrap gap-2">
                  {result.natureOfBusiness.map((business: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">
                      {business}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-xl font-bold text-[#0F172A] mb-4">About GSTIN Verification</h3>
          <div className="space-y-4 text-[#64748B]">
            <p>
              GSTIN (Goods and Services Tax Identification Number) is a unique 15-digit alphanumeric code assigned to every registered taxpayer under GST.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold text-[#0F172A]">GSTIN Format:</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>First 2 digits: State code</li>
                <li>Next 10 digits: PAN number</li>
                <li>13th digit: Entity code</li>
                <li>14th digit: Blank (Z by default)</li>
                <li>15th digit: Check digit</li>
              </ul>
            </div>
            <p>
              This tool helps you verify the authenticity of a GSTIN and get detailed information about the registered taxpayer including their legal name, address, registration status, and business activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

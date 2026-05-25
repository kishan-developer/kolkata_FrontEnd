import { Receipt, AlertTriangle, CheckCircle2, Download, TrendingUp } from "lucide-react";

function Page() {
  const mismatches = [
    {
      vendor: "ABC Suppliers",
      invoice: "INV-001",
      gstr2a: "₹50,000",
      gstr3b: "₹52,220",
      difference: "₹2,220",
      risk: "high"
    },
    {
      vendor: "XYZ Traders",
      invoice: "INV-002",
      gstr2a: "₹30,000",
      gstr3b: "₹30,000",
      difference: "₹0",
      risk: "low"
    },
    {
      vendor: "PQR Enterprises",
      invoice: "INV-003",
      gstr2a: "₹45,000",
      gstr3b: "₹46,500",
      difference: "₹1,500",
      risk: "medium"
    },
  ];

  return (
    <div className="space-y-6 mt-20">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">GST Invoice Reconciliation</h1>
        <p className="text-gray-600">Automated ITC matching and vendor risk analysis</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: "Total ITC Claimed", value: "₹12.5L", icon: Receipt, color: "text-[#2663eb]" },
          { label: "ITC Available (2A)", value: "₹12.2L", icon: CheckCircle2, color: "text-[#2663eb]" },
          { label: "Mismatches", value: "₹0.3L", icon: AlertTriangle, color: "text-orange-600" },
          { label: "Match Rate", value: "97.6%", icon: TrendingUp, color: "text-purple-600" },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-[1rem] p-6">
              <div className="flex items-center gap-3 mb-2">
                <Icon className={`w-5 h-5 ${stat.color}`} />
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-white border border-gray-200 rounded-[1rem] p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">ITC Mismatch Detection</h2>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#2663eb] text-white rounded-[1rem] hover:bg-[#1d4ed8]">
            <Download className="w-5 h-5" />
            Export Report
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vendor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">GSTR-2A</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">GSTR-3B</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Difference</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Risk Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {mismatches.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.vendor}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.invoice}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.gstr2a}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.gstr3b}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-orange-600">{item.difference}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs rounded-[1rem] ${item.risk === "high" ? "bg-red-100 text-red-700" :
                      item.risk === "medium" ? "bg-orange-100 text-orange-700" :
                        "bg-green-100 text-green-700"
                      }`}>{item.risk.toUpperCase()}</span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-[#2663eb] hover:text-[#1d4ed8] text-sm font-medium">Investigate</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-[1rem] p-6">
        <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <div className="w-6 h-6 bg-[#2663eb] text-white rounded flex items-center justify-center text-xs font-bold">AI</div>
          AI Recommendation
        </h3>
        <p className="text-gray-700">
          Based on reconciliation analysis, we recommend verifying ABC Suppliers' invoice INV-001.
          The ₹2,220 difference may be due to missing vendor filing or incorrect ITC claim.
        </p>
      </div>
    </div>
  );
}

export default Page;
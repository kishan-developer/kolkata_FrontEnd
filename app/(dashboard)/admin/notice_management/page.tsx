import { AlertTriangle, Search, Filter, Eye, User2, Send } from "lucide-react";

function Page() {
  const notices = [
    { id: 1, user: "Rajesh Kumar", type: "GST Notice", description: "ITC mismatch", severity: "high", status: "pending", assignedTo: "CA Sneha", dueDate: "Mar 15, 2026" },
    { id: 2, user: "Priya Sharma", type: "Income Tax", description: "Section 143(1)", severity: "medium", status: "responded", assignedTo: "CA Ramesh", dueDate: "Mar 10, 2026" },
    { id: 3, user: "Amit Patel", type: "ROC Notice", description: "Delayed filing", severity: "low", status: "resolved", assignedTo: "CA Vikram", dueDate: "Feb 20, 2026" },
  ];

  return (
    <div className="space-y-6 mt-20">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Notices Management</h1>
        <p className="text-gray-600">Track and manage all user notices</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: "Total Notices", value: "47", color: "text-gray-900" },
          { label: "Pending", value: "18", color: "text-orange-600" },
          { label: "In Progress", value: "15", color: "text-[#2663eb]" },
          { label: "Resolved", value: "14", color: "text-[#2663eb]" },
        ].map((stat, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-[1rem] p-6">
            <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search notices..." className="text-gray-600 w-full pl-10 pr-4 py-3 border border-gray-300 rounded-[1rem] focus:ring-2 focus:ring-[#2663eb]" />
        </div>
        <button className="flex text-gray-600 items-center gap-2 px-6 py-3 border border-gray-300 rounded-[1rem] hover:bg-gray-50">
          <Filter className="w-5 h-5" />
          Filters
        </button>
      </div>

      <div className="space-y-4">
        {notices.map((notice) => (
          <div key={notice.id} className="bg-white border border-gray-200 rounded-[1rem] p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className={`w-12 h-12 rounded-[1rem] flex items-center justify-center ${notice.severity === "high" ? "bg-red-100" :
                  notice.severity === "medium" ? "bg-orange-100" : "bg-yellow-100"
                  }`}>
                  <AlertTriangle className={`w-6 h-6 ${notice.severity === "high" ? "text-red-600" :
                    notice.severity === "medium" ? "text-orange-600" : "text-yellow-600"
                    }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-gray-900">{notice.type}</h3>
                    <span className={`px-2 py-1 text-xs rounded-[1rem] ${notice.severity === "high" ? "bg-red-100 text-red-700" :
                      notice.severity === "medium" ? "bg-orange-100 text-orange-700" :
                        "bg-yellow-100 text-yellow-700"
                      }`}>{notice.severity.toUpperCase()}</span>
                  </div>
                  <p className="text-gray-700 mb-2">{notice.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>User: {notice.user}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><User2 className="w-4 h-4" />{notice.assignedTo}</span>
                    <span>•</span>
                    <span>Due: {notice.dueDate}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 text-sm rounded-[1rem] ${notice.status === "resolved" ? "bg-green-100 text-green-700" :
                  notice.status === "responded" ? "bg-blue-100 text-[#1d4ed8]" :
                    "bg-orange-100 text-orange-700"
                  }`}>{notice.status}</span>
                <button className="p-2 hover:bg-gray-100 rounded-[1rem]"><Eye className="w-4 h-4" /></button>
                <button className="px-4 py-2 bg-[#2663eb] text-white rounded-[1rem] hover:bg-[#1d4ed8] flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Draft Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



export default Page;
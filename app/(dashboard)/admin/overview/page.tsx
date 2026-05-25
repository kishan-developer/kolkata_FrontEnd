import { Users, FileText, Upload, AlertTriangle, TrendingUp, DollarSign, CheckCircle2, Clock } from "lucide-react";

function Page() {
  const stats = [
    { label: "Total Users", value: "10,247", change: "+12%", icon: Users, color: "bg-blue-100 text-[#2663eb]" },
    { label: "Active Filings", value: "1,543", change: "+8%", icon: FileText, color: "bg-green-100 text-[#2663eb]" },
    { label: "Documents Today", value: "892", change: "+15%", icon: Upload, color: "bg-purple-100 text-purple-600" },
    { label: "Pending Notices", value: "47", change: "-5%", icon: AlertTriangle, color: "bg-orange-100 text-orange-600" },
    { label: "Revenue (MTD)", value: "₹24.5L", change: "+18%", icon: DollarSign, color: "bg-emerald-100 text-emerald-600" },
    { label: "AI Accuracy", value: "99.2%", change: "+0.3%", icon: TrendingUp, color: "bg-indigo-100 text-indigo-600" },
  ];

  const recentActivity = [
    { user: "Rajesh Kumar", action: "Uploaded Form 16", time: "2 mins ago", status: "completed" },
    { user: "Priya Sharma", action: "Filed GSTR-3B", time: "5 mins ago", status: "completed" },
    { user: "Amit Patel", action: "Submitted ITR-2", time: "12 mins ago", status: "pending-review" },
    { user: "Sneha Reddy", action: "Response to GST notice", time: "18 mins ago", status: "in-progress" },
  ];

  const filingQueue = [
    { type: "ITR-1", user: "Vikram M", priority: "high", assignedTo: "CA Ramesh", status: "in-review" },
    { type: "GSTR-3B", user: "Ananya S", priority: "medium", assignedTo: "CA Sneha", status: "processing" },
    { type: "ROC MGT-7", user: "ABC Corp", priority: "low", assignedTo: "CA Vikram", status: "queued" },
  ];

  return (
    <div className="space-y-6 mt-20">
      {/* <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Platform overview and key metrics</p>
      </div> */}

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-[1rem] p-6">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 ${stat.color} rounded-[1rem] flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-sm font-medium ${
                  stat.change.startsWith("+") ? "text-[#2663eb]" : "text-red-600"
                }`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white border border-gray-200 rounded-[1rem] p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0">
                <div>
                  <p className="font-medium text-gray-900">{activity.user}</p>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{activity.time}</p>
                  <span className={`text-xs px-2 py-1 rounded-[1rem] ${
                    activity.status === "completed" ? "bg-green-100 text-green-700" :
                    activity.status === "in-progress" ? "bg-blue-100 text-[#1d4ed8]" :
                    "bg-orange-100 text-orange-700"
                  }`}>
                    {activity.status.replace("-", " ")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filing Queue */}
        <div className="bg-white border border-gray-200 rounded-[1rem] p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Filing Queue</h2>
          <div className="space-y-4">
            {filingQueue.map((filing, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-[1rem]">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{filing.type}</h3>
                      <span className={`text-xs px-2 py-1 rounded-[1rem] ${
                        filing.priority === "high" ? "bg-red-100 text-red-700" :
                        filing.priority === "medium" ? "bg-yellow-100 text-yellow-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {filing.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{filing.user}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-[1rem] ${
                    filing.status === "in-review" ? "bg-blue-100 text-[#1d4ed8]" :
                    filing.status === "processing" ? "bg-purple-100 text-purple-700" :
                    "bg-gray-100 text-gray-700"
                  }`}>
                    {filing.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">Assigned to: {filing.assignedTo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-[1rem] p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Revenue Trend</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-[1rem]">
            <p className="text-gray-500">Chart: Monthly revenue trend</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-[1rem] p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Filing Distribution</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-[1rem]">
            <p className="text-gray-500">Chart: ITR vs GST vs ROC filings</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Page;
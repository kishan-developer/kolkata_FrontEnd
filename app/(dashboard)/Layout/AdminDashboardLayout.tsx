import { Outlet, Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  Users,
  FileText,
  FolderOpen,
  AlertTriangle,
  UsersRound,
  CreditCard,
  Settings,
  Receipt,
  Workflow,
  BarChart3,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { useState } from "react";

export function AdminDashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { 
      name: "Overview", 
      path: "/admin", 
      icon: LayoutDashboard 
    },
    { 
      name: "Users", 
      path: "/admin/users", 
      icon: Users 
    },
    { 
      name: "Filings", 
      path: "/admin/filings", 
      icon: FileText 
    },
    { 
      name: "Documents", 
      path: "/admin/documents", 
      icon: FolderOpen 
    },
    { 
      name: "Notices", 
      path: "/admin/notices", 
      icon: AlertTriangle 
    },
    { 
      name: "Team / CAs", 
      path: "/admin/team", 
      icon: UsersRound 
    },
    { 
      name: "Payments", 
      path: "/admin/payments", 
      icon: CreditCard 
    },
    { 
      name: "GST Reconciliation", 
      path: "/admin/gst-reconciliation", 
      icon: Receipt 
    },
    { 
      name: "Workflow", 
      path: "/admin/workflow", 
      icon: Workflow 
    },
    { 
      name: "Analytics", 
      path: "/admin/analytics", 
      icon: BarChart3 
    },
    { 
      name: "Settings", 
      path: "/admin/settings", 
      icon: Settings 
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <header className="bg-gray-900 text-white sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                className="lg:hidden p-2 -ml-2 text-white"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <div className="flex items-center space-x-2 ml-2 lg:ml-0">
                <div className="w-8 h-8 bg-[#2663eb] rounded-[1rem] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div className="hidden sm:block">
                  <span className="font-bold text-lg">Admin Portal</span>
                  <p className="text-xs text-gray-400">TaxCompliance AI</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-400">Super Admin</p>
              </div>
              <Link to="/" className="flex items-center space-x-2 text-sm hover:text-gray-300">
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:sticky top-16 left-0 z-30 w-64 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-transform duration-200 ease-in-out overflow-y-auto`}
        >
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-[1rem] text-sm transition-colors ${
                    active
                      ? "bg-blue-50 text-[#2663eb] font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className={`w-5 h-5 ${active ? "text-[#2663eb]" : "text-gray-500"}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full">
          <Outlet />
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20 top-16"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

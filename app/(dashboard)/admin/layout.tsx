import AdminSidebars from "../Layout/AdminSidebars";
import DashboardHeader from "../Layout/DashboardHeader";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50/50">
      {/* Sidebar */}
      <aside className="hidden md:block fixed top-0 left-0 h-screen w-80 bg-white z-40">
        <AdminSidebars />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-80">

        {/* Header */}
        <DashboardHeader title="Enterprise Command Center" />

        {/* Page Content */}
        <main className="p-8 pt-24 bg-slate-50/30 min-h-screen">
          <div className="max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>
      </div>

    </div>
  );
}

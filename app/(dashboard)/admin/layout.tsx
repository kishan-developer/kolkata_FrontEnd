import AdminSidebars from "../Layout/AdminSidebars";
import DashboardHeader from "../Layout/DashboardHeader";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} font-inter flex min-h-screen bg-[#F8FAFC]`}>
      {/* Sidebar */}
      <aside className="hidden md:block fixed top-0 left-0 h-screen w-[280px] bg-white z-40 border-r border-[#E2E8F0]">
        <AdminSidebars />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-[280px]">

        {/* Header */}
        <DashboardHeader title="Enterprise Command Center" />

        {/* Page Content */}
        <main className="p-6 pt-[88px] bg-[#F8FAFC] min-h-screen">
          <div className="max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>
      </div>

    </div>
  );
}

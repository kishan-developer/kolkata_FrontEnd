import type { Metadata } from "next";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FloatingActions from "./Components/FloatingActions";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "VyaparSewa | Your Legal & Tax Partner",
  description: "One-stop solution for GST, Income Tax, Company Registration, and Trademark services in India.",
};

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-right" />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}


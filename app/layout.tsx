import { Fira_Sans } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import ChatWidget from "./(website)/Components/Chatbot/ChatWidget";

const firaSans = Fira_Sans({
  variable: "--font-fira",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: 'VyaparSewa – GST, Income Tax, Company Registration & Trademark Services in India',
  description: 'VyaparSewa offers 100% online GST filing, income tax return, company registration, and trademark services — CA-verified, transparent pricing, dedicated support for every entrepreneur across India.',
  keywords: 'GST registration, GST return filing, ITR filing, company registration, trademark registration, CA services India, online tax filing, Pvt Ltd registration, LLP registration, TDS filing, tax planning, ROC compliance',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${firaSans.variable} font-fira antialiased`}
      >
        {children}
        {/* <ChatWidget /> */}
      </body>
    </html>
  );
}

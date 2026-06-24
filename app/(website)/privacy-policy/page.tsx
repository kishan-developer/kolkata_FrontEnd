import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - VyaparSewa',
  description: 'Privacy Policy for VyaparSewa - Your trusted partners in financial growth.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-4">Privacy Policy</h1>
          <p className="text-slate-500 text-lg">Last Updated: June 2024</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Introduction</h2>
              <p className="text-slate-600 leading-relaxed">
                VyaparSewa ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website vyaparseva.com and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Information We Collect</h2>
              <p className="text-slate-600 leading-relaxed mb-4">We collect information you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Name and contact information (email, phone, address)</li>
                <li>Business information (company name, GSTIN, PAN)</li>
                <li>Financial information (for tax and compliance services)</li>
                <li>Documents and uploads (for registration and filing services)</li>
                <li>Communication records (emails, chat transcripts)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">How We Use Your Information</h2>
              <p className="text-slate-600 leading-relaxed mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Provide and improve our services</li>
                <li>Process registrations and filings with government authorities</li>
                <li>Communicate with you about our services</li>
                <li>Send you updates, newsletters, and promotional materials (with your consent)</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and protect our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Information Sharing</h2>
              <p className="text-slate-600 leading-relaxed mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Government authorities for registration and filing purposes</li>
                <li>Service providers who assist in delivering our services</li>
                <li>Legal advisors when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                We do not sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Data Security</h2>
              <p className="text-slate-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Your Rights</h2>
              <p className="text-slate-600 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Access and update your personal information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Cookies</h2>
              <p className="text-slate-600 leading-relaxed">
                We use cookies to improve your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Changes to This Policy</h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have questions about this Privacy Policy or your personal information, please contact us at:
              </p>
              <div className="mt-4 space-y-2 text-slate-600">
                <p>Email: info@vyaparsewa.com</p>
                <p>Phone: +91 98765 43210</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

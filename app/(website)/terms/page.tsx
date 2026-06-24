import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - VyaparSewa',
  description: 'Terms of Service for VyaparSewa - Your trusted partners in financial growth.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-4">Terms of Service</h1>
          <p className="text-slate-500 text-lg">Last Updated: June 2024</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Acceptance of Terms</h2>
              <p className="text-slate-600 leading-relaxed">
                By accessing and using VyaparSewa's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Services Description</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                VyaparSewa provides professional financial and legal services including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Business registration and incorporation</li>
                <li>GST registration and compliance</li>
                <li>Income tax filing and advisory</li>
                <li>Company compliance and MCA services</li>
                <li>Trademark and IP registration</li>
                <li>Financial consulting and advisory</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">User Responsibilities</h2>
              <p className="text-slate-600 leading-relaxed mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Provide accurate and complete information</li>
                <li>Submit all required documents in a timely manner</li>
                <li>Pay all applicable fees for services rendered</li>
                <li>Not use our services for illegal purposes</li>
                <li>Respect intellectual property rights</li>
                <li>Maintain confidentiality of your account credentials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Fees and Payment</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our services are provided on a fee basis. Payment terms include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>All fees are quoted in Indian Rupees (INR)</li>
                <li>Payment must be made before service initiation</li>
                <li>Government fees are separate from our professional fees</li>
                <li>Additional charges may apply for complex cases</li>
                <li>Refund policy applies as per our service agreement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Service Limitations</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                While we strive for excellence, please note:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Processing times depend on government authorities</li>
                <li>We cannot guarantee specific outcomes for regulatory approvals</li>
                <li>Services are subject to applicable laws and regulations</li>
                <li>Third-party service providers may have their own terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Intellectual Property</h2>
              <p className="text-slate-600 leading-relaxed">
                All content on our website, including text, graphics, logos, and software, is owned by VyaparSewa and protected by copyright laws. You may not reproduce, distribute, or create derivative works without our written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Confidentiality</h2>
              <p className="text-slate-600 leading-relaxed">
                We maintain strict confidentiality of your business and personal information. Your data is protected under our Privacy Policy and applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Termination</h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to terminate or suspend access to our services at any time, with or without cause, with or without notice. You may also terminate your use of our services at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed">
                VyaparSewa shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability is limited to the fees paid for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Governing Law</h2>
              <p className="text-slate-600 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in [Your City], India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Changes to Terms</h2>
              <p className="text-slate-600 leading-relaxed">
                We may modify these Terms of Service at any time. Continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                For questions about these Terms of Service, please contact us at:
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

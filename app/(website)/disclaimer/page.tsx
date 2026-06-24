import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer - VyaparSewa',
  description: 'Disclaimer for VyaparSewa - Your trusted partners in financial growth.',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-4">Disclaimer</h1>
          <p className="text-slate-500 text-lg">Last Updated: June 2024</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">General Disclaimer</h2>
              <p className="text-slate-600 leading-relaxed">
                The information provided on VyaparSewa's website (vyaparseva.com) is for general informational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Professional Services</h2>
              <p className="text-slate-600 leading-relaxed">
                VyaparSewa is a professional Chartered Accountancy firm providing financial, tax, and legal compliance services. The services we provide are based on current laws, regulations, and industry practices. However:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-4">
                <li>Tax laws and regulations are subject to change</li>
                <li>Government processing times may vary</li>
                <li>Final approval of registrations and filings depends on respective authorities</li>
                <li>We cannot guarantee specific outcomes for regulatory approvals</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Not Legal or Financial Advice</h2>
              <p className="text-slate-600 leading-relaxed">
                The content on this website is not intended as legal, financial, or tax advice. While our team consists of qualified professionals, specific situations require personalized consultation. You should consult with a qualified professional before making any decisions based on information found on this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Third-Party Links</h2>
              <p className="text-slate-600 leading-relaxed">
                Our website may contain links to third-party websites or resources. These links are provided for your convenience only. We have no control over the content, nature, or availability of those sites and do not endorse or take responsibility for their content or practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Government Portals</h2>
              <p className="text-slate-600 leading-relaxed">
                We provide links to various government portals (such as GST portal, Income Tax portal, MCA portal) for your convenience. We are not affiliated with, endorsed by, or connected to these government entities. Access to these portals is subject to their respective terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Accuracy of Information</h2>
              <p className="text-slate-600 leading-relaxed">
                We make every effort to ensure that the information on our website is accurate and current. However, we do not warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-4">
                <li>The information is error-free</li>
                <li>The website will be uninterrupted or secure</li>
                <li>Any defects will be corrected</li>
                <li>The website is free of viruses or harmful components</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">No Warranty</h2>
              <p className="text-slate-600 leading-relaxed">
                To the maximum extent permitted by applicable law, we disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed">
                In no event shall VyaparSewa, its directors, employees, or agents be liable for any direct, indirect, incidental, special, or consequential damages arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-4">
                <li>Use or inability to use our website or services</li>
                <li>Errors or omissions in content</li>
                <li>Delays or interruptions in service</li>
                <li>Loss of data or information</li>
                <li>Any other matter relating to the website or services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">User Responsibility</h2>
              <p className="text-slate-600 leading-relaxed">
                Users are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-4">
                <li>Verifying all information independently</li>
                <li>Providing accurate and complete information for services</li>
                <li>Keeping their account credentials secure</li>
                <li>Complying with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Professional Qualifications</h2>
              <p className="text-slate-600 leading-relaxed">
                Our team consists of qualified Chartered Accountants, Company Secretaries, and legal professionals. All services are provided in accordance with professional standards and applicable regulations. However, specific outcomes cannot be guaranteed as they depend on various factors including government processing and client cooperation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Changes to Disclaimer</h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting on this website. Your continued use of the website constitutes acceptance of the updated disclaimer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have questions about this disclaimer or our services, please contact us at:
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

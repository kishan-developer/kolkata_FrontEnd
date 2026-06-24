import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <img src="/rrr_logo-removebg-preview.png" alt="logo" className="w-50 h-20" />
          </Link>
          <p className="text-sm text-slate-500 leading-relaxed font-medium max-w-xs">
            A boutique Chartered Accountancy firm providing premium financial governance and legal oversight.
          </p>

        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-slate-900">Services</h4>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-500 font-medium">
            {['New Business', 'Registrations', 'Income Tax', 'GST Services', 'Auditing', 'MCA Services', 'Start Up','Loan','Other Services','Advisory' ].map((item) => (
              <li key={item}>
                <Link href="/services" className="hover:text-slate-900 transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-slate-900">Firm</h4>
          <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li>
                <Link href="/about_us" className="hover:text-slate-900 transition-colors">About</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-slate-900 transition-colors">Blog</Link>
              </li>

              <li>
                <Link href="https://services.gst.gov.in/services/searchtp" target='_blank' >GSTIN Verification Tool</Link>
              </li>

              <li>
                <Link href="/calculators/gst" target='_blank' className="hover:text-slate-900 transition-colors">GST Calculators</Link>
              </li>
              <li>
                <Link href="https://eportal.incometax.gov.in/iec/foservices/#/TaxCalc/calculator"  target='_blank'
                className="hover:text-slate-900 transition-colors">Tax Calculators</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
              </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-slate-900">Contact</h4>
          <ul className="space-y-4 text-sm text-slate-500 font-medium">

            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#2663eb] shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#2663eb] shrink-0" />
              <span>info@vyaparsewa.com</span>
            </li>

            <div className="flex space-x-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-400 gap-4">
        <a href="https://mediafleetblue.com" target="_blank" rel="noopener noreferrer">Made with ❤️ by Media FleetBlue</a>
        <div className="flex items-center space-x-6">
          <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms</Link>
          <Link href="/disclaimer" className="hover:text-slate-900 transition-colors">Disclaimer</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

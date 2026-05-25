"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";


interface NavLink {
  name: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Calculators', href: '/calculators' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },

  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

// --- Components ---

export default function Navbar2 (){
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={` w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* <span className="text-2xl font-bold text-[#2663eb] tracking-tight">Vyaparsewa</span> */}
            <img src="/logo.png" alt="logo" className="w-full h-10" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-[#2663eb] font-medium transition-colors">
                {link.name}
              </a>
            ))}
            <button 
              className="bg-[#2663eb] text-white px-6 py-2.5 rounded-[1rem] font-semibold hover:bg-[#1d4ed8] transition-all shadow-lg shadow-[#2663eb]/20"
            >
              Enquire Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <button className="w-full bg-[#2663eb] text-white px-6 py-3 rounded-[1rem] font-semibold">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

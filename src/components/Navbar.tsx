import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronRight, Calculator } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenEstimator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
     { id: 'gallery', label: 'Gallery' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 shadow-sm">
      {/* Top Header Contact Bar */}
      <div className="bg-[#0B2B40] border-b border-[#071927] text-xs py-2 px-4 sm:px-8 text-slate-200 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-semibold">{COMPANY_INFO.phones[0]}</span>
            </a>
            <a 
              href={`tel:${COMPANY_INFO.phones[1].replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors hidden lg:flex"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{COMPANY_INFO.phones[1]}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>dailycoolae@gmail.com | info@dailycool.ae</span>
              {/* <span>{COMPANY_INFO.email}</span> */}
            </a>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{COMPANY_INFO.location}</span>
            </div>
            <div className="h-3 w-px bg-slate-700" />
            <span className="text-cyan-300 font-extrabold tracking-wider text-[11px] uppercase">
              DEWA Approved MEP Contractor
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 px-4 sm:px-8 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5' 
            : 'bg-white border-b border-slate-200/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div onClick={() => handleNavClick('home')}>
            <Logo variant="color" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 rounded-xl ${
                    isActive
                      ? 'text-[#0B2B40] bg-cyan-50 border border-cyan-200 shadow-xs'
                      : 'text-slate-700 hover:text-[#0B2B40] hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-cyan-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* <button
              onClick={onOpenEstimator}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B2B40] bg-slate-100 border border-slate-200 rounded-xl hover:bg-cyan-50 hover:border-cyan-300 transition-all shadow-sm group"
            >
              <Calculator className="w-4 h-4 text-cyan-700 group-hover:rotate-12 transition-transform" />
              <span>MEP Estimator</span>
            </button> */}

            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0B2B40] hover:bg-[#071927] rounded-xl shadow-md transition-all"
            >
              <span>Get Quote</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenEstimator}
              className="p-2 text-cyan-800 bg-cyan-50 border border-cyan-200 rounded-lg"
              title="MEP Estimator"
            >
              <Calculator className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-[#0B2B40] bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 text-left font-bold text-sm rounded-xl transition-all ${
                    isActive
                      ? 'bg-cyan-50 text-[#0B2B40] border border-cyan-200'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-cyan-700' : 'text-slate-400'}`} />
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-200 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 font-bold text-xs uppercase tracking-wider text-[#0B2B40] bg-cyan-50 border border-cyan-200 rounded-xl"
              >
                <Calculator className="w-4 h-4 text-cyan-700" />
                <span>Calculate MEP Project Cost</span>
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 font-bold text-xs uppercase tracking-wider text-center text-white bg-[#0B2B40] hover:bg-[#071927] rounded-xl shadow"
              >
                Request Free Inspection
              </button>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-700" />
                <span className="font-semibold">{COMPANY_INFO.phones[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-700" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

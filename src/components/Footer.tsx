import React from 'react';
import { Phone, Mail, MapPin, Globe, ArrowUp, ChevronRight, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO, SERVICES_DATA } from '../data/content';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenEstimator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEstimator }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05121D] border-t border-slate-800 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              Daily Cool Electromechanical Works LLC is a registered engineering firm in Dubai, UAE, specializing in turnkey Mechanical, Electrical, Plumbing (MEP), and interior maintenance solutions across residential, commercial, and industrial sectors.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-cyan-300 bg-cyan-950 border border-cyan-500/30">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                Dubai Registered LLC
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Company' },
                { id: 'services', label: 'MEP Services' },
                { id: 'faq', label: 'Frequently Asked Questions' },
                { id: 'contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      scrollToTop();
                    }}
                    className="flex items-center gap-2 hover:text-cyan-400 transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
              <li>
                {/* <button
                  onClick={onOpenEstimator}
                  className="flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors group pt-1"
                >
                  <ChevronRight className="w-3 h-3 text-cyan-400 group-hover:translate-x-1 transition-all" />
                  <span>MEP Cost Calculator</span>
                </button> */}
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Key Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              {SERVICES_DATA.slice(0, 6).map((srv) => (
                <li key={srv.id} className="truncate">
                  <button
                    onClick={() => {
                      onNavigate('services');
                      scrollToTop();
                    }}
                    className="hover:text-cyan-300 transition-colors text-left"
                  >
                    • {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Dubai HQ */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Dubai Headquarters
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`} className="hover:text-cyan-400 transition-colors">
                  {COMPANY_INFO.phones[0]}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phones[1].replace(/\s+/g, '')}`} className="hover:text-cyan-400 transition-colors">
                  {COMPANY_INFO.phones[1]}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-cyan-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-cyan-300">{COMPANY_INFO.website}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Dubai - United Arab Emirates</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

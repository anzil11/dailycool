import React, { useState } from 'react';
import { MessageSquare, Phone, X, ShieldAlert } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface QuickContactWidgetProps {
  onOpenEstimator: () => void;
  onNavigateContact: () => void;
}

export const QuickContactWidget: React.FC<QuickContactWidgetProps> = ({
  onOpenEstimator,
  onNavigateContact
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const phoneRaw = COMPANY_INFO.phones[0].replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(
    'Hello Daily Cool Electromechanical Team, I would like to inquire about MEP / HVAC / Plumbing engineering services.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Quick Action Expanded Popup */}
      {isOpen && (
        <div className="w-80 rounded-2xl bg-[#0B2B40] border border-cyan-500/50 shadow-2xl p-5 text-slate-100 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-black uppercase text-cyan-300 tracking-wider">
                24/7 Dubai Support Desk
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            Direct response for commercial & villa MEP inspections, central AC repairs, or emergency callouts.
          </p>

          <div className="space-y-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Instant WhatsApp Chat</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl text-xs font-extrabold text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call Hotline: {COMPANY_INFO.phones[0]}</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenEstimator();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-extrabold text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 hover:bg-cyan-900 transition-all text-center"
            >
              Calculate Project Cost Range
            </button>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[10px] text-amber-400 font-bold">
            <ShieldAlert className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Emergency AC & Leak Hotline Active 24 Hours</span>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-600 to-blue-600 text-white shadow-2xl shadow-cyan-950 hover:scale-105 transition-all border border-cyan-300/40"
        title="Contact Engineering Team"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline-block text-xs font-black uppercase tracking-wider">
          Direct Connect
        </span>
      </button>
    </div>
  );
};

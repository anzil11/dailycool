import React from 'react';
import { X, CheckCircle2, Phone, Mail, ArrowRight, Shield } from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY_INFO } from '../data/content';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onQuoteRequest: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onQuoteRequest }) => {
  if (!service) return null;

  const [imgSrc, setImgSrc] = React.useState(service.image);

  React.useEffect(() => {
    if (service) {
      setImgSrc(service.image);
    }
  }, [service]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-2xl text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image Banner */}
        <div className="relative h-56 sm:h-64 w-full bg-slate-100">
          <img 
            src={imgSrc} 
            alt={service.title} 
            onError={() => setImgSrc('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80')}
            className="w-full h-full object-cover filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B40] via-[#0B2B40]/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-[#0B2B40] shadow transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on Banner */}
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-400 text-[#0B2B40] shadow-sm">
              {service.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-800">
              Service Overview
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
              {service.shortDesc}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-800 mb-3">
              Scope of Works & Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.bulletPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-700 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-normal">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee Badge */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-cyan-50 border border-cyan-200">
            <Shield className="w-8 h-8 text-cyan-800 flex-shrink-0" />
            <div className="text-xs sm:text-sm">
              <span className="font-bold text-[#0B2B40] block">Quality & Compliance Guaranteed</span>
              <span className="text-slate-700">All works performed under strict DEWA and Dubai Municipality engineering codes by certified technical teams.</span>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs text-slate-600 w-full sm:w-auto">
              <a 
                href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`} 
                className="flex items-center gap-1.5 hover:text-cyan-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-700" />
                <span>{COMPANY_INFO.phones[0]}</span>
              </a>
              <a 
                href={`mailto:${COMPANY_INFO.email}`} 
                className="flex items-center gap-1.5 hover:text-cyan-800 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-700" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:text-black bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onQuoteRequest(service.title);
                }}
                className="w-1/2 sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0B2B40] hover:bg-[#071927] shadow-md transition-all"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

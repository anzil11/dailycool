import React, { useState } from 'react';
import { X, Calculator, Check, Send, AlertCircle, Sparkles, Building, Home, Factory } from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/content';

interface MEPCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitInquiry: (details: any) => void;
}

export const MEPCalculator: React.FC<MEPCalculatorProps> = ({ isOpen, onClose, onSubmitInquiry }) => {
  const [sector, setSector] = useState<'Villa' | 'Commercial' | 'Industrial'>('Villa');
  const [selectedServices, setSelectedServices] = useState<string[]>(['air-conditioning-works', 'plumbing-works']);
  const [areaSqFt, setAreaSqFt] = useState<number>(2500);
  const [urgency, setUrgency] = useState<'Immediate' | 'Standard' | 'Planning'>('Standard');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Realistic AED benchmark calculator formula for UAE market
  const calculateEstimate = () => {
    let baseRatePerSqFt = sector === 'Villa' ? 18 : sector === 'Commercial' ? 22 : 15;
    let serviceMultiplier = selectedServices.length * 0.35 + 0.65;
    let urgencyFactor = urgency === 'Immediate' ? 1.15 : 1.0;

    let baseTotal = areaSqFt * baseRatePerSqFt * serviceMultiplier * urgencyFactor;
    let minEstimate = Math.round(baseTotal * 0.88 / 100) * 100;
    let maxEstimate = Math.round(baseTotal * 1.15 / 100) * 100;

    return { minEstimate, maxEstimate };
  };

  const { minEstimate, maxEstimate } = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onSubmitInquiry({
        sector,
        selectedServices: selectedServices.map(id => SERVICES_DATA.find(s => s.id === id)?.title),
        areaSqFt,
        urgency,
        estimateRange: `AED ${minEstimate.toLocaleString()} - AED ${maxEstimate.toLocaleString()}`,
        clientName,
        clientPhone
      });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-2xl text-slate-900 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-100 border border-cyan-300 text-cyan-800">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0B2B40] flex items-center gap-2">
                MEP Cost Estimator
                <Sparkles className="w-4 h-4 text-cyan-600" />
              </h2>
              <p className="text-xs text-slate-600">Instant budget range calculator for UAE projects</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 text-slate-500 hover:text-black border border-slate-200 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-cyan-100 text-cyan-800 border border-cyan-300 flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-[#0B2B40]">Estimation Inquiry Sent!</h3>
            <p className="text-sm text-slate-700 max-w-md mx-auto">
              Thank you, <strong className="text-cyan-800">{clientName || 'Valued Client'}</strong>. Our senior MEP engineer will contact you at <strong className="text-cyan-800">{clientPhone || 'your provided number'}</strong> within 2 hours to confirm details and arrange a free on-site inspection.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0B2B40] hover:bg-[#071927] rounded-xl shadow"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            {/* Step 1: Sector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-cyan-800 mb-2">
                1. Select Property / Sector Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'Villa', label: 'Residential Villa', icon: Home },
                  { id: 'Commercial', label: 'Commercial Office', icon: Building },
                  { id: 'Industrial', label: 'Industrial / Warehouse', icon: Factory },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = sector === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSector(item.id as any)}
                      className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border text-center transition-all ${
                        isSelected
                          ? 'bg-cyan-50 border-cyan-500 text-cyan-900 shadow-sm font-bold'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-1.5 ${isSelected ? 'text-cyan-700' : 'text-slate-400'}`} />
                      <span className="text-xs font-bold">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Services */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-cyan-800 mb-2">
                2. Choose Required Works (Select Multiple)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SERVICES_DATA.map((srv) => {
                  const isChecked = selectedServices.includes(srv.id);
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => toggleService(srv.id)}
                      className={`flex items-center gap-2 p-2.5 rounded-lg border text-left text-xs transition-all ${
                        isChecked
                          ? 'bg-cyan-50 border-cyan-500 text-[#0B2B40] font-bold'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded flex items-center justify-center border flex-shrink-0 ${
                        isChecked ? 'bg-[#0B2B40] border-[#0B2B40] text-white' : 'border-slate-300'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="truncate">{srv.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Square Footage Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-cyan-800">
                  3. Approximate Area Size
                </label>
                <span className="text-sm font-black text-[#0B2B40] bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                  {areaSqFt.toLocaleString()} sq. ft
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="25000"
                step="250"
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full accent-cyan-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>500 sq ft</span>
                <span>10,000 sq ft</span>
                <span>25,000+ sq ft</span>
              </div>
            </div>

            {/* Live Calculated Estimate Display Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#0B2B40] via-[#0F3F5D] to-[#165682] border border-cyan-400/30 shadow-md text-white flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-cyan-300 block">
                  Estimated Budget Range (UAE Market)
                </span>
                <div className="text-2xl sm:text-3xl font-black text-white mt-0.5">
                  AED {minEstimate.toLocaleString()} - {maxEstimate.toLocaleString()}
                </div>
                <span className="text-[10px] text-slate-200">Includes materials, installation & technical labor</span>
              </div>

              <div className="text-right text-[11px] text-cyan-100 hidden sm:block">
                <span>Subject to final technical site audit</span>
              </div>
            </div>

            {/* Step 4: Quick Contact Details */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-slate-700 font-semibold mb-1">Your Name / Company</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Salim Ahmed"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-cyan-600 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-700 font-semibold mb-1">Phone Number (UAE)</label>
                <input
                  type="tel"
                  required
                  placeholder="+971 50 123 4567"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-cyan-600 shadow-sm"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex items-center justify-between gap-4">
              <span className="text-[11px] text-slate-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-cyan-700" />
                Free site inspection included
              </span>

              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#0B2B40] hover:bg-[#071927] shadow-lg transition-all"
              >
                <span>Request Quotation</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

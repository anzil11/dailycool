import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  MessageSquare, ShieldCheck, Building, Sparkles 
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/content';

interface ContactPageProps {
  preselectedService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || 'Air Conditioning Works',
    propertyType: 'Residential Villa',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-900 text-xs font-extrabold uppercase tracking-widest">
            <Phone className="w-4 h-4 text-cyan-700" />
            Get In Touch
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#0B2B40]">
            Contact <span className="text-cyan-600">Daily Cool</span> Dubai
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Schedule a free site inspection or request a formal quotation for your electromechanical & maintenance needs.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
            className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-500 transition-all space-y-3 group shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-100 border border-cyan-300 flex items-center justify-center text-cyan-800 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Call Senior Engineer</div>
              <div className="text-sm font-black text-[#0B2B40] group-hover:text-cyan-700 transition-colors mt-0.5">
                {COMPANY_INFO.phones[0]}
              </div>
            </div>
          </a>

          <a
            href={`tel:${COMPANY_INFO.phones[1].replace(/\s+/g, '')}`}
            className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-500 transition-all space-y-3 group shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-100 border border-cyan-300 flex items-center justify-center text-cyan-800 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Secondary Line</div>
              <div className="text-sm font-black text-[#0B2B40] group-hover:text-cyan-700 transition-colors mt-0.5">
                {COMPANY_INFO.phones[1]}
              </div>
            </div>
          </a>

          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-500 transition-all space-y-3 group shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-100 border border-cyan-300 flex items-center justify-center text-cyan-800 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Official Email</div>
              <div className="text-sm font-black text-[#0B2B40] group-hover:text-cyan-700 transition-colors mt-0.5 truncate">
                {COMPANY_INFO.email}
              </div>
            </div>
          </a>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 border border-cyan-300 flex items-center justify-center text-cyan-800">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-bold">Headquarters</div>
              <div className="text-sm font-black text-[#0B2B40] mt-0.5">
                {COMPANY_INFO.location}
              </div>
            </div>
          </div>
        </div>

        {/* Main Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-[#0B2B40] flex items-center gap-2">
                Send an Inquiry
                <Sparkles className="w-4 h-4 text-cyan-600" />
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Fill in your details below. Our technical team responds within 2 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-cyan-100 text-cyan-800 border border-cyan-300 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#0B2B40]">Message Received!</h3>
                <p className="text-sm text-slate-700 max-w-md mx-auto">
                  Thank you <strong className="text-cyan-800">{formData.name}</strong>. We have received your inquiry for <strong className="text-cyan-800">{formData.service}</strong>. Our Dubai engineering representative will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold text-[#0B2B40] bg-white border border-slate-200 hover:bg-slate-100"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-700 font-semibold mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mansoor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-cyan-600 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-700 font-semibold mb-1">Phone Number (UAE)</label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-cyan-600 shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-700 font-semibold mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.ae"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-cyan-600 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-700 font-semibold mb-1">Property Type</label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-cyan-600 shadow-sm"
                    >
                      <option value="Residential Villa">Residential Villa</option>
                      <option value="Commercial Office / Tower">Commercial Office / Tower</option>
                      <option value="Industrial Warehouse">Industrial Warehouse</option>
                      <option value="Retail / Restaurant Space">Retail / Restaurant Space</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-700 font-semibold mb-1">Required MEP Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-cyan-600 shadow-sm"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.title}>{srv.title}</option>
                    ))}
                    <option value="General AMC Contract Inquiry">General AMC Contract Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-slate-700 font-semibold mb-1">Project Details / Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project scope, location in Dubai, and timeline requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-cyan-600 shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#0B2B40] hover:bg-[#071927] shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Submit Technical Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Location & Dubai HQ Map Overlay Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#0B2B40] flex items-center gap-2">
                <Building className="w-5 h-5 text-cyan-700" />
                <span>Dubai Office & Dispatch HQ</span>
              </h3>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B2B40] block">Address</strong>
                    <span>{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-cyan-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B2B40] block">Working Hours</strong>
                    <span>{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-cyan-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B2B40] block">24/7 Mobile Emergency Response</strong>
                    <span>Dedicated mobile vans covering Business Bay, Jumeirah, Al Quoz, Palm Jumeirah & All Dubai Districts.</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp / Emergency Call Action */}
              <div className="pt-2 border-t border-slate-200 flex flex-col gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
                  className="w-full py-3 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-white bg-[#0B2B40] hover:bg-[#071927] transition-colors shadow"
                >
                  Call Dispatch: {COMPANY_INFO.phones[0]}
                </a>

                <a
                  href={`https://wa.me/971556396003?text=Hello%20Daily%20Cool%20Electromechanical,%20I%20would%20like%20to%20inquire%20about%20MEP%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 transition-colors"
                >
                  Direct WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

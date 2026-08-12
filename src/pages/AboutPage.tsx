import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, Award, CheckCircle2, Users, MapPin, Phone, Mail, 
  ArrowRight, ShieldAlert, Heart, Scale
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenEstimator: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEstimator }) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
        
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-900 text-xs font-extrabold uppercase tracking-widest"
          >
            <ShieldCheck className="w-4 h-4 text-cyan-700" />
            Registered LLC Company in UAE
          </motion.div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#0B2B40]">
            Engineering Excellence in <span className="text-cyan-600">Mechanical, Electrical & Plumbing</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Delivering cost-effective, high-quality MEP solutions across Dubai's commercial, residential, and industrial landscape.
          </p>
        </div>

        {/* Main Brochure Narrative Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm"
        >
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2B40]">
              Who We Are
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              <p>
                <strong className="text-cyan-800">Daily Cool Electromechanical Works LLC</strong> is a registered company in UAE, dealing with mechanical, electrical and plumbing works in residential, commercial and industrial sectors.
              </p>

              <p>
                The Daily Cool team takes pride in the fact that we have never compromised on the quality and services provided to our customers.
              </p>

              <p>
                We are committed to provide our clients with cost effective services and assist them in meeting the project schedules with innovation & technical excellence resulting in a long term relationship based on trust, honesty and loyalty.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { label: 'Location', val: 'Dubai - UAE' },
                { label: 'Core Focus', val: 'MEP Systems' },
                { label: 'Quality Policy', val: 'Zero Compromise' },
                { label: 'Service', val: '24/7 AMC Support' },
                { label: 'Execution', val: 'On-Time Schedule' },
                { label: 'Values', val: 'Trust & Honesty' },
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">{item.label}</div>
                  <div className="text-xs font-black text-[#0B2B40] mt-0.5">{item.val}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                alt="HVAC & Plumbing Engineering Company"
                className="w-full h-[380px] object-cover filter brightness-95"
              />
            </div>
          </div>
        </motion.div>

        {/* Four Core Values Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B2B40]">
              Our Core Principles
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              The foundation of our engineering services in Dubai
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Technical Excellence',
                desc: 'Utilizing state-of-the-art tools, DEWA-compliant engineering practices, and advanced HVAC/Plumbing design methodology.',
                icon: Award,
                color: 'text-cyan-700'
              },
              {
                title: 'Uncompromised Quality',
                desc: 'We take pride in our strict policy: never compromising on safety, materials, or execution standards.',
                icon: ShieldAlert,
                color: 'text-amber-600'
              },
              {
                title: 'Schedule Commitment',
                desc: 'Rigorous project timeline controls ensuring commercial and residential handovers are met strictly on schedule.',
                icon: Scale,
                color: 'text-blue-700'
              },
              {
                title: 'Trust & Loyalty',
                desc: 'Building long-term client relationships based on honesty, transparent pricing, and dependable AMC support.',
                icon: Heart,
                color: 'text-rose-600'
              }
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-500 transition-all space-y-3 shadow-sm"
                >
                  <Icon className={`w-8 h-8 ${p.color}`} />
                  <h3 className="text-lg font-bold text-[#0B2B40]">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Quality & Safety Standards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B2B40]">
                Quality Assurance & UAE Compliance
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Adhering strictly to local authority guidelines and international electromechanical norms.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-xl text-xs font-bold text-cyan-900 bg-cyan-100 border border-cyan-300">
                DEWA Guidelines
              </span>
              <span className="px-4 py-2 rounded-xl text-xs font-bold text-cyan-900 bg-cyan-100 border border-cyan-300">
                Dubai Municipality Codes
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
            {[
              'Comprehensive site inspection and thermal testing before handover.',
              'Original, certified piping materials (PPR, PVC, Copper) sourced from approved manufacturers.',
              'Routine electrical load testing and DB panel balancing.',
              'Safety-first HSE protocols on every commercial and villa site.'
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B2B40] via-[#0F3F5D] to-[#165682] border border-cyan-500/30 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-extrabold text-white">Ready to Discuss Your MEP Project in Dubai?</h3>
            <p className="text-xs sm:text-sm text-slate-200">Our engineering consultants are available for free technical consultation and site visits.</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0B2B40] bg-cyan-400 hover:bg-cyan-300 shadow-lg"
            >
              Contact Us
            </button>
            {/* <button
              onClick={onOpenEstimator}
              className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 hover:bg-white/20"
            >
              Calculate Cost
            </button> */}
          </div>
        </motion.div>

      </div>
    </div>

    
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, Wrench, Zap, Droplets, CheckCircle, ArrowRight, 
  Award, Clock, Sparkles, Building2, Home as HomeIcon, Factory,
  Calculator, PhoneCall, Star, Phone, Mail
} from 'lucide-react';
import { HeroSlider } from '../components/HeroSlider';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectsSection } from '../components/ProjectsSection';
import { COMPANY_INFO, SERVICES_DATA, TESTIMONIALS } from '../data/content';
import { ServiceItem } from '../types';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onSelectService: (service: ServiceItem) => void;
  onOpenEstimator: () => void;
  onQuoteWithService: (serviceTitle: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectService,
  onOpenEstimator,
  onQuoteWithService
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Mechanical', 'Plumbing', 'Maintenance & Interiors'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* 1. Hero Image Slider with 4 Slides */}
      <HeroSlider 
        onNavigate={onNavigate} 
        onOpenEstimator={onOpenEstimator} 
      />

      {/* 2. About Us Snapshot Section */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="py-20 max-w-7xl mx-auto px-6 sm:px-12 bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Block */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-900 text-xs font-extrabold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-cyan-700" />
              Registered Company in UAE
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2B40] leading-tight">
              About <span className="text-cyan-600">Daily Cool</span> Electromechanical
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              <p className="p-4 rounded-xl bg-slate-50 border-l-4 border-cyan-500 shadow-sm">
                "{COMPANY_INFO.aboutText[0]}"
              </p>
              <p>
                "{COMPANY_INFO.aboutText[1]}"
              </p>
              <p>
                "{COMPANY_INFO.aboutText[2]}"
              </p>
            </div>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {[
                'Quality First',
                'Technical Excellence',
                'Schedule Commitment',
                'Cost Effective',
                'Trust & Honesty',
                '24/7 Availability'
              ].map((val) => (
                <div key={val} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>{val}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#0B2B40] hover:bg-[#071927] shadow-lg shadow-slate-900/10 transition-all group"
              >
                <span>Read Full Profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0B2B40] bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-cyan-700" />
                <span>Contact Engineering Team</span>
              </button>
            </div>
          </motion.div>

          {/* Right Image Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="MEP Engineering Technician"
                className="w-full h-[450px] object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B40]/80 via-transparent to-transparent opacity-90" />

              {/* Floating Stat Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 border border-slate-200 shadow-xl backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-black text-[#0B2B40]">DUBAI, UAE</div>
                    <div className="text-xs text-slate-600 font-semibold mt-0.5">
                      Commercial • Residential • Industrial
                    </div>
                  </div>
                  <Award className="w-10 h-10 text-cyan-600" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 4. Services Catalog Showcase (12 Services) */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-slate-50 border-y border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-900 text-xs font-extrabold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
                Electromechanical Solutions
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B2B40]">
                Our Specialized Services
              </h2>
              <p className="text-sm text-slate-600 max-w-xl">
                Design, supply, installation, testing & commissioning of complete MEP systems across Dubai and UAE.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeCategory === cat
                      ? 'bg-[#0B2B40] text-white shadow-md'
                      : 'text-slate-700 hover:text-[#0B2B40] hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => {
              const isLast = index === filteredServices.length - 1;
              const isOddTotalMd = filteredServices.length % 2 === 1;
              const isRemainderOneLg = filteredServices.length % 3 === 1;

              let gridClasses = '';
              if (isLast) {
                if (isRemainderOneLg) {
                  gridClasses += ' lg:col-start-2';
                }
                if (isOddTotalMd) {
                  gridClasses += ' md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none lg:mx-0';
                }
              }

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={gridClasses.trim() || undefined}
                >
                  <ServiceCard
                    service={service}
                    onSelect={onSelectService}
                    onQuickQuote={(s) => onQuoteWithService(s.title)}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* View All Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#0B2B40] hover:bg-[#071927] transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              <span>Explore All 12 MEP Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* 5. Interactive MEP Cost Estimator CTA Banner */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="py-16 max-w-7xl mx-auto px-6 sm:px-12 bg-white"
      >
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0B2B40] via-[#0F3F5D] to-[#165682] p-8 sm:p-12 border border-cyan-500/40 shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-extrabold uppercase tracking-widest border border-white/20">
                <Calculator className="w-4 h-4 text-cyan-300" />
                Instant UAE Project Cost Estimator
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white">
                Planning an AC, Ducting or Villa MEP Project?
              </h3>
              <p className="text-sm sm:text-base text-slate-200 font-medium max-w-2xl">
                Get an instant estimated budget range for your residential villa, commercial office, or industrial facility in Dubai within 60 seconds.
              </p>
            </div>

            {/* <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={onOpenEstimator}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-[#0B2B40] bg-cyan-400 hover:bg-cyan-300 shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3"
              >
                <Calculator className="w-5 h-5" />
                <span>Launch Estimator</span>
              </button>
            </div> */}
          </div>
        </div>
      </motion.section>

      {/* 6. Completed Projects Showcase */}
      <ProjectsSection onQuoteWithService={onQuoteWithService} />

      {/* 7. Why Choose Daily Cool */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-slate-50 border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-700">
              The Daily Cool Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2B40]">
              Why Dubai Clients Trust Us
            </h2>
            <p className="text-sm text-slate-600">
              We never compromise on quality, technical accuracy, or safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Quality Guarantee',
                desc: 'We take pride in maintaining uncompromised quality standards in every material and installation.',
                icon: ShieldCheck
              },
              {
                title: 'On-Time Schedule',
                desc: 'Assisting clients in meeting project milestones with disciplined execution & project management.',
                icon: Clock
              },
              {
                title: 'Cost-Effective',
                desc: 'Competitive pricing tailored for long-term trust, honesty, and loyalty with zero hidden costs.',
                icon: Award
              },
              {
                title: 'DEWA Compliant',
                desc: 'Fully certified engineers experienced in UAE authority standards and building codes.',
                icon: CheckCircle
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-500 transition-all space-y-3 shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B2B40]">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* 8. Client Sectors & Testimonials */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="py-20 max-w-7xl mx-auto px-6 sm:px-12 bg-white"
      >
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-700">
            Sectors We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B2B40]">
            Client Testimonials in UAE
          </h2>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { name: 'Residential Sectors', desc: 'Luxury Villas, Apartments, Private Estates & Residential Complexes.', icon: HomeIcon, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
            { name: 'Commercial Sectors', desc: 'Office Towers, Shopping Centers, Restaurants, Showrooms & Hotels.', icon: Building2, img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' },
            { name: 'Industrial Sectors', desc: 'Warehouses, Factories, Food Processing Units & Logistics Facilities.', icon: Factory, img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
          ].map((sec, idx) => (
            <motion.div 
              key={sec.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 h-64 shadow-md"
            >
              <img src={sec.img} alt={sec.name} className="w-full h-full object-cover filter brightness-[0.4] group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <sec.icon className="w-8 h-8 text-cyan-400 mb-2" />
                <h3 className="text-xl font-bold text-white">{sec.name}</h3>
                <p className="text-xs text-slate-300 mt-1">{sec.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                "{t.comment}"
              </p>
              <div className="pt-2 border-t border-slate-200">
                <div className="font-bold text-sm text-[#0B2B40]">{t.clientName}</div>
                <div className="text-xs text-cyan-700">{t.companyRole} • {t.sector}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 9. Final Call-To-Action (CTA) Banner - Compact & Small */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5 }}
        className="py-6 px-4 sm:px-6 max-w-7xl mx-auto mb-10"
      >
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#071927] via-[#0B2B40] to-[#0F3F5D] p-6 sm:p-8 text-white shadow-xl border border-cyan-500/20">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Brief Info */}
            <div className="space-y-1.5 text-center md:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white flex items-center justify-center md:justify-start gap-2">
                <span>Ready to start your MEP project?</span>
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Get a free on-site survey or custom MEP quote from certified engineers in Dubai.
              </p>
            </div>

            {/* Right Compact Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-bold text-slate-900 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all shadow-md shadow-cyan-500/20 text-xs sm:text-sm"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* <button
                onClick={onOpenEstimator}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all text-xs sm:text-sm"
              >
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span>MEP Cost Calculator</span>
              </button> */}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Wrench, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceItem } from '../types';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onQuoteWithService: (serviceTitle: string) => void;
  onOpenEstimator: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onQuoteWithService,
  onOpenEstimator
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Mechanical', 'Electrical', 'Plumbing', 'Maintenance & Interiors'];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.bulletPoints.some(bp => bp.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">
        
        {/* Page Title & Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-900 text-xs font-extrabold uppercase tracking-widest">
            <Wrench className="w-4 h-4 text-cyan-700" />
            Comprehensive MEP & Maintenance Capabilities
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#0B2B40]">
            Our <span className="text-cyan-600">MEP & Maintenance</span> Services
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Design, supply, installation, testing & commissioning of complete MEP systems for residential, commercial, and industrial projects in Dubai.
          </p>
        </motion.div>

        {/* Filter Controls Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0B2B40] text-white shadow-md'
                    : 'text-slate-700 hover:text-[#0B2B40] bg-white border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 shadow-sm"
            />
          </div>
        </motion.div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-600 px-2">
          <span>Showing <strong className="text-[#0B2B40]">{filteredServices.length}</strong> services</span>
          <button
            onClick={onOpenEstimator}
            className="text-cyan-700 font-bold hover:underline flex items-center gap-1"
          >
            <span>Need a custom cost estimate?</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Services Cards Grid */}
        {filteredServices.length === 0 ? (
          <div className="py-16 text-center bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <Wrench className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-700">No matching services found</h3>
            <p className="text-xs text-slate-500">Try adjusting your search query or switching categories.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-2 px-4 py-2 text-xs font-bold text-[#0B2B40] bg-white rounded-lg border border-slate-200"
            >
              Reset Filters
            </button>
          </div>
        ) : (
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
                  initial={{ opacity: 0, y: 20 }}
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
        )}

        {/* Engineering Consultation Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0B2B40] via-[#0F3F5D] to-[#165682] border border-cyan-500/30 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">Custom Engineering Solutions</span>
            <h3 className="text-2xl font-bold text-white">Have a Unique MEP Requirement?</h3>
            <p className="text-xs text-slate-200 max-w-xl">
              We provide tailored solutions for specialized industrial HVAC, high-capacity water pump arrays, commercial ducting fabrication, and custom interior fit-outs.
            </p>
          </div>

          <button
            onClick={() => onQuoteWithService('Custom MEP Inquiry')}
            className="flex-shrink-0 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#0B2B40] bg-cyan-400 hover:bg-cyan-300 shadow-lg transition-all"
          >
            Submit Custom Specification
          </button>
        </motion.div>

      </div>
    </div>
  );
};

import React from 'react';
import { 
  Droplets, Wind, Fan, Wrench, Maximize2, Sprout, 
  Layers, Grid, ShieldCheck, Home, Sparkles, Layout, Zap,
  ArrowRight, CheckCircle2 
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
  onQuickQuote: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect, onQuickQuote }) => {
  const [imgSrc, setImgSrc] = React.useState(service.image);

  // Sync state if service prop changes
  React.useEffect(() => {
    setImgSrc(service.image);
  }, [service.image]);

  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    const cls = "w-6 h-6 text-cyan-600 group-hover:text-cyan-300 transition-colors";
    switch (iconName) {
      case 'Droplets': return <Droplets className={cls} />;
      case 'Wind': return <Wind className={cls} />;
      case 'Fan': return <Fan className={cls} />;
      case 'Wrench': return <Wrench className={cls} />;
      case 'Maximize2': return <Maximize2 className={cls} />;
      case 'Sprout': return <Sprout className={cls} />;
      case 'Layers': return <Layers className={cls} />;
      case 'Grid': return <Grid className={cls} />;
      case 'ShieldCheck': return <ShieldCheck className={cls} />;
      case 'Home': return <Home className={cls} />;
      case 'Sparkles': return <Sparkles className={cls} />;
      case 'Layout': return <Layout className={cls} />;
      case 'Zap': return <Zap className={cls} />;
      default: return <Wrench className={cls} />;
    }
  };

  return (
    <div className="group relative bg-white hover:bg-slate-50 border border-slate-200 hover:border-cyan-500/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Category Badge & Image Container */}
      <div className="relative h-48 w-full bg-slate-100 rounded-t-2xl">
        <div className="absolute inset-0 overflow-hidden rounded-t-2xl">
          <img 
            src={imgSrc} 
            alt={service.title} 
            onError={() => setImgSrc('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80')}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[0.95] group-hover:brightness-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B40]/80 via-transparent to-transparent opacity-80" />
        </div>
        
        {/* Category Tag */}
        <span className="absolute top-3 left-3 text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-[#0B2B40]/90 border border-cyan-400/30 text-cyan-300 backdrop-blur-md z-10">
          {service.category}
        </span>

        {service.popular && (
          <span className="absolute top-3 right-3 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500 text-slate-950 shadow-md z-10">
            Featured
          </span>
        )}

        {/* Floating Icon Box */}
        <div className="absolute -bottom-5 left-5 z-20 p-3 rounded-xl bg-white border border-slate-200 shadow-md group-hover:border-cyan-500 group-hover:bg-[#0B2B40] transition-colors">
          {getIcon(service.iconName)}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 pt-8 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-bold text-[#0B2B40] group-hover:text-cyan-600 transition-colors leading-snug">
            {service.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium line-clamp-2 leading-relaxed">
            {service.shortDesc}
          </p>

          {/* Quick Bullet Points Preview */}
          <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
            {service.bulletPoints.slice(0, 2).map((bp, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{bp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Bar */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          <button
            onClick={() => onSelect(service)}
            className="flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-900 transition-colors"
          >
            <span>Full Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onQuickQuote(service)}
            className="px-3.5 py-1.5 text-xs font-bold text-[#0B2B40] bg-slate-100 hover:bg-[#0B2B40] hover:text-white rounded-lg border border-slate-200 transition-colors shadow-sm"
          >
            Inquire
          </button>
        </div>
      </div>
    </div>
  );
};

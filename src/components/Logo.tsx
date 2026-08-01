import React, { useId } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'color',
  showSubtitle = true 
}) => {
  const uniqueId = useId();
  const gradId = `dcGradient-${uniqueId.replace(/:/g, '')}`;
  const accentId = `dcAccent-${uniqueId.replace(/:/g, '')}`;

  return (
    <div className={`flex items-center gap-3 cursor-pointer group ${className}`}>
      {/* Emblem SVG mimicking the stylized 'C' loop with inner 'G/C' gradient circle */}
      <div className="relative w-11 h-11 flex-shrink-0">
        <img  src="/logo-bg.png" alt="" />
        {/* <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md transition-transform duration-300 group-hover:scale-105">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00A3E0" />
              <stop offset="100%" stopColor="#0B2B40" />
            </linearGradient>
            <linearGradient id={accentId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#00A3E0" />
            </linearGradient>
          </defs>
          <path 
            d="M 65 20 A 35 35 0 1 0 65 80 L 52 80 A 22 22 0 1 1 52 33 L 65 20 Z" 
            fill={`url(#${gradId})`} 
          />
          <rect x="42" y="44" width="28" height="12" rx="4" fill={`url(#${accentId})`} />
          <circle cx="70" cy="50" r="4" fill="#FFFFFF" />
        </svg> */}
      </div>

      {/* <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 font-bold tracking-wider leading-none text-lg">
          <span className={variant === 'light' ? 'text-white' : 'text-[#0B2B40]'}>
            DAILY
          </span>
          <span className={variant === 'light' ? 'text-cyan-400 font-black' : 'text-cyan-600 font-black'}>
            COOL
          </span>
        </div>
        {showSubtitle && (
          <span className={`text-[9px] uppercase font-bold tracking-wider mt-1 whitespace-nowrap ${
            variant === 'light' ? 'text-cyan-200/80' : 'text-slate-500'
          }`}>
            Electromechanical Works L.L.C
          </span>
        )}
      </div> */}
    </div>
  );
};

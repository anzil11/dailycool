import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Zap, Activity } from 'lucide-react';
import { HERO_SLIDES } from '../data/content';
import gsap from 'gsap';

interface HeroSliderProps {
  onNavigate: (page: string) => void;
  onOpenEstimator: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onNavigate, onOpenEstimator }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideTextRef = useRef<HTMLDivElement>(null);
  const slideImageRef = useRef<HTMLImageElement>(null);

  const currentSlide = HERO_SLIDES[currentIndex];

  // GSAP animation triggered on slide index change
  useEffect(() => {
    if (slideTextRef.current && slideImageRef.current) {
      const ctx = gsap.context(() => {
        // Image zoom and reveal effect
        gsap.fromTo(
          slideImageRef.current,
          { scale: 1.15, opacity: 0.4 },
          { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
        );

        // Staggered text element entrance
        const textChildren = slideTextRef.current?.children;
        if (textChildren) {
          gsap.fromTo(
            textChildren,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
          );
        }
      }, sliderRef);

      return () => ctx.revert();
    }
  }, [currentIndex]);

  // Autoplay timer
  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoplay]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <div 
      ref={sliderRef}
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
      className="relative w-full h-[520px] sm:h-[580px] lg:h-[620px] bg-slate-950 overflow-hidden select-none border-b border-slate-200"
    >
      {/* Background Image Layer with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          ref={slideImageRef}
          src={currentSlide.image}
          alt={currentSlide.title}
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1]"
        />
        {/* Navy Brand Blue Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071927] via-[#0B2B40]/80 to-transparent w-full md:w-3/4 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071927] via-transparent to-[#071927]/60 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#071927]/40 to-[#071927] z-10" />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-6 sm:px-12 flex flex-col justify-center">
        <div ref={slideTextRef} className="max-w-2xl space-y-6">
          {/* Top Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 backdrop-blur-md">
            <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              {currentSlide.tagline}
            </span>
          </div>

          {/* Main Slide Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            {currentSlide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 font-medium leading-relaxed">
            {currentSlide.subtitle}
          </p>

          {/* Key Stat Badge */}
          <div className="pt-2 flex items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-md">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  {currentSlide.stats.label}
                </div>
                <div className="text-lg font-black text-cyan-300">
                  {currentSlide.stats.value}
                </div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-md">
              <Zap className="w-5 h-5 text-amber-400" />
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Dubai Registration
                </div>
                <div className="text-sm font-bold text-slate-200">
                  Fully Licensed MEP
                </div>
              </div>
            </div>
          </div>

          {/* CTA Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('services')}
              className="flex items-center gap-3 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 shadow-lg shadow-cyan-500/20 transition-all group"
            >
              <span>{currentSlide.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenEstimator}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all"
            >
              <span>Project Cost Calculator</span>
            </button>
          </div>
        </div>
      </div>

      {/* Slider Controls & Navigation Bar */}
      <div className="absolute bottom-6 left-0 right-0 z-30 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4">
        {/* Slide Indicators / Thumbnails */}
        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative h-2 rounded-full transition-all duration-300 ${
                  isActive ? 'w-12 bg-cyan-400' : 'w-3 bg-slate-600 hover:bg-slate-400'
                }`}
                title={`Slide ${idx + 1}: ${slide.title}`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-cyan-300 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Next / Prev Manual Controls */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 font-mono tracking-widest mr-2">
            0{currentIndex + 1} / 0{HERO_SLIDES.length}
          </span>

          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 hover:text-white hover:bg-cyan-600 hover:border-cyan-500 transition-all focus:outline-none"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 hover:text-white hover:bg-cyan-600 hover:border-cyan-500 transition-all focus:outline-none"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

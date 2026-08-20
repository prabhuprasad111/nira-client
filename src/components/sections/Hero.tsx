import React from 'react';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { FinanceIllustration } from '../visual/FinanceIllustration';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const handleScrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-skybg-light via-skybg-soft/40 to-white pt-10 sm:pt-14 pb-16 lg:pb-24"
    >
      {/* Background Subtle Gradient Blobs & Pattern Grid */}
      <div className="absolute inset-0 pattern-grid pointer-events-none opacity-60" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brandBlue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-teal-800 shadow-sm animate-fadeIn">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Your Financial Clarity Starts Here</span>
            </div>

            {/* Large Bold Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-heading font-extrabold text-navy-900 tracking-tight leading-[1.15] space-y-1">
              <span className="block">Smart Tax Solutions.</span>
              <span className="block text-teal-600">Simplified Compliance.</span>
              <span className="block">Peace of Mind.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Professional tax consulting and compliance support designed to help individuals and businesses stay organized, compliant, and financially confident.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white px-7 py-3.5 rounded-2xl font-semibold text-sm shadow-card-hover shadow-teal-700/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-98 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleScrollToServices}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-navy-900 border border-slate-200 px-6 py-3.5 rounded-2xl font-semibold text-sm shadow-sm hover:border-slate-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Small trust-oriented line beneath CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-500 border-t border-slate-200/60 max-w-xl">
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                Clear advice
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                Timely compliance
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                Personalized support
              </span>
            </div>
          </div>

          {/* Right Column: Visual Area (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <FinanceIllustration />
          </div>

        </div>
      </div>
    </section>
  );
};

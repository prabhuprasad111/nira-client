import React from 'react';
import { Mail, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface CTABannerProps {
  onOpenConsultation: () => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-banner-gradient rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl text-white overflow-hidden border border-teal-500/20">
          
          {/* Ambient Glows and Pattern inside Banner */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-brandBlue/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-teal-200 border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
              <span>Get in Touch Today</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight leading-tight text-white">
              Let's Make Your Tax & Compliance Journey Simpler.
            </h2>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
              Have a tax, filing, accounting or compliance requirement? Let's discuss how we can help.
            </p>

            {/* Action CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-teal-50 text-navy-950 px-8 py-4 rounded-2xl font-bold text-sm shadow-xl hover:shadow-teal-400/20 active:scale-98 transition-all duration-200"
              >
                <Calendar className="w-4 h-4 text-teal-700" />
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-teal-700" />
              </button>
            </div>

            {/* Secondary Email text */}
            <div className="pt-2 text-xs sm:text-sm text-slate-300">
              <span>Or reach out directly: </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-teal-300 hover:text-white underline underline-offset-4 font-semibold transition-colors inline-flex items-center gap-1.5 ml-1"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email us at {siteConfig.email}</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

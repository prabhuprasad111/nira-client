import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  UserCheck, 
  FileCheck2, 
  ArrowRight,
  Sparkles 
} from 'lucide-react';
import { NRMonogram } from '../visual/NRMonogram';
import { siteConfig } from '../../config/siteConfig';

interface AboutProps {
  onOpenConsultation: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Modern Visual Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Outer decorative glow frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 via-brandBlue/10 to-transparent rounded-3xl blur-xl transform -rotate-1 pointer-events-none" />
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-b from-navy-900 to-navy-950 text-white rounded-3xl p-7 sm:p-9 shadow-2xl border border-navy-800 overflow-hidden">
                {/* Abstract decorative background arcs */}
                <div className="absolute -right-10 -bottom-10 w-48 h-48 border-[20px] border-teal-500/10 rounded-full pointer-events-none" />
                <div className="absolute -left-6 -top-6 w-32 h-32 border-[12px] border-brandBlue/10 rounded-full pointer-events-none" />

                {/* Top Badge & Monogram */}
                <div className="flex items-center justify-between mb-8">
                  <NRMonogram size="lg" variant="teal" />
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-300 bg-teal-900/60 border border-teal-500/30 px-3 py-1 rounded-full">
                    <Sparkles className="w-3 h-3 text-teal-400" />
                    Tax Advisory
                  </span>
                </div>

                {/* Card Title / Identity */}
                <div className="space-y-1 mb-6">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-wide">
                    {siteConfig.consultantName}
                  </h3>
                  <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                    {siteConfig.profession} • Bhubaneswar
                  </p>
                </div>

                {/* Focus Highlights */}
                <div className="space-y-3 pt-4 border-t border-navy-800/80 text-xs text-slate-300">
                  <div className="flex items-center gap-3 bg-navy-800/60 p-3 rounded-xl border border-navy-700/60">
                    <FileCheck2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Accurate & structured income tax preparation</span>
                  </div>
                  <div className="flex items-center gap-3 bg-navy-800/60 p-3 rounded-xl border border-navy-700/60">
                    <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Statutory compliance for businesses & individuals</span>
                  </div>
                  <div className="flex items-center gap-3 bg-navy-800/60 p-3 rounded-xl border border-navy-700/60">
                    <UserCheck className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Dedicated, personalized client support</span>
                  </div>
                </div>

                {/* Bottom trust footer inside card */}
                <div className="mt-6 pt-4 border-t border-navy-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Location: Mancheswar Rd</span>
                  <span className="text-teal-400 font-semibold">Odisha - 751010</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-teal-700 font-heading font-bold text-xs uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-md border border-teal-100">
              <span>ABOUT THE CONSULTANT</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-navy-900 tracking-tight leading-snug">
              Practical Tax Guidance.<br className="hidden sm:inline" /> Clear Financial Decisions.
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong>{siteConfig.consultantName}</strong> provides professional tax consulting and compliance assistance with a steadfast commitment to clarity, accuracy, timely filing, and personalized guidance. We work closely with individuals, salaried professionals, consultants, and business owners in Bhubaneswar and across Odisha to navigate tax obligations with confidence and complete peace of mind.
            </p>

            {/* 3 Feature Points as requested */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              <div className="bg-skybg-light p-4 rounded-2xl border border-skybg-border space-y-2">
                <div className="w-8 h-8 rounded-lg bg-teal-100/80 text-teal-700 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-heading font-bold text-navy-900">
                  Clear & Transparent Advice
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Plain-spoken explanations without complex tax jargon.
                </p>
              </div>

              <div className="bg-skybg-light p-4 rounded-2xl border border-skybg-border space-y-2">
                <div className="w-8 h-8 rounded-lg bg-teal-100/80 text-teal-700 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-heading font-bold text-navy-900">
                  Timely Compliance Support
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Proactive preparation to meet every statutory deadline smoothly.
                </p>
              </div>

              <div className="bg-skybg-light p-4 rounded-2xl border border-skybg-border space-y-2">
                <div className="w-8 h-8 rounded-lg bg-teal-100/80 text-teal-700 flex items-center justify-center">
                  <UserCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-heading font-bold text-navy-900">
                  Personalized Solutions
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Tax solutions customized to your specific income streams.
                </p>
              </div>

            </div>

            {/* Consultation Action */}
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-800 bg-teal-50 hover:bg-teal-100 px-5 py-3 rounded-xl border border-teal-200 transition-colors"
              >
                <span>Request a Consultation Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

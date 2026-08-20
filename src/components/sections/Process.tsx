import React from 'react';
import { 
  MessageCircle, 
  Search, 
  FileEdit, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { processSteps } from '../../data/process';

interface ProcessProps {
  onOpenConsultation: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenConsultation }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5 text-teal-600" />;
      case 'Search':
        return <Search className="w-5 h-5 text-brandBlue" />;
      case 'FileEdit':
        return <FileEdit className="w-5 h-5 text-indigo-600" />;
      case 'CheckCircle2':
      default:
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/80">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Structured Roadmap</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-navy-900 tracking-tight">
            Simple Process. Stress-Free Experience.
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            A transparent four-step journey from initial consultation to final filing acknowledgment.
          </p>
        </div>

        {/* Timeline Desktop / Stacked Mobile Cards */}
        <div className="relative">
          {/* Connecting line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-teal-200 via-brandBlue/30 to-emerald-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {processSteps.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-soft hover:shadow-card-hover hover:border-teal-400 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
              >
                <div>
                  {/* Step Header: Icon & Step Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-skybg-soft group-hover:bg-teal-50 flex items-center justify-center border border-slate-100 group-hover:border-teal-200 shadow-xs transition-colors">
                      {getIcon(step.icon)}
                    </div>
                    <span className="text-xs font-heading font-extrabold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200/60">
                      STEP {step.stepNumber}
                    </span>
                  </div>

                  {/* Title & Highlight */}
                  <h3 className="text-base sm:text-lg font-heading font-bold text-navy-900 mb-1 group-hover:text-teal-800 transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-[11px] font-semibold text-teal-600 block mb-2.5 uppercase tracking-wide">
                    {step.highlight}
                  </span>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[11px]">Phase {step.stepNumber}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-teal-700 text-white text-xs font-semibold px-6 py-3 rounded-xl shadow-md transition-all active:scale-98"
          >
            <span>Start Step 01 Today</span>
            <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
          </button>
        </div>

      </div>
    </section>
  );
};

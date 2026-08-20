import React from 'react';
import { 
  User, 
  Briefcase, 
  Laptop, 
  Store, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { audienceData } from '../../data/audience';

interface AudienceProps {
  onOpenConsultation: () => void;
}

export const Audience: React.FC<AudienceProps> = ({ onOpenConsultation }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'User':
        return <User className="w-6 h-6 text-teal-600" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-brandBlue" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-indigo-600" />;
      case 'Store':
      default:
        return <Store className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-skybg-light relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 pattern-grid pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/80">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Target Profiles</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-navy-900 tracking-tight">
            Who We Help
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Tailored tax consulting and statutory compliance for diverse income profiles.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audienceData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-skybg-border shadow-soft hover:shadow-card-hover hover:border-teal-300 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                {/* Icon & Subtitle */}
                <div className="w-12 h-12 rounded-2xl bg-skybg-soft group-hover:bg-teal-50 flex items-center justify-center border border-slate-100 group-hover:border-teal-200 shadow-xs transition-colors mb-4">
                  {getIcon(item.icon)}
                </div>

                <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wider block mb-1">
                  {item.subtitle}
                </span>

                <h3 className="text-base sm:text-lg font-heading font-bold text-navy-900 mb-2.5 group-hover:text-teal-800 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  {item.bulletPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mr-2 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-6 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-navy-900 bg-teal-50/60 hover:bg-teal-100 py-2 rounded-xl border border-teal-100 transition-colors"
                >
                  <span>Get Guidance</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

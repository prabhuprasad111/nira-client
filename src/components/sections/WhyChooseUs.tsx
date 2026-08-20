import React from 'react';
import { 
  MessageSquare, 
  UserCheck, 
  ShieldCheck, 
  Award,
  Sparkles 
} from 'lucide-react';
import { whyChooseData } from '../../data/whyChooseUs';
import { siteConfig } from '../../config/siteConfig';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquareCheck':
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-teal-600" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-brandBlue" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Award':
      default:
        return <Award className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section
      id="why-us"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-skybg-soft via-teal-50/30 to-white relative overflow-hidden"
    >
      {/* Decorative ambient background accents */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brandBlue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 pattern-grid pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-800 bg-white/90 shadow-xs px-3.5 py-1 rounded-full border border-teal-200/80">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Value & Reliability</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-navy-900 tracking-tight">
            Why Choose {siteConfig.consultantName}?
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            A disciplined, client-centered approach to tax consultancy and compliance.
          </p>
        </div>

        {/* 4 Benefit Cards with prominent numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseData.map((item) => (
            <div
              key={item.number}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-skybg-border shadow-soft hover:shadow-card-hover hover:border-teal-300 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1 relative"
            >
              {/* Card Top: Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl sm:text-3xl font-heading font-extrabold text-teal-600/30 group-hover:text-teal-600 transition-colors">
                    {item.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-skybg-soft group-hover:bg-teal-50 flex items-center justify-center border border-slate-100 group-hover:border-teal-200 transition-colors shadow-xs">
                    {getIcon(item.icon)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-heading font-bold text-navy-900 mb-2.5 group-hover:text-teal-800 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom subtle progress line */}
              <div className="mt-6 pt-3 border-t border-slate-100">
                <div className="w-8 h-1 bg-slate-200 group-hover:w-full group-hover:bg-teal-500 rounded-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

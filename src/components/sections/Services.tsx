import React from 'react';
import { 
  FileSpreadsheet, 
  LineChart, 
  Receipt, 
  Calculator, 
  FileCheck, 
  Building2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { servicesData } from '../../data/services';
import { ServiceItem } from '../../types';

interface ServicesProps {
  onLearnMore: (service: ServiceItem) => void;
  onBookService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onLearnMore, onBookService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-6 h-6 text-teal-600" />;
      case 'LineChart':
        return <LineChart className="w-6 h-6 text-brandBlue" />;
      case 'Receipt':
        return <Receipt className="w-6 h-6 text-teal-600" />;
      case 'Calculator':
        return <Calculator className="w-6 h-6 text-emerald-600" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-brandBlue" />;
      case 'Building2':
      default:
        return <Building2 className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-skybg-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pattern-grid pointer-events-none opacity-40" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/80">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Dedicated Tax Practice</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-navy-900 tracking-tight">
            Tax & Compliance Services
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Professional support for individuals, professionals and businesses.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl p-7 border border-skybg-border shadow-soft hover:shadow-card-hover hover:border-teal-300 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle top corner gradient accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-teal-50 to-transparent rounded-bl-3xl pointer-events-none group-hover:from-teal-100/50 transition-colors" />

              <div>
                {/* Icon badge */}
                <div className="w-13 h-13 rounded-2xl bg-skybg-soft group-hover:bg-teal-50 flex items-center justify-center border border-slate-100 group-hover:border-teal-200 transition-colors mb-5 shadow-xs">
                  {getIcon(service.icon)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-bold text-navy-900 mb-2.5 group-hover:text-teal-800 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
              </div>

              {/* Action Buttons: Learn More & Book */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onLearnMore(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 group-hover:translate-x-0.5 transition-all focus:outline-none focus:ring-1 focus:ring-teal-500 rounded p-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-600" />
                </button>

                <button
                  type="button"
                  onClick={() => onBookService(service.title)}
                  className="text-[11px] font-semibold text-slate-500 hover:text-navy-900 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

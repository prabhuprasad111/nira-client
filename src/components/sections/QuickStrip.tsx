import React from 'react';
import { 
  FileSpreadsheet, 
  Receipt, 
  Calculator, 
  LineChart, 
  ArrowUpRight 
} from 'lucide-react';
import { quickServicesStrip } from '../../data/services';

interface QuickStripProps {
  onSelectService: (serviceId: string) => void;
}

export const QuickStrip: React.FC<QuickStripProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-teal-600 group-hover:scale-110 transition-transform" />;
      case 'Receipt':
        return <Receipt className="w-5 h-5 text-brandBlue group-hover:scale-110 transition-transform" />;
      case 'Calculator':
        return <Calculator className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />;
      case 'LineChart':
      default:
        return <LineChart className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />;
    }
  };

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {quickServicesStrip.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectService(item.id)}
            className="group relative bg-white/95 backdrop-blur-md hover:bg-teal-50/40 p-4 sm:p-5 rounded-2xl border border-skybg-border hover:border-teal-400 shadow-soft hover:shadow-card-hover transition-all duration-300 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-teal-500 transform hover:-translate-y-1"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-11 h-11 rounded-xl bg-slate-50 group-hover:bg-white flex items-center justify-center border border-slate-100 group-hover:border-teal-100 shadow-xs transition-colors shrink-0">
                {getIcon(item.icon)}
              </div>
              <div>
                <span className="text-[10px] font-semibold text-teal-700 uppercase tracking-wider block">
                  {item.tag}
                </span>
                <h3 className="text-xs sm:text-sm font-heading font-bold text-navy-900 group-hover:text-teal-800 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-teal-600 group-hover:text-white flex items-center justify-center text-slate-400 transition-all shrink-0 ml-2">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

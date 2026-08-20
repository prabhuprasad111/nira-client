import React from 'react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface TopBarProps {
  onOpenConsultation: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenConsultation }) => {
  return (
    <div className="bg-navy-900 text-slate-200 border-b border-navy-800 text-xs py-2 px-4 sm:px-6 lg:px-8 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Side: Contact details */}
        <div className="flex items-center space-x-4 sm:space-x-6 overflow-hidden text-slate-300">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 hover:text-teal-400 transition-colors shrink-0 group focus:outline-none focus:ring-1 focus:ring-teal-400 rounded"
            title="Email Niranjan Routray"
          >
            <Mail className="w-3.5 h-3.5 text-teal-400 group-hover:scale-110 transition-transform" />
            <span className="truncate">{siteConfig.email}</span>
          </a>

          <div className="hidden md:flex items-center gap-1.5 text-slate-300 shrink-0">
            <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span className="truncate">{siteConfig.address.full}</span>
          </div>
        </div>

        {/* Right Side: Quick Action CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 bg-teal-600 hover:bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium transition-all shadow-sm hover:shadow-teal-700/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-1 focus:ring-offset-navy-900"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

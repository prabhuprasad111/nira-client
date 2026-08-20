import React, { useEffect } from 'react';
import { X, CheckCircle2, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectConsultation: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectConsultation,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-navy-950/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8">
        
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-teal-900 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-300 bg-teal-900/60 border border-teal-500/30 px-3 py-1 rounded-full mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Tax & Compliance Service
          </span>

          <h3 id="service-modal-title" className="text-xl sm:text-2xl font-heading font-bold text-white pr-8">
            {service.title}
          </h3>
          <p className="text-slate-300 text-sm mt-2">
            {service.shortDescription}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Service Scope & Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {service.detailedDescription}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="bg-skybg-soft/70 rounded-2xl p-5 border border-skybg-border">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              Key Deliverables & Inclusions
            </h4>
            <ul className="space-y-2.5">
              {service.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mr-2.5 mt-2 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents Generally Required */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-slate-500" />
              General Documents / Details Needed
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.documentsNeeded.map((doc, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 text-xs text-slate-700 flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brandBlue mr-2 shrink-0" />
                  <span className="truncate">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 border-t border-slate-100 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-navy-900 hover:bg-slate-200/70 transition-colors"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onSelectConsultation(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-xl text-xs font-semibold shadow-md shadow-teal-600/20 active:scale-98 transition-all"
          >
            <span>Consult on this Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

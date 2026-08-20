import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, Mail, Send, Sparkles, AlertCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { servicesData } from '../../data/services';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceRequired, setServiceRequired] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setServiceRequired(preselectedService);
    } else {
      setServiceRequired(servicesData[0]?.title || '');
    }
  }, [preselectedService, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Contact number is required';
    } else if (!/^[0-9+ -]{7,15}$/.test(phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setErrors({});
    onClose();
  };

  const createMailtoLink = () => {
    const subject = encodeURIComponent(`Consultation Request: ${serviceRequired} - ${fullName}`);
    const body = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nService: ${serviceRequired}\n\nNotes / Requirement:\n${message || 'N/A'}`
    );
    return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-navy-950/75 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-900 to-teal-900 text-white p-6 sm:p-7 relative">
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-1">
            <Calendar className="w-4 h-4" />
            <span>Appointment & Advisory</span>
          </div>

          <h3 id="consultation-modal-title" className="text-xl sm:text-2xl font-heading font-bold text-white">
            Schedule a Consultation
          </h3>
          <p className="text-slate-300 text-xs mt-1">
            Connect with Niranjan Routray for structured tax and compliance guidance.
          </p>
        </div>

        {/* Form or Success View */}
        <div className="p-6 sm:p-7">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4 animate-fadeIn">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto border border-teal-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-lg font-heading font-bold text-navy-900">
                  Consultation Request Ready
                </h4>
                <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                  Thank you, <strong className="text-navy-900">{fullName}</strong>. You can now dispatch your request directly via email or await our team's coordination.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs text-slate-700 space-y-1.5">
                <div><span className="font-semibold text-slate-500">Service:</span> {serviceRequired}</div>
                <div><span className="font-semibold text-slate-500">Email:</span> {email}</div>
                <div><span className="font-semibold text-slate-500">Phone:</span> {phone}</div>
                {message && <div><span className="font-semibold text-slate-500">Message:</span> {message}</div>}
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={createMailtoLink()}
                  className="w-full inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-xl text-xs font-semibold shadow-md active:scale-98 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email Client ({siteConfig.email})</span>
                </a>

                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="modal-name">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="modal-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rajesh Kumar"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 bg-slate-50/50 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-teal-500 ${
                    errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="modal-email">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 bg-slate-50/50 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="modal-phone">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-slate-900 bg-slate-50/50 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="modal-service">
                  Service Required
                </label>
                <select
                  id="modal-service"
                  value={serviceRequired}
                  onChange={(e) => setServiceRequired(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50/50 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-teal-500"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="General Tax Consultation">General Tax Consultation</option>
                  <option value="Other Financial Compliance">Other Financial Compliance</option>
                </select>
              </div>

              {/* Message / Requirement Details */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="modal-message">
                  Brief Details / Questions (Optional)
                </label>
                <textarea
                  id="modal-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share any specifics (e.g. salaried return, capital gains, GST registration)..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50/50 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white font-semibold py-3 px-6 rounded-xl text-xs shadow-md shadow-teal-700/20 active:scale-98 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Consultation Request</span>
                </button>
              </div>

              <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3 text-teal-600" />
                Office hours: {siteConfig.businessHours}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

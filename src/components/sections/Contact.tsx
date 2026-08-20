import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { servicesData } from '../../data/services';

export const Contact: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceRequired, setServiceRequired] = useState(servicesData[0]?.title || 'Income Tax Return Filing');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPrepared, setIsPrepared] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Please provide your phone number';
    } else if (!/^[0-9+ -]{7,15}$/.test(phone)) {
      newErrors.phone = 'Please provide a valid phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsPrepared(true);
  };

  const createMailtoLink = () => {
    const subject = encodeURIComponent(`Tax Enquiry: ${serviceRequired} - ${fullName}`);
    const body = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nService Required: ${serviceRequired}\n\nClient Message:\n${message || 'N/A'}\n\n-- Sent via niranjanroutray.com`
    );
    return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  const handleReset = () => {
    setIsPrepared(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setErrors({});
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-skybg-light relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brandBlue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 pattern-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/80">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Connect & Consult</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-navy-900 tracking-tight">
            Let's Talk About Your Tax Requirements
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Reach out directly or send your requirements through our consultation form.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Office & Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-skybg-border shadow-soft space-y-6">
              <h3 className="text-lg font-heading font-bold text-navy-900 border-b border-slate-100 pb-3">
                Office & Direct Details
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-100 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Direct Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm font-semibold text-navy-900 hover:text-teal-600 transition-colors break-all inline-flex items-center gap-1 mt-0.5"
                  >
                    <span>{siteConfig.email}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">Send documents or consultation queries</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-skybg-soft text-brandBlue flex items-center justify-center border border-slate-100 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Office Address</p>
                  <p className="text-sm font-medium text-navy-900 mt-0.5 leading-snug">
                    {siteConfig.address.full}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Mancheswar Rd, Bhubaneswar, Odisha</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Consultation Hours</p>
                  <p className="text-sm font-medium text-navy-900 mt-0.5">
                    {siteConfig.businessHours}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Prior appointment recommended</p>
                </div>
              </div>

              {/* Assurance badge */}
              <div className="bg-skybg-soft/70 rounded-2xl p-4 border border-skybg-border flex items-center gap-3 text-xs text-slate-600">
                <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
                <span>All client tax documents and information are handled with confidentiality.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Modern Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-skybg-border shadow-soft">
              
              <div className="mb-6">
                <h3 className="text-lg font-heading font-bold text-navy-900">
                  Send an Enquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below and we will prepare your consultation request.
                </p>
              </div>

              {isPrepared ? (
                /* Frontend prepared state */
                <div className="py-6 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto border border-teal-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h4 className="text-lg font-heading font-bold text-navy-900">
                      Enquiry Prepared
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                      Thank you, <strong className="text-navy-900">{fullName}</strong>. Your enquiry details have been organized. You can click below to open your email client and send directly to <strong>{siteConfig.email}</strong>.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs text-slate-700 space-y-1.5 max-w-md mx-auto">
                    <div><span className="font-semibold text-slate-500">Name:</span> {fullName}</div>
                    <div><span className="font-semibold text-slate-500">Email:</span> {email}</div>
                    <div><span className="font-semibold text-slate-500">Phone:</span> {phone}</div>
                    <div><span className="font-semibold text-slate-500">Service:</span> {serviceRequired}</div>
                    {message && <div><span className="font-semibold text-slate-500">Message:</span> {message}</div>}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={createMailtoLink()}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-xl text-xs font-semibold shadow-md active:scale-98 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Email to {siteConfig.email}</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto py-3 px-5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="contact-name">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Priyabrata Mohanty"
                      className={`w-full px-4 py-3 rounded-xl border text-xs text-slate-900 bg-slate-50/50 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-teal-500 ${
                        errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="contact-email">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="priya@example.com"
                        className={`w-full px-4 py-3 rounded-xl border text-xs text-slate-900 bg-slate-50/50 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-teal-500 ${
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
                      <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="contact-phone">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl border text-xs text-slate-900 bg-slate-50/50 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-teal-500 ${
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

                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="contact-service">
                      Service Required
                    </label>
                    <select
                      id="contact-service"
                      value={serviceRequired}
                      onChange={(e) => setServiceRequired(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50/50 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="General Tax Consultation">General Tax Consultation</option>
                      <option value="Other Statutory Compliance">Other Statutory Compliance</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="contact-message">
                      Message / Specific Requirements
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please mention any relevant details about your filing or compliance requirement..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50/50 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-navy-900 via-navy-800 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3.5 px-6 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-teal-700/20 active:scale-98 transition-all"
                    >
                      <span>Send Enquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center">
                    We respect your privacy. Form details are transmitted directly for consultation scheduling.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

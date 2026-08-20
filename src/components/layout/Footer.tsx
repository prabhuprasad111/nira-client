import React from 'react';
import { Mail, MapPin, ArrowUp, Shield } from 'lucide-react';
import { NRMonogram } from '../visual/NRMonogram';
import { siteConfig } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800 relative z-10">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <NRMonogram size="md" variant="teal" />
              <div>
                <h3 className="text-lg font-heading font-bold text-white tracking-wide">
                  {siteConfig.consultantName.toUpperCase()}
                </h3>
                <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                  {siteConfig.profession}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Professional tax, accounting and compliance support with a focus on clarity and peace of mind. Assisting individuals, salaried professionals, and businesses in Bhubaneswar with reliable, structured filing and advisory services.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-teal-300/90 bg-navy-900/80 px-3 py-2 rounded-lg border border-navy-800 w-fit">
              <Shield className="w-4 h-4 text-teal-400" />
              <span>Strict compliance with Indian Tax Statutes</span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Location Info (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              Contact & Office
            </h4>
            
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-slate-500 font-medium">Direct Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-slate-200 hover:text-teal-300 transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-slate-500 font-medium">Office Location</p>
                  <p className="text-slate-200 leading-snug">
                    {siteConfig.address.full}
                  </p>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-500">
                <span>Office Hours: </span>
                <span className="text-slate-300 font-medium">{siteConfig.businessHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Area */}
        <div className="mt-10 pt-6 border-t border-navy-800 text-xs text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-400">Disclaimer: </strong>
            Information provided on this website is for general informational purposes and should not be considered as a substitute for professional advice specific to your circumstances. Tax laws and statutory provisions are subject to change by relevant government authorities.
          </p>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-navy-950/80 border-t border-navy-900 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {siteConfig.consultantName}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-teal-400 transition-colors focus:outline-none focus:ring-1 focus:ring-teal-400 rounded px-2 py-1"
            title="Scroll to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

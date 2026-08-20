import React, { useState } from 'react';
import { MessageSquare, MessageCircle, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface FloatingContactProps {
  onOpenConsultation: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ onOpenConsultation }) => {
  const [hovered, setHovered] = useState(false);
  const hasWhatsApp = Boolean(siteConfig.whatsappNumber && siteConfig.whatsappNumber.trim() !== '');

  const handleClick = () => {
    if (hasWhatsApp) {
      const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
      const text = encodeURIComponent(`Hello Niranjan Routray, I would like to inquire about tax consulting services.`);
      window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
    } else {
      // Smooth scroll to Contact section or open consultation modal
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        onOpenConsultation();
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover */}
      {hovered && (
        <div className="bg-navy-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg border border-navy-700 animate-fadeIn hidden sm:flex items-center gap-1">
          <span>{hasWhatsApp ? 'Chat on WhatsApp' : 'Quick Tax Enquiry'}</span>
          <ArrowUpRight className="w-3 h-3 text-teal-400" />
        </div>
      )}

      {/* Floating Circular Action Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`w-13 h-13 p-3.5 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 ${
          hasWhatsApp
            ? 'bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-300 shadow-emerald-600/30'
            : 'bg-teal-600 hover:bg-teal-700 focus:ring-teal-300 shadow-teal-700/30'
        }`}
        aria-label={hasWhatsApp ? 'Contact via WhatsApp' : 'Contact Consultant'}
      >
        {hasWhatsApp ? (
          <MessageCircle className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}
        
        {/* Subtle ping pulse animation */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-teal-400"></span>
        </span>
      </button>
    </div>
  );
};

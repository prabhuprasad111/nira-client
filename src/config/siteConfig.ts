/**
 * Centralized business configuration for Niranjan Routray - Tax Consultant
 * 
 * STRICT GUIDELINE: No invented credentials, phone numbers, fake awards, 
 * or unverified client counts are included.
 */

export interface SiteConfig {
  consultantName: string;
  profession: string;
  email: string;
  address: {
    line1: string;
    city: string;
    pincode: string;
    state: string;
    full: string;
  };
  businessHours: string;
  /**
   * Configurable WhatsApp Number.
   * If left blank (""), the floating contact button defaults to scrolling
   * directly to the Contact / Enquiry form or opening the email client.
   * Format when set: e.g. "919876543210" (country code + 10 digits without +)
   */
  whatsappNumber: string;
  /**
   * Configurable Phone Number.
   * Format when set: e.g. "+91 98765 43210"
   */
  phoneNumber: string;
  mapQuery: string;
  tagline: string;
  subTagline: string;
}

export const siteConfig: SiteConfig = {
  consultantName: "Niranjan Routray",
  profession: "Tax Consultant",
  email: "ca.niranjanraoutray@gmail.com",
  address: {
    line1: "C-18, Ground Floor, Mancheswar Rd",
    city: "Bhubaneswar",
    pincode: "751010",
    state: "Odisha",
    full: "C-18, Ground Floor, Mancheswar Rd, Bhubaneswar - 751010",
  },
  businessHours: "Monday – Saturday (By Appointment)",
  whatsappNumber: "", // Configurable: Leave blank or insert e.g. "91XXXXXXXXXX"
  phoneNumber: "",    // Configurable: Leave blank or insert e.g. "+91 XXXXXXXXXX"
  mapQuery: "Mancheswar Rd, Bhubaneswar, Odisha 751010",
  tagline: "Smart Tax Solutions. Simplified Compliance. Peace of Mind.",
  subTagline: "Professional tax consulting and compliance support designed to help individuals and businesses stay organized, compliant, and financially confident.",
};

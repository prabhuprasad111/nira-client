export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  keyFeatures: string[];
  documentsNeeded: string[];
  icon: string;
  category: 'direct-tax' | 'indirect-tax' | 'accounting' | 'corporate';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  highlight: string;
  icon: string;
}

export interface AudienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  icon: string;
}

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  message: string;
}

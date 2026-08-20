import { AudienceItem } from '../types';

export const audienceData: AudienceItem[] = [
  {
    id: 'individuals',
    title: 'Individuals',
    subtitle: 'Personal Tax & Planning',
    description: 'Individuals with income from house property, interest, dividends, capital gains, or pension seeking clear tax filing and optimization.',
    bulletPoints: [
      'Bank interest & dividend tax reporting',
      'Capital gains from mutual funds & stocks',
      'Property sale & rental income filing',
      'Senior citizen tax benefits advisory'
    ],
    icon: 'User'
  },
  {
    id: 'salaried',
    title: 'Salaried Professionals',
    subtitle: 'Hassle-Free Form 16 Filing',
    description: 'IT professionals, corporate executives, and employees with single or multiple Form 16s, ESOPs, and allowances looking for maximum eligible tax benefits.',
    bulletPoints: [
      'Old vs New Tax Regime optimization',
      'Multi-employer Form 16 reconciliation',
      'HRA, 80C, 80D & Chapter VI-A deductions',
      'ESOPs, RSUs & foreign asset disclosures'
    ],
    icon: 'Briefcase'
  },
  {
    id: 'freelancers',
    title: 'Freelancers & Consultants',
    subtitle: 'Presumptive Taxation & GST',
    description: 'Independent consultants, IT contractors, creative professionals, and remote workers needing 44ADA presumptive tax solutions and GST support.',
    bulletPoints: [
      'Section 44ADA presumptive taxation',
      'Export of services GST compliance (LUT)',
      'Quarterly advance tax computation',
      'Professional expense categorization'
    ],
    icon: 'Laptop'
  },
  {
    id: 'businesses',
    title: 'Small Businesses & MSMEs',
    subtitle: 'End-to-End Accounting & Compliance',
    description: 'Proprietorships, retail traders, service firms, and growing local businesses needing steady bookkeeping, GST filings, and business compliance.',
    bulletPoints: [
      'Monthly/Quarterly GST returns & ITC matching',
      'TDS deductions, challans & quarterly filings',
      'Profit & Loss and Balance sheet preparation',
      'MSME / Udyam and trade compliance'
    ],
    icon: 'Store'
  }
];

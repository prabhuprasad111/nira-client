import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'itr-filing',
    title: 'Income Tax Return Filing',
    shortDescription: 'Accurate and timely income tax return preparation and filing support.',
    detailedDescription: 'Comprehensive income tax return (ITR) preparation and electronic filing for individuals, salaried employees, professionals, and business entities. We ensure proper verification of Form 26AS, AIS/TIS data, deduction optimization under applicable tax regimes, and seamless e-verification.',
    keyFeatures: [
      'Salaried ITR-1 & ITR-2 return preparation',
      'Capital gains & investment income reporting',
      'Business/Presumptive taxation (ITR-3 & ITR-4)',
      'AIS / TIS and Form 26AS tax credit reconciliation',
      'E-verification and acknowledgment tracking'
    ],
    documentsNeeded: [
      'PAN and Aadhaar Card',
      'Form 16 / Salary Certificates',
      'Bank Account Statements (All accounts for FY)',
      'Investment Proofs (PPF, ELSS, Insurance, Home Loan)',
      'Capital gains statements (Brokers / Mutual funds)'
    ],
    icon: 'FileSpreadsheet',
    category: 'direct-tax'
  },
  {
    id: 'tax-planning',
    title: 'Tax Planning & Advisory',
    shortDescription: 'Practical guidance to help you understand and plan your tax obligations.',
    detailedDescription: 'Strategic, forward-looking tax advisory to structure personal and business finances in compliance with prevailing tax legislation. We help compare the Old vs. New Tax Regimes, analyze allowable deductions, and identify legitimate avenues for tax efficiency throughout the financial year.',
    keyFeatures: [
      'Comparative evaluation of Old vs. New Tax Regime',
      'Advance tax estimation and schedule monitoring',
      'Salary restructuring advisory for employees',
      'Tax-efficient investment roadmap guidance',
      'Proactive year-round tax advisory'
    ],
    documentsNeeded: [
      'Previous year\'s filed ITR copy',
      'Current earnings and projected income details',
      'Existing loan, insurance, and investment details'
    ],
    icon: 'LineChart',
    category: 'direct-tax'
  },
  {
    id: 'gst-compliance',
    title: 'GST Registration & Compliance',
    shortDescription: 'Support for GST registration, returns and ongoing compliance requirements.',
    detailedDescription: 'End-to-end Goods and Services Tax (GST) management designed to keep your business fully compliant. From fresh GST registration, regular monthly/quarterly return filings (GSTR-1, GSTR-3B), Input Tax Credit (ITC) reconciliation with GSTR-2B, to annual return preparation.',
    keyFeatures: [
      'New GST registration & amendment applications',
      'Monthly / Quarterly GSTR-1 and GSTR-3B filings',
      'GSTR-2B vs. Purchase Register ITC reconciliation',
      'Annual return (GSTR-9) preparation assistance',
      'GST invoice formatting & e-way bill guidance'
    ],
    documentsNeeded: [
      'PAN, Aadhaar & Business Address Proof / Electricity bill',
      'Bank Account Details & Cancelled Cheque',
      'Sales and Purchase Invoices / Ledgers'
    ],
    icon: 'Receipt',
    category: 'indirect-tax'
  },
  {
    id: 'accounting-bookkeeping',
    title: 'Accounting & Bookkeeping',
    shortDescription: 'Organized accounting support to keep financial records clear and up to date.',
    detailedDescription: 'Systematic recording and maintenance of financial transactions to give you total visibility over cash flows, revenue, and expenditures. We help prepare ledgers, profit & loss statements, balance sheets, and bank reconciliations formatted for accurate statutory reporting.',
    keyFeatures: [
      'Routine ledger entry and transaction classification',
      'Bank, credit card, and vendor reconciliations',
      'Profit & Loss statement and Balance Sheet preparation',
      'Accounts receivable and payable tracking',
      'Year-end financial statement finalization'
    ],
    documentsNeeded: [
      'Bank statements of business accounts',
      'Sales bills, tax invoices, and expense vouchers',
      'Prior period trial balance and asset registers'
    ],
    icon: 'Calculator',
    category: 'accounting'
  },
  {
    id: 'tds-compliance',
    title: 'TDS & Compliance',
    shortDescription: 'Assistance with TDS-related compliance and reporting requirements.',
    detailedDescription: 'Accurate deduction, timely deposit, and structured quarterly return filings for Tax Deducted at Source (TDS). We assist with TAN registrations, challan verification, quarterly 24Q, 26Q, and 27Q return generation, as well as generation of Form 16/16A certificates.',
    keyFeatures: [
      'TDS computation on salary, contractor, rent & professional fees',
      'Quarterly TDS return preparation (Form 24Q, 26Q, 27Q)',
      'Form 16 (Part A & B) and Form 16A generation support',
      'TDS challan (ITNS 281) reconciliation with TRACES',
      'Resolution of TRACES TDS mismatch notices'
    ],
    documentsNeeded: [
      'TAN and PAN details',
      'Monthly deduction & challan payment records',
      'Deductee PAN master and payment ledgers'
    ],
    icon: 'FileCheck',
    category: 'direct-tax'
  },
  {
    id: 'business-compliance',
    title: 'Business & Company Compliance',
    shortDescription: 'Support for business registrations and routine statutory compliance.',
    detailedDescription: 'Guidance and administrative filing support for business registrations (Proprietorship, Partnership, MSME/Udyam, Shop & Establishment) and periodic statutory documentation to ensure seamless operational compliance for local entrepreneurs and growing ventures.',
    keyFeatures: [
      'MSME / Udyam registration assistance',
      'Partnership deed & business formation documentation',
      'Shop & Commercial Establishment compliance support',
      'PAN/TAN application processing',
      'Statutory register maintenance and renewal tracking'
    ],
    documentsNeeded: [
      'Identity and Address Proofs of Promoters/Partners',
      'Commercial premise proof (Rent agreement / NOC)',
      'Existing trade licenses or registration numbers'
    ],
    icon: 'Building2',
    category: 'corporate'
  }
];

export const quickServicesStrip = [
  {
    id: 'itr-filing',
    title: 'Income Tax Return Filing',
    tag: 'Direct Tax',
    icon: 'FileSpreadsheet'
  },
  {
    id: 'gst-compliance',
    title: 'GST & Compliance',
    tag: 'Indirect Tax',
    icon: 'Receipt'
  },
  {
    id: 'accounting-bookkeeping',
    title: 'Accounting Services',
    tag: 'Bookkeeping',
    icon: 'Calculator'
  },
  {
    id: 'tax-planning',
    title: 'Tax Planning',
    tag: 'Advisory',
    icon: 'LineChart'
  }
];

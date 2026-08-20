import { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Connect',
    description: 'Tell us about your tax or compliance requirement via our booking form, email, or a scheduled meeting.',
    highlight: 'Initial Consultation',
    icon: 'MessageCircle'
  },
  {
    stepNumber: '02',
    title: 'Understand',
    description: 'We review your documents, assess your specific tax situation, and outline the most suitable, compliant solution.',
    highlight: 'Requirement Review',
    icon: 'Search'
  },
  {
    stepNumber: '03',
    title: 'Prepare',
    description: 'Calculations, deduction claims, reconciliations, and necessary forms are prepared with meticulous care.',
    highlight: 'Detailed Computation',
    icon: 'FileEdit'
  },
  {
    stepNumber: '04',
    title: 'Complete',
    description: 'Your filing is executed securely, e-verified, and official acknowledgments/records are delivered directly to you.',
    highlight: 'Filing & Delivery',
    icon: 'CheckCircle2'
  }
];

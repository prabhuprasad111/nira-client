import React from 'react';
import { 
  FileText, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Calculator, 
  PieChart, 
  Receipt, 
  Sparkles,
  ArrowUpRight,
  IndianRupee
} from 'lucide-react';

export const FinanceIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none flex items-center justify-center py-6 select-none">
      {/* Background ambient glow shapes */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-teal-400/15 rounded-full blur-3xl -top-10 -right-10 pointer-events-none animate-pulse-subtle" />
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-brandBlue/15 rounded-full blur-3xl -bottom-10 -left-10 pointer-events-none" />

      {/* Decorative Dot Grid */}
      <div className="absolute -top-6 -left-6 w-24 h-24 pattern-dots rounded-xl pointer-events-none hidden sm:block" />
      <div className="absolute -bottom-6 -right-6 w-28 h-28 pattern-dots rounded-xl pointer-events-none hidden sm:block" />

      {/* Main Illustration Container Frame */}
      <div className="relative w-full aspect-[4/3.8] max-w-[480px] bg-gradient-to-b from-white/90 to-skybg-soft/70 backdrop-blur-xl rounded-3xl border border-skybg-border shadow-2xl p-6 flex flex-col justify-between overflow-hidden">
        
        {/* Subtle top header bar inside mockup */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-teal-500/80" />
            <div className="w-3 h-3 rounded-full bg-brandBlue/70" />
            <div className="w-3 h-3 rounded-full bg-amber-400/70" />
            <span className="text-[11px] font-semibold text-slate-500 tracking-wide uppercase ml-2">
              Tax & Compliance Hub
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
            <ShieldCheck className="w-3 h-3 text-teal-600" />
            Verified & Compliant
          </span>
        </div>

        {/* Central Graphic Composition */}
        <div className="relative my-auto py-4 flex items-center justify-center">
          
          {/* Main Financial Report Board */}
          <div className="w-full bg-white rounded-2xl p-4 shadow-card border border-slate-100/90 relative z-10">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[11px] text-slate-500 font-medium">Income Tax & GST Ledger</p>
                <p className="text-base sm:text-lg font-heading font-bold text-navy-900 flex items-center gap-1">
                  <span>Timely E-Filing</span>
                  <span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded ml-1.5 flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-0.5" /> 100%
                  </span>
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 border border-teal-100">
                <FileText className="w-5 h-5" />
              </div>
            </div>

            {/* Visual Mini Chart Bars */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div>
                <div className="flex justify-between text-xs text-slate-600 font-medium mb-1">
                  <span>ITR Computation & AIS/TIS Review</span>
                  <span className="text-teal-700 font-semibold">Organized</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full w-[94%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-600 font-medium mb-1">
                  <span>GST Return & ITC Reconciliation</span>
                  <span className="text-brandBlue font-semibold">Matched</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brandBlue to-indigo-500 rounded-full w-[88%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-600 font-medium mb-1">
                  <span>TDS & Tax Planning Strategy</span>
                  <span className="text-emerald-700 font-semibold">Optimized</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-[98%]" />
                </div>
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-100 text-center">
              <div className="bg-skybg-soft/70 rounded-lg p-2">
                <p className="text-[10px] text-slate-500 uppercase font-bold">Accuracy</p>
                <p className="text-xs sm:text-sm font-bold text-navy-900 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mr-1 inline" /> High
                </p>
              </div>
              <div className="bg-skybg-soft/70 rounded-lg p-2">
                <p className="text-[10px] text-slate-500 uppercase font-bold">Advisory</p>
                <p className="text-xs sm:text-sm font-bold text-navy-900 flex items-center justify-center">
                  <TrendingUp className="w-3.5 h-3.5 text-brandBlue mr-1 inline" /> Strategic
                </p>
              </div>
              <div className="bg-skybg-soft/70 rounded-lg p-2">
                <p className="text-[10px] text-slate-500 uppercase font-bold">Support</p>
                <p className="text-xs sm:text-sm font-bold text-navy-900 flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 mr-1 inline" /> Direct
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom subtle message badge */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
          <span className="flex items-center gap-1.5 text-slate-600">
            <Calculator className="w-3.5 h-3.5 text-teal-600" />
            Precise calculations & filing support
          </span>
          <span className="font-semibold text-navy-900 flex items-center">
            <Sparkles className="w-3 h-3 text-amber-500 mr-1 inline" /> Bhubaneswar
          </span>
        </div>
      </div>

      {/* FLOATING MINI CARDS - As requested in specifications */}
      
      {/* Floating Card 1: Tax Planning (Top Right) */}
      <div className="absolute -top-3 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-card-hover border border-teal-100 flex items-center gap-3 z-20 animate-float">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-white flex items-center justify-center shadow-sm">
          <PieChart className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-bold text-navy-900">Tax Planning</p>
          <p className="text-[11px] text-teal-700 font-medium">Strategic & Tailored</p>
        </div>
      </div>

      {/* Floating Card 2: ITR Filing (Bottom Left) */}
      <div className="absolute -bottom-4 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-card-hover border border-skybg-border flex items-center gap-3 z-20 animate-float-reverse">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-900 to-navy-700 text-white flex items-center justify-center shadow-sm">
          <FileText className="w-5 h-5 text-teal-300" />
        </div>
        <div>
          <p className="text-xs font-bold text-navy-900">ITR Filing</p>
          <p className="text-[11px] text-emerald-600 font-medium flex items-center">
            <CheckCircle2 className="w-3 h-3 mr-1 inline" /> Accurate & Timely
          </p>
        </div>
      </div>

      {/* Floating Card 3: GST & Compliance (Right Middle) */}
      <div className="absolute top-1/2 -right-3 sm:-right-8 -translate-y-1/2 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-card-hover border border-brandBlue/20 hidden sm:flex items-center gap-3 z-20 animate-float-slow">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brandBlue to-indigo-600 text-white flex items-center justify-center shadow-sm">
          <Receipt className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-bold text-navy-900">GST & Compliance</p>
          <p className="text-[11px] text-slate-500 font-medium">GSTR-1, 3B & Advisory</p>
        </div>
      </div>

      {/* Tiny floating Indian Rupee badge */}
      <div className="absolute -top-4 left-8 bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md shadow-teal-600/30 text-xs font-bold border-2 border-white animate-bounce">
        <IndianRupee className="w-4 h-4" />
      </div>
    </div>
  );
};

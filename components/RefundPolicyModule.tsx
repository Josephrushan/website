
import React from 'react';
import { RefreshCcw, HelpCircle, FileText, CheckCircle2, ShieldCheck, Zap, XCircle } from 'lucide-react';

const RefundPolicyModule: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-fade-in pb-32">
      {/* Header */}
      <div className="relative bg-[#072432] rounded-[3.5rem] p-10 md:p-16 text-white overflow-hidden shadow-2xl shadow-slate-200 text-left">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <RefreshCcw className="w-4 h-4 text-brand-teal" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">Service Guarantee</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight tracking-tight text-white uppercase">Refund <span className="text-brand-teal">Policy.</span></h2>
          <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
            We believe in fair, transparent billing. Whether you are an individual parent or a large institution, our policy is built on clarity.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {/* Parent Subscriptions */}
        <div className="bg-white p-12 rounded-[4rem] border-2 border-slate-100 shadow-sm space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 text-brand-teal flex items-center justify-center">
              <Zap className="w-8 h-8 text-brand-teal" />
            </div>
            <h3 className="text-3xl font-semibold text-slate-900 tracking-tight uppercase">Parent Premium</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-1" />
                <p className="text-sm text-slate-600 font-medium leading-relaxed"><strong>14-Day Cooling Off:</strong> Full refund within the first 14 days of your initial subscription if you're not satisfied.</p>
              </li>
              <li className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-1" />
                <p className="text-sm text-slate-600 font-medium leading-relaxed"><strong>Instant Cancellation:</strong> Cancel your monthly plan at any time via the billing portal.</p>
              </li>
              <li className="flex gap-4 items-start">
                <XCircle className="w-5 h-5 text-slate-300 shrink-0 mt-1" />
                <p className="text-sm text-slate-600 font-medium leading-relaxed"><strong>Partial Months:</strong> We do not offer pro-rated refunds for mid-month cancellations.</p>
              </li>
            </ul>
        </div>

        {/* Institutional Licenses */}
        <div className="bg-white p-12 rounded-[4rem] border-2 border-slate-100 shadow-sm space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 text-brand-teal flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-brand-teal" />
            </div>
            <h3 className="text-3xl font-semibold text-slate-900 tracking-tight uppercase">Institutional</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-1" />
                <p className="text-sm text-slate-600 font-medium leading-relaxed"><strong>Annual Commitment:</strong> Institutional licenses are valid for 12 months from activation.</p>
              </li>
              <li className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-1" />
                <p className="text-sm text-slate-600 font-medium leading-relaxed"><strong>Service Continuity:</strong> Terminations require 60 days notice prior to renewal date.</p>
              </li>
              <li className="flex gap-4 items-start">
                <HelpCircle className="w-5 h-5 text-slate-300 shrink-0 mt-1" />
                <p className="text-sm text-slate-600 font-medium leading-relaxed"><strong>Dispute Resolution:</strong> Errors in school billing are rectified within 5-10 business days.</p>
              </li>
            </ul>
        </div>
      </div>

      {/* Support Section */}
      <div className="p-12 bg-[#072432] rounded-[3.5rem] text-center border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold text-white mb-4 uppercase">Need help with a refund?</h3>
          <p className="text-slate-400 font-medium mb-8 max-w-md mx-auto">Our billing support team is available Monday to Friday to assist with any payment inquiries.</p>
          <button className="px-10 py-4 bg-brand-teal text-[#072432] rounded-2xl font-semibold text-[10px] uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-teal/10">
            Contact Billing Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyModule;

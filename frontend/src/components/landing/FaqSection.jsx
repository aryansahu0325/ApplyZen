import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function FaqSection() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "What is ApplyZen?",
      a: "ApplyZen is your AI career copilot that scans your email and finds jobs, builds tailored resumes, fills applications, and tracks everything in one place."
    },
    {
      q: "Is my data safe?",
      a: "Yes. ApplyZen takes privacy seriously. Your credential keys and resume details are fully encrypted and only used to scan career communications with your permission."
    },
    {
      q: "Which platforms do you support?",
      a: "We support all major job boards including LinkedIn, Indeed, Glassdoor, and niche career sites."
    },
    {
      q: "Can I review applications before they are submitted?",
      a: "Absolutely. You can choose between 'Auto-Pilot' for full automation or 'Review Mode' to approve each application before it goes out."
    },
    {
      q: "Does ApplyZen help with cover letters?",
      a: "Yes. Our AI generates high-quality, tailored cover letters for every application, matching your background to the job requirements."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-widest">Support</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-50 border border-slate-100 rounded-xl overflow-hidden transition-all">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 focus:outline-none"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === index && (
                <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm mb-4">Still have questions?</p>
          <a className="inline-flex items-center gap-2 text-primary font-bold hover:underline transition-all" href="#">
            Contact Support <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

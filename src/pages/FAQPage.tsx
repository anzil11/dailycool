import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, MessageSquare, PhoneCall, Send, Check } from 'lucide-react';
import { FAQ_DATA, COMPANY_INFO } from '../data/content';

interface FAQPageProps {
  onNavigate: (page: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Custom question state
  const [userQuestion, setUserQuestion] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [questionSent, setQuestionSent] = useState(false);

  const categories = ['All', 'General', 'MEP Services', 'AMC & Maintenance', 'Execution & Quality'];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleCustomQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    setQuestionSent(true);
    setTimeout(() => {
      setUserQuestion('');
      setUserEmail('');
      setQuestionSent(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-900 text-xs font-extrabold uppercase tracking-widest">
            <HelpCircle className="w-4 h-4 text-cyan-700" />
            Clear Answers
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#0B2B40]">
            Frequently Asked <span className="text-cyan-600">Questions</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Everything you need to know about Daily Cool’s MEP installations, AMC contracts, and service execution in Dubai.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0B2B40] text-white shadow-md'
                    : 'text-slate-700 hover:text-[#0B2B40] bg-white border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 shadow-sm"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="py-12 text-center bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-sm text-slate-500">No matching questions found.</p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'bg-slate-50 border-cyan-500 shadow-md'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-[#0B2B40] focus:outline-none"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white text-cyan-800 border border-slate-200 shadow-sm">
                        {faq.category}
                      </span>
                      <span>{faq.question}</span>
                    </span>

                    <ChevronDown
                      className={`w-5 h-5 text-cyan-600 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-sm text-slate-700 font-medium leading-relaxed border-t border-slate-200 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions? Custom Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 border border-cyan-300 flex items-center justify-center text-cyan-800">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#0B2B40]">Have a Specific Technical Question?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ask our senior MEP engineer directly or call us at <strong className="text-cyan-800">{COMPANY_INFO.phones[0]}</strong>.
            </p>
          </div>

          <div className="md:col-span-7">
            {questionSent ? (
              <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-300 text-cyan-900 text-xs font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-700" />
                Thank you! Your technical question has been submitted to our team.
              </div>
            ) : (
              <form onSubmit={handleCustomQuestion} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-cyan-600 shadow-sm"
                />
                <textarea
                  required
                  rows={3}
                  placeholder="Type your question about AC, ducting, DEWA specs, or AMC contracts..."
                  value={userQuestion}
                  onChange={(e) => setUserQuestion(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-cyan-600 shadow-sm"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#0B2B40] hover:bg-[#071927] shadow flex items-center justify-center gap-2"
                >
                  <span>Ask Engineer</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

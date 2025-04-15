import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: "What services does GoDigitify offer?",
      answer: "We provide digital marketing, web development, AI solutions, and branding services to help businesses grow online.",
      category: "general",
    },
    {
      id: 2,
      question: "How do I contact support?",
      answer: "Email us at support@godigitify.com or use the live chat feature on our website.",
      category: "general",
    },
    {
      id: 3,
      question: "Do you offer website maintenance?",
      answer: "Yes, we provide monthly maintenance packages including updates, backups, and security checks.",
      category: "technical",
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, PayPal, bank transfers, and cryptocurrency.",
      category: "payments",
    },
  ];

  const [activeId, setActiveId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeCategory === "all" || faq.category === activeCategory)
  );

  const categories = [
    { id: "all", name: "All" },
    { id: "general", name: "General" },
    { id: "technical", name: "Technical" },
    { id: "payments", name: "Payments" },
  ];

  return (
    <section 
      className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#f8fafc' }} // Light background
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#00112d' }}>
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg" style={{ color: '#4b5563' }}>
          Find answers to common questions about our services
        </p>
      </div>

      {/* Search + Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-purple-800"
            style={{ 
              borderColor: '#e2e8f0',
              backgroundColor: '#ffffff',
              color: '#00112d',
              focusRingColor: '#6b46c1'
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute right-3 top-3.5 h-5 w-5"
            style={{ color: '#6b46c1' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeCategory === cat.id
                  ? "text-white"
                  : "text-purple-800 hover:bg-purple-100"
              }`}
              style={{
                backgroundColor: activeCategory === cat.id ? '#6b46c1' : '#f3e8ff'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              className="border rounded-xl overflow-hidden transition-all"
              style={{
                borderColor: '#e2e8f0',
                backgroundColor: '#ffffff'
              }}
            >
              <button
                className="flex items-center justify-between w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
              >
                <span className="font-medium" style={{ color: '#00112d' }}>
                  {faq.question}
                </span>
                {activeId === faq.id ? (
                  <Minus className="h-5 w-5" style={{ color: '#6b46c1' }} />
                ) : (
                  <Plus className="h-5 w-5" style={{ color: '#6b46c1' }} />
                )}
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeId === faq.id ? "py-4 border-t" : "max-h-0 py-0"
                }`}
                style={{ borderTopColor: '#e2e8f0' }}
              >
                <p style={{ color: '#4b5563' }}>{faq.answer}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <p style={{ color: '#6b7280' }}>No results found. Try a different search.</p>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="mb-4" style={{ color: '#4b5563' }}>
          Still have questions?
        </p>
        <button 
          className="px-6 py-3 font-medium rounded-lg transition-colors"
          style={{
            backgroundColor: '#6b46c1',
            color: '#ffffff',
            hoverBackgroundColor: '#5b3a9a'
          }}
        >
          Contact Support
        </button>
      </div>
    </section>
  );
};

export default FAQ;

import React, { useState, useRef, useEffect } from "react";
import { useScrollAnimation } from "../hooks/useAnimations";

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full py-5 md:py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={toggle}
      >
        <span
          className={`text-sm sm:text-base md:text-lg font-bold transition-colors duration-300 pr-4 ${isOpen ? "text-rose-600" : "text-gray-900 group-hover:text-rose-600"}`}
        >
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-gradient-to-br from-rose-500 to-orange-500 text-white rotate-180 shadow-lg shadow-rose-500/30" : "bg-gray-100 text-gray-400 group-hover:bg-rose-50 group-hover:text-rose-500"}`}
        >
          <svg
            className="w-4 h-4 md:w-5 md:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          maxHeight: isOpen ? `${height + 24}px` : "0px",
          opacity: isOpen ? 1 : 0,
          paddingBottom: isOpen ? "24px" : "0px",
        }}
      >
        <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [headRef, headVisible] = useScrollAnimation();
  const [faqRef, faqVisible] = useScrollAnimation({ threshold: 0.1 });

  const faqs = [
    {
      q: "Is BillTrack free to use?",
      a: "BillTrack offers a generous free tier for small businesses with up to 50 invoices/month. Premium plans start at just ₹199/month with unlimited invoices, automated tax reports, and multi-user access.",
    },
    {
      q: "Is my financial data secure?",
      a: "Absolutely. We use bank-grade 256-bit AES encryption and are SOC-2 compliant. Your data is backed up daily across multiple secure cloud servers with 99.9% uptime guarantee.",
    },
    {
      q: "Can I generate GST-compliant invoices?",
      a: "Yes! BillTrack is fully compliant with Indian GST regulations. Generate GSTR-1, GSTR-3B, and e-invoices. Export and share GST-compliant invoices in PDF format instantly.",
    },
    {
      q: "Does it work offline?",
      a: "Yes, you can create invoices and track expenses offline. The app automatically syncs all your data once you're back online — no data is ever lost.",
    },
    {
      q: "Can I export my data?",
      a: "Yes, export your data in PDF, Excel, CSV, and JSON formats. Share reports directly with your accountant via email or WhatsApp.",
    },
    {
      q: "Do you offer customer support?",
      a: "We offer 24/7 priority support via in-app chat, email, and phone for all premium users. Free users get email support with a 24-hour response time.",
    },
  ];

  return (
    <section
      id="faq"
      className="w-full py-12 md:py-16 lg:py-24 bg-gray-50/50 scroll-mt-20"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <div
            ref={headRef}
            className={`text-center mb-10 md:mb-16 animate-fade-in-up ${headVisible ? "is-visible" : ""}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-500 text-[10px] md:text-xs font-bold tracking-widest mb-4 md:mb-6 shadow-sm">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6 tracking-tight">
              Got{" "}
              <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                questions?
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-500 font-medium">
              Everything you need to know about BillTrack.
            </p>
          </div>

          <div
            ref={faqRef}
            className={`bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10 shadow-xl shadow-gray-200/30 border border-gray-100 animate-fade-in-up stagger-2 ${faqVisible ? "is-visible" : ""}`}
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={i === openIndex}
                toggle={() => setOpenIndex(i === openIndex ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

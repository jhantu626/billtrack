import React from "react";
import { useScrollAnimation } from "../hooks/useAnimations";

const features = [
  {
    title: "Smart Invoicing",
    desc: "Create professional GST-compliant invoices in seconds. Auto-calculations, beautiful templates, and instant sharing.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        ></path>
      </svg>
    ),
    gradient: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    glow: "shadow-blue-500/20",
  },
  {
    title: "Expense Tracking",
    desc: "Log and categorize every expense effortlessly. Smart categories, receipt scanning, and monthly summaries.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    glow: "shadow-emerald-500/20",
  },
  {
    title: "Payment Reminders",
    desc: "Never miss a payment again. Automated WhatsApp & SMS reminders keep your cash flow healthy.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        ></path>
      </svg>
    ),
    gradient: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    glow: "shadow-amber-500/20",
  },
  {
    title: "GST & Tax Reports",
    desc: "Generate government-compliant tax reports instantly. GSTR-1, GSTR-3B, and profit & loss statements.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        ></path>
      </svg>
    ),
    gradient: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
    glow: "shadow-purple-500/20",
  },
  {
    title: "Real-Time Analytics",
    desc: "Track revenue, expenses, and profit in real-time. Beautiful charts and actionable business insights.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
        ></path>
      </svg>
    ),
    gradient: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
    glow: "shadow-rose-500/20",
  },
  {
    title: "Secure Cloud Backup",
    desc: "Bank-grade 256-bit encryption. Your billing data is automatically backed up and always accessible.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        ></path>
      </svg>
    ),
    gradient: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-50",
    glow: "shadow-cyan-500/20",
  },
];

const Features = () => {
  const [headingRef, headingVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="features"
      className="w-full py-12 md:py-16 lg:py-24 bg-gray-50/50 scroll-mt-20"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div
          ref={headingRef}
          className={`text-center max-w-3xl mx-auto mb-16 animate-fade-in-up ${headingVisible ? "is-visible" : ""}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-500 text-[10px] md:text-xs font-bold tracking-widest mb-4 md:mb-6 shadow-sm">
            POWERFUL FEATURES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6 tracking-tight leading-tight">
            Everything you need for <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
              smarter billing.
            </span>
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Six powerful tools, one simple app. Built for businesses that move
            fast.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f, i) => (
            <div
              key={i}
              className={`group bg-white p-8 rounded-3xl border border-gray-100 shadow-lg ${f.glow} hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden animate-fade-in-up stagger-${i + 1} ${gridVisible ? "is-visible" : ""}`}
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${f.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500 translate-x-8 -translate-y-8`}
              ></div>
              <div
                className={`w-14 h-14 bg-gradient-to-br ${f.gradient} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg ${f.glow} group-hover:scale-110 transition-transform duration-300`}
              >
                {f.icon}
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                {f.title}
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

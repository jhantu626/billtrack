import React from "react";
import { useScrollAnimation } from "../hooks/useAnimations";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Meera Nair",
      role: "Freelance Designer, Mumbai",
      content:
        "BillTrack completely transformed my invoicing workflow. I went from spending hours on Excel to creating professional invoices in seconds. The GST compliance feature alone saved me ₹50,000 in accountant fees.",
      rating: 5,
      img: 20,
    },
    {
      name: "Rajesh Kumar",
      role: "Retail Store Owner, Delhi",
      content:
        "The real-time analytics blew my mind. I can finally see exactly where my money is going and which customers are the most profitable. My revenue grew 40% in 3 months after switching to BillTrack.",
      rating: 5,
      img: 33,
    },
    {
      name: "Sarah Jenkins",
      role: "Consulting Firm CEO, Bangalore",
      content:
        "As someone who manages 50+ clients, the payment reminders feature is a game-changer. My overdue payments dropped by 80% and cash flow has never been healthier. Highly recommend!",
      rating: 5,
      img: 26,
    },
  ];

  const [headRef, headVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="testimonials"
      className="w-full py-12 md:py-16 lg:py-24 bg-white scroll-mt-20"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div
          ref={headRef}
          className={`text-center mb-16 animate-fade-in-up ${headVisible ? "is-visible" : ""}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-500 text-[10px] md:text-xs font-bold tracking-widest mb-4 md:mb-6 shadow-sm">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6 tracking-tight">
            Loved by{" "}
            <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
              businesses everywhere.
            </span>
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`group bg-gray-50 p-8 rounded-3xl border border-gray-100 relative hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2 transition-all duration-500 animate-fade-in-up stagger-${i + 1} ${gridVisible ? "is-visible" : ""}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 font-medium leading-relaxed mb-8 text-[15px]">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img
                    src={`https://i.pravatar.cc/100?img=${t.img}`}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-extrabold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500 font-semibold">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

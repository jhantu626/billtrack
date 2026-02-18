import React from "react";
import { useScrollAnimation } from "../hooks/useAnimations";

const CTA = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="w-full py-10 md:py-16 lg:py-24 px-6 md:px-12 lg:px-20">
      <div
        ref={ref}
        className={`bg-gradient-to-br from-rose-500 via-pink-500 to-orange-500 rounded-2xl md:rounded-[2.5rem] p-8 md:p-14 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-rose-500/20 animate-scale-in ${isVisible ? "is-visible" : ""}`}
      >
        {/* Decorative */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8 tracking-tight leading-tight">
            Ready to simplify
            <br />
            your billing?
          </h2>
          <p className="text-rose-100 text-sm md:text-lg lg:text-xl font-medium mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 10,000+ businesses who trust BillTrack for their financial
            management. Start free, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-6 md:px-10 py-4 md:py-5 bg-white text-rose-600 rounded-full font-bold text-base md:text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-xl flex items-center gap-2">
              Download BillTrack Today
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
            <button className="px-6 md:px-8 py-4 md:py-5 text-white/90 border-2 border-white/30 rounded-full font-bold text-sm md:text-base hover:bg-white/10 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

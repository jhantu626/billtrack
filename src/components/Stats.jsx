import React from "react";
import { useScrollAnimation } from "../hooks/useAnimations";

const Stats = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const stats = [
    { value: "$2B+", label: "Invoices Processed", icon: "📊" },
    { value: "150K", label: "Active Businesses", icon: "🏢" },
    { value: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
    { value: "4.9★", label: "App Store Rating", icon: "⭐" },
  ];

  return (
    <section className="w-full bg-gray-950 py-16 md:py-20 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px]"></div>

      <div className="w-full px-6 md:px-12 lg:px-20 relative z-10">
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center group p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 animate-scale-in stagger-${i + 1} ${isVisible ? "is-visible" : ""}`}
            >
              <div className="text-2xl md:text-3xl mb-2 md:mb-3">{s.icon}</div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-105 transition-transform duration-300">
                {s.value}
              </div>
              <div className="text-gray-500 font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

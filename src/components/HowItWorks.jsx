import React from "react";
import { useScrollAnimation } from "../hooks/useAnimations";

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Download the App",
      desc: "Get BillTrack free on iOS or Android. Setup takes less than 2 minutes.",
      gradient: "from-rose-500 to-pink-500",
      glow: "shadow-rose-500/30",
    },
    {
      num: "02",
      title: "Set Up Your Business",
      desc: "Add your business details, logo, and GST info. We handle the rest.",
      gradient: "from-orange-500 to-amber-500",
      glow: "shadow-orange-500/30",
    },
    {
      num: "03",
      title: "Start Billing & Tracking",
      desc: "Create invoices, track expenses, and watch your insights grow in real-time.",
      gradient: "from-emerald-500 to-teal-500",
      glow: "shadow-emerald-500/30",
    },
  ];

  const [headRef, headVisible] = useScrollAnimation();
  const [stepsRef, stepsVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="how-it-works"
      className="w-full py-12 md:py-16 lg:py-24 bg-white relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-50 rounded-full blur-[120px] -z-10"></div>

      <div className="w-full px-6 md:px-12 lg:px-20">
        <div
          ref={headRef}
          className={`text-center mb-16 animate-fade-in-up ${headVisible ? "is-visible" : ""}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-500 text-[10px] md:text-xs font-bold tracking-widest mb-4 md:mb-6 shadow-sm">
            GETTING STARTED
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6 tracking-tight">
            Up and running in{" "}
            <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
              minutes.
            </span>
          </h2>
          <p className="text-sm md:text-lg text-gray-500 max-w-xl mx-auto font-medium">
            Three simple steps to transform how you manage your business
            finances.
          </p>
        </div>

        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-rose-200 via-orange-200 to-emerald-200 z-0"></div>

          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-center text-center group z-10 animate-fade-in-up stagger-${i + 1} ${stepsVisible ? "is-visible" : ""}`}
            >
              <div
                className={`w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-2xl md:text-3xl lg:text-4xl font-black mb-6 md:mb-8 shadow-2xl ${step.glow} group-hover:scale-110 transition-transform duration-500 ring-4 md:ring-8 ring-white`}
              >
                {step.num}
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-gray-900 mb-2 md:mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed max-w-xs text-sm md:text-base">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

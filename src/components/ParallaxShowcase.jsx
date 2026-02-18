import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxShowcase = () => {
  const container = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.to(card1.current, { y: -150, rotate: -2, ease: "power1.inOut" }, 0)
        .to(card2.current, { y: -50, rotate: 2, ease: "power1.inOut" }, 0)
        .to(card3.current, { y: -250, rotate: -1, ease: "power1.inOut" }, 0);
    },
    { scope: container },
  );

  return (
    <section
      id="showcase"
      ref={container}
      className="relative py-32 bg-slate-50 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Run Your Business on{" "}
            <span className="text-rose-500">Autopilot</span>
          </h2>
          <p className="text-xl text-gray-500">
            From creating invoices to tracking inventory, BillTrack puts your
            entire business in your pocket.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 perspective-1000">
          {/* Card 1 */}
          <div
            ref={card1}
            className="w-full md:w-80 p-6 bg-white rounded-3xl shadow-2xl border border-gray-100 transform transition-transform will-change-transform"
          >
            <div className="h-40 bg-indigo-50 rounded-2xl mb-6 relative overflow-hidden group flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-white opacity-50" />
              <div className="text-6xl">🧾</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              30-Second Invoices
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Generate professional GST/non-GST invoices instantly and share
              them via WhatsApp or Email.
            </p>
          </div>

          {/* Card 2 (Center - slightly elevated initially) */}
          <div
            ref={card2}
            className="w-full md:w-96 p-8 bg-gray-900 rounded-3xl shadow-2xl shadow-rose-500/20 transform -translate-y-12 z-20 will-change-transform border border-gray-800"
          >
            <div className="h-48 bg-gray-800 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-transparent" />
              <div className="text-7xl">📊</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Live Dashboard
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Track daily sales, outstanding payments, and profit margins in
              real-time. Know exactly where you stand.
            </p>
          </div>

          {/* Card 3 */}
          <div
            ref={card3}
            className="w-full md:w-80 p-6 bg-white rounded-3xl shadow-2xl border border-gray-100 transform transition-transform will-change-transform"
          >
            <div className="h-40 bg-emerald-50 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-white opacity-50" />
              <div className="text-6xl">🔒</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Secure Cloud Backup
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Never lose your data. Automatic cloud sync ensures your business
              records are safe and accessible anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxShowcase;

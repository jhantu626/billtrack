import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Inventory Intelligence",
    description:
      "Never run out of stock again. BillTrack tracks every item, alerting you when supplies are low so you can restock in time.",
    color: "bg-blue-600",
    icon: "📦",
  },
  {
    title: "GST Made Simple",
    description:
      "Generate GST-compliant invoices automatically. Download GSTR-1, GSTR-2, and GSTR-3B reports with a single click for hassle-free filing.",
    color: "bg-rose-600",
    icon: "📑",
  },
  {
    title: "Payment Reminders",
    description:
      "Reduce unpaid bills by sending automated payment reminders to clients via WhatsApp and SMS. Get paid 3x faster.",
    color: "bg-amber-600",
    icon: "⏰",
  },
];

const DeepDive = () => {
  const container = useRef(null);
  const leftCol = useRef(null);
  const rightCol = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      // Pin the left column (text) while scrolling through the specific section
      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftCol.current,
        pinSpacing: false,
      });

      // Animate the cards on the right as they scroll into view
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.95, y: 30 },
          {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 50%",
              scrub: true,
            },
            opacity: 1,
            scale: 1,
            y: 0,
            ease: "power2.out",
          },
        );
      });
    },
    { scope: container },
  );

  return (
    <section
      id="deep-dive"
      ref={container}
      className="relative min-h-[150vh] bg-white"
    >
      <div className="container mx-auto px-6 h-full">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Static / Pinned Section */}
          <div
            ref={leftCol}
            className="lg:w-1/2 flex items-center h-screen top-0 sticky"
          >
            <div className="max-w-lg p-8">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Deep Dive into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">
                  Powerful Features
                </span>
              </h2>
              <p className="text-xl text-gray-500 mb-8">
                Everything you need to run your business smoothly, packed into
                one intuitive app.
              </p>
              <button className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                Explore All Features
              </button>
            </div>
          </div>

          {/* Scrolling Content */}
          <div
            ref={rightCol}
            className="lg:w-1/2 flex flex-col justify-center gap-24 py-24 lg:py-0"
          >
            {features.map((feature, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="group relative p-8 md:p-12 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors"
                style={{
                  minHeight: "60vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  className={`w-20 h-20 rounded-2xl ${feature.color} text-white flex items-center justify-center mb-8 shadow-xl shadow-gray-200`}
                >
                  <span className="font-bold text-4xl">{feature.icon}</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-xl text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-8 overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 h-64 relative">
                  <div className="absolute inset-x-0 bottom-0 top-10 bg-gray-100 rounded-t-xl mx-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 shadow-inner flex items-center justify-center text-gray-300">
                    Placeholder UI for {feature.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeepDive;

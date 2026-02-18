import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const container = useRef(null);
  const cardsRef = useRef([]);
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" or "yearly"

  const plans = [
    {
      name: "Free Forever",
      price: billingCycle === "monthly" ? "₹0" : "₹0",
      period: "/ life",
      description: "Essential tools for freelancers and side-hustlers.",
      features: [
        "1 Business Profile",
        "Professional Invoices",
        "Basic Expense Tracking",
        "Email Support",
        "Data Backup",
      ],
      cta: "Download Now",
      popular: false,
    },
    {
      name: "Growth",
      price: billingCycle === "monthly" ? "₹349" : "₹3,499",
      period: billingCycle === "monthly" ? "/ month" : "/ year",
      description: "Unlock full power for your growing business.",
      features: [
        "Everything in Free",
        "Inventory Management",
        "GST Reports (GSTR-1/3B)",
        "WhatsApp Reminders",
        "Profit & Loss Reports",
      ],
      cta: "Start 14-Day Trial",
      popular: true,
      save: billingCycle === "yearly" ? "Save 20%" : null,
    },
    {
      name: "Enterprise",
      price: billingCycle === "monthly" ? "₹999" : "₹9,999",
      period: billingCycle === "monthly" ? "/ month" : "/ year",
      description: "Advanced control for teams and multiple stores.",
      features: [
        "Unlimited Users",
        "Multi-Store Management",
        "Dedicated Support",
        "Custom Invoice Themes",
        "Bulk Data Import",
      ],
      cta: "Contact Sales",
      popular: false,
      save: billingCycle === "yearly" ? "Save 20%" : null,
    },
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 100 },
        {
          scrollTrigger: {
            trigger: container.current,
            start: "top 70%",
          },
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      id="pricing"
      ref={container}
      className="py-32 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Choose the plan that fits your business needs. No hidden fees.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center space-x-4">
            <span
              className={`text-lg transition-colors ${billingCycle === "monthly" ? "text-white font-bold" : "text-gray-400"}`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle((prev) =>
                  prev === "monthly" ? "yearly" : "monthly",
                )
              }
              className="relative w-16 h-8 bg-gray-700 rounded-full p-1 transition-colors hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <div
                className={`w-6 h-6 bg-rose-500 rounded-full shadow-md transform transition-transform duration-300 ${
                  billingCycle === "monthly" ? "translate-x-0" : "translate-x-8"
                }`}
              />
            </button>
            <span
              className={`text-lg transition-colors ${billingCycle === "yearly" ? "text-white font-bold" : "text-gray-400"}`}
            >
              Yearly{" "}
              <span className="text-xs text-rose-500 font-normal ml-1">
                (Save 20%)
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`relative p-8 rounded-3xl border flex flex-col ${
                plan.popular
                  ? "border-rose-500 bg-gray-800"
                  : "border-gray-800 bg-gray-800/50"
              } backdrop-blur-sm hover:translate-y-[-10px] transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-rose-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              {plan.save && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
                  {plan.save}
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-xl font-bold transition-colors mt-auto ${
                  plan.popular
                    ? "bg-rose-500 hover:bg-rose-600 text-white"
                    : "bg-white text-gray-900 hover:bg-gray-100"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

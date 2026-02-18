import React from "react";
import { useScrollAnimation } from "../hooks/useAnimations";

const Hero = () => {
  const [leftRef, leftVisible] = useScrollAnimation({ threshold: 0.1 });
  const [rightRef, rightVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-rose-50 via-white to-orange-50">
      {/* Decorative Background Blobs */}
      <div className="absolute top-20 left-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-rose-200/30 rounded-full blur-[120px] animate-glow"></div>
      <div
        className="absolute bottom-0 right-0 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-orange-200/30 rounded-full blur-[120px] animate-glow"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-violet-200/20 rounded-full blur-[100px] animate-glow"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="w-full px-6 md:px-12 lg:px-20 pt-24 md:pt-28 pb-12 md:pb-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
        {/* Left Content */}
        <div
          ref={leftRef}
          className={`flex-1 text-center lg:text-left z-10 max-w-2xl lg:max-w-none animate-fade-in-left ${leftVisible ? "is-visible" : ""}`}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-rose-100 text-rose-600 text-[10px] md:text-xs font-bold tracking-widest mb-6 md:mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 animate-pulse"></span>
            SMART MOBILE BILLING APP
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-black text-gray-900 leading-[1.1] mb-6 md:mb-8 tracking-tight">
            Manage your billing with{" "}
            <span className="relative inline">
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                centralized smart tracking.
              </span>
              <span className="absolute bottom-0 md:bottom-1 left-0 right-0 h-2 md:h-3 bg-gradient-to-r from-rose-200 to-orange-200 -z-10 rounded-full opacity-60"></span>
            </span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-gray-500 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            BillTrack helps small businesses create invoices, track expenses,
            monitor payments, and manage financial insights — all from one
            simple mobile app.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-8 md:mb-12">
            <button className="group px-6 md:px-8 py-3.5 md:py-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full font-bold text-base md:text-lg shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              Download the App
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
            <button className="px-6 md:px-8 py-3.5 md:py-4 bg-white text-gray-800 border-2 border-gray-200 rounded-full font-bold text-base md:text-lg hover:border-rose-300 hover:text-rose-600 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-gray-100">
              View App Preview
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4">
            <div className="flex -space-x-2.5">
              {[11, 12, 13, 14, 15].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[3px] border-white shadow-md overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/80?img=${i}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-xs md:text-sm">
              <span className="font-extrabold text-gray-900">10,000+</span>
              <span className="text-gray-500 font-medium">
                {" "}
                growing businesses
              </span>
            </div>
          </div>
        </div>

        {/* Right - Premium Dashboard Mockup */}
        <div
          ref={rightRef}
          className={`flex-1 relative w-full min-h-[420px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[560px] flex items-center justify-center z-10 animate-fade-in-right ${rightVisible ? "is-visible" : ""}`}
        >
          {/* Glow behind the dashboard */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gradient-to-br from-rose-400/20 via-pink-300/15 to-orange-400/20 rounded-full blur-[80px]"></div>

          {/* Main Dashboard Card */}
          <div
            className="relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-gray-900/[0.08] border border-white/70 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] p-5 md:p-7 animate-float"
            style={{ "--rotate": "2deg" }}
          >
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-5 md:mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 md:w-9 md:h-9 bg-gradient-to-br from-rose-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-xs font-black shadow-md shadow-rose-500/30">
                  B
                </div>
                <div>
                  <div className="text-xs md:text-sm font-extrabold text-gray-900">
                    BillTrack
                  </div>
                  <div className="text-[9px] md:text-[10px] text-gray-400 font-semibold">
                    Dashboard
                  </div>
                </div>
              </div>
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              </div>
            </div>

            {/* Revenue Banner */}
            <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 rounded-2xl p-4 md:p-5 mb-4 md:mb-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-6 -translate-x-6"></div>
              <div className="relative z-10">
                <div className="text-[10px] md:text-xs text-rose-100 font-semibold mb-1">
                  Monthly Revenue
                </div>
                <div className="text-2xl md:text-3xl font-black text-white mb-2">
                  ₹2,45,300
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full">
                    ↑ 23.5%
                  </span>
                  <span className="text-rose-100 text-[9px] md:text-[10px] font-medium">
                    vs last month
                  </span>
                </div>
              </div>
            </div>

            {/* Mini Chart */}
            <div className="bg-gray-50/80 rounded-2xl p-3.5 md:p-4 mb-4 md:mb-5 border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] md:text-xs font-extrabold text-gray-900">
                  Weekly Overview
                </span>
                <span className="text-[9px] md:text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                  +18.2%
                </span>
              </div>
              <div className="flex items-end gap-[5px] md:gap-2 h-12 md:h-16">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-md md:rounded-lg transition-all duration-500 hover:opacity-70 cursor-pointer"
                    style={{
                      height: `${h}%`,
                      background:
                        i === 5
                          ? "linear-gradient(to top, #f43f5e, #f97316)"
                          : i === 3
                            ? "linear-gradient(to top, #f43f5e90, #f9731690)"
                            : "#f3f4f6",
                    }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between text-[7px] md:text-[8px] text-gray-400 font-semibold mt-1.5">
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
              </div>
            </div>

            {/* Recent Transactions */}
            <div>
              <div className="text-[10px] md:text-xs font-extrabold text-gray-900 mb-3">
                Recent Invoices
              </div>
              {[
                {
                  name: "Priya Sharma",
                  amount: "₹12,500",
                  status: "Paid",
                  color: "bg-emerald-500",
                  bg: "bg-gradient-to-br from-violet-100 to-pink-100",
                  initial: "P",
                },
                {
                  name: "Arjun Patel",
                  amount: "₹8,200",
                  status: "Pending",
                  color: "bg-amber-500",
                  bg: "bg-gradient-to-br from-blue-100 to-cyan-100",
                  initial: "A",
                },
                {
                  name: "Sarah Khan",
                  amount: "₹3,750",
                  status: "Paid",
                  color: "bg-emerald-500",
                  bg: "bg-gradient-to-br from-rose-100 to-orange-100",
                  initial: "S",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 md:py-2.5 border-b border-gray-100/80 last:border-0 group hover:bg-gray-50/50 -mx-1 px-1 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-7 h-7 md:w-8 md:h-8 ${item.bg} rounded-xl flex items-center justify-center text-[10px] md:text-xs font-bold text-gray-600`}
                    >
                      {item.initial}
                    </div>
                    <div>
                      <div className="text-[10px] md:text-xs font-bold text-gray-900">
                        {item.name}
                      </div>
                      <div className="text-[8px] md:text-[9px] text-gray-400 font-semibold">
                        #INV-00{i + 1}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] md:text-xs font-bold text-gray-900">
                      {item.amount}
                    </div>
                    <div className="flex items-center gap-1 justify-end">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${item.color}`}
                      ></div>
                      <span className="text-[8px] md:text-[9px] text-gray-400 font-semibold">
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Notification Card - Top Right */}
          <div
            className="absolute -top-2 sm:top-0 right-0 sm:right-2 lg:right-0 bg-white/90 backdrop-blur-xl px-3.5 py-2.5 md:px-4 md:py-3 rounded-2xl shadow-xl shadow-gray-900/[0.06] border border-white/70 animate-float-delayed flex items-center gap-2.5 md:gap-3"
            style={{ "--rotate": "-3deg" }}
          >
            <div className="w-8 h-8 md:w-9 md:h-9 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-md shadow-emerald-500/30">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <div>
              <div className="text-[10px] md:text-xs font-bold text-gray-900">
                Payment Received!
              </div>
              <div className="text-[9px] md:text-[10px] text-emerald-600 font-semibold">
                +₹15,000 from Tata Steel
              </div>
            </div>
          </div>

          {/* Floating Stats Pill - Bottom Left */}
          <div
            className="absolute bottom-4 sm:bottom-8 -left-2 sm:left-0 lg:-left-6 bg-white/90 backdrop-blur-xl p-3 md:p-4 rounded-2xl shadow-xl shadow-gray-900/[0.06] border border-white/70 animate-float-slow"
            style={{ "--rotate": "-2deg" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-md shadow-violet-500/30">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  ></path>
                </svg>
              </div>
              <div>
                <div className="text-lg md:text-xl font-black text-gray-900">
                  98.5%
                </div>
                <div className="text-[9px] md:text-[10px] text-gray-400 font-semibold">
                  Collection Rate
                </div>
              </div>
            </div>
          </div>

          {/* Floating Mini Card - Bottom Right */}
          <div
            className="absolute bottom-0 sm:bottom-2 right-0 sm:right-4 lg:right-2 bg-white/90 backdrop-blur-xl p-3 md:p-3.5 rounded-2xl shadow-xl shadow-gray-900/[0.06] border border-white/70 animate-float-delayed"
            style={{ "--rotate": "4deg", animationDelay: "3s" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md shadow-amber-500/30">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <div className="text-sm md:text-base font-black text-gray-900">
                  128
                </div>
                <div className="text-[8px] md:text-[9px] text-gray-400 font-semibold">
                  Invoices
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

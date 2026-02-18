import React from "react";
import { useScrollAnimation } from "../hooks/useAnimations";

const AppPreview = () => {
  const [headRef, headVisible] = useScrollAnimation();
  const [phoneRef, phoneVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-rose-200/40 to-orange-200/40 rounded-full blur-[120px]"></div>

      <div className="w-full px-6 md:px-12 lg:px-20 text-center relative z-10">
        <div
          ref={headRef}
          className={`animate-fade-in-up ${headVisible ? "is-visible" : ""}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-500 text-xs font-bold tracking-widest mb-6 shadow-sm">
            APP PREVIEW
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Beautiful on{" "}
            <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
              every screen.
            </span>
          </h2>
          <p className="text-lg text-gray-500 font-medium mb-16 max-w-xl mx-auto">
            A clean, intuitive interface designed for speed and simplicity.
          </p>
        </div>

        {/* Phone Mockup */}
        <div
          ref={phoneRef}
          className={`relative mx-auto w-[280px] md:w-[320px] animate-scale-in ${phoneVisible ? "is-visible" : ""}`}
        >
          {/* Phone Frame */}
          <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-gray-900/30 relative">
            {/* Side Buttons */}
            <div className="h-8 w-[3px] bg-gray-700 absolute -left-[3px] top-20 rounded-l-lg"></div>
            <div className="h-12 w-[3px] bg-gray-700 absolute -left-[3px] top-32 rounded-l-lg"></div>
            <div className="h-12 w-[3px] bg-gray-700 absolute -left-[3px] top-48 rounded-l-lg"></div>
            <div className="h-16 w-[3px] bg-gray-700 absolute -right-[3px] top-36 rounded-r-lg"></div>

            {/* Screen */}
            <div className="bg-gray-50 rounded-[2.3rem] overflow-hidden">
              {/* Notch */}
              <div className="bg-gray-900 h-8 flex items-center justify-center relative">
                <div className="w-24 h-6 bg-gray-900 rounded-b-2xl absolute -top-0"></div>
              </div>

              {/* Status Bar */}
              <div className="bg-white px-5 py-2 flex justify-between items-center text-[10px] font-bold text-gray-900">
                <span>9:41</span>
                <div className="flex gap-1.5 items-center">
                  <div className="w-3.5 h-2 border border-gray-900 rounded-sm relative">
                    <div className="absolute inset-0.5 bg-gray-900 rounded-[1px]"></div>
                  </div>
                </div>
              </div>

              {/* Revenue Card */}
              <div className="px-4 pt-2 pb-4">
                <div className="bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl p-5 text-white shadow-lg">
                  <div className="text-[10px] opacity-80 font-semibold mb-0.5">
                    Total Balance
                  </div>
                  <div className="text-2xl font-black mb-3">₹2,45,300</div>
                  <div className="flex gap-2">
                    <div className="flex-1 p-2 bg-white/20 rounded-xl text-center text-[10px] font-bold backdrop-blur-sm">
                      + Income
                    </div>
                    <div className="flex-1 p-2 bg-white/10 rounded-xl text-center text-[10px] font-bold backdrop-blur-sm">
                      Transfer
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="px-4 pb-3 flex justify-between gap-2">
                {["💳", "📄", "📊", "⚙️"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 text-lg"
                  >
                    {emoji}
                  </div>
                ))}
              </div>

              {/* Invoice List */}
              <div className="px-4 pb-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-extrabold text-gray-900 text-xs">
                      Recent Invoices
                    </span>
                    <span className="text-[10px] text-rose-500 font-bold">
                      See All
                    </span>
                  </div>
                  {[
                    {
                      name: "Priya Sharma",
                      inv: "#INV-001",
                      amt: "₹1,200",
                      status: "Paid",
                      color: "text-emerald-500 bg-emerald-50",
                    },
                    {
                      name: "Arjun Patel",
                      inv: "#INV-002",
                      amt: "₹3,450",
                      status: "Pending",
                      color: "text-amber-500 bg-amber-50",
                    },
                    {
                      name: "Sarah Khan",
                      inv: "#INV-003",
                      amt: "₹890",
                      status: "Paid",
                      color: "text-emerald-500 bg-emerald-50",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2.5 border-b border-gray-50 last:border-0"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">
                          {item.name[0]}
                        </div>
                        <div>
                          <div className="text-[11px] font-bold text-gray-900">
                            {item.name}
                          </div>
                          <div className="text-[9px] text-gray-400 font-semibold">
                            {item.inv}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[11px] font-bold text-gray-900">
                          {item.amt}
                        </div>
                        <div
                          className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full inline-block ${item.color}`}
                        >
                          {item.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="bg-white border-t border-gray-100 px-6 py-3 pb-6 flex justify-around items-center">
                <div className="text-rose-500">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <div className="text-gray-300">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-rose-500/30 -mt-8 border-4 border-white">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                </div>
                <div className="text-gray-300">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-gray-300">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;

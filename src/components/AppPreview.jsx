import React from "react";
import { useScrollAnimation } from "../hooks/useAnimations";

const AppPreview = () => {
  const [headRef, headVisible] = useScrollAnimation();
  const [phoneRef, phoneVisible] = useScrollAnimation({ threshold: 0.05 });
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="w-full py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Ambient Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[130px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-500/5 rounded-full blur-[180px]"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="w-full px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div
          ref={headRef}
          className={`text-center mb-16 md:mb-24 animate-fade-in-up ${headVisible ? "is-visible" : ""}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold tracking-widest mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            LIVE PREVIEW
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Experience the{" "}
            <span className="bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              magic.
            </span>
          </h2>
          <p className="text-lg text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Crafted with precision. Every pixel, every interaction — designed to
            make billing effortless and beautiful.
          </p>
        </div>

        {/* 3 Phone Showcase */}
        <div
          ref={phoneRef}
          className={`relative flex justify-center items-end gap-4 md:gap-8 lg:gap-12 mb-16 md:mb-24 animate-scale-in ${phoneVisible ? "is-visible" : ""}`}
        >
          {/* Left Phone — Invoices */}
          <div className="hidden md:block relative -mb-8 transform -rotate-6 hover:rotate-0 transition-transform duration-700 ease-out">
            <div className="w-[240px] lg:w-[270px]">
              <PhoneFrame>
                <ScreenInvoices />
              </PhoneFrame>
            </div>
            {/* Floating label */}
            <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2 text-white text-[11px] font-bold shadow-xl">
              📄 Smart Invoices
            </div>
          </div>

          {/* Center Phone — Dashboard (Hero) */}
          <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
            <div className="w-[280px] md:w-[300px] lg:w-[320px]">
              {/* Glow behind center phone */}
              <div className="absolute -inset-6 bg-gradient-to-b from-rose-500/20 to-orange-500/20 rounded-[3.5rem] blur-2xl"></div>
              <div className="relative">
                <PhoneFrame highlight>
                  <ScreenDashboard />
                </PhoneFrame>
              </div>
            </div>
            {/* "Main Screen" badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full px-5 py-1.5 text-white text-[11px] font-bold shadow-lg shadow-rose-500/30 whitespace-nowrap">
              ✨ Home Dashboard
            </div>
          </div>

          {/* Right Phone — Analytics */}
          <div className="hidden md:block relative -mb-8 transform rotate-6 hover:rotate-0 transition-transform duration-700 ease-out">
            <div className="w-[240px] lg:w-[270px]">
              <PhoneFrame>
                <ScreenAnalytics />
              </PhoneFrame>
            </div>
            {/* Floating label */}
            <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2 text-white text-[11px] font-bold shadow-xl">
              📊 Live Analytics
            </div>
          </div>
        </div>

        {/* Feature Highlight Cards */}
        <div
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto animate-fade-in-up ${cardsVisible ? "is-visible" : ""}`}
        >
          {[
            {
              icon: "⚡",
              title: "Lightning Fast",
              desc: "Create invoices in under 30 seconds with smart autofill.",
              gradient: "from-amber-500/10 to-orange-500/10",
              border: "border-amber-500/20",
            },
            {
              icon: "🔒",
              title: "Bank-Grade Security",
              desc: "256-bit encryption keeps your business data completely safe.",
              gradient: "from-emerald-500/10 to-teal-500/10",
              border: "border-emerald-500/20",
            },
            {
              icon: "📱",
              title: "Works Offline",
              desc: "Full functionality even without internet. Syncs when you're back online.",
              gradient: "from-violet-500/10 to-purple-500/10",
              border: "border-violet-500/20",
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`group bg-gradient-to-br ${card.gradient} backdrop-blur-sm border ${card.border} rounded-2xl p-6 hover:scale-[1.03] transition-all duration-300 stagger-${i + 1}`}
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <h3 className="text-white font-bold text-sm mb-1.5">
                {card.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===================== Phone Frame ===================== */
const PhoneFrame = ({ children, highlight }) => (
  <div
    className={`rounded-[2.8rem] p-[3px] shadow-2xl ${
      highlight
        ? "bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 shadow-rose-500/10"
        : "bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 shadow-black/40"
    }`}
  >
    <div className="bg-gray-900 rounded-[2.6rem] p-2.5 relative">
      {/* Side Buttons */}
      <div className="h-7 w-[3px] bg-gray-700 absolute -left-[2px] top-20 rounded-l-md"></div>
      <div className="h-10 w-[3px] bg-gray-700 absolute -left-[2px] top-32 rounded-l-md"></div>
      <div className="h-10 w-[3px] bg-gray-700 absolute -left-[2px] top-46 rounded-l-md"></div>
      <div className="h-14 w-[3px] bg-gray-700 absolute -right-[2px] top-36 rounded-r-md"></div>

      {/* Inner Screen */}
      <div className="bg-gray-50 rounded-[2.2rem] overflow-hidden">
        {/* Dynamic Island */}
        <div className="bg-gray-900 h-7 flex items-center justify-center relative">
          <div className="w-[90px] h-[22px] bg-black rounded-b-2xl absolute top-0 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-800 border border-gray-700"></div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-white px-5 py-1.5 flex justify-between items-center text-[10px] font-bold text-gray-900">
          <span>9:41</span>
          <div className="flex gap-1.5 items-center">
            {/* Signal */}
            <svg
              className="w-3.5 h-2.5"
              viewBox="0 0 17 12"
              fill="currentColor"
            >
              <rect x="0" y="8" width="3" height="4" rx="0.5" opacity="0.3" />
              <rect x="4.5" y="5" width="3" height="7" rx="0.5" opacity="0.5" />
              <rect
                x="9"
                y="2.5"
                width="3"
                height="9.5"
                rx="0.5"
                opacity="0.7"
              />
              <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
            </svg>
            {/* WiFi */}
            <svg className="w-3.5 h-3" viewBox="0 0 16 12" fill="currentColor">
              <path d="M8 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
              <path
                d="M4.5 8.5a5 5 0 017 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M2 5.5a9 9 0 0112 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            {/* Battery */}
            <div className="w-5 h-2.5 border border-gray-900 rounded-sm relative ml-0.5">
              <div
                className="absolute inset-[2px] bg-gray-900 rounded-[1px]"
                style={{ width: "65%" }}
              ></div>
              <div className="absolute -right-[3px] top-[3px] w-[2px] h-[4px] bg-gray-900 rounded-r-sm"></div>
            </div>
          </div>
        </div>

        {/* Screen Content */}
        {children}

        {/* Bottom Nav */}
        <BottomNav />
      </div>
    </div>
  </div>
);

/* ===================== Screen: Dashboard ===================== */
const ScreenDashboard = () => (
  <div className="bg-gray-50">
    {/* Welcome */}
    <div className="px-4 pt-3 pb-2">
      <div className="text-[10px] text-gray-400 font-semibold">
        Good Morning 👋
      </div>
      <div className="text-sm font-black text-gray-900">Rahul's Business</div>
    </div>

    {/* Revenue Card */}
    <div className="px-4 pb-3">
      <div className="bg-gradient-to-br from-rose-500 via-rose-500 to-orange-500 rounded-2xl p-4 text-white shadow-lg shadow-rose-500/20 relative overflow-hidden">
        {/* Shine effect */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
        <div className="text-[10px] opacity-80 font-semibold mb-0.5 tracking-wide">
          TOTAL REVENUE
        </div>
        <div className="text-2xl font-black mb-1 tracking-tight">₹2,45,300</div>
        <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-200 mb-3">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
              clipRule="evenodd"
            />
          </svg>
          +18.2% vs last month
        </div>
        <div className="flex gap-2">
          <div className="flex-1 p-2 bg-white/20 rounded-xl text-center text-[10px] font-bold backdrop-blur-sm cursor-pointer hover:bg-white/30 transition">
            + Income
          </div>
          <div className="flex-1 p-2 bg-white/10 rounded-xl text-center text-[10px] font-bold backdrop-blur-sm cursor-pointer hover:bg-white/20 transition">
            Transfer
          </div>
        </div>
      </div>
    </div>

    {/* Quick Actions */}
    <div className="px-4 pb-3">
      <div className="flex justify-between gap-2">
        {[
          { icon: "💳", label: "Bills", bg: "bg-rose-50" },
          { icon: "📄", label: "Invoice", bg: "bg-blue-50" },
          { icon: "📊", label: "Reports", bg: "bg-amber-50" },
          { icon: "👥", label: "Clients", bg: "bg-emerald-50" },
        ].map((item, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center text-base shadow-sm border border-gray-100/80`}
            >
              {item.icon}
            </div>
            <span className="text-[8px] font-bold text-gray-500">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Recent Invoices */}
    <div className="px-4 pb-4">
      <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-2.5">
          <span className="font-extrabold text-gray-900 text-xs">
            Recent Activity
          </span>
          <span className="text-[10px] text-rose-500 font-bold">See All →</span>
        </div>
        {[
          {
            name: "Priya Sharma",
            inv: "#INV-001",
            amt: "₹1,200",
            status: "Paid",
            color: "text-emerald-600 bg-emerald-50",
            avatar: "bg-gradient-to-br from-rose-400 to-pink-500",
          },
          {
            name: "Arjun Patel",
            inv: "#INV-002",
            amt: "₹3,450",
            status: "Pending",
            color: "text-amber-600 bg-amber-50",
            avatar: "bg-gradient-to-br from-blue-400 to-indigo-500",
          },
          {
            name: "Sarah Khan",
            inv: "#INV-003",
            amt: "₹890",
            status: "Paid",
            color: "text-emerald-600 bg-emerald-50",
            avatar: "bg-gradient-to-br from-emerald-400 to-teal-500",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0"
          >
            <div className="flex items-center gap-2.5">
              <div
                className={`w-8 h-8 rounded-full ${item.avatar} flex items-center justify-center text-[10px] font-bold text-white shadow-sm`}
              >
                {item.name[0]}
              </div>
              <div>
                <div className="text-[11px] font-bold text-gray-900">
                  {item.name}
                </div>
                <div className="text-[9px] text-gray-400 font-medium">
                  {item.inv}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[11px] font-bold text-gray-900">
                {item.amt}
              </div>
              <div
                className={`text-[8px] font-bold px-2 py-0.5 rounded-full inline-block ${item.color}`}
              >
                {item.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ===================== Screen: Invoices ===================== */
const ScreenInvoices = () => (
  <div className="bg-gray-50">
    {/* Header */}
    <div className="px-4 pt-3 pb-2 flex justify-between items-center">
      <div>
        <div className="text-sm font-black text-gray-900">Invoices</div>
        <div className="text-[9px] text-gray-400 font-medium">
          12 total this month
        </div>
      </div>
      <div className="w-7 h-7 bg-gradient-to-br from-rose-500 to-orange-500 rounded-lg flex items-center justify-center text-white">
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
    </div>

    {/* Filter Tabs */}
    <div className="px-4 pb-3 flex gap-1.5">
      {["All", "Paid", "Pending", "Overdue"].map((tab, i) => (
        <div
          key={i}
          className={`px-3 py-1.5 rounded-full text-[9px] font-bold ${
            i === 0
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-500 border border-gray-100"
          }`}
        >
          {tab}
        </div>
      ))}
    </div>

    {/* Invoice Cards */}
    <div className="px-4 pb-4 space-y-2.5">
      {[
        {
          id: "INV-0041",
          client: "Metro Electronics",
          date: "Feb 15, 2026",
          amount: "₹12,500",
          status: "Paid",
          statusColor: "bg-emerald-50 text-emerald-600",
          avatarColor: "from-violet-400 to-purple-500",
        },
        {
          id: "INV-0040",
          client: "Fresh Mart Store",
          date: "Feb 14, 2026",
          amount: "₹8,700",
          status: "Pending",
          statusColor: "bg-amber-50 text-amber-600",
          avatarColor: "from-amber-400 to-orange-500",
        },
        {
          id: "INV-0039",
          client: "QuickBite Café",
          date: "Feb 13, 2026",
          amount: "₹4,250",
          status: "Overdue",
          statusColor: "bg-red-50 text-red-500",
          avatarColor: "from-rose-400 to-red-500",
        },
        {
          id: "INV-0038",
          client: "TechWorld Hub",
          date: "Feb 12, 2026",
          amount: "₹22,000",
          status: "Paid",
          statusColor: "bg-emerald-50 text-emerald-600",
          avatarColor: "from-sky-400 to-blue-500",
        },
      ].map((inv, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm"
        >
          <div className="flex justify-between items-start mb-1.5">
            <div className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-lg bg-gradient-to-br ${inv.avatarColor} flex items-center justify-center text-[9px] font-bold text-white`}
              >
                {inv.client[0]}
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-900">
                  {inv.client}
                </div>
                <div className="text-[8px] text-gray-400 font-medium">
                  {inv.id} · {inv.date}
                </div>
              </div>
            </div>
            <div
              className={`text-[8px] font-bold px-2 py-0.5 rounded-full ${inv.statusColor}`}
            >
              {inv.status}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-[12px] font-black text-gray-900">
              {inv.amount}
            </div>
            <svg
              className="w-3.5 h-3.5 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ===================== Screen: Analytics ===================== */
const ScreenAnalytics = () => (
  <div className="bg-gray-50">
    {/* Header */}
    <div className="px-4 pt-3 pb-2">
      <div className="text-sm font-black text-gray-900">Analytics</div>
      <div className="text-[9px] text-gray-400 font-medium">
        Feb 2026 Overview
      </div>
    </div>

    {/* Mini Stats */}
    <div className="px-4 pb-3 grid grid-cols-2 gap-2">
      {[
        { label: "Revenue", value: "₹1.2L", change: "+12%", up: true },
        { label: "Expenses", value: "₹45K", change: "-5%", up: false },
        { label: "Invoices", value: "48", change: "+8", up: true },
        { label: "Clients", value: "24", change: "+3", up: true },
      ].map((s, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm"
        >
          <div className="text-[8px] text-gray-400 font-semibold mb-0.5">
            {s.label}
          </div>
          <div className="text-[13px] font-black text-gray-900">{s.value}</div>
          <div
            className={`text-[8px] font-bold ${
              s.up ? "text-emerald-500" : "text-red-400"
            }`}
          >
            {s.change}
          </div>
        </div>
      ))}
    </div>

    {/* Chart Placeholder (CSS-Drawn) */}
    <div className="px-4 pb-3">
      <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] font-extrabold text-gray-900">
            Revenue Trend
          </span>
          <span className="text-[8px] text-rose-500 font-bold bg-rose-50 px-2 py-0.5 rounded-full">
            Monthly
          </span>
        </div>
        {/* Bar Chart */}
        <div className="flex items-end gap-1.5 h-20">
          {[40, 55, 35, 65, 50, 80, 70, 90, 60, 75, 85, 95].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className={`w-full rounded-t-sm ${
                  i === 11
                    ? "bg-gradient-to-t from-rose-500 to-orange-400"
                    : i >= 9
                      ? "bg-rose-300"
                      : "bg-gray-200"
                }`}
                style={{ height: `${h}%` }}
              ></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-1.5 text-[7px] text-gray-400 font-medium">
          <span>Jan</span>
          <span>Apr</span>
          <span>Jul</span>
          <span>Oct</span>
          <span>Dec</span>
        </div>
      </div>
    </div>

    {/* Top Clients */}
    <div className="px-4 pb-4">
      <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
        <div className="text-[10px] font-extrabold text-gray-900 mb-2">
          Top Clients
        </div>
        {[
          { name: "Metro Electronics", pct: 35, color: "bg-rose-500" },
          { name: "Fresh Mart Store", pct: 28, color: "bg-orange-400" },
          { name: "QuickBite Café", pct: 20, color: "bg-amber-400" },
        ].map((c, i) => (
          <div key={i} className="mb-2 last:mb-0">
            <div className="flex justify-between text-[9px] mb-0.5">
              <span className="font-bold text-gray-700">{c.name}</span>
              <span className="font-bold text-gray-400">{c.pct}%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${c.color} rounded-full`}
                style={{ width: `${c.pct}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ===================== Bottom Nav ===================== */
const BottomNav = () => (
  <div className="bg-white border-t border-gray-100 px-5 py-2.5 pb-5 flex justify-around items-center">
    <div className="text-rose-500">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    </div>
    <div className="text-gray-300">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
        <path
          fillRule="evenodd"
          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="w-11 h-11 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-rose-500/30 -mt-7 border-[3px] border-white">
      <svg
        className="w-4.5 h-4.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          d="M12 4v16m8-8H4"
        />
      </svg>
    </div>
    <div className="text-gray-300">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="text-gray-300">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
);

export default AppPreview;

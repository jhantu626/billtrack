import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navLinks = [
    { href: "#showcase", label: "Showcase" },
    { href: "#features", label: "Features" },
    { href: "#deep-dive", label: "Deep Dive" },
    { href: "#pricing", label: "Pricing" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/[0.03] border-b border-gray-100" : "bg-transparent"}`}
    >
      <div className="w-full px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-rose-500/30">
            B
          </div>
          <span className="text-xl font-extrabold text-gray-900 tracking-tight">
            Bill<span className="text-rose-500">Track</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-semibold text-gray-600 hover:text-rose-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-semibold text-gray-700 hover:text-rose-500 transition-colors px-4 py-2">
            Sign In
          </button>
          <button className="px-6 py-2.5 bg-gradient-to-r from-rose-500 to-orange-500 text-white text-sm font-bold rounded-full hover:shadow-xl hover:shadow-rose-500/25 hover:-translate-y-0.5 transition-all duration-300">
            Get Started Free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-6 pt-2 bg-white/95 backdrop-blur-xl border-t border-gray-100 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-sm font-semibold text-gray-700 py-2"
            >
              {link.label}
            </a>
          ))}
          <button className="w-full px-6 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white text-sm font-bold rounded-full">
            Get Started Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

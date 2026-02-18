import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 text-gray-400 pt-16 md:pt-20 pb-8">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-rose-500/30">
                B
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Bill<span className="text-rose-400">Track</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm font-medium">
              Simple, powerful billing for modern businesses. Create invoices,
              track expenses, and grow your business — all from your phone.
            </p>
            <div className="flex gap-3">
              {["twitter", "instagram", "linkedin", "youtube"].map(
                (social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-500 hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all duration-300 text-xs font-bold uppercase"
                  >
                    {social[0].toUpperCase()}
                  </a>
                ),
              )}
            </div>

            {/* Google Play Store Badge */}
            <a href="#" className="inline-block mt-6 group">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover:-translate-y-0.5">
                <svg
                  className="w-7 h-7 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 9.059l-2.302 2.302-8.635-8.703z" />
                </svg>
                <div>
                  <div className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider">
                    Get it on
                  </div>
                  <div className="text-sm font-bold text-white -mt-0.5">
                    Google Play
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-extrabold text-white mb-6 text-sm uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {[
                "Features",
                "Pricing",
                "Enterprise",
                "Integrations",
                "Changelog",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-rose-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-extrabold text-white mb-6 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {["About", "Careers", "Blog", "Press", "Contact"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-rose-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Resources */}
          <div className="hidden lg:block">
            <h4 className="font-extrabold text-white mb-6 text-sm uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {[
                "Help Center",
                "API Docs",
                "Community",
                "Status Page",
                "Security",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-rose-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-10 pb-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="font-extrabold text-white mb-1">Stay in the loop</h4>
            <p className="text-sm text-gray-500 font-medium">
              Get product updates and billing tips. No spam.
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 md:w-64 px-5 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-white placeholder-gray-600 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 font-medium"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-bold rounded-full text-sm hover:shadow-lg hover:shadow-rose-500/25 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-medium">
          <div>© 2026 BillTrack Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-400">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

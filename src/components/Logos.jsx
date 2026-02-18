import React from "react";

const Logos = () => {
  const logos = [
    "Unilever",
    "Samsung",
    "Google",
    "Adobe",
    "Spotify",
    "Amazon",
    "Shopify",
    "Slack",
    "Stripe",
    "Notion",
  ];

  return (
    <section className="w-full py-12 bg-white border-y border-gray-100 overflow-hidden">
      <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">
        Trusted by teams at
      </p>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {logos
            .concat(logos)
            .concat(logos)
            .map((logo, i) => (
              <span
                key={i}
                className="text-2xl md:text-3xl font-extrabold text-gray-200 hover:text-rose-400 transition-colors duration-300 cursor-default mx-10 uppercase tracking-wider select-none"
              >
                {logo}
              </span>
            ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {logos
            .concat(logos)
            .concat(logos)
            .map((logo, i) => (
              <span
                key={i}
                className="text-2xl md:text-3xl font-extrabold text-gray-200 hover:text-rose-400 transition-colors duration-300 cursor-default mx-10 uppercase tracking-wider select-none"
              >
                {logo}
              </span>
            ))}
        </div>
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default Logos;

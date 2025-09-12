import React from "react";

const clientWebsites = [
  {
    name: "Dinetha Astrological",
    url: "https://dinethaastrological.com/",
    description:
      "Professional astrology consultation website with online booking and client testimonials.",
    image: "dinetha.png",
  },
  {
    name: "AL Glass (Pvt) Ltd.",
    url: "https://alglasspvt.com/",
    description:
      "Corporate site for a leading glass solutions provider showcasing products and projects.",
    image: "alglass.png",
  },
  {
    name: "TechNova Solutions",
    url: "https://technovasolutions.com",
    description:
      "Modern IT solutions company site highlighting services, portfolio, and tech expertise.",
    image: "/images/technova-home.jpg",
  },
];

const ClientWebsites = () => (
  <section className="bg-gray-100 py-20">
    <div className="max-w-1xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Client Websites
      </h2>

      {/* Horizontal scroll wrapper */}
      <div className="flex space-x-8 overflow-x-auto scrollbar-hide py-4">
        {clientWebsites.map((site, idx) => (
          <div
            key={idx}
            className="relative flex-shrink-0 w-100 h-[500px] rounded-xl overflow-hidden shadow-lg bg-white"
          >
            {/* Image */}
            <img
              src={site.image}
              alt={site.name}
              className="w-full h-2/3 object-cover"
            />

            {/* Diagonal accent */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 via-transparent to-transparent opacity-30 pointer-events-none"></div>

            {/* Always visible content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col bg-black/40">
              <h3 className="text-2xl font-bold text-white mb-2">{site.name}</h3>
              <p className="text-white text-sm mb-4">{site.description}</p>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-white text-emerald-600 font-semibold rounded hover:bg-gray-100 transition-colors"
              >
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientWebsites;

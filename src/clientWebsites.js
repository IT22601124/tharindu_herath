import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const clientWebsites = [
  {
    name: "AL Glass (Pvt) Ltd.",
    url: "https://alglasspvt.com/",
    description:
      "Corporate site for a leading glass solutions provider showcasing products and projects.",
    image: "alglass.png",
  },
  {
    name: "Share Taxi Sri Lanka",
    url: "https://sharetaxisrilanka.com/",
    description:
      "Taxi-sharing and taxi-booking website with real-time pricing and location-based services.",
    image: "st.png",
  },
  {
    name: "Dinetha Astrological",
    url: "https://dinethaastrological.com/",
    description:
      "Professional astrology consultation platform with online booking and client feedback.",
    image: "dinetha.png",
  },
];

const ClientWebsites = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-mono font-bold text-gray-900 mb-10 text-center"
        >
          Client Websites
          <motion.span
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block h-1 bg-gray-900 mx-auto mt-3"
          ></motion.span>
        </motion.h2>

        {/* Horizontal Scroll Wrapper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex space-x-6 overflow-x-auto scrollbar-hide py-2 snap-x snap-mandatory pb-8"
        >
          {clientWebsites.map((site, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative flex-shrink-0 w-[300px] h-[460px] rounded-xl overflow-hidden 
                bg-white shadow-lg snap-start 
                transition-all duration-300 hover:shadow-2xl group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-[60%]">
                <motion.img
                  src={site.image}
                  alt={site.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.2 + 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-5 bg-white/95 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {site.name}
                </h3>

                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {site.description}
                </p>

                <motion.a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-900 text-gray-900 
                  font-semibold transition-all duration-300 
                  hover:bg-gray-900 hover:text-white text-sm"
                >
                  Visit Website
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientWebsites;

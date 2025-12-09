import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Advertisements.css";

const Advertisements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ads = [
    {
      title: "Eclipse Is Missing A Server! | How To Install A Server In Eclipse",
      description:
        "server option is not showing in eclipse,server option is not showing in eclipse 2020-06,server option in eclipse,server option is not showing in eclipse photon,server option missing in eclipse,server option is not available in eclipse,server tab in eclipse missing,server tab is not showing in eclipse",
      year: 2020,
      image: 'Ser.webp'
    },
    {
      title: "How To Easily Format And Install Windows 10 With A Usb",
      description:
        "The Beginner's Guide to how to format and install windows 10 with usb",
      year: 2023,
      image: 'Ser1.webp',
    },
    {
      title: "Canva Pro Free Sinhala | How to Get Canva Pro Account For 100% Free",
      description:
        "Canva Pro Free Sinhala | How to Get Canva Pro Account For 100% Free Bingotingo - https://bingotingo.com/best-social-media-platforms/",
      year: 2024,
      image: 'Ser3.webp',
    },
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          My Advertisements
          <motion.span
            initial={{ width: 0 }}
            animate={isInView ? { width: 100 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block h-1 bg-gray-900 mx-auto mt-3"
          ></motion.span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ads.map((ad, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={ad.image}
                  alt={ad.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold"
                >
                  {ad.year}
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                  {ad.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                  {ad.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500">
                    Published: {ad.year}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-emerald-600 font-semibold text-sm flex items-center gap-1"
                  >
                    Learn More →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Advertisements;

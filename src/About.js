import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 px-6 md:px-12 lg:px-16 overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
      
        {/* LEFT — TEXT CONTENT */}
        <motion.div variants={itemVariants} className="flex-1">
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-mono font-bold text-gray-900 mb-8 relative"
          >
            About Me
            <motion.span
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block h-1 bg-gray-900 mt-3"
            ></motion.span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="text-lg leading-relaxed text-gray-700 space-y-4"
          >
            <motion.p
              variants={itemVariants}
              className="hover:text-gray-900 transition-colors duration-300"
            >
              Hello, I am <strong>Tharindu Herath</strong>, a dedicated and
              passionate software engineering intern specializing in React Native,
              MERN stack, and modern technologies. I am currently pursuing a{" "}
              <strong>BSc (Hons) in Information Technology</strong> specializing in
              Software Engineering at SLIIT, graduating in 2025.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="hover:text-gray-900 transition-colors duration-300"
            >
              I am skilled in technologies like Flutter, C, Java, Python, and
              JavaScript, along with databases such as MySQL, MongoDB, and Oracle.
              My toolkit also includes React Native, Bootstrap, and Git version
              control.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="hover:text-gray-900 transition-colors duration-300"
            >
              I completed a 6-month internship as a mobile developer, focusing on
              frontend development with <strong>Flutter</strong> and backend
              development using <strong>Laravel</strong>.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="hover:text-gray-900 transition-colors duration-300"
            >
              I'm driven by analytical thinking, adaptability, and a passion for
              solving real-world problems. My goal is to contribute to impactful
              projects and continuously grow as a professional.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="hover:text-gray-900 transition-colors duration-300"
            >
              Explore my recent projects such as the <strong>Visionmate</strong>{" "}
              object detection app and <strong>Quickfix</strong> garage-finding
              application — showcasing my passion for innovation.
            </motion.p>
          </motion.div>

          <motion.a
            variants={itemVariants}
            href="/cv.pdf"
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 px-8 py-3 border-2 border-gray-900 text-gray-900 
            font-mono text-lg rounded-lg transition-all duration-300 
            hover:bg-gray-900 hover:text-white hover:shadow-xl"
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          variants={itemVariants}
          className="flex-1 flex justify-center md:justify-end"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              src="myy.jpg"
              alt="Tharindu Herath"
              className="w-[480px] h-[520px] object-cover rounded-xl shadow-2xl 
              relative z-10"
            />
            <motion.div
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={isInView ? { opacity: 0.8, x: -24, y: -24 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-0 right-0 w-[380px] h-[420px] 
              bg-gray-900 rounded-xl -z-10"
            ></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

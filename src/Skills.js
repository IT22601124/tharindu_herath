import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiKotlin,
  SiMysql,
  SiMongodb,
  SiAdobe,
  SiIntellijidea,
  SiAndroid,
  SiFlutter,
  SiLaravel,
} from "react-icons/si";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "C", icon: <FaReact /> },
      { name: "C++", icon: <FaJava /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaReact /> },
      { name: "Kotlin", icon: <SiKotlin /> },
      { name: "Flutter", icon: <SiFlutter /> },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaReact /> },
      { name: "Bootstrap", icon: <FaReact /> },
      { name: "React Native", icon: <FaReact /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "Laravel", icon: <SiLaravel /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Oracle", icon: <SiMongodb /> },
    ],
  },
  {
    category: "Version Control",
    items: [{ name: "Git", icon: <FaGitAlt /> }],
  },
  {
    category: "Tools",
    items: [
      { name: "MS Office", icon: <SiAdobe /> },
      { name: "Adobe Photoshop", icon: <SiAdobe /> },
      { name: "Canva", icon: <SiAdobe /> },
      { name: "After Effects", icon: <SiAdobe /> },
      { name: "Illustrator", icon: <SiAdobe /> },
    ],
  },
  {
    category: "IDEs",
    items: [
      { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
      { name: "Android Studio", icon: <SiAndroid /> },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-16 text-center"
        >
          My Skills
          <motion.span
            initial={{ width: 0 }}
            animate={isInView ? { width: 100 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block h-1 bg-emerald-500 mx-auto mt-3"
          ></motion.span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-10"
        >
          {skills.map((group, idx) => (
            <motion.div
              key={idx}
              variants={categoryVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white shadow-xl rounded-xl p-6 border border-gray-200 hover:border-emerald-400 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2 flex items-center gap-2">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="text-emerald-600"
                >
                  ⚡
                </motion.span>
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-4">
                {group.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={skillVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-sm hover:shadow-lg hover:from-emerald-50 hover:to-emerald-100 transition-all duration-300 cursor-pointer"
                  >
                    <motion.span
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: i * 0.5 }}
                      className="text-2xl text-emerald-600"
                    >
                      {skill.icon}
                    </motion.span>
                    <span className="text-sm font-medium text-gray-700">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

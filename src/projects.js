import React, { useMemo, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// --- your data (kept as-is; icons removed for a cleaner look) ---
const projects = [
  {
    title: "Pos System",
    year: 2024,
    description:
      "An app that allows businesses to streamline their sales, inventory management, and transaction processes, and find spare parts.",
    technologies: ["React", "Express", "Node", "Local Storage"],
    link: "https://github.com/IT22601124/posSystem",
  },
  {
    title: "Quickfix - Garage Finding App",
    year: 2024,
    description:
      "A mobile app to locate the nearest garage, request towing assistance, and find spare parts.",
    technologies: ["React Native", "JavaScript", "MongoDB"],
    link: "https://github.com/IT22601124/Quickfix",
  },
  {
    title: "Visionmate - Object Detection App",
    year: 2024,
    description:
      "An AI-powered app designed for visually impaired students, featuring object detection and voice feedback.",
    technologies: ["React Native", "JavaScript", "MongoDB"],
    link: "https://github.com/IT22601124/Visionmate---object-detection-app-",
  },
  {
    title: "Vendor Management Portal",
    year: 2024,
    description:
      "A system developed for CEAT Kelani Holdings to manage vendors and streamline operations.",
    technologies: ["HTML", "JavaScript", "CSS", "PHP", "MSSQL"],
    link: "https://github.com/IT22601124/ceat",
  },
  {
    title: "Online Car Rental System",
    year: 2023,
    description:
      "An online platform for booking rental cars with user-friendly search and reservation features.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    link: "",
  },
  {
    title: "Task Management System",
    year: 2024,
    description: "A task tracking app designed for individuals and teams.",
    technologies: ["Kotlin", "SQLite"],
    link: "https://github.com/IT22601124/Noteverse-",
  },
  {
    title: "Online Food Delivery System",
    year: 2023,
    description: "An online platform for ordering food from local restaurants.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/IT22601124/FoodOrdering",
  },
  {
    title: "Mobile Game Application",
    year: 2024,
    description: "A fun and interactive mobile game for Android users.",
    technologies: ["Kotlin"],
    link: "https://github.com/IT22601124/Jungle_Rush",
  },
  {
    title: "Luxiris Gems - Website",
    year: 2025,
    description: "E-commerce website for Luxiris Gems shop.",
    technologies: ["React", "Node.js", "Firebase"],
    link: "",
  },
  {
    title: "alglass - Website",
    year: 2025,
    description: "Website for AL Glass (Pvt) Ltd. Built with React, Node.js, and Firebase for shop management.",
    technologies: ["React", "Node.js", "Firebase"],
    link: "https://alglasspvt.com/",
  },
  {
    title: "dinethaastrological - Website",
    year: 2024,
    description: "Astrological consultation website built with React, Node.js, and Firebase.",
    technologies: ["React", "Node.js", "Firebase"],
    link: "https://dinethaastrological.com/",
  },
];

// --- tiny helpers for badges ---
const badgeFor = (title) => {
  const t = title.toLowerCase();
  if (t.includes("pos")) return "🧾";
  if (t.includes("garage")) return "🧰";
  if (t.includes("vision") || t.includes("object")) return "👁️";
  if (t.includes("vendor")) return "🏢";
  if (t.includes("rental")) return "🚗";
  if (t.includes("task") || t.includes("note")) return "✅";
  if (t.includes("food")) return "🍔";
  if (t.includes("game")) return "🎮";
  if (t.includes("gems")) return "💎";
  if (t.includes("glass")) return "🏢";
  if (t.includes("astro")) return "🔮";
  return "📦";
};

const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-2.5 py-0.5 text-xs font-medium text-gray-700">
    {children}
  </span>
);

const Projects = () => {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // build year options
  const years = useMemo(() => {
    const set = new Set(projects.map((p) => p.year));
    return ["All", ...Array.from(set).sort((a, b) => b - a)];
  }, []);

  // filter projects
  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesYear = year === "All" || p.year === Number(year);
      const q = query.trim().toLowerCase();
      if (!q) return matchesYear;
      const text =
        `${p.title} ${p.description} ${p.technologies.join(" ")}`.toLowerCase();
      return matchesYear && text.includes(q);
    });
  }, [query, year]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-gray-900"
          >
            Projects
            <motion.span
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block h-1 bg-gray-900 mt-2"
            ></motion.span>
          </motion.h2>

          {/* controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects…"
                className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all sm:w-64"
              />
              <span className="pointer-events-none absolute left-3 top-2.5 select-none text-gray-400">
                🔎
              </span>
            </div>

            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-sm text-gray-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all sm:w-40"
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y === "All" ? "All years" : y}
                </option>
              ))}
            </select>
          </motion.div>
        </motion.div>

        {/* grid of minimal cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((p, i) => (
            <motion.article
              key={p.title + i}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-2xl hover:border-emerald-300"
            >
              {/* left accent */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="absolute left-0 top-0 w-1 bg-emerald-500"
              />

              <div className="flex h-full flex-col p-5">
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-xl"
                      aria-hidden
                    >
                      {badgeFor(p.title)}
                    </motion.span>
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                    {p.year}
                  </span>
                </div>

                <p className="mb-4 line-clamp-3 text-sm text-gray-700">
                  {p.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {p.technologies.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <div className="mt-auto">
                  {p.link ? (
                    <motion.a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      View on GitHub / Website <span aria-hidden>↗</span>
                    </motion.a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-400">
                      No public repo
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-10 rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-500"
          >
            No projects match your search.
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
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

const Skills = () => (
  <section className="bg-black-800 py-20 min-h-screen">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-white mb-16 text-center">
        My Skills
      </h2>

      <div className="space-y-10">
        {skills.map((group, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-6">
              {group.items.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <span className="text-2xl text-emerald-600">{skill.icon}</span>
                  <span className="text-sm font-medium text-gray-700">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

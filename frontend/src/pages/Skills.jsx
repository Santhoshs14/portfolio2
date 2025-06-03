import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiSass,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={38} /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={38} /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={38} /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" size={38} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={38} /> },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800 dark:text-gray-200" size={38} />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" size={38} /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-400" size={38} />,
  },
  { name: "MySQL", icon: <SiMysql className="text-yellow-400" size={38} /> },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-teal-400" size={38} />,
  },
  { name: "Docker", icon: <FaDocker className="text-sky-400" size={38} /> },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-400" size={38} />,
  },
  { name: "Sass", icon: <SiSass className="text-pink-400" size={38} /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-[50vh] py-16 bg-primary dark:bg-dark flex flex-col items-center overflow-hidden"
    >
      {/* Glass effect accent stripes */}
      <div className="absolute left-0 top-16 bottom-16 w-1 bg-accent/80 rounded-r-2xl z-0" />
      <div className="absolute right-0 top-16 bottom-16 w-1 bg-accent/80 rounded-l-2xl z-0" />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-script text-4xl md:text-5xl text-accent mb-2 relative z-10"
        style={{ fontFamily: "Pacifico, cursive" }}
      >
        Skills
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-dark dark:text-primary mb-8 text-lg text-center max-w-2xl relative z-10"
      >
        Here are some of the technologies I use regularly in my projects as a
        software developer.
      </motion.p>
      {/* Skills grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            whileHover={{
              scale: 1.08,
              y: -6,
              boxShadow: "0 6px 30px 0 rgba(19,173,199,0.18)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className={`
              bg-white/80 dark:bg-[#22253f]/90 shadow-lg rounded-xl p-5 flex flex-col items-center group border border-accent/30
              hover:border-accent hover:shadow-2xl transition-all
              `}
            style={{ minWidth: 110, minHeight: 110 }}
            tabIndex={0}
            aria-label={skill.name}
          >
            <span className="mb-2">{skill.icon}</span>
            <span className="text-base font-semibold text-dark dark:text-primary group-hover:text-accent mt-2 transition-all">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

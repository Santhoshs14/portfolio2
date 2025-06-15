import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaAws,
  FaGithub,
  FaDocker,
  FaFigma,
  FaAngular,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTensorflow,
  SiOpenai,
  SiFlask,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-gray-900 dark:text-white" size={38} />,
  },
  { name: "React", icon: <FaReact className="text-cyan-400" size={38} /> },
  {
    name: "Express",
    icon: <SiExpress className="text-gray-800 dark:text-gray-100" size={38} />,
  },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={38} /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" size={38} />,
  },
  { name: "Python", icon: <FaPython className="text-blue-400" size={38} /> },
  { name: "Java", icon: <FaJava className="text-orange-500" size={38} /> },
  { name: "MySQL", icon: <SiMysql className="text-yellow-400" size={38} /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-400" size={38} />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" size={38} /> },
  { name: "AWS Cloud", icon: <FaAws className="text-yellow-400" size={38} /> },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800 dark:text-gray-200" size={38} />,
  },
  { name: "Docker", icon: <FaDocker className="text-sky-400" size={38} /> },
  {
    name: "Machine Learning",
    icon: <SiTensorflow className="text-orange-400" size={38} />,
  },
  { name: "LLM", icon: <SiOpenai className="text-teal-400" size={38} /> },
  { name: "Angular", icon: <FaAngular className="text-red-500" size={38} /> },
  {
    name: "Flask",
    icon: <SiFlask className="text-gray-800 dark:text-gray-100" size={38} />,
  },
  { name: "Figma", icon: <FaFigma className="text-pink-400" size={38} /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" size={38} />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-[50vh] py-16 bg-primary dark:bg-dark flex flex-col items-center overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-script text-4xl md:text-5xl text-accent mb-6 relative z-10"
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
        Here’s my current tech stack—across frontend, backend, cloud, and AI.
      </motion.p>
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            whileHover={{
              scale: 1.09,
              y: -6,
              boxShadow: "0 6px 30px 0 rgba(19,173,199,0.18)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
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

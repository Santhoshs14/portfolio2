import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import intelliprepImg from "../assets/intelliprep.png";
import nutrigenieImg from "../assets/nutrigenie.png";
import rentsphereImg from "../assets/rentsphere.png";

const projects = [
  {
    title: "IntelliPrep.AI",
    tags: ["AI", "Full Stack", "React", "Node.js", "Express", "PostgreSQL"],
    description:
      "AI-powered platform for tailored interview questions, coding challenges, and instant GPT feedback. Features adaptive dashboards and real user progress tracking.",
    github: "https://github.com/Santhoshs14/intelliprep-ai", // Update if you have the real repo
    demo: "", // Add live demo if available
    cover: intelliprepImg,
    details: [
      "Tailored interview questions & coding challenges using Node.js, Express, and OpenAI GPT APIs.",
      "Instant AI-generated feedback to improve candidate readiness.",
      "Adaptive difficulty, user tracking, and analytics dashboard with React and PostgreSQL.",
    ],
  },
  {
    title: "NutriGenie",
    tags: ["LLM", "RAG", "AI", "Python", "React", "Express"],
    description:
      "Conversational AI assistant for personalized nutrition, diet, and workout guidance. Built with RAG, LLMs, and a modern React UI.",
    github: "https://github.com/Santhoshs14/nutrigenie", // Update if available
    demo: "",
    cover: nutrigenieImg,
    details: [
      "Interactive AI assistant using retrieval-augmented generation with open-source LLMs and real-world data.",
      "ChatGPT-like conversational interface for user-friendly queries.",
      "Delivers instant, reliable, and context-aware health advice.",
    ],
  },
  {
    title: "RentSphere",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    description:
      "Full-stack rental management system for tenants and landlords: bookings, payments, agreements, and maintenance tickets—all automated.",
    github: "https://github.com/Santhoshs14/rentsphere", // Update if available
    demo: "",
    cover: rentsphereImg,
    details: [
      "Book properties, raise service requests, and manage leases.",
      "Role-based dashboards for tenants, landlords, and admins.",
      "Automated agreements, payment logs, and ticket tracking.",
    ],
  },
];

export default function Projects() {
  const [featuredIdx, setFeaturedIdx] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalIdx, setModalIdx] = useState(0);

  const featured = projects[featuredIdx];

  return (
    <section
      id="projects"
      className="py-16 min-h-[90vh] bg-primary dark:bg-dark relative overflow-x-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-script text-4xl md:text-5xl text-accent mb-12 text-center"
        style={{ fontFamily: "Pacifico, cursive" }}
      >
        Projects
      </motion.h2>

      {/* Featured Carousel */}
      <div className="w-full flex flex-col items-center gap-6 mb-12">
        <div className="relative w-full max-w-3xl">
          <motion.div
            key={featuredIdx}
            initial={{ opacity: 0, x: 60, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -60, scale: 0.96 }}
            transition={{ duration: 0.5 }}
            className="bg-white/90 dark:bg-[#191d24]/90 rounded-2xl shadow-2xl border border-accent/25 flex flex-col md:flex-row items-center gap-7 p-8"
            style={{ minHeight: 260 }}
          >
            {/* Image or icon */}
            <div className="flex-shrink-0">
              <img
                src={featured.cover || "/images/project-default.png"}
                alt={featured.title}
                className="w-36 h-36 object-cover rounded-xl border-2 border-accent shadow"
                style={{ background: "#f6f6f6" }}
                loading="lazy"
              />
            </div>
            {/* Info */}
            <div className="flex-1 flex flex-col items-center md:items-start">
              <h3 className="text-2xl font-bold text-accent mb-2">
                {featured.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-dark dark:text-primary mb-3 text-center md:text-left">
                {featured.description}
              </p>
              <div className="flex gap-3">
                {featured.github && (
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-accent font-semibold hover:underline"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {featured.demo && (
                  <a
                    href={featured.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-accent font-semibold hover:underline"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
                <button
                  onClick={() => {
                    setShowModal(true);
                    setModalIdx(featuredIdx);
                  }}
                  className="ml-2 px-4 py-1 bg-accent/80 text-white rounded-full font-semibold shadow hover:bg-accent"
                >
                  More Info
                </button>
              </div>
            </div>
          </motion.div>
          {/* Carousel Controls */}
          <div className="absolute -left-9 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={() =>
                setFeaturedIdx(
                  (featuredIdx - 1 + projects.length) % projects.length
                )
              }
              className="bg-accent/70 hover:bg-accent text-white p-2 rounded-full shadow"
              aria-label="Previous"
            >
              &lt;
            </button>
          </div>
          <div className="absolute -right-9 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={() =>
                setFeaturedIdx((featuredIdx + 1) % projects.length)
              }
              className="bg-accent/70 hover:bg-accent text-white p-2 rounded-full shadow"
              aria-label="Next"
            >
              &gt;
            </button>
          </div>
        </div>
        {/* Dots for carousel */}
        <div className="flex gap-3 justify-center mt-3">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === featuredIdx ? "bg-accent" : "bg-accent/20"
              } transition`}
              onClick={() => setFeaturedIdx(i)}
            />
          ))}
        </div>
      </div>

      {/* Interactive Card Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-3">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.07 }}
            className="relative group bg-white/85 dark:bg-[#191d24]/85 border border-accent/20 rounded-2xl shadow-xl p-5 flex flex-col hover:scale-[1.03] transition-transform cursor-pointer"
            onClick={() => {
              setShowModal(true);
              setModalIdx(idx);
            }}
          >
            <img
              src={p.cover || "/images/project-default.png"}
              alt={p.title}
              className="w-full h-32 object-cover rounded-xl mb-4 border border-accent/20 shadow"
              loading="lazy"
            />
            <div className="font-bold text-lg text-accent mb-1">{p.title}</div>
            <div className="flex flex-wrap gap-2 mb-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-dark dark:text-primary text-sm mb-2">
              {p.description}
            </p>
            <div className="flex gap-2 mt-auto">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center gap-1"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center gap-1"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
            </div>
            <span className="absolute top-2 right-4 text-accent/20 group-hover:text-accent text-2xl pointer-events-none transition">
              ★
            </span>
          </motion.div>
        ))}
      </div>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-white dark:bg-[#191d24] rounded-2xl shadow-2xl max-w-lg w-full p-8 relative border-2 border-accent"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-3 text-accent text-xl font-bold"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
              <img
                src={projects[modalIdx].cover || "/images/project-default.png"}
                alt={projects[modalIdx].title}
                className="w-full h-36 object-cover rounded-xl mb-4 border border-accent/20 shadow"
              />
              <div className="font-bold text-2xl text-accent mb-2">
                {projects[modalIdx].title}
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {projects[modalIdx].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="list-disc list-inside text-dark dark:text-primary mb-3">
                {projects[modalIdx].details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="flex gap-4 mt-3">
                {projects[modalIdx].github && (
                  <a
                    href={projects[modalIdx].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-bold flex items-center gap-1 hover:underline"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {projects[modalIdx].demo && (
                  <a
                    href={projects[modalIdx].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-bold flex items-center gap-1 hover:underline"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

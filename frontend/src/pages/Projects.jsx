import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";

const projectData = [
  {
    title: "Enterprise Task & Project Management System",
    description:
      "Full-stack platform for real-time task tracking, dashboards, and team collaboration.",
    stack: ["React.js", "Spring Boot", "JWT", "Redux", "Docker", "AWS"],
    details:
      "Developed with secure JWT authentication, real-time dashboards, and microservices deployed on AWS EC2/RDS. Extensive tests and documentation included.",
    link: "#",
  },
  {
    title: "Inventory & Order Management System",
    description:
      "Inventory system with order creation, supplier management, invoicing, and PDF/file uploads.",
    stack: ["React.js • Express • MySQL • Docker • AWS"],
    link: "#",
  },
  {
    title: "Disease Prediction with ML",
    description:
      "Diabetes prediction system using Python and ML, with 95% accuracy and a user-friendly UI.",
    stack: ["Python • Machine Learning • Flask"],
    link: "#",
  },
];

const tags = [
  "All",
  ...Array.from(new Set(projectData.flatMap((p) => p.stack))),
];

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [modal, setModal] = useState(null);

  const projects =
    selectedTag === "All"
      ? projectData
      : projectData.filter((p) => p.stack.includes(selectedTag));

  return (
    <section
      id="projects"
      className="min-h-[80vh] flex flex-col items-center justify-center py-16 relative"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-script text-4xl md:text-5xl text-accent mb-8"
        style={{ fontFamily: "Pacifico, cursive" }}
      >
        Projects
      </motion.h2>
      {/* Tag filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-1 rounded-full border-2 border-accent font-medium transition 
              ${
                selectedTag === tag
                  ? "bg-accent text-white shadow"
                  : "bg-white dark:bg-dark text-accent hover:bg-accent hover:text-white"
              }`}
          >
            {tag}
          </button>
        ))}
      </div>
      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative group bg-white/80 dark:bg-dark/80 shadow-2xl rounded-3xl p-6 border-2 border-accent overflow-hidden cursor-pointer hover:scale-[1.03] transition-all glass-card"
            onClick={() => setModal(proj)}
            tabIndex={0}
            aria-label={`View details for ${proj.title}`}
          >
            <div className="absolute inset-0 pointer-events-none border-4 border-accent rounded-3xl blur-sm opacity-25 group-hover:opacity-40 transition-all"></div>
            <h3 className="text-xl font-bold mb-2 text-accent">{proj.title}</h3>
            <p className="mb-4 text-dark dark:text-primary">
              {proj.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {proj.stack.map((s) => (
                <span
                  key={s}
                  className="bg-accent/10 border border-accent text-accent px-3 py-1 rounded-full text-xs font-bold"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition">
              <span className="text-accent font-bold underline">
                See Details
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <Dialog
            open={!!modal}
            onClose={() => setModal(null)}
            className="fixed inset-0 z-[99] flex items-center justify-center"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white dark:bg-dark rounded-2xl p-8 max-w-lg w-full z-10 border-2 border-accent shadow-xl"
            >
              <button
                onClick={() => setModal(null)}
                className="absolute top-2 right-3 text-2xl text-accent hover:text-dark dark:hover:text-white"
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-3 text-accent">
                {modal.title}
              </h3>
              <p className="mb-3 text-dark dark:text-primary">
                {modal.details || modal.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {modal.stack.map((s) => (
                  <span
                    key={s}
                    className="bg-accent/10 border border-accent text-accent px-3 py-1 rounded-full text-xs font-bold"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <a
                href={modal.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline font-bold hover:text-dark dark:hover:text-white transition"
              >
                View Project
              </a>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "How to Animate SVGs with React",
    date: "2024-05-27",
    summary: "A guide on animating SVGs in React using Framer Motion.",
    link: "#",
  },
  {
    title: "Tips for Creative Coding",
    date: "2024-05-12",
    summary: "Tips for bringing creativity into your coding practice.",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
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
        Blog
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-6">
        {blogs.map((blog, idx) => (
          <motion.div
            key={blog.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="bg-white dark:bg-dark shadow-lg rounded-3xl p-6 border-2 border-accent hover:scale-105 transition transform group cursor-pointer relative"
          >
            <h3 className="text-lg font-bold mb-1 text-accent">{blog.title}</h3>
            <span className="text-xs text-secondary mb-3">{blog.date}</span>
            <p className="mb-4 text-dark dark:text-primary">{blog.summary}</p>
            <a
              href={blog.link}
              className="mt-auto text-accent underline hover:text-teal-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

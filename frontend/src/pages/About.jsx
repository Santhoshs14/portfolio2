// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[80vh] flex flex-col items-center justify-center py-16 relative"
    >
      {/* Blobby SVG accent */}
      <svg
        className="absolute left-0 top-8 w-1/3 opacity-30 -z-10"
        viewBox="0 0 400 300"
      >
        <path
          d="M300,160Q288,220,200,245Q112,270,80,210Q48,150,100,85Q152,20,220,58Q288,96,300,160Z"
          fill="#ffeedd"
        />
      </svg>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-script text-4xl md:text-5xl text-accent mb-6"
        style={{ fontFamily: "Pacifico, cursive" }}
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="max-w-2xl text-lg md:text-xl text-dark dark:text-primary text-center font-body px-4"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Hi, I'm <b>Santhosh</b> – a software developer and passionate front-end
        developer from Chennai.
        <br />
        <br />
        I’m skilled in JavaScript, React.js, Express, MySQL, and Python, with
        hands-on experience in building scalable, user-focused web apps and REST
        APIs.
        <br />
        <br />
        I've worked as a Full Stack Developer at Flowtrik Technologies, Front
        End Developer at Getmax Solutions, and Software Tester at Niraltek
        Solutions. I'm committed to delivering robust, efficient code and love
        creating modern, interactive user interfaces.
        <br />
        <br />
        Outside work, you’ll find me solving LeetCode problems (800+!), leading
        technical teams, and constantly learning new technologies.
      </motion.p>
    </section>
  );
}

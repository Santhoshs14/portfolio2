import React from "react";
import { motion } from "framer-motion";
import awsa from "../assets/associate.png";
import leetcode from "../assets/leetcode2.png";
import awsp from "../assets/practitioner.png";
import sastra from "../assets/sastra2.png";
import ccna from "../assets/ccna.png";

const timeline = [
  {
    date: "2022",
    title: "Started B.E CSE, Chennai Institute of Technology",
    icon: "🎓",
    description:
      "Began Computer Science journey, building a solid foundation in programming, DSA, and project-based learning.",
  },
  {
    date: "Apr–Jul 2023",
    title: "Software Tester Intern, Niraltek Solutions",
    icon: "🧪",
    description:
      "Worked on test automation, bug tracking, and improved QA for real-world engineering software.",
  },
  {
    date: "Nov–Jan 2023",
    title: "Frontend Developer Intern, Getmax Solutions",
    icon: "💻",
    description:
      "Built responsive UIs, learned advanced React, and contributed to production-level web apps.",
  },
  {
    date: "Dec 2023",
    title: "Full Stack Intern, Flowtrik Technologies",
    icon: "🚀",
    description:
      "Shipped features across the stack: Node.js, Express, React, and cloud deployments.",
  },
  {
    date: "2024–Now",
    title: "Preparing for SDE Roles",
    icon: "🔎",
    description:
      "Solving 800+ LeetCode, building open source, and growing as a modern full stack developer.",
  },
];

const showcases = [
  {
    title: "AWS Certified Cloud Solution Architect",
    img: awsa,
    description:
      "Validated skills in designing, deploying, and optimizing secure, scalable cloud solutions on Amazon Web Services.",
    link: "",
  },
  {
    title: "Runner: Uniqcore Hackathon",
    img: sastra,
    description:
      "Achieved runner-up position for developing an innovative tech solution during SASTRA University’s Uniqcore Hackathon, demonstrating strong problem-solving and teamwork skills.",
    link: "",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    img: awsp,
    description:
      "Recognized for strong AWS Cloud fundamentals and practical experience deploying full stack apps.",
    link: "",
  },
  {
    title: "Cisco Certified Network Associate",
    img: ccna,
    description:
      "Demonstrated expertise in configuring, managing, and troubleshooting enterprise networks and foundational networking technologies.",
    link: "",
  },
  {
    title: "800+ LeetCode Problems Solved",
    img: leetcode,
    description:
      "Relentlessly improved problem-solving and algorithm skills—top percentile in LeetCode contests.",
    link: "",
  },
];

export default function ShowCaseWall() {
  return (
    <section
      id="showcase"
      className="relative py-16 min-h-[90vh] bg-primary dark:bg-dark flex flex-col items-center"
    >
      {/* Timeline */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-script text-4xl md:text-5xl text-accent mb-10"
      >
        My Tech Journey & Achievements
      </motion.h2>
      <div className="relative max-w-3xl w-full mb-16">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-accent/30 rounded-full" />
        <div className="flex flex-col gap-10 ml-10">
          {timeline.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="relative flex items-start gap-4"
            >
              <span className="absolute -left-10 top-2 text-3xl drop-shadow">
                {item.icon}
              </span>
              <div className="flex flex-col">
                <span className="text-accent font-bold text-lg">
                  {item.date}
                </span>
                <span className="font-semibold text-xl text-dark dark:text-primary">
                  {item.title}
                </span>
                <span className="text-dark/70 dark:text-primary/80">
                  {item.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Showcase Wall */}
      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-accent text-3xl font-script font-bold mb-8"
      >
        Showcase Wall
      </motion.h3>
      <div className="w-full max-w-5xl grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-3">
        {showcases.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.93, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: idx * 0.06 }}
            className="bg-white/90 dark:bg-[#22253f]/90 shadow-xl rounded-xl p-6 border border-accent/20 flex flex-col items-center glass-card"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 object-contain mb-3 rounded-lg"
              loading="lazy"
            />
            <div className="font-bold text-accent text-lg mb-2 text-center">
              {item.title}
            </div>
            <div className="text-dark dark:text-primary text-center text-sm mb-2">
              {item.description}
            </div>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold hover:underline mt-2"
              >
                View Credential
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

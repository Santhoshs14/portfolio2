import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaDownload, FaCloud } from "react-icons/fa";
import { Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";

// Animated ticker
function useRotator(arr, interval = 2400) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % arr.length), interval);
    return () => clearInterval(t);
  }, [arr, interval]);
  return arr[idx];
}

const learningNow = [
  "Next.js",
  "AWS",
  "Data Structures & Algorithms",
  "AI/ML",
  "Cloud Native Apps",
];

const funFacts = [
  "800+ LeetCode problems solved",
  "Organized 2 major tech events",
  "React & Express enthusiast",
  "Can debug anything (almost!)",
  "I love team projects and tech talks",
];

// Skills chart
const radarLabels = ["Full Stack", "Cloud", "ML", "Java", "Python"];
const radarData = [100, 70, 80, 60, 90];

export default function About({ onContactClick }) {
  const learning = useRotator(learningNow, 2300);
  const funFact = useRotator(funFacts, 2600);

  const chartData = {
    labels: radarLabels,
    datasets: [
      {
        label: "Skill Level",
        data: radarData,
        backgroundColor: "rgba(19,173,199,0.20)",
        borderColor: "#13adc7",
        pointBackgroundColor: "#13adc7",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#13adc7",
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    scale: {
      r: {
        min: 0,
        max: 100,
        pointLabels: { color: "#13adc7", font: { size: 16 } },
        grid: { color: "#13adc744" },
        angleLines: { color: "#13adc744" },
        ticks: { color: "#232946", stepSize: 20, backdropColor: "transparent" },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-[70vh] flex flex-col items-center py-14 bg-primary dark:bg-dark transition-colors duration-500 overflow-hidden"
    >
      {/* Animated gradient accent background */}
      <div className="absolute inset-0 -z-20 animate-gradient bg-gradient-to-tr from-[#13adc7]/15 via-[#e1bee7]/10 to-[#ffd6e0]/15" />
      <div className="absolute -top-16 -left-24 w-[250px] h-[230px] rounded-full bg-accent/20 blur-[60px] -z-10" />
      <div className="absolute -bottom-10 right-0 w-[170px] h-[140px] rounded-full bg-accent/20 blur-[40px] -z-10" />

      {/* Profile Sidebar */}
      <motion.div
        initial={{ opacity: 0, y: -28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center bg-white/95 dark:bg-[#232946]/90 rounded-2xl shadow-xl border border-accent/25 mb-14 py-6 px-7 gap-10"
        style={{ backdropFilter: "blur(10px)" }}
      >
        {/* Avatar */}
        <div className="flex flex-col items-center justify-center gap-2 min-w-[120px]">
          <motion.div
            initial={{ scale: 0.85 }}
            animate={{ scale: [0.85, 1.07, 1] }}
            transition={{ duration: 1.1 }}
            className="text-7xl"
            style={{ filter: "drop-shadow(0 2px 18px #13adc7aa)" }}
          >
            👨‍💻
          </motion.div>
          <div className="text-accent font-bold text-2xl font-script">
            Santhosh
          </div>
          <div className="text-xs bg-accent/10 rounded-full px-3 py-1 text-accent mt-1 font-semibold">
            Aspiring SDE
          </div>
        </div>
        {/* Headline & buttons */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-dark dark:text-primary">
            Transforming ideas into robust digital solutions
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onContactClick();
              }}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-white font-bold shadow hover:bg-[#1090aa] transition"
            >
              <FaEnvelope />
              Contact
            </a>
            <a
              href="/CIT_SANTHOSH S_CSE.pdf"
              download
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-accent border-2 border-accent font-bold shadow hover:bg-accent hover:text-white transition"
            >
              <FaDownload />
              Resume
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 mt-2">
            <span className="rounded-full bg-[#f8fafc] dark:bg-[#13adc7]/30 px-4 py-1 font-semibold text-accent text-base">
              Currently learning: <span className="font-bold">{learning}</span>
            </span>
            <span className="rounded-full bg-[#ffeedd] dark:bg-[#232946]/80 px-4 py-1 font-semibold text-dark dark:text-accent text-base">
              Fun fact: <span className="font-bold">{funFact}</span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* About Me Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay: 0.15 }}
        className="max-w-2xl text-center text-lg md:text-xl text-dark dark:text-primary font-semibold bg-white/80 dark:bg-[#22253f]/90 p-8 rounded-2xl shadow-lg border border-accent/20 hover:scale-[1.02] transition"
      >
        Hi, I’m <span className="text-accent font-bold">Santhosh</span>—a
        passionate software developer who loves building full stack apps that
        solve real problems. I work with technologies like{" "}
        <span className="text-cyan-500 font-bold">Next.js</span>,{" "}
        <span className="text-cyan-500 font-bold">React</span>,{" "}
        <span className="text-green-500 font-bold">Node.js</span>, and{" "}
        <span className="text-yellow-500 font-bold">JavaScript</span>, and I
        thrive on challenges in AI, cloud, and backend. Whether it’s optimizing
        code, collaborating with teams, or exploring the latest in ML and LLMs,
        I’m always ready to learn and create. If you have an exciting project or
        idea,{" "}
        <button
          onClick={onContactClick}
          className="text-accent underline hover:text-accent/80 font-bold transition"
        >
          let’s connect!
        </button>
      </motion.p>

      {/* Skills Radar Chart */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-xl bg-white/90 dark:bg-[#22253f]/85 rounded-2xl shadow-lg border border-accent/20 p-6 mt-14 glass-card"
      >
        <h3 className="text-accent text-xl font-bold mb-2 flex items-center gap-2">
          <span>
            <FaCloud />
          </span>
          Skill Radar
        </h3>
        <Radar data={chartData} options={chartOptions} />
      </motion.div>
    </section>
  );
}

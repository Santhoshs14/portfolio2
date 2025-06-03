import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Home() {
  // For Particles.js config
  async function particlesInit(main) {
    await loadFull(main);
  }

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: { onClick: { enable: false }, onHover: { enable: false } },
    },
    particles: {
      color: { value: ["#13adc7", "#e1bee7", "#ffd6e0"] },
      number: { value: 36, density: { enable: true, area: 800 } },
      size: { value: 5, random: { enable: true, minimumValue: 2 } },
      opacity: { value: 0.2, random: true },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        outModes: "out",
        random: true,
        straight: false,
      },
      shape: {
        type: ["circle"],
      },
    },
    detectRetina: true,
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden select-none">
      {/* Animated Gradient BG Overlay */}
      <div className="absolute inset-0 -z-20 animate-gradient bg-gradient-to-tr from-[#13adc7] via-[#e1bee7] to-[#ffd6e0] opacity-30" />

      {/* SVG Blob Layers with opacity for extra depth */}
      <motion.div
        className="absolute top-0 left-0 w-[80vw] h-[60vh] -z-10"
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 0.2 }}
      >
        <svg width="100%" height="100%" viewBox="0 0 900 600" fill="none">
          <defs>
            <linearGradient id="parallax1" x1="0" y1="0" x2="900" y2="600">
              <stop stopColor="#13adc7" />
              <stop offset="1" stopColor="#e1bee7" />
            </linearGradient>
          </defs>
          <ellipse
            cx="400"
            cy="230"
            rx="340"
            ry="150"
            fill="url(#parallax1)"
            opacity="0.15"
          />
        </svg>
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-[70vw] h-[50vh] -z-10"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 0.3 }}
      >
        <svg width="100%" height="100%" viewBox="0 0 900 600" fill="none">
          <defs>
            <linearGradient id="parallax2" x1="900" y1="600" x2="0" y2="0">
              <stop stopColor="#ffeedd" />
              <stop offset="1" stopColor="#13adc7" />
            </linearGradient>
          </defs>
          <ellipse
            cx="500"
            cy="400"
            rx="340"
            ry="150"
            fill="url(#parallax2)"
            opacity="0.12"
          />
        </svg>
      </motion.div>
      {/* Floating Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 w-full h-full pointer-events-none -z-10"
      />

      {/* Main Content - centered */}
      <div className="flex flex-col items-center justify-center w-full text-center z-10">
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="w-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-5xl md:text-6xl font-script font-bold mb-6 tracking-tight text-accent dark:text-[#ffd6e0] drop-shadow-lg text-center"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            Hi, I'm Santhosh!{" "}
            <span className="inline-block animate-bounce">👋</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-2xl mb-10 text-dark dark:text-primary font-semibold text-center"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Software Developer | Full Stack Developer
          </motion.p>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.07 }}
            className="inline-block px-8 py-3 bg-accent text-white rounded-full font-bold text-lg shadow-lg transition mx-auto"
            style={{ display: "inline-block" }}
          >
            Explore My Work
          </motion.a>
        </Tilt>
      </div>
    </section>
  );
}

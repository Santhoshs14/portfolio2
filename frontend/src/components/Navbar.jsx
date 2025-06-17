import React, { useState, useEffect } from "react";
import useTheme from "../hooks/useTheme";
import { Transition } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ onContactClick }) {
  const [theme, setTheme] = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24); // change threshold if needed
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Base styles
  const navBase = "fixed top-0 left-0 w-full z-30 transition-all duration-300";
  const navScrolled =
    "backdrop-blur-md bg-primary/70 dark:bg-dark/70 shadow-md";
  const navAtTop = "bg-transparent shadow-none";

  return (
    <nav
      className={[
        navBase,
        scrolled ? navScrolled : navAtTop,
        "border-b border-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <span
          href="#home"
          className="font-script font-extrabold tracking-tight text-accent pl-2 -ml-6 text-3xl md:text-4xl"
          style={{
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "1px",
          }}
        >
          Santhosh
        </span>
        <div className="hidden md:flex gap-8 font-script text-lg items-center">
          <a
            href="#about"
            className="transition text-accent hover:text-dark dark:hover:text-white"
          >
            About
          </a>
          <a
            href="#projects"
            className="transition text-accent hover:text-dark dark:hover:text-white"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="transition text-accent hover:text-dark dark:hover:text-white"
          >
            Skills
          </a>
          <a
            href="#showcase"
            className="transition text-accent hover:text-dark dark:hover:text-white"
          >
            Journey
          </a>
          <button
            onClick={onContactClick}
            className="transition bg-transparent border-none outline-none text-accent hover:text-dark dark:hover:text-white"
            style={{ cursor: "pointer" }}
          >
            Contact
          </button>
          {/* THEME TOGGLE BUTTON */}
          <button
            aria-label="Toggle Theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-4 w-12 h-12 flex items-center justify-center rounded-full border-2 border-accent bg-white dark:bg-dark shadow-md relative transition-all"
            style={{
              boxShadow: scrolled
                ? "0 2px 12px 0 rgba(19,173,199,0.10)"
                : "none",
            }}
          >
            <AnimatePresence initial={false} mode="wait">
              {theme === "dark" ? (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: -60, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 60, scale: 0.8 }}
                  transition={{ type: "spring", duration: 0.35 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg
                    width="28"
                    height="28"
                    fill="#13adc7"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 13A9 9 0 1111 3a7 7 0 0010 10z" />
                  </svg>
                </motion.span>
              ) : (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: 60, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -60, scale: 0.8 }}
                  transition={{ type: "spring", duration: 0.35 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg
                    width="28"
                    height="28"
                    fill="#FFD447"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <g stroke="#FFD447" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="4" />
                      <line x1="12" y1="20" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="4" y2="12" />
                      <line x1="20" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </g>
                  </svg>
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
        {/* Hamburger */}
        <button
          className="md:hidden p-2 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            width="32"
            height="32"
            fill="none"
            stroke="#13adc7"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      <Transition
        show={mobileOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-6"
      >
        <div className="md:hidden px-6 pb-4 rounded-b-2xl shadow font-body text-lg flex flex-col gap-4 bg-primary/95 dark:bg-dark/95">
          <a
            href="#about"
            onClick={() => setMobileOpen(false)}
            className="transition text-accent"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setMobileOpen(false)}
            className="transition text-accent"
          >
            Projects
          </a>
          <a
            href="#blog"
            onClick={() => setMobileOpen(false)}
            className="transition text-accent"
          >
            Blog
          </a>
          <button
            onClick={() => {
              setMobileOpen(false);
              onContactClick();
            }}
            className="transition bg-transparent border-none outline-none text-left text-accent"
            style={{ cursor: "pointer" }}
          >
            Contact
          </button>
          <button
            aria-label="Toggle Theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full border-2 border-accent bg-white dark:bg-dark w-12 h-12 flex items-center justify-center shadow-md relative transition-all"
          >
            <AnimatePresence initial={false} mode="wait">
              {theme === "dark" ? (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: -60, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 60, scale: 0.8 }}
                  transition={{ type: "spring", duration: 0.35 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg
                    width="28"
                    height="28"
                    fill="#13adc7"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 13A9 9 0 1111 3a7 7 0 0010 10z" />
                  </svg>
                </motion.span>
              ) : (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: 60, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -60, scale: 0.8 }}
                  transition={{ type: "spring", duration: 0.35 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg
                    width="28"
                    height="28"
                    fill="#FFD447"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <g stroke="#FFD447" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="4" />
                      <line x1="12" y1="20" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="4" y2="12" />
                      <line x1="20" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </g>
                  </svg>
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </Transition>
    </nav>
  );
}

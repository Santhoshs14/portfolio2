import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Use document.documentElement.scrollTop for compatibility
      if (window.scrollY > 400 || document.documentElement.scrollTop > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top of the page (works for all standard layouts)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Floating FAB, visible only when scrolling down
  return visible ? (
    <button
      className="fixed bottom-10 right-6 bg-accent text-white p-3 rounded-full shadow-2xl z-[120] hover:bg-dark hover:text-accent transition"
      style={{ fontSize: 22 }}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 19V5M12 5l-7 7M12 5l7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  ) : null;
}

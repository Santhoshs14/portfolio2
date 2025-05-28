import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactDrawer({ open, onClose, children }) {
  const drawerRef = useRef();

  // Close on ESC
  useEffect(() => {
    function handleKey(event) {
      if (event.key === "Escape" && open) onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Trap focus
  useEffect(() => {
    if (!open) return;
    const firstInput = drawerRef.current?.querySelector(
      "input, textarea, button"
    );
    firstInput?.focus();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Drawer */}
          <motion.div
            ref={drawerRef}
            className="fixed top-0 right-0 h-full w-full sm:w-[430px] bg-primary dark:bg-dark shadow-2xl z-50 overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0.13, duration: 0.4 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl text-accent hover:text-dark dark:hover:text-white transition"
              aria-label="Close"
              onClick={onClose}
            >
              &times;
            </button>
            <div className="pt-14 pb-8 px-6">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

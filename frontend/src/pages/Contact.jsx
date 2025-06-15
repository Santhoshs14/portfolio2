import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function Contact({ onSubmitted }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        "https://portfolio2-vr6o.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
        onSubmitted?.();
      } else {
        setError("Could not send your message. Please try again later.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-script text-3xl md:text-4xl text-accent mb-8 text-center"
        style={{ fontFamily: "Pacifico, cursive" }}
      >
        Contact
      </motion.h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-dark shadow-lg rounded-3xl p-6 w-full max-w-xl mx-auto border-2 border-accent flex flex-col gap-4"
      >
        <input
          className="p-3 rounded-lg border-2 border-secondary focus:outline-none focus:ring-2 focus:ring-accent font-body text-dark"
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <input
          className="p-3 rounded-lg border-2 border-secondary focus:outline-none focus:ring-2 focus:ring-accent font-body text-dark"
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <textarea
          className="p-3 rounded-lg border-2 border-secondary focus:outline-none focus:ring-2 focus:ring-accent font-body text-dark"
          name="message"
          rows="5"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <button
          type="submit"
          className={`bg-accent text-white font-bold py-3 rounded-lg shadow transition
            ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-teal-700"}`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        <AnimatePresence>
          {success && (
            <motion.div
              className="flex items-center justify-center gap-2 text-green-600 font-bold mt-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaCheckCircle /> Message sent!
            </motion.div>
          )}
          {error && (
            <motion.div
              className="text-red-500 font-semibold mt-2 text-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.4 }}
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact({ onSubmitted }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      }
    } catch (error) {
      alert("Something went wrong. Try again!");
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
        />
        <input
          className="p-3 rounded-lg border-2 border-secondary focus:outline-none focus:ring-2 focus:ring-accent font-body text-dark"
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="p-3 rounded-lg border-2 border-secondary focus:outline-none focus:ring-2 focus:ring-accent font-body text-dark"
          name="message"
          rows="5"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-accent text-white font-bold py-3 rounded-lg shadow hover:bg-teal-700 transition"
        >
          Send Message
        </button>
        {success && (
          <div className="text-green-600 font-bold mt-2">Message sent!</div>
        )}
      </form>
    </div>
  );
}

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ContactDrawer from "./components/ContactDrawer";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./pages/Skills";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="bg-primary dark:bg-dark min-h-screen transition-colors duration-500 font-body flex flex-col">
      <Navbar onContactClick={() => setContactOpen(true)} />
      <main className="pt-24 flex-grow">
        <Home />
        <About onContactClick={() => setContactOpen(true)} />
        <Projects />
        <Skills />
        <Blog />
      </main>
      <Footer />
      <ContactDrawer open={contactOpen} onClose={() => setContactOpen(false)}>
        <Contact
          onSubmitted={() => setTimeout(() => setContactOpen(false), 1500)}
        />
      </ContactDrawer>
      <ScrollToTop />
    </div>
  );
}

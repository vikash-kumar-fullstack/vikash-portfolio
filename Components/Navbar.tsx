"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full flex justify-between items-center h-16">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wide cursor-pointer">
          <span className="text-white">Vikash</span>
          <span className="text-gray-400">.</span>
          <span className="text-blue-400">dev</span>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition ${
                activeSection === item.id
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-blue-400"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="px-4 py-2 rounded-xl border border-white/20 
                       hover:scale-105 hover:bg-white/10 
                       transition-all duration-300 text-sm font-medium"
          >
            {theme === "dark" ? "☀" : "🌙"}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Slide Menu */}
<AnimatePresence>
  {menuOpen && (
    <>
      {/* Dark Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 bg-black z-40"
      />

      {/* Slide Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 right-0 h-screen w-72 bg-[#0f172a]/95 backdrop-blur-sm border-l border-white/10 shadow-2xl shadow-black/50 z-50 flex flex-col p-8"
      >
        {/* Close Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-xl text-gray-300 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col gap-8 text-lg">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className={`transition ${
                activeSection === item.id
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-blue-400"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Spacer */}
        <div className="grow" />

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="mt-10 px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-medium text-center shadow-lg shadow-purple-500/20 hover:scale-105 transition"
        >
          Download Resume
        </a>
      </motion.div>
    </>
  )}
</AnimatePresence>
    </nav>
  );
}
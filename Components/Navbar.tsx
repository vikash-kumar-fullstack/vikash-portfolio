"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Education", href: "/education" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full flex justify-between items-center h-16">

        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-wide cursor-pointer">
          <span className="text-white">Vikash</span>
          <span className="text-gray-400">.</span>
          <span className="text-blue-400">dev</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                pathname === item.href
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-blue-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-4 py-2 rounded-xl border border-white/20 hover:scale-105 hover:bg-white/10 transition-all duration-300 text-sm font-medium"
          >
            {theme === "dark" ? "☀" : "🌙"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 h-screen w-72 bg-[#0f172a]/95 backdrop-blur-sm border-l border-white/10 shadow-2xl shadow-black/50 z-50 flex flex-col p-8"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-xl text-gray-300 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-col gap-8 text-lg">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`transition ${
                      pathname === item.href
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-blue-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="grow" />
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
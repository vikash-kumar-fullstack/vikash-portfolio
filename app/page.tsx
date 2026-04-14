"use client";

import { Typewriter } from "react-simple-typewriter";
import Navbar from "@/Components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollToTop from "@/Components/ScrollToTop";
import CountUp from "react-countup";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-screen relative">
        <Navbar />

        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-600/20 via-purple-600/10 to-transparent blur-3xl" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

        <section className="flex items-center justify-center min-h-screen pt-24 px-6">
          <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE - TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <p className="text-blue-400 font-medium tracking-wider uppercase text-sm">
                Welcome to my portfolio
              </p>

              <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Vikash Kumar
                </span>{" "}
                — Full Stack Developer
              </h1>

              <p className="mt-6 text-lg text-gray-400 max-w-xl">
                <Typewriter
                  words={[
                    "Building scalable web applications",
                    "API & System Integration Developer",
                    "MERN Stack Developer",
                    "Problem Solver"
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </p>

              <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-5">
                <Link
                  href="/projects"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 font-medium shadow-lg shadow-blue-600/30"
                >
                  View Projects
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 font-medium"
                >
                  Contact Me
                </Link>

                <a
                  href="/resume.pdf"
                  download
                  className="px-7 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all duration-300 font-medium shadow-lg shadow-purple-600/30 hover:-translate-y-1"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>

            {/* RIGHT SIDE - PHOTO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative group">
                <div className="absolute -inset-2 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 blur-xl opacity-50 group-hover:opacity-80 transition duration-500 animate-pulse"></div>
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  <Image
                    src="/profile.jpeg"
                    alt="Vikash Kumar Full Stack Developer"
                    fill
                    priority
                    sizes="(max-width: 768px) 288px, 384px"
                    className="rounded-full object-cover"
                  />
                  
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievement Stats */}
        <section className="py-20 px-6 bg-linear-to-r from-blue-900/30 to-purple-900/30 border-y border-white/10">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div>
              <h3 className="text-4xl font-bold text-white">
                <CountUp end={2} duration={2} />+
              </h3>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Internships</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white">
                <CountUp end={6} duration={2} />+
              </h3>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Projects</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white">
                <CountUp end={9.43} decimals={2} duration={2} />
              </h3>
              <p className="text-gray-400 text-sm uppercase tracking-wider">CGPA</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white">
                <CountUp end={90.2} decimals={1} duration={2} />%
              </h3>
              <p className="text-gray-400 text-sm uppercase tracking-wider">12th Score</p>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Explore My Work</h2>
            <p className="mt-4 text-gray-400">Discover my skills, projects, and professional journey</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Skills", desc: "Technologies and tools I work with", href: "/skills", color: "blue" },
              { title: "Projects", desc: "Real-world applications I've built", href: "/projects", color: "purple" },
              { title: "Experience", desc: "My professional journey and internships", href: "/experience", color: "green" }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={card.href}
                  className={`block p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 hover:border-${card.color}-500/40 transition-all duration-300 text-center`}
                >
                  <h3 className={`text-2xl font-bold text-${card.color}-400`}>{card.title}</h3>
                  <p className="mt-3 text-gray-400">{card.desc}</p>
                  <span className={`mt-4 inline-block text-${card.color}-400`}>Learn More →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <ScrollToTop />
      </main>
    </>
  );
}
"use client";

import Navbar from "@/Components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollToTop from "@/Components/ScrollToTop";

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen relative">
        <Navbar />

        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-600/20 via-purple-600/10 to-transparent blur-3xl" />

        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

        {/* About Hero Section */}
        <section className="pt-32 px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              About <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
              Get to know more about my journey, skills, and what drives me as a developer.
            </p>
          </motion.div>
        </section>

        {/* Main About Content */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-2 rounded-2xl bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/profile.jpeg"
                    alt="Vikash Kumar"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right - Bio */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold">
                Vikash Kumar — <span className="text-blue-400">Full Stack Developer</span>
              </h2>
              
              <p className="text-gray-300 leading-relaxed">
                I'm a BTech Computer Science student at the National Institute of Technology Mizoram, 
                passionate about building secure, scalable, and performance-driven web applications.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                With a strong foundation in the MERN stack and experience in system integration, 
                I've worked on projects ranging from e-commerce platforms to automation systems 
                and blockchain research.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                My approach combines clean architecture with modern development practices, 
                ensuring that every solution I build is robust, maintainable, and user-focused.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Strengths Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Core Strengths</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Full Stack Development",
                description: "Building modern MERN stack applications with clean architecture and optimized performance.",
                icon: "🚀"
              },
              {
                title: "System Integration",
                description: "Experience in API integrations, automation workflows, and backend systems.",
                icon: "🔗"
              },
              {
                title: "Cybersecurity Interest",
                description: "Strong interest in security principles, authentication systems, and secure coding practices.",
                icon: "🔒"
              },
              {
                title: "Problem Solving",
                description: "Analytical approach to debugging and optimizing complex systems.",
                icon: "💡"
              },
              {
                title: "Blockchain Research",
                description: "Research experience in Solidity smart contracts and decentralized applications.",
                icon: "⛓️"
              },
              {
                title: "Continuous Learning",
                description: "Always exploring new technologies and best practices in software development.",
                icon: "📚"
              }
            ].map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:-translate-y-2 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{strength.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{strength.title}</h3>
                <p className="text-gray-400">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <ScrollToTop />
      </main>
    </>
  );
}
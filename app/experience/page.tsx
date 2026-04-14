"use client";

import Navbar from "@/Components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollToTop from "@/Components/ScrollToTop";
import { useState } from "react";

export default function ExperiencePage() {
  const [openCert, setOpenCert] = useState<string | null>(null);

  const experiences = [
    {
      role: "Software Development Engineer Intern",
      company: "RoadX Motors Pvt Ltd",
      duration: "Jul 2025 – Jan 2026",
      period: "6 Months",
      logo: "/logos/roadx.jpg",
      color: "blue",
      certificate: "/certificates/roadx.pdf",
      description: "Designed and deployed a production-ready WhatsApp Business automation platform integrating IndiaMART APIs, AI-based conversational logic, and MongoDB-driven dynamic configurations.",
      achievements: [
        "Reduced manual lead handling by automating WhatsApp workflows",
        "Integrated IndiaMART webhook with MongoDB upsert logic",
        "Designed AI fallback conversational engine",
        "Built scalable media messaging backend"
      ],
      technologies: ["Node.js", "MongoDB", "WhatsApp Cloud API", "IndiaMART Webhook", "AI Systems"]
    },
    {
      role: "Research Intern",
      company: "Indian Institute Of Technology Patna",
      duration: "Jun 2025 – Jul 2025",
      period: "2 Months",
      logo: "/logos/iitp.jpeg",
      color: "purple",
      certificate: "/certificates/iitp.pdf",
      description: "Conducted research under Dr. Raju Halder on Solidity Smart Contract Language, focusing on blockchain architecture, contract security patterns, gas optimization techniques, and decentralized system design.",
      achievements: [
        "Analyzed smart contract vulnerabilities and reentrancy patterns",
        "Studied gas-efficient Solidity coding practices",
        "Implemented sample decentralized applications (dApps)",
        "Explored Ethereum Virtual Machine (EVM) execution model"
      ],
      technologies: ["Solidity", "Blockchain", "Smart Contracts", "EVM", "Web3.js"]
    }
  ];

  return (
    <>
      <main className="min-h-screen relative">
        <Navbar />

        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-600/20 via-purple-600/10 to-transparent blur-3xl" />

        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

        {/* Hero Section */}
        <section className="pt-32 px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              Professional <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
              Real-world engineering impact and research exposure that shaped my technical expertise.
            </p>
          </motion.div>
        </section>

        {/* Experience Timeline */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <div className="relative border-l-2 border-white/20 pl-8 md:pl-12 space-y-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-11.25 md:-left-13.25 top-3 w-5 h-5 bg-${exp.color}-500 rounded-full shadow-lg shadow-${exp.color}-500/60 animate-pulse`}></div>

                {/* Content Card */}
                <div className={`p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-[1.02] hover:border-${exp.color}-500/50 hover:shadow-xl hover:shadow-${exp.color}-500/10 transition-all duration-500`}>
                  
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">{exp.role}</h3>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="relative w-10 h-10">
                            <Image 
                                src={exp.logo} 
                                alt={exp.company} 
                                fill
                                sizes="40px"
                                className="rounded-md object-cover" 
                            />
                            </div>
                        <p className={`text-${exp.color}-400 text-lg`}>{exp.company}</p>
                      </div>
                    </div>
                    <span className={`px-4 py-2 text-sm bg-${exp.color}-500/10 border border-${exp.color}-500/20 text-${exp.color}-400 rounded-full whitespace-nowrap`}>
                      {exp.duration} • {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-6 text-gray-300 leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="mt-6 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className={`text-${exp.color}-400 mt-1`}>•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 bg-${exp.color}-500/10 border border-${exp.color}-500/20 rounded-full text-${exp.color}-400`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Certificate Button */}
                  <button
                    onClick={() => setOpenCert(exp.certificate)}
                    className={`mt-6 text-sm text-${exp.color}-400 hover:underline`}
                  >
                    View Certificate →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Applied Section */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Key Learnings</h2>
            <p className="mt-4 text-gray-400">Skills and knowledge gained through professional experiences</p>
          </motion.div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <h3 className="text-xl font-semibold text-blue-400">Technical Growth</h3>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• Production-grade API integration patterns</li>
                <li>• Scalable backend architecture design</li>
                <li>• Real-world database optimization</li>
                <li>• AI/ML workflow integration</li>
                <li>• Blockchain and smart contract development</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <h3 className="text-xl font-semibold text-purple-400">Professional Development</h3>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• Research methodology and documentation</li>
                <li>• Cross-functional collaboration</li>
                <li>• Project planning and execution</li>
                <li>• Technical communication skills</li>
                <li>• Problem-solving in production environments</li>
              </ul>
            </div>
          </div>
        </section>

        <ScrollToTop />
      </main>

      {/* Certificate Modal */}
      {openCert && (
        <div className="fixed inset-0 z-100 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpenCert(null)}
          />
          <div className="relative bg-white w-[95%] md:w-[80%] h-[85%] rounded-2xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setOpenCert(null)}
              className="absolute top-4 right-4 z-10 text-black font-bold text-lg"
            >
              ✕
            </button>
            <iframe
              src={openCert}
              className="w-full h-full"
              title="Certificate"
            />
          </div>
        </div>
      )}
    </>
  );
}
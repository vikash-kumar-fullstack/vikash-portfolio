"use client";

import Navbar from "@/Components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import MedHospiCarousel from "@/Components/MedHospiCarousel";
import ScrollToTop from "@/Components/ScrollToTop";
import { useState } from "react";

export default function ProjectsPage() {
  const [showAll, setShowAll] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string>("All");

  const projects = [
    {
      title: "Smart Healthcare Access System",
      description:
        "Enterprise-grade healthcare platform enabling intelligent hospital discovery, appointment booking, QR-based check-ins, real-time queue management, EMR workflows, and multi-role healthcare operations.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.IO",
        "JWT",
        "Google OAuth",
        "Cloudinary"
      ],
      image: "/projects/medhospi.jpeg",
      github:
        "https://github.com/vikash-kumar-fullstack/smart-healthcare-access-system",
      live: "https://smart-healthcare-access-system.vercel.app",
      featured: true
    },
    {
      title: "DesiDealz - E Commerce Platform",
      description:
        "Full-stack MERN e-commerce platform with authentication, cart system, and secure payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "/projects/DesiDealz.jpeg",
      github: "https://github.com/vikash-kumar-fullstack/desiDealz",
      live: "https://desidealz.onrender.com/product",
    },
    {
      title: "Teach With Teach",
      description:
        "Government school monitoring platform with live location tracking, hierarchy system, and real-time audio verification.",
      tech: ["HTML", "CSS", "JavaScript", "MongoDB"],
      image: "/projects/twt.jpeg",
      github: "https://github.com/vikash-kumar-fullstack/TeachWithTech",
      live: "#"
    },
    {
      title: "Digital Grievance System",
      description:
        "Online complaint management system with admin dashboard and real-time status tracking.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/projects/grievance.jpeg",
      github: "https://github.com/vikash-kumar-fullstack/DigitalGrievanceSystem",
      live: "https://digitalgrievancesystem.onrender.com"
    },
    {
      title: "Automation System",
      description:
        "Lead automation system integrating IndiaMART API and WhatsApp Cloud API with chatbot and scheduler.",
      tech: ["Node.js", "MongoDB", "API Integration"],
      image: "/projects/automation.jpeg",
      github: "#",
      live: "#"
    },
    {
      title: "Netflix Pro UI Clone",
      description:
        "Responsive Netflix UI clone with authentication and dynamic movie display interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/projects/netflix.jpeg",
      github: "https://github.com/vikash-kumar-fullstack/NetflixClone",
      live: "https://netflixclone-gray.vercel.app/"
    },
    {
      title: "Premiere Clone",
      description:
        "A professional video editing software UI recreation inspired by Adobe Premiere Pro. Includes timeline interface, layered panels, responsive layout, and smooth interactive controls.",
      tech: ["HTML", "CSS"],
      image: "/projects/premiere.jpeg",
      github: "https://github.com/vikash-kumar-fullstack/premier_clone",
      live: "https://premierclone.vercel.app/"
    }
  ];

  const allTechnologies = ["All", ...new Set(projects.flatMap(p => p.tech))];

  const filteredProjects = selectedTech === "All" 
    ? projects 
    : projects.filter(p => p.tech.includes(selectedTech));

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

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
              My <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
              A collection of projects I've built showcasing full-stack development, 
              system integration, and problem-solving skills.
            </p>
          </motion.div>
        </section>

        {/* Filter Section */}
        <section className="py-8 px-6 max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedTech === tech
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Project */}
        {selectedTech === "All" && (
          <section className="py-8 px-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-10 items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:scale-[1.02] hover:border-blue-500/40 transition-all duration-300">
                <div className="relative w-full h-64 md:h-full min-h-125">
                  <MedHospiCarousel />
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-sm uppercase tracking-wider text-blue-400">Featured Project</p>
                  <h3 className="mt-4 text-2xl md:text-3xl font-bold">
                    Smart Healthcare Access System
                  </h3>
                  <p className="mt-6 text-gray-400 leading-relaxed">
                    A production-grade healthcare platform supporting intelligent hospital
                    discovery, symptom-based search, appointment booking, QR check-ins,
                    real-time queue tracking, family member bookings, EMR workflows,
                    and five independent role dashboards.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "React",
                      "Node.js",
                      "MongoDB",
                      "Socket.IO",
                      "JWT",
                      "Google OAuth",
                      "Cloudinary"
                    ].map((tech, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-300">
                    <div>🏥 10+ Hospitals</div>
                    <div>👨‍⚕️ 50+ Doctors</div>
                    <div>👨‍👩‍👧 Family Profiles</div>
                    <div>📱 QR Check-ins</div>
                    <div>📊 5 Role Dashboards</div>
                    <div>⚡ Real-time Queue</div>
                  </div>
                  <div className="mt-8 flex gap-4">
                    <a
                    href="https://github.com/vikash-kumar-fullstack/smart-healthcare-access-system" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition">
                      GitHub
                    </a>
                    <a
                    href="https://smart-healthcare-access-system.vercel.app" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* Projects Grid */}
        <section className="py-8 px-6 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProjects.filter(p => selectedTech !== "All" || !p.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-[1.02] hover:border-blue-500/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative w-full h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 320px, 384px"
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition">
                        GitHub
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Show More Button */}
          {filteredProjects.length > 6 && (
            <motion.div layout className="mt-12 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition font-medium"
              >
                {showAll ? "Show Less" : "View More Projects"}
              </button>
            </motion.div>
          )}
        </section>

        <ScrollToTop />
      </main>
    </>
  );
}
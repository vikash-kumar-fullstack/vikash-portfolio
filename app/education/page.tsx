"use client";

import Navbar from "@/Components/Navbar";
import { motion } from "framer-motion";
import ScrollToTop from "@/Components/ScrollToTop";
import CountUp from "react-countup";
import { useState } from "react";

export default function EducationPage() {
  const [openCert, setOpenCert] = useState<string | null>(null);

  const educationDetails = [
    {
      institution: "National Institute of Technology Mizoram",
      degree: "B.Tech — Computer Science & Engineering",
      duration: "2023 – 2027",
      score: "9.43",
      scoreLabel: "CGPA",
      color: "blue",
      logo: "/logos/nitm.png",
      description: "Pursuing Bachelor of Technology with focus on software development, data structures, algorithms, and system design.",
      courses: ["Data Structures & Algorithms", "Database Management", "Operating Systems", "Computer Networks", "Web Development", "Software Engineering"]
    },
    {
      institution: "DK College",
      degree: "Higher Secondary (Class XII)",
      duration: "2020 – 2022",
      score: "90.2",
      scoreLabel: "Percentage",
      color: "purple",
      description: "Completed Higher Secondary education with Physics, Chemistry, and Mathematics as core subjects.",
      courses: ["Physics", "Chemistry", "Mathematics", "English", "Computer Science"]
    },
    {
      institution: "High School",
      degree: "Secondary Education (Class X)",
      duration: "2019 – 2020",
      score: "90.2",
      scoreLabel: "Percentage",
      color: "green",
      description: "Completed secondary education with distinction in Mathematics and Science.",
      courses: ["Mathematics", "Science", "Social Studies", "English", "Hindi"]
    }
  ];

  const certifications = [
    { 
      name: "Full Stack Web Development", 
      issuer: "TeachNook", 
      year: "2024",
      certificate: "/certificates/teachnook.pdf"
    },
    { 
      name: "Software Development Intern", 
      issuer: "NandiGhosh Roadx PVT LTD", 
      year: "2026",
      certificate: "/certificates/roadx.pdf"
    },
    { 
      name: "Blockchain Fundamentals", 
      issuer: "IIT Patna", 
      year: "2025",
      certificate: "/certificates/iitp.pdf"
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
              Academic <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
            </h1>
            <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
              My educational background that shaped my technical foundation and problem-solving abilities.
            </p>
          </motion.div>
        </section>

        {/* Education Timeline */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <div className="relative border-l-2 border-white/20 pl-8 md:pl-12 space-y-16">
            {educationDetails.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-11.25 md:-left-13.25 top-3 w-5 h-5 bg-${edu.color}-500 rounded-full shadow-lg shadow-${edu.color}-500/60`}>
                  <div className={`absolute inset-0 bg-${edu.color}-500 rounded-full animate-ping opacity-75`}></div>
                </div>

                {/* Content Card */}
                <div className={`p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-[1.02] hover:border-${edu.color}-500/50 hover:shadow-xl hover:shadow-${edu.color}-500/10 transition-all duration-500`}>
                  
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">{edu.institution}</h3>
                      <p className={`text-${edu.color}-400 text-lg mt-1`}>{edu.degree}</p>
                    </div>
                    <span className={`px-4 py-2 text-sm bg-${edu.color}-500/10 border border-${edu.color}-500/20 text-${edu.color}-400 rounded-full whitespace-nowrap`}>
                      {edu.duration}
                    </span>
                  </div>

                  {/* Score Card */}
                  <div className="mt-6 p-6 rounded-2xl bg-black/20 border border-white/5 inline-block">
                    <p className="text-gray-400 text-sm uppercase tracking-wider">{edu.scoreLabel}</p>
                    <p className="text-4xl font-bold text-white">
                      <CountUp end={parseFloat(edu.score)} decimals={edu.score.includes(".") ? 2 : 0} duration={2} />
                      {edu.score.includes(".") ? "" : "%"}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-6 text-gray-300 leading-relaxed">{edu.description}</p>

                  {/* Courses */}
                  <div className="mt-6">
                    <p className="text-sm text-gray-400 mb-3">Key Subjects:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span
                          key={i}
                          className={`text-xs px-3 py-1 bg-${edu.color}-500/10 border border-${edu.color}-500/20 rounded-full text-${edu.color}-400`}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
            <p className="mt-4 text-gray-400">Professional certifications and achievements</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/40 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold">{cert.name}</h3>
                <p className="text-gray-400 text-sm mt-2">{cert.issuer}</p>
                <p className="text-blue-400 text-sm mt-1">{cert.year}</p>
                
                {/* View Certificate Button */}
                <button
                  onClick={() => setOpenCert(cert.certificate)}
                  className="mt-4 text-sm px-4 py-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600/30 transition-all duration-300"
                >
                  View Certificate →
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        <ScrollToTop />
      </main>

      {/* Certificate Modal */}
      {openCert && (
        <div className="fixed inset-0 z-100 flex items-center justify-center">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpenCert(null)}
          />

          {/* Modal Content */}
          <div className="relative bg-white w-[95%] md:w-[80%] h-[85%] rounded-2xl shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setOpenCert(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold text-lg flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            {/* Download Button */}
            <a
              href={openCert}
              download
              className="absolute bottom-4 right-4 z-10 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors shadow-lg"
            >
              Download ↓
            </a>

            {/* PDF Viewer */}
            <iframe
              src={openCert}
              className="w-full h-full"
              title="Certificate Viewer"
            />
          </div>
        </div>
      )}
    </>
  );
}
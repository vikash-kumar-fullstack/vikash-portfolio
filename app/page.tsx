"use client";

import { Typewriter } from "react-simple-typewriter";
import Navbar from "@/Components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import ScrollToTop from "@/Components/ScrollToTop";
import CountUp from "react-countup";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaDatabase
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPython
} from "react-icons/si";

export default function Home() {
  // for skills section
  const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Git", icon: <FaGitAlt /> },
{ name: "SQL", icon: <FaDatabase /> }
];

const [openCert, setOpenCert] = useState<string | null>(null);

// for project section
const projects = [
  {
    title: "DesiDealz - E Commerce Platform",
    description:
      "Full-stack MERN e-commerce platform with authentication, cart system, and secure payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image:"/projects/DesiDealz.jpeg",
    github: "https://github.com/vikash-kumar-fullstack/desiDealz",
    live: "https://desidealz.onrender.com/product"
  },
  {
    title: "Teach With Teach",
    description:
      "Government school monitoring platform with live location tracking, hierarchy system, and real-time audio verification.",
    tech: ["HTML", "CSS", "JavaScript", "MongoDB"],
    image:"/projects/twt.jpeg",
    github: "https://github.com/vikash-kumar-fullstack/TeachWithTech",
    live: "#"
  },
  {
    title: "Automation System",
    description:
      "Lead automation system integrating IndiaMART API and WhatsApp Cloud API with chatbot and scheduler.",
    tech: ["Node.js", "MongoDB", "API Integration"],
    image:"/projects/automation.jpeg",
    github: "#",
    live: "#"
  },
  {
    title: "Digital Grievance System",
    description:
      "Online complaint management system with admin dashboard and real-time status tracking.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/projects/grievance.jpeg",
    github: "https://github.com/vikash-kumar-fullstack/DigitalGrievanceSystem",
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
    "A professional video editing software UI recreation inspired by Adobe Premiere Pro. Includes timeline interface, layered panels, responsive layout, and smooth interactive controls to simulate real editing workflows.",
  tech: ["HTML", "CSS"],
  image: "/projects/premiere.jpeg",
  github: "https://github.com/vikash-kumar-fullstack/premier_clone",
  live: "https://premierclone.vercel.app/"
}
];

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setSuccess(false);
  setError("");

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSuccess(true);
      form.reset();
    } else {
      setError("Something went wrong. Please try again.");
    }
  } catch (err) {
    setError("Network error. Please try again.");
  }

  setLoading(false);
};

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);
const [error, setError] = useState("");

const [showAll, setShowAll] = useState(false);
  return (
    <>
    <main className="min-h-screen relative">
      <Navbar />

      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-600/20 via-purple-600/10 to-transparent blur-3xl" />

      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

      <section id="home" className="flex items-center justify-center min-h-screen pt-24 px-6">
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
    <a
  href="#projects"
  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 font-medium shadow-lg shadow-blue-600/30"
>
  View Projects
</a>

   <a
  href="#contact"
  className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 font-medium"
>
  Contact Me
</a>
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
    
    {/* Animated Gradient Ring */}
    <div className="absolute -inset-2 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 blur-xl opacity-50 group-hover:opacity-80 transition duration-500 animate-pulse"></div>

    {/* Image */}
    <div className="relative w-72 h-72 md:w-96 md:h-96">
  <Image
    src="/profile.jpeg"
    alt="Vikash Kumar"
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

{/* about section */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold">
      About Me
    </h2>

    <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-relaxed">
      I'm a BTech Computer Science student passionate about building secure,
      scalable, and performance-driven web applications.
    </p>
  </motion.div>

  <div className="mt-16 grid md:grid-cols-3 gap-8">
    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:-translate-y-2 transition-all duration-300">
      <h3 className="text-xl font-semibold">Full Stack Development</h3>
      <p className="mt-4 text-gray-400">
        Building modern MERN stack applications with clean architecture and optimized performance.
      </p>
    </div>

    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:-translate-y-2 transition-all duration-300">
      <h3 className="text-xl font-semibold">System Integration</h3>
      <p className="mt-4 text-gray-400">
        Experience in API integrations, automation workflows, and backend systems.
      </p>
    </div>

    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:-translate-y-2 transition-all duration-300">
      <h3 className="text-xl font-semibold">Cybersecurity Interest</h3>
      <p className="mt-4 text-gray-400">
        Strong interest in security principles, authentication systems, and secure coding practices.
      </p>
    </div>
  </div>
</section>

{/* skills scetion */}

<section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold">
      Skills & Technologies
    </h2>

    <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
      Technologies I work with to build scalable, secure and modern applications.
    </p>
  </motion.div>

  <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        viewport={{ once: true }}
        className="group p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/40 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center"
      >
        <div className="text-4xl mb-4 text-blue-400 group-hover:scale-110 transition duration-300">
          {skill.icon}
        </div>

        <p className="text-gray-300 font-medium">
          {skill.name}
        </p>
      </motion.div>
    ))}
  </div>
</section>

{/* Achievement Stats */}
<section className="py-20 px-6 bg-linear-to-r from-blue-900/30 to-purple-900/30 border-y border-white/10">
  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

    <div>
      <h3 className="text-4xl font-bold text-white">
        <CountUp end={2} duration={2} />+
      </h3>
      <p className="text-gray-400 text-sm uppercase tracking-wider">
        Internships
      </p>
    </div>

    <div>
      <h3 className="text-4xl font-bold text-white">
        <CountUp end={6} duration={2} />+
      </h3>
      <p className="text-gray-400 text-sm uppercase tracking-wider">
        Projects
      </p>
    </div>

    <div>
      <h3 className="text-4xl font-bold text-white">
        <CountUp end={9.43} decimals={2} duration={2} />
      </h3>
      <p className="text-gray-400 text-sm uppercase tracking-wider">
        CGPA
      </p>
    </div>

    <div>
      <h3 className="text-4xl font-bold text-white">
        <CountUp end={90.2} decimals={1} duration={2} />%
      </h3>
      <p className="text-gray-400 text-sm uppercase tracking-wider">
        12th Score
      </p>
    </div>

  </div>
</section>

{/* experience section */}

<section id="experience" className="py-24 px-6 max-w-6xl mx-auto relative">

  <div className="text-center">
    <h2 className="text-3xl md:text-4xl font-bold">
      Professional Experience
    </h2>
    <p className="mt-4 text-gray-400">
      Real-world engineering impact & research exposure
    </p>
  </div>

  <div className="mt-20 relative border-l border-white/10 pl-8 space-y-20">

    {/* ROADX */}
    <div className="relative group">
      <div className="absolute -left-9.5 top-2 w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/60" />

      <div className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 
                      hover:scale-[1.02] hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 
                      transition-all duration-500">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h3 className="text-2xl font-semibold">
            Software Development Engineer Intern
          </h3>

          <span className="mt-2 md:mt-0 px-4 py-1 text-sm bg-blue-500/10 
                           border border-blue-500/20 text-blue-400 rounded-full">
            Jul 2025 – Jan 2026 • 6 Months
          </span>
        </div>

              <div className="flex items-center gap-4 mt-4">
        <Image
          src="/logos/roadx.jpg"
          alt="RoadX"
          width={50}
          height={50}
          className="rounded-md"
        />
        <p className="text-blue-400 font-medium">
          RoadX Motors Pvt Ltd
        </p>
      </div>

        <p className="mt-6 text-gray-400 leading-relaxed">
          Designed and deployed a production-ready WhatsApp Business automation
          platform integrating IndiaMART APIs, AI-based conversational logic,
          and MongoDB-driven dynamic configurations.
          Architected scalable backend services for media messaging,
          workflow automation, and lead lifecycle management.
        </p>

        <ul className="mt-6 space-y-2 text-gray-400 text-sm">
          <li>• Reduced manual lead handling by automating WhatsApp workflows</li>
          <li>• Integrated IndiaMART webhook with MongoDB upsert logic</li>
          <li>• Designed AI fallback conversational engine</li>
          <li>• Built scalable media messaging backend</li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {["Node.js", "MongoDB", "WhatsApp Cloud API", "IndiaMART Webhook", "AI Systems"].map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>

          <button
            onClick={() => setOpenCert("/certificates/roadx.pdf")}
            className="mt-6 text-sm text-blue-400 hover:underline"
          >
            View Certificate →
          </button>

      </div>
    </div>

    {/* IIT PATNA */}
    <div className="relative group">
      <div className="absolute -left-9.5 top-2 w-4 h-4 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-blue-500/60" />

      <div className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 
                      hover:scale-[1.02]
                      hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 
                      transition-all duration-500">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h3 className="text-2xl font-semibold">
            Research Intern
          </h3>

          <span className="mt-2 md:mt-0 px-4 py-1 text-sm bg-purple-500/10 
                           border border-purple-500/20 text-purple-400 rounded-full">
            Jun 2025 – Jul 2025 • 2 Months
          </span>
        </div>

        <div className="flex items-center gap-4 mt-4">
  <Image
    src="/logos/iitp.jpeg"
    alt="iitp"
    width={50}
    height={50}
    className="rounded-md"
  />
  <p className="text-blue-400 font-medium">
    Indian Institute Of Technology Patna
  </p>
</div>

      
        <p className="mt-6 text-gray-400 leading-relaxed">
  Conducted research under Dr. Raju Halder on Solidity Smart Contract Language,
  focusing on blockchain architecture, contract security patterns,
  gas optimization techniques, and decentralized system design.
</p>

<ul className="mt-6 space-y-2 text-gray-400 text-sm">
  <li>• Analyzed smart contract vulnerabilities and reentrancy patterns</li>
  <li>• Studied gas-efficient Solidity coding practices</li>
  <li>• Implemented sample decentralized applications (dApps)</li>
  <li>• Explored Ethereum Virtual Machine (EVM) execution model</li>
</ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {["Solidity", "Blockchain", "Smart Contracts"].map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400"
            >
              {tech}
            </span>
          ))}
        </div>

          <button
          onClick={() => setOpenCert("/certificates/iitp.pdf")}
          className="mt-6 text-sm text-blue-400 hover:underline"
        >
          View Certificate →
        </button>

      </div>
    </div>

  </div>
</section>

<section id="education" className="py-24 px-6 max-w-6xl mx-auto">
  <div className="text-center">
    <h2 className="text-3xl md:text-4xl font-bold">
      Education
    </h2>
  </div>

  <div className="mt-16 grid md:grid-cols-2 gap-10">

    <div className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 
                    hover:scale-[1.03]
                    hover:border-blue-500/40 transition-all duration-500">
      <h3 className="text-2xl font-semibold">
        National Institute of Technology Mizoram
      </h3>
      <p className="text-blue-400 mt-2">
        B.Tech — Computer Science & Engineering
      </p>
      <p className="mt-6 text-gray-400">
        CGPA: <span className="text-white font-bold text-lg">9.43</span>
      </p>
    </div>

    <div className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 
                    hover:scale-[1.03]
                    hover:border-purple-500/40 transition-all duration-500">
      <h3 className="text-2xl font-semibold">
        DK College
      </h3>
      <p className="text-purple-400 mt-2">
        Higher Secondary (Class XII)
      </p>
      <p className="mt-6 text-gray-400">
        Percentage: <span className="text-white font-bold text-lg">90.2%</span>
      </p>
    </div>

  </div>
</section>

{/* ================= PROJECT SECTION ================= */}

<section id="projects" className="py-24 px-6 max-w-7xl mx-auto">

  {/* Section Heading */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold">
      Featured Projects
    </h2>

    <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
      Some of the projects I've built showcasing full-stack development and system integration.
    </p>
  </motion.div>


  {/* ================= FEATURED PROJECT ================= */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="mt-16"
  >
    <div className="grid md:grid-cols-2 gap-10 items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:scale-[1.03] hover:border-blue-500/40 transition-all duration-300">

      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden">
  <Image
    src="/projects/DesiDealz.jpeg"
    alt="DesiDealz - E Commerce Platform"
    fill
    sizes="(max-width: 768px) 100vw, 33vw"
    className="object-cover group-hover:scale-105 transition duration-500"
  />
</div>

      {/* Content */}
      <div className="p-10">
        <p className="text-sm uppercase tracking-wider text-blue-400">
          Featured Project
        </p>

        <h3 className="mt-4 text-2xl md:text-3xl font-bold">
          DesiDealz - E Commerce Platform
        </h3>

        <p className="mt-6 text-gray-400 leading-relaxed">
          A full-stack MERN e-commerce platform featuring secure authentication,
          cart management, Razorpay integration, and scalable backend architecture.
          Designed for performance, usability and production-level deployment.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {["React", "Node.js", "MongoDB", "Express"].map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition"
          >
            GitHub
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
          >
            Live Demo
          </a>
        </div>
      </div>

    </div>
  </motion.div>


  {/* ================= OTHER PROJECTS GRID ================= */}
  <AnimatePresence mode="wait">
    <motion.div
      layout
      className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      {(showAll ? projects.slice(1) : projects.slice(1, 4)).map(
        (project) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="group rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-[1.03] hover:border-blue-500/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden">
  <Image
    src={project.image}
    alt={project.title}
    fill
    sizes="(max-width: 768px) 100vw, 33vw"
    className="object-cover group-hover:scale-105 transition duration-500"
  />
</div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        )
      )}
    </motion.div>
  </AnimatePresence>


  {/* ================= TOGGLE BUTTON ================= */}
  <motion.div layout className="mt-12 text-center">
    <button
      onClick={() => setShowAll(!showAll)}
      className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition font-medium"
    >
      {showAll ? "Show Less" : "View More Projects"}
    </button>
  </motion.div>

</section>

{/* contact section */}

<section id="contact" className="py-24 px-6 max-w-5xl mx-auto text-center">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl md:text-4xl font-bold">
      Let's Connect
    </h2>

    <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
      I'm always open to discussing new opportunities, internships,
      collaborations or innovative ideas.
    </p>

    <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
      <a
        href="mailto:nisant@gmail.com"
        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-medium shadow-lg shadow-blue-600/30"
      >
        Email Me
      </a>

      <a
        href="https://github.com/Vikash-Kumar-54321"
        target="_blank"
        className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition font-medium"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/vikash-kumar-b53055309"
        target="_blank"
        className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition font-medium"
      >
        LinkedIn
      </a>
    </div>
    
  </motion.div>
</section>

{/* ================= CONTACT SECTION ================= */}

<section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-center">
    Contact Me
  </h2>

  <p className="mt-6 text-gray-400 text-center">
    Have a project idea or opportunity? Let's talk.
  </p>

  <form
    onSubmit={handleSubmit}
    className="mt-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 space-y-6"
  >
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full p-4 rounded-lg bg-black/30 border border-white/10 focus:border-blue-500 outline-none"
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="w-full p-4 rounded-lg bg-black/30 border border-white/10 focus:border-blue-500 outline-none"
    />

    <textarea
      name="message"
      placeholder="Your Message"
      rows={5}
      required
      className="w-full p-4 rounded-lg bg-black/30 border border-white/10 focus:border-blue-500 outline-none"
    />

    <button
  type="submit"
  disabled={loading}
  className="w-full py-3 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-medium hover:scale-105 transition disabled:opacity-50"
>
  {loading ? "Sending..." : "Send Message"}
</button>


{success && (
  <p className="text-green-400 text-center mt-4">
    Message sent successfully!
  </p>
)}

{error && (
  <p className="text-red-400 text-center mt-4">
    {error}
  </p>
)}
  </form>
</section>

{/* footer */}

<footer className="py-10 border-t border-white/10 text-center text-gray-500 text-sm">
  © {new Date().getFullYear()} Vikash Kumar. All rights reserved.
</footer>
<ScrollToTop />
    </main>
    {openCert && (
  <div className="fixed inset-0 z-100 flex items-center justify-center">
    
    {/* Background Overlay */}
    <div
      className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      onClick={() => setOpenCert(null)}
    />

    {/* Modal Content */}
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
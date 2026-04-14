"use client";

import Navbar from "@/Components/Navbar";
import { motion } from "framer-motion";
import ScrollToTop from "@/Components/ScrollToTop";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaDatabase,
  FaCode,
  FaServer,
  FaTools,
  FaShieldAlt,
  FaBrain
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPython,
  SiTypescript,
  SiNextdotjs,
  SiPostman,
  SiVercel,
  SiRender,
  SiGithub,
  SiSolidity,
  SiJsonwebtokens,
  SiNetlify
} from "react-icons/si";

export default function SkillsPage() {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: <FaCode className="text-2xl" />,
      color: "blue",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, level: 90 },
        { name: "CSS3", icon: <FaCss3Alt />, level: 85 },
        { name: "JavaScript", icon: <FaJs />, level: 88 },
        { name: "TypeScript", icon: <SiTypescript />, level: 75 },
        { name: "React.js", icon: <FaReact />, level: 85 },
        { name: "Next.js", icon: <SiNextdotjs />, level: 70 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 }
      ]
    },
    {
      category: "Backend Development",
      icon: <FaServer className="text-2xl" />,
      color: "green",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 85 },
        { name: "Express.js", icon: <SiExpress />, level: 82 },
        { name: "REST APIs", icon: <FaServer />, level: 88 },
        { name: "JWT Auth", icon: <SiJsonwebtokens />, level: 80 }
      ]
    },
    {
      category: "Database & Storage",
      icon: <FaDatabase className="text-2xl" />,
      color: "purple",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 85 },
        { name: "SQL", icon: <FaDatabase />, level: 75 },
        { name: "Mongoose ODM", icon: <SiMongodb />, level: 80 }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: <FaTools className="text-2xl" />,
      color: "orange",
      skills: [
        { name: "Git & GitHub", icon: <SiGithub />, level: 85 },
        { name: "Postman", icon: <SiPostman />, level: 82 },
        { name: "Vercel", icon: <SiVercel />, level: 75 },
        { name: "netlify", icon: <SiNetlify />, level: 70 },
        { name: "Render", icon: <SiRender />, level: 80 },
        { name: "VS Code", icon: <FaCode />, level: 95 }
      ]
    },
    {
      category: "Specialized",
      icon: <FaBrain className="text-2xl" />,
      color: "pink",
      skills: [
        { name: "Solidity", icon: <SiSolidity />, level: 50 },
        { name: "Blockchain", icon: <FaShieldAlt />, level: 45 },
        { name: "API Integration", icon: <FaServer />, level: 85 },
        { name: "Software Engineering", icon: <FaTools />, level: 70 }
      ]
    }
  ];

  // Helper function to get color classes - using full class names
  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          border: "border-blue-500/40",
          bg: "bg-blue-500/10",
          text: "text-blue-400",
          shadow: "shadow-blue-500/20",
          gradientFrom: "from-blue-500",
          gradientTo: "to-blue-400",
          hoverBorder: "hover:border-blue-500/50"
        };
      case "green":
        return {
          border: "border-green-500/40",
          bg: "bg-green-500/10",
          text: "text-green-400",
          shadow: "shadow-green-500/20",
          gradientFrom: "from-green-500",
          gradientTo: "to-green-400",
          hoverBorder: "hover:border-green-500/50"
        };
      case "purple":
        return {
          border: "border-purple-500/40",
          bg: "bg-purple-500/10",
          text: "text-purple-400",
          shadow: "shadow-purple-500/20",
          gradientFrom: "from-purple-500",
          gradientTo: "to-purple-400",
          hoverBorder: "hover:border-purple-500/50"
        };
      case "orange":
        return {
          border: "border-orange-500/40",
          bg: "bg-orange-500/10",
          text: "text-orange-400",
          shadow: "shadow-orange-500/20",
          gradientFrom: "from-orange-500",
          gradientTo: "to-orange-400",
          hoverBorder: "hover:border-orange-500/50"
        };
      case "pink":
        return {
          border: "border-pink-500/40",
          bg: "bg-pink-500/10",
          text: "text-pink-400",
          shadow: "shadow-pink-500/20",
          gradientFrom: "from-pink-500",
          gradientTo: "to-pink-400",
          hoverBorder: "hover:border-pink-500/50"
        };
      default:
        return {
          border: "border-blue-500/40",
          bg: "bg-blue-500/10",
          text: "text-blue-400",
          shadow: "shadow-blue-500/20",
          gradientFrom: "from-blue-500",
          gradientTo: "to-blue-400",
          hoverBorder: "hover:border-blue-500/50"
        };
    }
  };

  // Helper function to get gradient class for progress bar
  const getGradientClass = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-gradient-to-r from-blue-500 to-blue-400";
      case "green":
        return "bg-gradient-to-r from-green-500 to-green-400";
      case "purple":
        return "bg-gradient-to-r from-purple-500 to-purple-400";
      case "orange":
        return "bg-gradient-to-r from-orange-500 to-orange-400";
      case "pink":
        return "bg-gradient-to-r from-pink-500 to-pink-400";
      default:
        return "bg-gradient-to-r from-blue-500 to-blue-400";
    }
  };

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
              Skills & <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technologies</span>
            </h1>
            <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
              Technologies and tools I work with to build scalable, secure, and modern applications.
            </p>
          </motion.div>
        </section>

        {/* Skills Categories */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="space-y-12">
            {skillCategories.map((category, catIndex) => {
              const colors = getColorClasses(category.color);
              const gradientClass = getGradientClass(category.color);
              return (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 ${colors.hoverBorder} hover:shadow-xl hover:shadow-${category.color}-500/10 transition-all duration-500`}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`p-3 rounded-xl ${colors.bg} ${colors.text}`}>
                      {category.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">{category.category}</h2>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className={`group p-5 rounded-xl bg-black/20 border border-white/5 hover:scale-105 hover:border-${category.color}-500/40 transition-all duration-300`}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className={`text-3xl mb-3 ${colors.text} group-hover:scale-110 transition duration-300`}>
                            {skill.icon}
                          </div>
                          <p className="text-gray-200 font-medium text-sm mb-2">{skill.name}</p>
                          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                              className={`h-full ${gradientClass} rounded-full`}
                            />
                          </div>
                          <p className={`text-xs ${colors.text} mt-1`}>{skill.level}%</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Additional Skills Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Currently Learning</h2>
            <p className="mt-4 text-gray-400">Expanding my skillset in these areas</p>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Docker", icon: "🐳" },
              { name: "Kubernetes", icon: "☸️" },
              { name: "AWS", icon: "☁️" },
              { name: "Redis", icon: "🔴" },
              { name: "React Native", icon: "📱" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/40 transition-all duration-300 text-center"
              >
                <span className="text-3xl">{item.icon}</span>
                <p className="mt-3 text-gray-300 font-medium">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <ScrollToTop />
      </main>
    </>
  );
}
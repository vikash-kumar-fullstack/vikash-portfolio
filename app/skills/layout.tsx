import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Technologies | Vikash Kumar | MERN Stack Developer",
  description: "Explore Vikash Kumar's technical skills: React, Node.js, MongoDB, Express, TypeScript, Python, Java, and more. Full Stack Developer portfolio.",
  openGraph: {
    title: "Skills & Technologies | Vikash Kumar",
    description: "Full Stack Developer skilled in MERN stack, system integration, API development, and blockchain fundamentals.",
    url: "https://vikash-kumar-fullstack.vercel.app/skills",
  },
  alternates: {
    canonical: "https://vikash-kumar-fullstack.vercel.app/skills"
  }
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
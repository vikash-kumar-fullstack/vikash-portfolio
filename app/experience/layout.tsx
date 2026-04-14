import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Vikash Kumar | Software Engineer Intern",
  description: "Vikash Kumar's professional experience: SDE Intern at RoadX Motors, Research Intern at IIT Patna. Full Stack Developer with industry exposure.",
  openGraph: {
    title: "Professional Experience | Vikash Kumar",
    description: "SDE Intern at RoadX Motors and Research Intern at IIT Patna. Expertise in Node.js, automation, and blockchain.",
    url: "https://vikash-kumar-fullstack.vercel.app/experience",
  },
  alternates: {
    canonical: "https://vikash-kumar-fullstack.vercel.app/experience"
  }
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
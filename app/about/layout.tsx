import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Vikash Kumar | Full Stack Developer (MERN)",
  description: "Learn about Vikash Kumar - BTech CSE student at NIT Mizoram, Full Stack Developer specializing in MERN stack, system integration, and scalable web applications.",
  openGraph: {
    title: "About Vikash Kumar | Full Stack Developer (MERN)",
    description: "BTech CSE at NIT Mizoram. Full Stack Developer with expertise in MERN stack, automation systems, and blockchain research.",
    url: "https://vikash-kumar-fullstack.vercel.app/about",
    images: [
      {
        url: "https://vikash-kumar-fullstack.vercel.app/profile.jpeg",
        width: 800,
        height: 800,
        alt: "Vikash Kumar"
      }
    ]
  },
  alternates: {
    canonical: "https://vikash-kumar-fullstack.vercel.app/about"
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
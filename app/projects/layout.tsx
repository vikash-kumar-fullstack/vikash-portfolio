import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Vikash Kumar | Full Stack Developer Portfolio",
  description: "Explore Vikash Kumar's projects: DesiDealz E-commerce, Teach With Teach, Digital Grievance System, Automation System, and more MERN stack applications.",
  openGraph: {
    title: "Projects | Vikash Kumar | Full Stack Developer",
    description: "Full-stack MERN projects including e-commerce platforms, automation systems, and government monitoring solutions.",
    url: "https://vikash-kumar-fullstack.vercel.app/projects",
  },
  alternates: {
    canonical: "https://vikash-kumar-fullstack.vercel.app/projects"
  }
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
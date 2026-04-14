import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Vikash Kumar | Full Stack Developer",
  description: "Get in touch with Vikash Kumar for opportunities, collaborations, or inquiries. Full Stack Developer available for internships and projects.",
  openGraph: {
    title: "Contact Vikash Kumar | Full Stack Developer",
    description: "Connect with Vikash Kumar - Full Stack Developer specializing in MERN stack and automation systems.",
    url: "https://vikash-kumar-fullstack.vercel.app/contact",
  },
  alternates: {
    canonical: "https://vikash-kumar-fullstack.vercel.app/contact"
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
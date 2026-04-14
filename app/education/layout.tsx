import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | Vikash Kumar | NIT Mizoram CSE",
  description: "Vikash Kumar's academic journey: B.Tech CSE at NIT Mizoram (CGPA 9.43), Higher Secondary (90.2%). Full Stack Developer education background.",
  openGraph: {
    title: "Education | Vikash Kumar | NIT Mizoram",
    description: "B.Tech CSE at National Institute of Technology Mizoram with 9.43 CGPA. Strong academic foundation in computer science.",
    url: "https://vikash-kumar-fullstack.vercel.app/education",
  },
  alternates: {
    canonical: "https://vikash-kumar-fullstack.vercel.app/education"
  }
};

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
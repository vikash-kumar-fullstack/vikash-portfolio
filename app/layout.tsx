// @ts-ignore
import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vikash Kumar | Full Stack Developer (MERN) | Software Engineer",
  metadataBase: new URL("https://vikash-kumar-fullstack.vercel.app"),
  description:
    "Vikash Kumar is a Full Stack Developer (MERN) and Software Engineer specializing in backend automation systems, Node.js, MongoDB, API integration, and scalable web applications.",
  keywords: [
    "Vikash Kumar",
    "Vikash Kumar NIT Mizoram",
    "Vikash Kumar NIT MZ",
    "Vikash Kumar Full Stack Developer",
    "Vikash Kumar MERN Developer",
    "Vikash Kumar Portfolio",
    "NIT Mizoram Developer",
    "Vikash Kumar Software Engineer",
    "Vikash Kumar Nit Mizoram",
    "Full Stack Developer",
    "MERN Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "Software Engineer",
    "Web Developer India",
    "Backend Automation",
    "Portfolio",
  ],
  verification:{
    google:"uLwyyI9NjAEdN4EUEfzNVhI7N4AAQaAk6yiOcVXPgM4",
  },
  authors: [{ name: "Vikash Kumar" }],
  creator: "Vikash Kumar",
  openGraph: {
    title:
      "Vikash Kumar | Full Stack Developer (MERN) | Software Engineer",
    description:
      "Portfolio of Vikash Kumar — Full Stack Developer building scalable backend systems and automation architecture.",
    url: "https://vikash-kumar-fullstack.vercel.app/",
    siteName: "Vikash Kumar Portfolio",
    images: [
      {
        url: "https://vikash-kumar-fullstack.vercel.app/projects/DesiDealz.png",
        width: 1200,
        height: 630,
        alt: "Vikash Kumar Portfolio"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikash Kumar | Full Stack Developer (MERN)",
    description:
      "Portfolio of Vikash Kumar — MERN Stack Developer building scalable web applications.",
    images: [
      "https://vikash-kumar-fullstack.vercel.app/projects/DesiDealz.png"
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <meta name="theme-color" content="#0f172a" />
        <meta name="google-site-verification" content="Vm-X9UjVg8pQVaw8vWDRusPq7CUQD_W0mQDl4v-shyo" />
        <link rel="me" href="https://www.wikidata.org/wiki/Q139374047" type="text/html" />
        
        {/* Person Schema for Knowledge Panel */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Vikash Kumar",
              "alternateName": ["Vikash Kumar NIT Mizoram", "Vikash Kumar Full Stack Developer", "Vikash Kumar NIT MZ"],
              "url": "https://vikash-kumar-fullstack.vercel.app",
              "image": {
                "@type": "ImageObject",
                "url": "https://vikash-kumar-fullstack.vercel.app/profile.jpeg",
                "width": 800,
                "height": 800
              },
              "description": "Full Stack Developer (MERN) and Software Engineer specializing in backend automation systems, Node.js, MongoDB, API integration, and scalable web applications.",
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "RoadX Motors Pvt Ltd"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "National Institute of Technology Mizoram",
                "url": "https://www.nitmz.ac.in"
              },
              "sameAs": [
                  "https://github.com/Vikash-Kumar-fullstack",
                  "https://www.linkedin.com/in/vikash-kumar-fullstack",
                  "https://www.wikidata.org/wiki/Q139374047"
                ],
              "knowsAbout": [
                "Full Stack Development",
                "MERN Stack",
                "Node.js",
                "MongoDB",
                "React.js",
                "Express.js",
                "System Design",
                "API Integration",
                "Automation Systems",
                "Blockchain Fundamentals"
              ],
              "skills": [
                "JavaScript",
                "TypeScript",
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "Python",
                "Java",
                "Tailwind CSS",
                "Git",
                "REST APIs",
                "System Integration"
              ],
              "mainEntityOfPage": {
                "@type": "ProfilePage",
                "@id": "https://vikash-kumar-fullstack.vercel.app/#profile"
              }
            })
          }}
        />

        {/* Breadcrumb Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://vikash-kumar-fullstack.vercel.app/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Vikash Kumar Portfolio",
                  "item": "https://vikash-kumar-fullstack.vercel.app/"
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="fixed inset-0 -z-10 bg-linear-to-br from-blue-800/20 via-purple-800/20 to-transparent blur-3xl" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
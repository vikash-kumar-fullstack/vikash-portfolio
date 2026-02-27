import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vikash Kumar | Full Stack Developer (MERN) | Software Engineer",
  description:
    "Vikash Kumar is a Full Stack Developer (MERN) and Software Engineer specializing in backend automation systems, Node.js, MongoDB, API integration, and scalable web applications.",
  keywords: [
    "Vikash Kumar",
    "Full Stack Developer",
    "MERN Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "Software Engineer",
    "Web Developer India",
    "Backend Automation",
    "Portfolio"
  ],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0f172a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vikash Kumar",
              url: "https://vikash-kumar-fullstack.vercel.app/",
              sameAs: [
                "https://www.linkedin.com/in/vikash-kumar-fullstack/",
                "https://github.com/vikash-kumar-fullstack"
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "RoadX Motors"
              }
            })
          }}
        />
      </head>
      <body className="bg-[#0f172a] text-white antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="fixed inset-0 -z-10 bg-linear-to-br from-blue-800/20 via-purple-800/20 to-transparent blur-3xl" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
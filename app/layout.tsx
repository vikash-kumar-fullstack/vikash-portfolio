import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Vikash Kumar | Full Stack Developer",
  description:
    "Vikash Kumar is a Full Stack Developer specializing in MERN stack, API integration, scalable web applications, and secure backend systems.",
  keywords: [
    "Vikash Kumar",
    "Full Stack Developer",
    "MERN Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "Web Developer India",
    "Software Developer Portfolio"
  ],
  authors: [{ name: "Vikash Kumar" }],
  creator: "Vikash Kumar",
  openGraph: {
    title: "Vikash Kumar | Full Stack Developer",
    description:
      "Portfolio of Vikash Kumar — Full Stack Developer building scalable and secure web applications.",
    url: "https://vikash-portfolio-nine.vercel.app/", 
    siteName: "Vikash Portfolio",
    images: [
      {
        url: "/projects/DesiDealz.png",
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
    title: "Vikash Kumar | Full Stack Developer",
    description:
      "Portfolio of Vikash Kumar — MERN Stack Developer.",
    images: ["/projects/DesiDealz.png"]
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


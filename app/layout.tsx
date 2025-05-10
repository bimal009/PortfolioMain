import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bimal Pandey - Full Stack Developer",
  description: "Portfolio website of Bimal Pandey, a Full Stack Developer specializing in scalable web applications with modern frameworks.",
  keywords: ["Full Stack Developer", "Web Development", "React", "Next.js", "Node.js"],
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-dark text-white antialiased`}>
        <Navbar />
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
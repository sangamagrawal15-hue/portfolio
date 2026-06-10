import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Sangam Agrawal | Web Designer & Developer",
  description: "Premium web design and development solutions for local businesses and startups. Transform your digital presence with handcrafted excellence.",
  keywords: ["Web Design", "Web Development", "Sangam Agrawal", "Freelance Developer", "Next.js", "React"],
  authors: [{ name: "Sangam Agrawal" }],
  openGraph: {
    title: "Sangam Agrawal | Web Designer & Developer",
    description: "Premium web design and development solutions for local businesses and startups.",
    url: "https://sangamagrawal.com",
    siteName: "Sangam Agrawal Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans bg-background text-foreground relative overflow-x-hidden`}>
        {/* Background Decorative Elements */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/15 blur-[120px] rounded-full" />
        </div>
        
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Sam Beard | Join Us NOW To Save Our Children",
  description: "AI For Good - Tools For Parents And Caregivers. Create love songs, stories, and get parenting assistance with AI-powered tools from GIFT Connect.",
  keywords: ["Sam Beard", "GIFT Connect", "AI Parenting", "Birth To 3", "Edutainment", "Children's Education"],
  authors: [{ name: "Sam Beard" }],
  openGraph: {
    title: "Sam Beard | Join Us NOW To Save Our Children",
    description: "AI For Good - Tools For Parents And Caregivers",
    url: "https://sambeard.com",
    siteName: "Sam Beard",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam Beard | Join Us NOW To Save Our Children",
    description: "AI For Good - Tools For Parents And Caregivers",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${openSans.variable} antialiased min-w-full`}>
        {/* Aurora Background */}
        <div className="aurora-bg" aria-hidden="true" />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="min-w-full flex flex-col items-center relative z-10">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

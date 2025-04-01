import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import localFont from 'next/font/local'; // Import localFont
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "./globals.css";

// Configure Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Improve font loading performance
  variable: '--font-inter',
});

// Load local Gazpacho font
const gazpacho = localFont({
  src: './fonts/Gazpacho Black.ttf', // Path relative to app directory
  weight: '900', // Assuming 'Black' corresponds to 900 weight
  display: 'swap',
  variable: '--font-gazpacho', // CSS variable for Gazpacho
});

export const metadata: Metadata = {
  title: "Mintee | Refreshingly Different Peppermint Water",
  description: "Discover Mintee, the premium peppermint-infused water. Zero sugar, zero calories, naturally refreshing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      {/* Apply both font variables */}
      <body className={`${inter.variable} ${gazpacho.variable} font-sans antialiased flex flex-col min-h-screen bg-neutral-light text-neutral-darker`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

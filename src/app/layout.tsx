import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PwaRegistration } from "@/components/pwa-registration";

export const metadata: Metadata = {
  title: "Aditya Dhar Dwivedi | Portfolio",
  description: "A static portfolio landing page for Aditya Dhar Dwivedi, MERN Stack Developer and Express.js Developer.",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0b0c10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased" style={{ background: '#0b0c10' }}>
      <body className="min-h-full" style={{ background: '#0b0c10', color: '#ffffff' }}>
        <PwaRegistration />
        {children}
      </body>
    </html>
  );
}

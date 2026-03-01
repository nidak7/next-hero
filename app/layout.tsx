import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scroll Hero Animation",
  description: "GSAP-powered scroll-driven hero section",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

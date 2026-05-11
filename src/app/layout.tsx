import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nilora AI | Missed-Call SMS Recovery",
  description: "Frontend-only SaaS dashboard demo for AI-powered missed-call SMS follow-up.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

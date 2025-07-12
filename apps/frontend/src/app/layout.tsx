
// File: src/app/layout.tsx
// -----------------------------
import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

// Google font → Inter
const inter = Inter({ subsets: ["latin"] });

// App‑wide metadata
export const metadata = {
  title: {
    default: "HydroStack",
    template: "%s | HydroStack",
  },
  description: "Monitor your water data in real time",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      {/* Base styles for dark UI */}
      <body className="min-h-screen bg-zinc-950 text-zinc-50 antialiased scroll-smooth">
        {children}
      </body>
    </html>
  );
}

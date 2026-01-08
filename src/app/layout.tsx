import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Business Plan Playbook - AI-Powered Business Planning",
  description: "Transform your ideas into actionable business plans with AI-powered prompts for strategy, market research, financial planning, and more.",
  keywords: ["business plan", "AI", "business strategy", "market research", "financial planning", "entrepreneurship"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="app-container">
          <Sidebar />
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

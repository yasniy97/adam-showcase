import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADAM — Agile Digital Assistant for Managers",
  description:
    "ADAM is an AI-powered assistant for Agile & Traditional Project Management. Enhance Scrum, answer PM queries, and supercharge delivery."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="section flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="ADAM" className="h-10 w-10" />
            <span className="text-xl font-bold tracking-wide">ADAM</span>
          </div>
          <nav className="flex gap-4">
            <a href="#capabilities" className="text-white/80 hover:text-white">Capabilities</a>
            <a href="#scrum" className="text-white/80 hover:text-white">Scrum</a>
            <a href="#videos" className="text-white/80 hover:text-white">Videos</a>
            <a href="#start" className="text-white/80 hover:text-white">Get Started</a>
             <a href="#start" className="text-white/80 hover:text-white">Investment</a>
          </nav>
        </header>
        {children}
        <footer className="section text-center text-white/60">
          © {new Date().getFullYear()} ADAM — Agile Digital Assistant for Managers
        </footer>
      </body>
    </html>
  );
}


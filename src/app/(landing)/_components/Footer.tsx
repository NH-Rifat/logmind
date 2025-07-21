"use client";

import { footerLinks } from "../utils/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-bold">LogMind</span>

          <div className="flex gap-6">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="text-white/50">
            © {new Date().getFullYear()} LogMind
          </div>
        </div>
      </div>
    </footer>
  );
}

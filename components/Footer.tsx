'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-glass relative overflow-hidden w-full">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

      {/* Main Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-white/50 text-sm text-center md:text-left">
            Copyrights {new Date().getFullYear()} | Sam Beard
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://gift-connect.org/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-yellow-400 transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

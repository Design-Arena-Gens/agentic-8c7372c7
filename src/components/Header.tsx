"use client";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#tools", label: "Tools" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#" className="font-semibold tracking-tight text-xl">
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
            AI Automation Expert
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-blue-600 transition-colors">
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            Book a call
          </a>
        </nav>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-black/10 dark:border-white/20"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-current">
            <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-3">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="py-2" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium text-center"
              onClick={() => setOpen(false)}
            >
              Book a call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

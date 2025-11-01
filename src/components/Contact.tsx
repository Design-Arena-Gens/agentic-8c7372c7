"use client";
import { useState } from "react";
import Section from "./Section";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if ((data as any).website) return; // honeypot
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setMessage("Thanks! I'll be in touch within 24 hours.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong. Please email hi@example.com.");
    }
  }

  return (
    <Section id="contact" eyebrow="Get in touch" title="Book a discovery call">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white dark:bg-zinc-950">
          <form onSubmit={onSubmit} className="grid gap-4">
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
            <label className="grid gap-2">
              <span className="text-sm">Name</span>
              <input name="name" required className="h-11 rounded-lg border border-black/10 dark:border-white/15 bg-transparent px-3" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm">Email</span>
              <input type="email" name="email" required className="h-11 rounded-lg border border-black/10 dark:border-white/15 bg-transparent px-3" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm">What do you want to automate?</span>
              <textarea name="details" rows={4} required className="rounded-lg border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" />
            </label>
            <button
              type="submit"
              disabled={status === "loading"}
              className="h-11 rounded-full bg-black text-white dark:bg-white dark:text-black px-5 text-sm font-medium disabled:opacity-60"
            >
              {status === "loading" ? "Sending?" : "Send message"}
            </button>
            {message && (
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{message}</p>
            )}
          </form>
        </div>
        <div className="grid content-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            Tell me about your goals and where your team spends time. I?ll reply with
            a clear approach, timeline, and ROI estimate. If there?s no fit, I?ll point
            you to a better option.
          </p>
          <ul className="grid gap-2">
            <li>? Typical kickoff within 7 days</li>
            <li>? Weekly demos and metrics</li>
            <li>? Fixed-scope pilots available</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

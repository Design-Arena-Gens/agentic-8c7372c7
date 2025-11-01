import Section from "./Section";

const quotes = [
  {
    name: "COO, SaaS",
    quote:
      "We automated a week of manual ops. The dashboards and alerts give me real confidence.",
  },
  {
    name: "Founder, Agency",
    quote:
      "Fast, pragmatic, and outcome-driven. We ship more with the same team size.",
  },
  {
    name: "VP CX, E?com",
    quote: "Support volume dropped and CSAT went up. Exactly what we needed.",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="Social proof" title="What clients say">
      <div className="grid sm:grid-cols-3 gap-6">
        {quotes.map((q) => (
          <figure key={q.name} className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white dark:bg-zinc-950">
            <blockquote className="text-sm text-zinc-700 dark:text-zinc-300">?{q.quote}?</blockquote>
            <figcaption className="mt-3 text-xs text-zinc-500">{q.name}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

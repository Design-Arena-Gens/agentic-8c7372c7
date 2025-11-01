import Section from "./Section";

const steps = [
  {
    title: "Discovery",
    desc: "Map goals, constraints, and ROI. Identify quick wins and critical paths.",
  },
  {
    title: "Design",
    desc: "Sequence diagrams, data contracts, prompts, and success metrics.",
  },
  {
    title: "Build",
    desc: "Ship in weekly slices with demos. Instrument for observability.",
  },
  {
    title: "Launch & Scale",
    desc: "Load test, set alerts, train staff, document, and iterate on impact.",
  },
];

export default function Process() {
  return (
    <Section id="process" eyebrow="How we work" title="A clear, outcome-first process">
      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white dark:bg-zinc-950">
            <div className="text-xs font-mono text-zinc-500">Step {i + 1}</div>
            <div className="mt-1 text-base font-semibold">{s.title}</div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{s.desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

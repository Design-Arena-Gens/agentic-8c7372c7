import Section from "./Section";

const cases = [
  {
    company: "SaaS Startup",
    title: "AI SDR that books meetings",
    result: "32% reply rate, 14 meetings/month",
    summary:
      "Deployed an outbound research + personalization agent that writes first-touch emails, syncs to HubSpot, and hands off to reps.",
  },
  {
    company: "E-commerce",
    title: "Automated returns & CX triage",
    result: "-65% support load",
    summary:
      "Built a support router that classifies tickets, triggers return labels, and updates Shopify & Slack with human-in-the-loop failsafes.",
  },
  {
    company: "Agency",
    title: "Brief-to-deliverable workflow",
    result: "5? faster delivery",
    summary:
      "Created a pipeline from intake form to Notion + Google Drive, generating drafts with LLMs and tracking status automatically.",
  },
];

export default function CaseStudies() {
  return (
    <Section id="work" eyebrow="Proof" title="Selected case studies">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((c) => (
          <article key={c.title} className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white dark:bg-zinc-950 flex flex-col">
            <div className="text-xs uppercase tracking-widest text-blue-600 mb-2">{c.company}</div>
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 flex-1">{c.summary}</p>
            <div className="mt-4 text-sm font-medium">Outcome: {c.result}</div>
          </article>
        ))}
      </div>
    </Section>
  );
}

import Section from "./Section";

const services = [
  {
    title: "AI Agent Integrations",
    desc: "Autonomous agents for lead triage, support, research, and back-office ops.",
  },
  {
    title: "Workflow Automation",
    desc: "Zapier/Make orchestration with robust error handling and observability.",
  },
  {
    title: "Custom LLM Pipelines",
    desc: "RAG, summarization, classification, and data extraction at scale.",
  },
  {
    title: "RPA & Scripting",
    desc: "Python/Node scripts, headless browsers, and scraping to fill gaps.",
  },
  {
    title: "CRM & SaaS Integrations",
    desc: "HubSpot, Salesforce, Notion, Airtable, Slack, Gmail, and more.",
  },
  {
    title: "Monitoring & Alerting",
    desc: "Dashboards, retries, and anomaly alerts to keep automations healthy.",
  },
];

export default function Services() {
  return (
    <Section id="services" eyebrow="What I do" title="High-leverage automation services">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white dark:bg-zinc-950"
          >
            <div className="text-base font-semibold">{s.title}</div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

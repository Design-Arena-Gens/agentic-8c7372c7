import Section from "./Section";

const tools = [
  { name: "OpenAI / Anthropic", cat: "LLMs" },
  { name: "LangChain / LlamaIndex", cat: "Pipelines" },
  { name: "Pinecone / Weaviate", cat: "Vector" },
  { name: "Supabase / Postgres", cat: "DB" },
  { name: "Make / Zapier / n8n", cat: "Orchestration" },
  { name: "HubSpot / Salesforce", cat: "CRM" },
  { name: "Slack / Gmail / Sheets", cat: "Comms" },
  { name: "Playwright / Puppeteer", cat: "RPA" },
];

export default function Toolstack() {
  return (
    <Section id="tools" eyebrow="Stack" title="Battle-tested tools I use">
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map((t) => (
          <li key={t.name} className="rounded-xl border border-black/10 dark:border-white/10 px-4 py-3 bg-white dark:bg-zinc-950 flex items-center justify-between">
            <span className="text-sm font-medium">{t.name}</span>
            <span className="text-xs text-zinc-500">{t.cat}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

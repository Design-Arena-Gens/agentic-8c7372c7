import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(60%_50%_at_50%_0%,#000_20%,transparent_80%)]">
        <div className="absolute -top-24 left-1/2 h-64 w-[120vw] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-16 sm:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
              Ship automations and AI agents that save hours every week
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
              I help teams design, build, and maintain AI-powered workflows, from
              lead capture to fulfillment. Fast delivery, measurable outcomes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium hover:opacity-90"
              >
                Book a discovery call
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/20 px-5 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10"
              >
                See case studies
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
              <div>
                <div className="text-2xl font-semibold text-foreground">80+ hrs</div>
                <div>saved monthly for SMB teams</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-foreground">5-10x</div>
                <div>faster delivery cycles</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80 rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-black shadow-inner overflow-hidden">
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center px-6">
                  <div className="text-xs uppercase tracking-widest text-blue-600">AI Automation Expert</div>
                  <div className="mt-2 text-3xl font-semibold tracking-tight">Agents ? Integrations ? Workflows</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

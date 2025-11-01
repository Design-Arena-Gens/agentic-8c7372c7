import { ReactNode } from "react";

export default function Section({ id, eyebrow, title, children }: { id?: string; eyebrow?: string; title: string; children: ReactNode; }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8">
          {eyebrow && (
            <div className="text-xs font-medium tracking-widest uppercase text-blue-600 dark:text-emerald-400 mb-2">{eyebrow}</div>
          )}
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

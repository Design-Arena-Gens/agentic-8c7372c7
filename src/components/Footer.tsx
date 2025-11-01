export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-600 dark:text-zinc-400">? {new Date().getFullYear()} AI Automation Expert</p>
        <div className="flex items-center gap-4">
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <a href="https://nextjs.org" target="_blank" className="hover:text-blue-600" rel="noreferrer">Built with Next.js</a>
        </div>
      </div>
    </footer>
  );
}

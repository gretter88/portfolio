// src/app/[lang]/layout.tsx
import { LANGS, type Lang, LINKS, t } from "@/lib/i18n";
import ThemeToggle from "@/components/ThemeToggle";

function clsx(...arr: Array<string | false | null | undefined>) {
  return arr.filter(Boolean).join(" ");
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string } | Promise<{ lang: string }>;
}) {
  const resolved = await Promise.resolve(params);
  const lang = (LANGS.includes(resolved.lang as Lang) ? resolved.lang : "es") as Lang;
  const i = t(lang);

  return (
    <div className="scroll-smooth">
      
<header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/70 backdrop-blur
                   dark:border-zinc-900 dark:bg-zinc-950/70">
  <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
    <div className="flex items-center gap-3">
      <div className="h-9 w-9 rounded-xl border border-zinc-200 bg-zinc-100 grid place-items-center font-semibold
                      dark:border-zinc-800 dark:bg-zinc-900/30">
        SG
      </div>

      <div className="leading-tight">
        <div className="text-sm font-semibold">{i.name}</div>
        <div className="text-xs text-zinc-600 dark:text-zinc-400">{i.role}</div>
      </div>
    </div>

    <nav className="flex items-center gap-2">
      <a
        href="#projects"
        className={clsx(
          "hidden sm:inline-flex rounded-xl border px-4 py-2 text-sm",
          "border-zinc-200 hover:bg-zinc-100",
          "dark:border-zinc-800 dark:hover:bg-zinc-900/40"
        )}
      >
        {i.sectionProjectsTitle}
      </a>

      <a
        href="#contact"
        className={clsx(
          "hidden sm:inline-flex rounded-xl border px-4 py-2 text-sm",
          "border-zinc-200 hover:bg-zinc-100",
          "dark:border-zinc-800 dark:hover:bg-zinc-900/40"
        )}
      >
        {i.sectionContactTitle}
      </a>

      <a
        href={i.switchHref}
        className={clsx(
          "rounded-xl border px-4 py-2 text-sm",
          "border-zinc-200 hover:bg-zinc-100",
          "dark:border-zinc-800 dark:hover:bg-zinc-900/40"
        )}
      >
        {i.switchTo}
      </a>

      <a
        href={LINKS.linkedin}
        target="_blank"
        rel="noreferrer"
        className={clsx(
          "hidden md:inline-flex rounded-xl border px-4 py-2 text-sm",
          "border-zinc-200 hover:bg-zinc-100",
          "dark:border-zinc-800 dark:hover:bg-zinc-900/40"
        )}
      >
        {i.ctaLinkedin}
      </a>

      <a
        href={LINKS.github}
        target="_blank"
        rel="noreferrer"
        className={clsx(
          "hidden md:inline-flex rounded-xl border px-4 py-2 text-sm",
          "border-zinc-200 hover:bg-zinc-100",
          "dark:border-zinc-800 dark:hover:bg-zinc-900/40"
        )}
      >
        {i.ctaGithub}
      </a>

      <ThemeToggle />
    </nav>
  </div>
</header>


      {children}
    </div>
  );
}








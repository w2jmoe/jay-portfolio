import type { Locale } from "@/data/site";

type HeaderProps = {
  locale: Locale;
  labels: {
    projects: string;
    journey: string;
    contact: string;
    github: string;
  };
  githubUrl: string;
  onLocaleChange: (locale: Locale) => void;
};

export function Header({ locale, labels, githubUrl, onLocaleChange }: HeaderProps) {
  const navItems = [
    { label: labels.projects, href: "#projects" },
    { label: labels.journey, href: "#journey" },
    { label: labels.contact, href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f8f7f4]/82 backdrop-blur-xl dark:border-white/10 dark:bg-[#0f0f0f]/82">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#top" className="text-sm font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
          {locale === "zh" ? "文杰" : "Jay Wu"}
        </a>

        <nav
          aria-label="Primary navigation"
          className="order-3 flex w-full items-center gap-5 overflow-x-auto text-sm text-neutral-600 dark:text-neutral-300 sm:order-none sm:w-auto sm:gap-8"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-neutral-950 dark:hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-sm">
          <div className="rounded-full border border-black/10 bg-white/70 p-1 text-neutral-500 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-neutral-400">
            <button
              type="button"
              onClick={() => onLocaleChange("en")}
              aria-pressed={locale === "en"}
              className={`rounded-full px-3 py-1 transition ${
                locale === "en"
                  ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
                  : "hover:text-neutral-950 dark:hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onLocaleChange("zh")}
              aria-pressed={locale === "zh"}
              className={`rounded-full px-3 py-1 transition ${
                locale === "zh"
                  ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
                  : "hover:text-neutral-950 dark:hover:text-white"
              }`}
            >
              中文
            </button>
          </div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-black/10 bg-white/70 px-4 py-2 font-medium text-neutral-800 shadow-sm transition hover:border-black/20 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:hover:border-white/20 sm:inline-flex"
          >
            {labels.github}
          </a>
        </div>
      </div>
    </header>
  );
}

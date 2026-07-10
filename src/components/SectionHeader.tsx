type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  locale?: "en" | "zh";
};

export function SectionHeader({ eyebrow, title, description, locale = "en" }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p
        className={`text-sm font-semibold text-neutral-500 dark:text-neutral-400 ${
          locale === "zh" ? "tracking-[0.04em]" : "uppercase tracking-[0.24em]"
        }`}
      >
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-neutral-600 dark:text-neutral-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">
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

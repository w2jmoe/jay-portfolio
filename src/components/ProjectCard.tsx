import Image from "next/image";
import { assetPath } from "@/lib/assetPath";
import type { Locale, Project } from "@/data/site";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  actions: {
    live: string;
    github: string;
    video: string;
    crowdfund: string;
    builtIndependently: string;
  };
};

export function ProjectCard({ project, locale, actions }: ProjectCardProps) {
  const projectName = project.name[locale];
  const previewHref =
    project.links.live ?? project.links.github ?? project.links.video;
  const previewLabel = project.links.live
    ? actions.live
    : project.links.github
      ? actions.github
      : actions.video;
  const projectActions = [
    { label: actions.live, href: project.links.live },
    { label: actions.github, href: project.links.github },
    { label: actions.video, href: project.links.video },
    { label: actions.crowdfund, href: project.links.crowdfund }
  ].filter((action): action is { label: string; href: string } => Boolean(action.href));

  const screenshot = (
    <Image
      src={assetPath(project.screenshot)}
      alt={`${projectName} — product screenshot`}
      width={1280}
      height={800}
      loading="lazy"
      decoding="async"
      className="aspect-[16/10] w-full rounded-[1.35rem] object-cover"
    />
  );

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white/[0.72] shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-soft-dark">
      <div className="border-b border-black/[0.06] bg-neutral-100/70 p-4 dark:border-white/10 dark:bg-white/[0.03]">
        {previewHref ? (
          <a
            href={previewHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${projectName} — ${previewLabel}`}
            className="block overflow-hidden rounded-[1.35rem] transition opacity-100 hover:opacity-95"
          >
            {screenshot}
          </a>
        ) : (
          screenshot
        )}
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-center gap-4">
          <Image
            src={assetPath(project.logo)}
            alt={`${projectName} logo`}
            width={96}
            height={96}
            loading="lazy"
            decoding="async"
            className="h-12 w-12 rounded-2xl shadow-sm"
          />
          <div className="min-w-0">
            <h3 className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
              {projectName}
            </h3>
            <p className="mt-1 text-xs font-medium text-neutral-400 dark:text-neutral-500">
              {actions.builtIndependently}
            </p>
          </div>
        </div>

        <p className="mt-6 text-base leading-7 text-neutral-700 dark:text-neutral-300">
          {project.description[locale]}
        </p>
        <p className="mt-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">
          {project.results[locale]}
        </p>
        <p className="mt-4 rounded-2xl bg-neutral-100 px-4 py-3 text-sm font-medium leading-6 text-neutral-800 dark:bg-white/[0.08] dark:text-neutral-100">
          {project.impact[locale]}
        </p>

        {project.wechatHint || projectActions.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.wechatHint ? (
              <span className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-neutral-800 dark:border-white/10 dark:text-neutral-100">
                {project.wechatHint[locale]}
              </span>
            ) : null}
            {projectActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:border-black/20 hover:bg-neutral-950 hover:text-white dark:border-white/10 dark:text-neutral-100 dark:hover:border-white/20 dark:hover:bg-white dark:hover:text-neutral-950"
              >
                {action.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { assetPath } from "@/lib/assetPath";
import { dictionary, metrics, profileLinks, projects, resumeDownloadNames, resumePaths, type Locale } from "@/data/site";

export function SalesPage() {
  const [locale, setLocale] = useState<Locale>("en");
  const [wechatNotice, setWechatNotice] = useState<string | null>(null);
  const [fbaWechatNotice, setFbaWechatNotice] = useState<string | null>(null);
  const copy = dictionary[locale];
  const resumeHref = assetPath(resumePaths[locale]);
  const resumeDownloadName = resumeDownloadNames[locale];

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    document.title = copy.meta.title;
  }, [locale, copy.meta.title]);

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      return;
    }

    fetch(resumeHref, { method: "HEAD" })
      .then((response) => {
        if (!response.ok) {
          console.warn(
            `[resume] Missing PDF for locale "${locale}" at ${resumeHref}. Add the file to public/.`
          );
        }
      })
      .catch(() => {
        console.warn(
          `[resume] Could not verify PDF for locale "${locale}" at ${resumeHref}.`
        );
      });
  }, [locale, resumeHref]);

  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setWechatNotice(null);
    setFbaWechatNotice(null);
  };

  const contactLinks = useMemo(
    () => [
      { label: copy.contact.github, href: profileLinks.github },
      { label: copy.contact.linkedin, href: profileLinks.linkedin },
      { label: copy.contact.x, href: profileLinks.x },
      { label: copy.contact.email, href: profileLinks.email }
    ],
    [copy]
  );

  const handleWeChatCopy = async () => {
    try {
      await navigator.clipboard.writeText(profileLinks.wechatId);
      setWechatNotice(copy.wechat.copiedMessage);
    } catch {
      setWechatNotice(copy.wechat.copyFailed);
    }
  };

  const handleFbaWeChatCopy = async () => {
    try {
      await navigator.clipboard.writeText(profileLinks.wechatId);
      setFbaWechatNotice(copy.currentlyBuilding.copiedMessage);
    } catch {
      setFbaWechatNotice(copy.currentlyBuilding.copyFailed);
    }
  };

  return (
    <main
      id="top"
      data-locale={locale}
      className="min-h-screen overflow-hidden bg-[#f8f7f4] text-neutral-950 dark:bg-[#0f0f0f] dark:text-neutral-50"
    >
      <Header
        locale={locale}
        labels={copy.nav}
        githubUrl={profileLinks.github}
        onLocaleChange={handleLocaleChange}
      />

      <section className="mx-auto flex max-w-7xl flex-col px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28 lg:min-h-[calc(100vh-76px)] lg:justify-center">
        <div className="fade-in grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <p
              className={`text-sm font-semibold text-neutral-500 dark:text-neutral-400 ${
                locale === "zh" ? "tracking-[0.04em]" : "uppercase tracking-[0.28em]"
              }`}
            >
              {copy.hero.title}
            </p>
            <h1
              className={`mt-7 max-w-4xl whitespace-nowrap font-semibold text-neutral-950 dark:text-neutral-50 ${
                locale === "zh"
                  ? "text-[2.75rem] tracking-[0.05em] sm:text-6xl lg:text-[4.25rem]"
                  : "text-5xl tracking-[-0.055em] sm:text-7xl lg:text-8xl"
              }`}
            >
              {copy.hero.name}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-neutral-600 dark:text-neutral-300 sm:text-2xl">
              {copy.hero.subtitle}
            </p>
          </div>

          <aside className="rounded-[2rem] border border-black/[0.08] bg-white/60 p-6 shadow-soft dark:border-white/10 dark:bg-white/[0.04] dark:shadow-soft-dark sm:p-8">
            <p className="whitespace-pre-line text-lg leading-8 text-neutral-700 dark:text-neutral-200">
              {copy.hero.proof}
            </p>
          </aside>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
          >
            {copy.hero.primaryCta}
          </a>
          <a
            href={profileLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:border-black/20 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:hover:border-white/20"
          >
            {copy.hero.githubCta}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:border-black/20 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:hover:border-white/20"
          >
            {copy.hero.contactCta}
          </a>
        </div>

        <div className="mt-10 rounded-[2rem] border border-black/[0.08] bg-white/60 p-6 shadow-soft dark:border-white/10 dark:bg-white/[0.04] dark:shadow-soft-dark sm:p-8">
          <p
            className={`text-sm font-semibold text-neutral-500 dark:text-neutral-400 ${
              locale === "zh" ? "tracking-[0.04em]" : "uppercase tracking-[0.28em]"
            }`}
          >
            {copy.currentlyBuilding.eyebrow}
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-3xl">
            {copy.currentlyBuilding.title}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-700 dark:text-neutral-300 sm:text-lg">
            {copy.currentlyBuilding.description}
          </p>
          <div className="mt-8 border-t border-black/[0.06] pt-8 dark:border-white/10">
            <p className="whitespace-pre-line text-base leading-8 text-neutral-700 dark:text-neutral-300">
              {copy.currentlyBuilding.contactPrompt}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {copy.currentlyBuilding.wechatLabel}
              </span>
              <button
                type="button"
                onClick={handleFbaWeChatCopy}
                aria-label={copy.currentlyBuilding.copyAriaLabel}
                className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:border-black/20 hover:bg-neutral-950 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:hover:border-white/20 dark:hover:bg-white dark:hover:text-neutral-950"
              >
                {copy.currentlyBuilding.wechatDisplay}
              </button>
            </div>
            {fbaWechatNotice ? (
              <p
                role="status"
                aria-live="polite"
                className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300"
              >
                {fbaWechatNotice}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label.en}
              className="rounded-[1.65rem] border border-black/[0.08] bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
            >
              <p className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
                {metric.value[locale]}
              </p>
              <p className="mt-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {metric.label[locale]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeader
          eyebrow={copy.sections.projectsEyebrow}
          title={copy.sections.projectsTitle}
          description={copy.sections.projectsDescription}
          locale={locale}
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              locale={locale}
              actions={copy.projectActions}
            />
          ))}
        </div>
      </section>

      <section id="journey" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeader
          eyebrow={copy.sections.journeyEyebrow}
          title={copy.sections.journeyTitle}
          description={copy.sections.journeyDescription}
          locale={locale}
        />
        <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-3">
          {copy.journey.map((item, index) => (
            <div
              key={item.year}
              className="relative rounded-[1.75rem] border border-black/[0.08] bg-white/[0.72] p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
            >
              <p className={`text-sm font-semibold text-neutral-500 dark:text-neutral-400 ${locale === "en" ? "uppercase tracking-[0.2em]" : ""}`}>
                {item.year}
              </p>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                {item.description}
              </p>
              {index < copy.journey.length - 1 ? (
                <span className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-neutral-300 dark:text-neutral-600 md:block">
                  ↓
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
        <div className="rounded-[2.5rem] border border-black/[0.08] bg-white/[0.74] p-8 text-center shadow-soft dark:border-white/10 dark:bg-white/[0.04] dark:shadow-soft-dark sm:p-14">
          <SectionHeader
            eyebrow={copy.sections.contactEyebrow}
            title={copy.sections.contactTitle}
            description={copy.sections.contactDescription}
            locale={locale}
          />
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:border-black/20 hover:bg-neutral-950 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:hover:border-white/20 dark:hover:bg-white dark:hover:text-neutral-950"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={handleWeChatCopy}
              aria-label={copy.wechat.ariaLabel}
              className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:border-black/20 hover:bg-neutral-950 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:hover:border-white/20 dark:hover:bg-white dark:hover:text-neutral-950"
            >
              {copy.contact.wechat}
            </button>
            <a
              href={resumeHref}
              download={resumeDownloadName}
              className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:border-black/20 hover:bg-neutral-950 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:hover:border-white/20 dark:hover:bg-white dark:hover:text-neutral-950"
            >
              {copy.contact.resume}
            </a>
          </div>
          {wechatNotice ? (
            <p
              role="status"
              aria-live="polite"
              className="mx-auto mt-6 max-w-md whitespace-pre-line text-sm leading-7 text-neutral-600 dark:text-neutral-300"
            >
              {wechatNotice}
            </p>
          ) : null}
        </div>
      </section>

      <footer className="border-t border-black/5 px-5 py-8 text-center text-sm text-neutral-500 dark:border-white/10 dark:text-neutral-400 sm:px-8">
        {copy.footer}
      </footer>
    </main>
  );
}

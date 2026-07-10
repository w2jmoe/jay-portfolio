/**
 * Prefix public asset paths with Next.js basePath.
 *
 * Local dev:  NEXT_PUBLIC_BASE_PATH=""        → /projects/foo.jpg
 * GitHub Pages: NEXT_PUBLIC_BASE_PATH="/jay-portfolio" → /jay-portfolio/projects/foo.jpg
 *
 * Set via GITHUB_PAGES_BASE_PATH in next.config.mjs (see deploy.yml for CI).
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

/** @type {import('next').NextConfig} */

// GitHub Pages project site for repository: jay-portfolio
// Production URL: https://<username>.github.io/jay-portfolio/
//
// Local dev: leave GITHUB_PAGES_BASE_PATH unset (serves from /)
// CI build:   set GITHUB_PAGES_BASE_PATH=/jay-portfolio in deploy.yml
const basePath = process.env.GITHUB_PAGES_BASE_PATH ?? "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`
      }
    : {}),
  images: {
    unoptimized: true
  }
};

export default nextConfig;

import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/decidel-website" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  turbopack: {
    root: __dirname,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

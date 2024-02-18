import nextIntl from "next-intl/plugin";

const withNextIntl = nextIntl(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.ts"
);

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({});

export default nextConfig;

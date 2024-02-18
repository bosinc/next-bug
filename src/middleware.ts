import type { NextRequest } from "next/server";

import createIntlMiddleware from "next-intl/middleware";
import { Locale, getLocale, locales } from "../i18n";

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: [
    /**
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static generated files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - static (static files in public folder)
     */
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};

export default async function middleware(request: NextRequest) {
  // Step 1: Use the incoming request
  const defaultLocale = getLocale(
    request.headers.get("x-default-locale") as Locale
  );

  // Step 2: Create and call the next-intl middleware
  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
    localePrefix: "as-needed",
    localeDetection: false,
  });

  const response = handleI18nRouting(request);

  // // Step 3: Alter the response
  response.headers.set("x-default-locale", defaultLocale);

  return response;
}

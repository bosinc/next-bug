import { getRequestConfig } from "next-intl/server";

import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "cn"] as const;

export type Locale = (typeof locales)[number];

const defaultLocale: Locale = locales[0];

export const getLocale = (locale: string) =>
  (locales.includes(locale as Locale) ? locale : defaultLocale) as Locale;

const { Link, useRouter, usePathname, redirect } =
  createSharedPathnamesNavigation({
    locales,
  });

const getIntlConfig = async ({ locale }: { locale: string }) => {
  return {
    messages: (await import(`./messages/${getLocale(locale)}.json`)).default,
  };
};

export default getRequestConfig(getIntlConfig);

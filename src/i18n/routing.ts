import { defineRouting } from "next-intl/routing";

const locales = ["en", "es", "pt-br", "de"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof locales)[number];

export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Fart Together Wiki",
  shortName: "Fart Together",
  logoText: "F",
  tagline: "Physics-Based Co-op Party Game Guides",
  description: "Your ultimate Fart Together guide! Explore physics-based co-op gameplay, raft controls, multiplayer tips, system requirements, demo details, and release information.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://farttogether.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://farttogether.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/5117550/Fart_Together/",
  heroVideoId: "N6aVfoC7Dss", // Fart Together official demo trailer by GamesMrkt
  social: {
    youtube: "https://www.youtube.com/@GamesMrkt",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};

import type { CampusConfig } from "./types";

const ichigayaConfig: CampusConfig = {
  id: "ichigaya",
  appName: "いちっぷ",
  basePath: "/tamap",
  storagePrefix: "ichimap",
  logoPath: "/images/Ichigaya Tokyo.webp",
  mapImagePath: "/images/ichigaya-map.webp",
  sceneryImagePath: "/images/ichigaya-scenery.webp",
  subtitle: "⟨ 法政大学 市ヶ谷キャンパス ⟩",
  transportMode: "train",
  hasDirectionSwap: false,
  gaTrackingId: "G-4F3PMM48SS",
  defaultStation: "ichigaya",
  stations: [
    {
      id: "ichigaya",
      nameJa: "市ケ谷",
      lines: ["JR中央線", "都営新宿線", "メトロ南北線"],
      walkMinutes: 7,
    },
    {
      id: "iidabashi",
      nameJa: "飯田橋",
      lines: ["JR中央線", "都営大江戸線", "メトロ南北線", "メトロ東西線"],
      walkMinutes: 8,
    },
    {
      id: "kudanshita",
      nameJa: "九段下",
      lines: ["都営新宿線", "メトロ半蔵門線", "メトロ東西線"],
      walkMinutes: 10,
    },
  ],
  buildings: [
    { key: "law", labelKey: "home.law", walkMinutes: 3 },
    { key: "letters", labelKey: "home.letters", walkMinutes: 5 },
    { key: "business", labelKey: "home.business", walkMinutes: 4 },
    { key: "intercultural", labelKey: "home.intercultural", walkMinutes: 6 },
  ],
  theme: {
    bgGradient:
      "bg-gradient-to-b from-pink-50 via-white to-pink-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950",
    accent: "pink-500",
    accentSecondary: "rose-400",
    cardBg: "bg-white/80 dark:bg-zinc-900/60",
    cardBorder: "border-pink-200/40 dark:border-pink-500/20",
    glowShadow: "shadow-pink-500/10",
    stationActive:
      "bg-pink-500/20 text-pink-700 dark:text-pink-300 border-pink-400/60 shadow-lg shadow-pink-500/20 scale-105",
    stationInactive:
      "bg-white/60 dark:bg-white/5 text-gray-600 dark:text-white/60 border-gray-200 dark:border-white/10 hover:bg-pink-500/10 hover:border-pink-500/30",
    linkGradients: {
      discount:
        "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600",
      tech: "bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600",
      campus:
        "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600",
    },
  },
};

export default ichigayaConfig;

import { createContext, useContext, type ReactNode } from "react";
import type { CampusConfig } from "./types";

const CampusContext = createContext<CampusConfig | null>(null);

export function CampusProvider({
  config,
  children,
}: {
  config: CampusConfig;
  children: ReactNode;
}) {
  return (
    <CampusContext.Provider value={config}>{children}</CampusContext.Provider>
  );
}

export function useCampus(): CampusConfig {
  const ctx = useContext(CampusContext);
  if (!ctx) {
    throw new Error("useCampus must be used within a CampusProvider");
  }
  return ctx;
}
// updated: useCampus¥Õ¥Ã¥¯

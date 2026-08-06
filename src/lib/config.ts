import type { AppMode } from "@/types/nosa";

const getAppMode = (): AppMode => {
  return process.env.NOSA_APP_MODE === "exhibition" ? "exhibition" : "web";
};

const parseTimeout = (): number => {
  const value = Number(process.env.NOSA_INACTIVITY_TIMEOUT_MS ?? "120000");
  return Number.isFinite(value) && value > 0 ? value : 120000;
};

export const getAppConfig = () => {
  const appMode = getAppMode();
  const envDisabled = process.env.NOSA_DISABLE_DOWNLOADS === "true";

  return {
    appMode,
    inactivityTimeoutMs: parseTimeout(),
    allowDownloads: !(envDisabled || appMode === "exhibition"),
    startRoute: "/start",
  } as const;
};

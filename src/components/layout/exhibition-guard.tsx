"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { AppMode } from "@/types/nosa";

interface ExhibitionGuardProps {
  appMode: AppMode;
  inactivityTimeoutMs: number;
  startRoute: string;
}

export function ExhibitionGuard({
  appMode,
  inactivityTimeoutMs,
  startRoute,
}: ExhibitionGuardProps) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (appMode !== "exhibition") {
      return;
    }

    let timeout = window.setTimeout(() => {
      if (pathname !== startRoute) {
        router.push(startRoute);
      }
    }, inactivityTimeoutMs);

    const reset = () => {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        if (pathname !== startRoute) {
          router.push(startRoute);
        }
      }, inactivityTimeoutMs);
    };

    window.addEventListener("pointerdown", reset);
    window.addEventListener("keydown", reset);
    window.addEventListener("touchstart", reset, { passive: true });

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("pointerdown", reset);
      window.removeEventListener("keydown", reset);
      window.removeEventListener("touchstart", reset);
    };
  }, [appMode, inactivityTimeoutMs, pathname, router, startRoute]);

  return null;
}

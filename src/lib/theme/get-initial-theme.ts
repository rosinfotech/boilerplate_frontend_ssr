"use client";

import type { Theme } from "@/types/theme";
import { THEME_STORAGE_KEY } from "@/configs/ui";


export const getInitialTheme = (): Theme => {
    if (typeof window === "undefined") {
        return "system";
    }

    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;

    if (storedTheme && ["light", "dark", "system"].includes(storedTheme)) {
        return storedTheme;
    }

    return "system";
};

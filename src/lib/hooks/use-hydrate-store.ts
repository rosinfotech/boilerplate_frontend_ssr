"use client";

import { useEffect } from "react";
import { selectSetHydrated, selectSetTheme, useStore } from "@/lib/store";
import { getInitialTheme } from "@/lib/theme";


export const useHydrateStore = (): void => {
    const setHydrated = useStore(selectSetHydrated);
    const setTheme = useStore(selectSetTheme);

    useEffect(() => {
        const initialTheme = getInitialTheme();
        setTheme(initialTheme);
        setHydrated();
    }, [setHydrated, setTheme]);
};

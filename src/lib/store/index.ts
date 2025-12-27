"use client";

import type { IThemeSlice } from "./slices/theme-slice";
import type { IUiSlice } from "./slices/ui-slice";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IS_PRODUCTION } from "@/configs/envs";
import { createThemeSlice } from "./slices/theme-slice";
import { createUiSlice } from "./slices/ui-slice";


type TStoreState = IThemeSlice & IUiSlice;

export const useStore = create<TStoreState>()(
    !IS_PRODUCTION
        ? devtools(
              (...a) => ({
                  ...createThemeSlice(...a),
                  ...createUiSlice(...a),
              }),
              {
                  name: "AppStore",
              }
          )
        : (...a) => ({
              ...createThemeSlice(...a),
              ...createUiSlice(...a),
          })
);

export type { Theme } from "@/types/theme";

export {
    selectHydrated,
    selectSetHydrated,
    selectSetTheme,
    selectTheme,
    selectToggleTheme,
} from "./selectors";

export {
    selectCloseMobileMenu,
    selectIsMobileMenuOpen,
    selectOpenMobileMenu,
    selectToggleMobileMenu,
} from "./selectors";

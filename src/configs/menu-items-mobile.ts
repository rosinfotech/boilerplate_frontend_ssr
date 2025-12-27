import type { INavigationMenuItem } from "@/components/NavigationMenu/types";
import { MENU_ITEMS } from "./menu-items";


export const MENU_ITEMS_MOBILE: INavigationMenuItem[] = [
    ...MENU_ITEMS,
    {
        key: "/page-mobile-notification",
        label: "Mobile Notifications",
    },
    {
        key: "/page-plugins",
        label: "Plugins Debug",
    },
];

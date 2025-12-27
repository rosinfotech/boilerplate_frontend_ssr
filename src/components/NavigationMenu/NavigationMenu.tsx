"use client";

import type { MenuProps } from "antd";
import type { FC } from "react";
import type { INavigationMenuProps } from "./types";
import { Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";


export const NavigationMenu: FC<INavigationMenuProps> = props => {
    const { items, mode = "inline", onClick } = props;

    const pathname = usePathname();

    const menuItems: MenuProps["items"] = items.map(item => ({
        key: item.key,
        label: <Link href={item.key}>{item.label}</Link>,
    }));

    return (
        <Menu
            className="bg-transparent! h-full"
            items={menuItems}
            mode={mode}
            onClick={onClick}
            selectedKeys={[pathname]}
        />
    );
};

export default NavigationMenu;

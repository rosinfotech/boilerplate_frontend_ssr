"use client";

import type { MenuProps } from "antd";
import type { FC, PropsWithChildren } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Drawer, Layout } from "antd";
import { NavigationMenu } from "@/components/NavigationMenu";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { MENU_ITEMS_MOBILE } from "@/configs/menu-items-mobile";
import { antDesignThemeDark } from "@/layouts/constants/theme-dark";
import { antDesignThemeLight } from "@/layouts/constants/theme-light";
import { useHydrateStore, useResolvedTheme } from "@/lib/hooks";
import {
    selectCloseMobileMenu,
    selectIsMobileMenuOpen,
    selectToggleMobileMenu,
    useStore,
} from "@/lib/store";


const { Content, Header } = Layout;

export const LayoutContentMobile: FC<PropsWithChildren> = props => {
    const { children } = props;

    useHydrateStore();

    const resolvedTheme = useResolvedTheme();
    const isMobileMenuOpen = useStore(selectIsMobileMenuOpen);
    const toggleMobileMenu = useStore(selectToggleMobileMenu);
    const closeMobileMenu = useStore(selectCloseMobileMenu);

    const handleMenuClick: MenuProps["onClick"] = () => {
        closeMobileMenu();
    };

    return (
        <ConfigProvider theme={resolvedTheme === "dark" ? antDesignThemeDark : antDesignThemeLight}>
            <Layout className="w-dvw h-dvh">
                <Header className="flex justify-between items-center bg-transparent! px-4 h-16">
                    <Button icon={<MenuOutlined />} onClick={toggleMobileMenu} type="text" />
                    <ThemeToggle />
                </Header>

                <Content className="px-4 py-6 overflow-auto">{children}</Content>

                <Drawer
                    onClose={toggleMobileMenu}
                    open={isMobileMenuOpen}
                    placement="left"
                    size="default"
                    title="Меню"
                >
                    <NavigationMenu
                        items={MENU_ITEMS_MOBILE}
                        mode="inline"
                        onClick={handleMenuClick}
                    />
                </Drawer>
            </Layout>
        </ConfigProvider>
    );
};

export default LayoutContentMobile;

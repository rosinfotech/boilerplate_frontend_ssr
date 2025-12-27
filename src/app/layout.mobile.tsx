import type { PropsWithChildren } from "react";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { LayoutContentMobile } from "@/layouts/LayoutContentMobile";
import { metadata as appMetadata } from "./metadata/constants-mobile";


export const metadata = appMetadata;

const RootLayoutMobile = (props: Readonly<PropsWithChildren>) => {
    const { children } = props;

    return (
        <html lang="ru">
            <head>
                <link href="/fonts/mont/index.css" rel="stylesheet" />
                <meta
                    content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
                    name="viewport"
                />
            </head>
            <body>
                <AntdRegistry>
                    <LayoutContentMobile>{children}</LayoutContentMobile>
                </AntdRegistry>
            </body>
        </html>
    );
};

export default RootLayoutMobile;

import "./globals.css";
import type { PropsWithChildren } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { LayoutContent } from "@/layouts/LayoutContent";
import { metadata as appMetadata } from "./metadata/constants";


export const metadata = appMetadata;

const RootLayout = (props: Readonly<PropsWithChildren>) => {
    const { children } = props;

    return (
        <html lang="ru">
            <head>
                <link href="/fonts/mont/index.css" rel="stylesheet" />
            </head>
            <body>
                <AntdRegistry>
                    <LayoutContent>{children}</LayoutContent>
                </AntdRegistry>
            </body>
        </html>
    );
};

export default RootLayout;

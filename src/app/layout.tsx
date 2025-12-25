import type { ReactNode } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import { metadata as appMetadata } from "./metadata/constants";


export const metadata = appMetadata;

interface IRootLayoutProps {
    children: ReactNode;
}

const RootLayout = (props: Readonly<IRootLayoutProps>) => {
    const { children } = props;

    return (
        <html lang="ru">
            <head>
                <link href="/fonts/mont/index.css" rel="stylesheet" />
            </head>
            <body>
                <AntdRegistry>
                    <main className="flex flex-col justify-center items-center bg-linear-to-br from-purple-600 to-purple-900 p-8 min-h-screen">
                        <div className="w-full max-w-6xl text-center">
                            <h1 className="mb-6 font-mont font-bold text-white text-6xl">
                                Rosinfotech Boilerplate Frontend SSR
                            </h1>
                            {children}
                        </div>
                    </main>
                </AntdRegistry>
            </body>
        </html>
    );
};

export default RootLayout;

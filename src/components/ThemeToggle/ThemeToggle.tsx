"use client";

import type { FC } from "react";
import { BulbFilled, BulbOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import { selectHydrated, selectTheme, selectToggleTheme, useStore } from "@/lib/store";


export const ThemeToggle: FC = () => {
    const hydrated = useStore(selectHydrated);
    const theme = useStore(selectTheme);
    const toggleTheme = useStore(selectToggleTheme);

    if (!hydrated) {
        return (
            <Switch
                checked={false}
                checkedChildren={<BulbFilled />}
                className=""
                disabled
                unCheckedChildren={<BulbOutlined />}
            />
        );
    }

    return (
        <Switch
            checked={theme === "dark"}
            checkedChildren={<BulbFilled />}
            className=""
            onChange={toggleTheme}
            unCheckedChildren={<BulbOutlined />}
        />
    );
};

export default ThemeToggle;

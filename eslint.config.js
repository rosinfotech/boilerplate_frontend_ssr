import js from "@eslint/js";
import importConfig from "@rosinfo.tech/eslint-config-import";
import javascriptConfig from "@rosinfo.tech/eslint-config-javascript";
import reactConfig from "@rosinfo.tech/eslint-config-react";
import typescriptConfig from "@rosinfo.tech/eslint-config-typescript";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import typescriptPlugin from "typescript-eslint";


export default [
    {
        ignores: [
            "**/*.min.js",
            "**/.vscode/",
            "**/android/",
            "**/build/",
            "**/coverage/",
            "**/dist/",
            "**/ios/",
            "**/.next/",
            "**/.next.mobile/",
            "**/node_modules/",
            "**/next-env.d.ts",
        ],
    },

    js.configs.recommended,

    ...typescriptPlugin.configs.recommended,

    ...(Array.isArray(reactConfig) ? reactConfig : [reactConfig]),

    {
        files: ["**/*.{js,mjs,cjs,ts,tsx,mts,cts}"],

        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },

        plugins: {
            ...(reactConfig.plugins || {}),
            ...(javascriptConfig.plugins || {}),
            ...(importConfig.plugins || {}),
            ...(typescriptConfig.plugins || {}),
        },

        rules: {
            ...(reactConfig.disabledRules || {}),
            ...(javascriptConfig.disabledRules || {}),
            ...(importConfig.disabledRules || {}),
            ...(typescriptConfig.disabledRules || {}),

            ...(reactConfig.rules || {}),
            ...(javascriptConfig.rules || {}),
            ...(importConfig.rules || {}),
            ...(typescriptConfig.rules || {}),
        },

        settings: {
            react: {
                version: "detect",
            },
            ...(reactConfig.settings || {}),
            ...(javascriptConfig.settings || {}),
            ...(importConfig.settings || {}),
            ...(typescriptConfig.settings || {}),
        },
    },

    {
        files: ["**/layout*.tsx", "**/page*.tsx"],
        rules: {
            "react-refresh/only-export-components": "off",
        },
    },

    eslintConfigPrettier,
];

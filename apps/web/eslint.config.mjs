import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const config = [
    ...nextCoreWebVitals,
    ...nextTypescript,
    {
        rules: {
            "@next/next/no-html-link-for-pages": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "react-hooks/purity": "off",
            "react-hooks/refs": "off",
            "react-hooks/set-state-in-effect": "off",
            "react/no-unescaped-entities": "off",
        },
    },
    {
        ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
    },
];

export default config;

module.exports = {
    root: true,
    env: { browser: true, es2020: true, node: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "eslint-config-prettier",
    ],
    ignorePatterns: ["dist", "eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "import"],
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
        "import/order": [
            "error",
            {
                groups: ["builtin", "external", "internal"],
                pathGroups: [
                    { pattern: "@/**", group: "internal", position: "before" },
                ],
                pathGroupsExcludedImportTypes: ["@"],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
    },
};

import { defineConfig, globalIgnores } from "eslint/config";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig([
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      "react/jsx-no-target-blank": "error",
      "react/no-unescaped-entities": "error",
    },
  },
  {
    files: ["src/components/layout/Header.tsx", "src/components/sections/WhyChoose.tsx"],
    rules: {
      "jsx-a11y/no-noninteractive-element-interactions": "off",
    },
  },
  {
    settings: {
      react: {
        version: "19.3",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

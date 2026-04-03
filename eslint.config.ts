import * as eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import libram, { verifyConstantsSinceRevision } from "eslint-plugin-libram";
import tseslint from "typescript-eslint";
import { KOLMAFIA_VERSION } from "./version";

await verifyConstantsSinceRevision(KOLMAFIA_VERSION);

export default tseslint.config(
  {
    ignores: ["dist/**"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...libram.configs.recommended,
  {
    files: ["src/**/*.ts", "src/**/*.tsx", "**/*.ts", "**/*.tsx"],
    rules: {
      "block-scoped-var": "error",
      "eol-last": "error",
      eqeqeq: "error",
      "no-trailing-spaces": "error",
      "no-var": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-template": "error",
      "no-unused-vars": "error",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "no-restricted-syntax": [
        "error",
        {
          selector: "TSEnumDeclaration:not([const=true])",
          message: "Don't declare non-const enums",
        },
      ],
      "sort-imports": [
        "error",
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
      "libram/verify-constants": "error",
    },
  },
  prettier,
);

import { type Config } from "prettier";

export default {
  printWidth: 100,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: ["<THIRD_PARTY_MODULES>", "^\\.\\./", "^\\./"],
  importOrderSeparation: true,
} satisfies Config;

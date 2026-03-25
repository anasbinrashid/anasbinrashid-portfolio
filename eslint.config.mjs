import nextConfig from "eslint-config-next";

export default [
  ...nextConfig,
  {
    rules: {
      // These rules are overly strict for this codebase (refs used as render inputs).
      "react-hooks/refs": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
];


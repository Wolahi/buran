module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.eslint.json",
    sourceType: "module",
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "simple-import-sort",
    "import",
    "react",
    "react-hooks",
  ],
  rules: {
    "import/extensions": 'off',
    "no-return-await": "off",
    "@typescript-eslint/return-await": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/no-unstable-nested-components": 'off',
    "react/function-component-definition": "off",
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/no-shadow": "off",
    "no-param-reassign": "off",
    "jsx-a11y/media-has-caption": "off",
    "react/jsx-no-constructed-context-values": "off",
    "no-await-in-loop": "off",
    "no-loop-func": "off",
    "no-restricted-syntax": "off",
    "jsx-a11y/control-has-associated-label": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // React and libs.
              ["^react", "^@?\\w"],
              // FSD imports.
              [
                "^(1_shared)(/.*|$)",
                "^(2_entities)(/.*|$)",
                "^(3_features)(/.*|$)",
                "^(4_widgets)(/.*|$)",
                "^(5_screens)(/.*|$)",
              ],
              // Parent imports. Put `..` last.
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // Other relative imports. Put same-folder imports and `.` last.
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // Style imports.
              ["^.+\\.?(scss)$"],
            ],
          },
        ],
      },
    },
  ],
};

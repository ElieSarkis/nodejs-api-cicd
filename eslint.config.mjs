import globals from 'globals';

export default [
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs' },
    rules: {
      semi: ['error', 'always'], // Enforce semicolons
      'no-console': 'warn', // Warn on console statements
      quotes: ['error', 'single'], // Enforce single quotes
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];

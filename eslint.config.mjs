import ngneers from '@ngneers/eslint-config';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  {
    ignores: ['test/**/*', '**/jest.config.ts', 'eslint.config.mjs'],
  },
  ...ngneers.configs.common,
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {},
  },
];

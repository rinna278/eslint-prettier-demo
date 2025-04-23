import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettier from 'prettier';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      import: eslintPluginImport,
      prettier: eslintPluginPrettier,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prettier/prettier': [
        'error',
        (await prettier.resolveConfig('./')) || {},
      ],
    },
  },
  {
    rules: {
      ...eslintConfigPrettier.rules,
    },
  },
];

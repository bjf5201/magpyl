import unjs from 'eslint-config-unjs';

export default unjs({
  // dist, coverage included by default
  ignores: ['node_modules'],
  rules: {
    // rules overrides
    'unicorn/no-negated-condition': 'off',
  },
  markdown: {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
});

module.exports = {
  globals: {
    spritly: true,
    signal: true,
    // Blockly: true,
  },
  extends:  "eslint-config-sprite",
  plugins: ['html'],
  rules: {
    "complexity": ["warn", 25],
    "import/no-mutable-exports": 'off',
    "no-unused-vars": 'warn',
    "no-eval": 'off',
  },
}

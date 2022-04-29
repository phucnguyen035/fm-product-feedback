module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'eslint',
    'jest --passWithNoTests --bail --findRelatedTests',
  ],
  '**/*.ts?(x)': () => 'npm run build-types',
  '*.json': ['prettier --write'],
};

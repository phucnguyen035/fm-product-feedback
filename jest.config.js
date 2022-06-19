const jestConfig = {
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svg.js',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = jestConfig;

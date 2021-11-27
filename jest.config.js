module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
  ],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@pages/(.*)': '<rootDir>/pages/$1',
    '@styles/(.*)': '<rootDir>/styles/$1',

    /* Handle CSS imports (with CSS modules) */
    '\\.(scss|sass|css)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    /* Handle image imports */
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage',
    '<rootDir>/dist',
  ],
  testEnvironment: 'jsdom',
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleDirectories: [
    '<rootDir>/node_modules',
    '<rootDir>/src',
    '<rootDir>/pages',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};

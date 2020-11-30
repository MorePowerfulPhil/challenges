module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/app/**/*.test.{ts,tsx,js,jsx}'],
    modulePaths: ['<rootDir>'],
    moduleDirectories: ['<rootDir>/node_modules'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/jest/filemock.js',
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    },
    collectCoverage: true,
    collectCoverageFrom: [
      '<rootDir>/packages/**/*.{ts,tsx}',
      '!<rootDir>/**/*.enums.ts',
      '!<rootDir>/**/*.d.ts',
      '!<rootDir>/**/*.interface.ts',
      '!<rootDir>/**/index.js',
      '!<rootDir>/**/index.ts',
      '!<rootDir>/**/index.tsx',
      '!<rootDir>/packages/mock-data/**/*',
      '!<rootDir>/packages/**/*.mock.*'
    ],
    // Add incorrect files from pre-commit hook below
    coveragePathIgnorePatterns: [
      '/node_modules/',
      'index.ts',
      'jest',
      '/application/'
    ],
    coverageThreshold: {
      global: {
        statements: 100,
        branches: 100,
        lines: 100,
        functions: 100
      }
    }
  }
  
import type { Config } from 'jest';

const config: Config = {
  setupFilesAfterEnv: ['./__tests__/libs/jest-extends.ts'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '../',
  testEnvironment: 'node',
  testMatch: ['**/*.**-spec.ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src/$1',
    '^@__tests__(.*)$': '<rootDir>/__tests__/$1',
    '^@fixtures(.*)$': '<rootDir>/fixtures/$1',
  },
  verbose: false,
};

export default config;

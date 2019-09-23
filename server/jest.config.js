const testType = process.env.TEST_TYPE || 'all';
let testsPath = '';

switch (testType) {
  case 'unit':
    testsPath = '**/server/tests/unit/**/*.spec.[jt]s?(x)';
    break;
  case 'integration':
    testsPath = '**/server/tests/integration/**/*.spec.[jt]s?(x)';
    break;
  default:
    testsPath = '**/server/tests/**/*.spec.[jt]s?(x)';
    break;
}

module.exports = {
  verbose: true,
  rootDir: '../',
  globals: {
    NODE_ENV: process.env.NODE_ENV
  },
  modulePaths: ['node_modules', '<rootDir>/server'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/server/$1'
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'json'
  ],
  transformIgnorePatterns: [
    'node_modules'
  ],
  testMatch: [testsPath],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
};

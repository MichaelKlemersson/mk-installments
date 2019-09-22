module.exports = {
  verbose: true,
  rootDir: '../',
  globals: {
    NODE_ENV: 'test'
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
  testMatch: ['**/server/tests/**/*.spec.[jt]s?(x)'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
};

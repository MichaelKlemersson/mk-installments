module.exports = {
  extends: [
    'airbnb-base',
  ],
  env: {
    browser: false,
    jest: true,
    node: true
  },
  rules: {
    "no-trailing-spaces": ["error", {
      "skipBlankLines": true,
      "ignoreComments": true
    }],
    'comma-dangle': ['error', 'never']
  },
};

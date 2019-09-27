const path = require('path');

module.exports = {
  parallel: true,
  outputDir: path.resolve(__dirname, '../server/build/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000'
      }
    }
  }
};

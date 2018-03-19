const { exec } = require('child_process')

module.exports = function (bundler) {
  bundler.on('buildEnd', () => {
    exec('jsdoc -c jsdoc.json')
  });
};
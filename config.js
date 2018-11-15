const nconf = require('nconf');

module.exports = nconf;
const path = require('path');

nconf
  // 1. Command-line arguments
  .argv()
  // 2. Enviroment variables
  .env([
    'SQL_USER',
    'SQL_PASSWORD',
    'PORT',
    'DATABASE_URL',
    'DATABASE_NAME',
    'DATA_BACKEND'
  ])
  // 3. Config file
  .file({ file: path.join(__dirname, 'config.json') })
  // 4. Defaults
  .defaults({
    PORT: 3000,

    DATABASE_NAME: '52unlimited',
    DATA_BACKEND: 'postgresql'
  });
// checkConfig('DATABASE_URL');

if (nconf.get('DATA_BACKEND') === 'postgresql') {
  checkConfig('SQL_USER');
  checkConfig('SQL_PASSWORD');
  checkConfig('DATABASE_NAME');
  if (nconf.get('NODE_ENV') === 'production') {
    // checkConfig('INSTANCE_CONNECTION_NAME');
  }
}

function checkConfig(setting) {
  if (!nconf.get(setting)) {
    throw new Error(`You must set ${setting} as an environment variable or in config.json!`);
  }
}

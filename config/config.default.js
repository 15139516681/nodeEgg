/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'test'
    },
    app: true,
    agent: false,
  };

  config.security = {
    csrf: {
      enable: false
    }
  }
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_123456';

  // add your middleware config here
  config.middleware = ['auth'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

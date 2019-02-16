import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1548667447519_3318';

  // add your egg config in here
  config.middleware = [];

  // 单数据库信息配置
  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'life_struggle',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // 配置socket
  config.io = {
    init: {}, // passed to engine.io
    namespace: {
      // 命名空间
      '/': {
        connectionMiddleware: [
          // 'connection', // 这个是连接中间件， 只在connection的时候触发
          'auth',
        ],
        packetMiddleware: [
          'filter',
        ], // 这个会在每次消息的时候触发
      },
    },
  };

  // 配置服务端安全策略
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['*'],
  };

  // 配置跨域
  config.cors = {
    origin: '*',
    allowMethods: 'GET,PUT,POST,DELETE,PATCH,OPTION',
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};

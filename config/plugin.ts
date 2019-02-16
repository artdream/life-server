import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  io: {
    enable: true,
    package: 'egg-socket.io',
  },
  cors:{ // 引入跨域插件
    enable:true,
    package:'egg-cors',
  },
};

export default plugin;

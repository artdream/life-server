import { Application } from 'egg';

export default (app: Application) => {
  const { io } = app;

  io.of('/').route('signin', io.controller.auth.signin);
  io.of('/').route('regin', io.controller.auth.regin);
  
  io.of('/').route('updategame', io.controller.game.updateData);
  
  io.of('/').route('getpowers', io.controller.power.getpowers);
};

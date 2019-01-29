import { Application } from 'egg';

export default (app: Application) => {
  const { controller, io } = app;

  io.of('/auth').route('signin', io.controller.auth.signin);
  io.of('/auth').route('regin', controller.auth.regin);
};

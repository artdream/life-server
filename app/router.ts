import { Application } from 'egg';

export default (app: Application) => {
  const { io,router, controller } = app;

  // http路由

  router.get('/user',controller.user.getusers);
  router.get('/user/:id',controller.user.getuser);
  router.post('/user',controller.user.adduser);
  router.patch('/user',controller.user.updateuser);

  router.get('/power',controller.power.getpowers);
  router.get('/power/:id',controller.power.getpower);
  router.post('/power',controller.power.addpower);
  router.patch('/power',controller.power.updatepower);

  router.get('/skill',controller.skill.getskills);
  router.get('/skill/:id',controller.skill.getskill);
  router.post('/skill',controller.skill.addskill);
  router.patch('/skill',controller.skill.updateskill);

  router.get('/transaction',controller.transaction.gettransactions);
  router.get('/transaction/:id',controller.transaction.gettransaction);
  router.post('/transaction',controller.transaction.addtransaction);
  router.patch('/transaction',controller.transaction.updatetransaction);

  // socket路由

  io.of('/').route('signin', io.controller.auth.signin);
  io.of('/').route('regin', io.controller.auth.regin);
  
  io.of('/').route('updategame', io.controller.game.updatedata);
  
  io.of('/').route('getpowers', io.controller.power.getpowers);
  
  io.of('/').route('getskills', io.controller.skill.getskills);
  
  io.of('/').route('gettransactions', io.controller.transaction.gettransactions);
};

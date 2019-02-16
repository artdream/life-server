// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportPower from '../../../app/controller/power';
import ExportSkill from '../../../app/controller/skill';
import ExportTransaction from '../../../app/controller/transaction';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    power: ExportPower;
    skill: ExportSkill;
    transaction: ExportTransaction;
    user: ExportUser;
  }
}

import { Controller } from 'egg';
import * as crypto from 'crypto';
import UserService from '../service/auth';
import { ioFormat } from '../../extend/helper';
import PowerController from './power';
import SkillController from './skill';
import TransactionController from './transaction';

declare module 'egg' {
    interface CustomController {
        auth: AuthController;
    }
}
export default class AuthController extends Controller {
    public async signin() {
        const { ctx } = this;
        const userService = new UserService(ctx);
        const req = ctx.args[0] || {};
        if (req['name'] && req['pwd']) {
            const md5 = crypto.createHash('md5');
            const pwd = md5.update(req['pwd']).digest('hex');
            let user = await userService.findUserByPwd(req['name'], pwd);
            if (user.length === 0) {
                req['pwd'] = pwd;
                const res = await userService.insertUser(req);
                if (res) {
                    user = await userService.findUserByPwd(req['name'], pwd);
                }
            }
            ctx.socket.emit('authack', ioFormat(`authack`, user));
            new PowerController(ctx).getpowers();
            new SkillController(ctx).getskills();
            new TransactionController(ctx).gettransactions();
        }
    }
    public async regin(userService: UserService) {
        const { ctx } = this;
        const req = ctx.args[0] || {}
        if (req['name'] && req['pwd']) {
            const md5 = crypto.createHash('md5');
            req['pwd'] = md5.update(req['pwd']).digest('hex');
            const res = await userService.insertUser(req);
            ctx.socket.emit('reginack', ioFormat(`authack`, res));
        }
    }
}

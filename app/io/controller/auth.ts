import { Controller } from 'egg';
import * as crypto from 'crypto';
import UserService from '../service/auth';
import { ioFormat } from '../../extend/helper';

export default class AuthController extends Controller {

    public async signin(userService: UserService) {
        const { ctx } = this;
        const req = ctx.args[0] || {}
        if (req['name'] && req['pwd']) {
            const md5 = crypto.createHash('md5');
            const user = await userService.findUserByPwd(req['name'], md5.update(req['pwd']).digest('hex'));
            ctx.socket.emit('authack', ioFormat(`authack`, user));
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

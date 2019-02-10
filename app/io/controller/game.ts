import { Controller } from 'egg';
import UserService from '../service/auth';
import { ioFormat } from '../../extend/helper';

declare module 'egg' {
    interface CustomController {
        game: GameController;
    }
}
export default class GameController extends Controller {
    public async updateData() {
        const { ctx } = this;
        const userService = new UserService(ctx);
        const req = ctx.args[0] || {};
        if (req['name'] && req['id']) {
            const res = await userService.updateUser(req);
            ctx.socket.emit('updategameack', ioFormat(`updategameack`, res));
        }
    }
}
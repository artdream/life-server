import { Controller } from 'egg';
import PowerService from '../service/power';
import { ioFormat } from '../../extend/helper';

declare module 'egg' {
    interface CustomController {
        power: PowerController;
    }
}
export default class PowerController extends Controller{
    public async getpowers(){
        const {ctx} = this;
        const powerService = new PowerService(ctx);
        const powers = await powerService.findPowers();
        ctx.socket.emit('getpowersack', ioFormat(`getpowersack`, powers));
    }
}
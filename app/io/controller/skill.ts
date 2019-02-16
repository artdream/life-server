import { Controller } from 'egg';
import SkillService from '../service/skill';
import { ioFormat } from '../../extend/helper';

declare module 'egg' {
    interface CustomController {
        skill: SkillController;
    }
}
export default class SkillController extends Controller{
    public async getskills(){
        const {ctx} = this;
        const powerService = new SkillService(ctx);
        const powers = await powerService.findSkills();
        ctx.socket.emit('getskillsack', ioFormat(`getskillsack`, powers));
    }
}
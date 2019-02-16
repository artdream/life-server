import { Controller } from 'egg';
import { httpFormat } from '../extend/helper';
import SkillService from '../io/service/skill';
import { RespStatus } from '../../config/responseStatus';

export default class SkillController extends Controller {
    public async addskill() {
        const { ctx } = this;
        if (!ctx.request.body) {
            httpFormat(ctx, RespStatus.FUNC_NOT_SUPPORT);
        }
        if (!ctx.request.body['name']) {
            httpFormat(ctx, RespStatus.DATA_NOT_FOUND);
        }
        const skillService = new SkillService(ctx);
        const data = await skillService.insertSkill(ctx.request.body);
        httpFormat(ctx, RespStatus.SUCCESS, { data });
    }
    public async getskills() {
        const { ctx } = this;
        const skillService = new SkillService(ctx);
        const data = await skillService.findSkills();
        httpFormat(ctx, RespStatus.SUCCESS, { data });
    }
    public async getskill() {
        const { ctx } = this;
        if (!ctx.params.id) {
            httpFormat(ctx, RespStatus.FUNC_NOT_SUPPORT);
        }
        const skillService = new SkillService(ctx);
        const data = await skillService.findSkillById(ctx.params.id);
        httpFormat(ctx, RespStatus.SUCCESS, { data });
    }
    public async updateskill() {
        const { ctx } = this;
        if (!ctx.request.body) {
            httpFormat(ctx, RespStatus.FUNC_NOT_SUPPORT);
        }
        if (!ctx.request.body['id']||!ctx.request.body['name']) {
            httpFormat(ctx, RespStatus.DATA_NOT_FOUND);
        }
        const skillService = new SkillService(ctx);
        const data = await skillService.updateSkill(ctx.request.body);
        httpFormat(ctx, RespStatus.SUCCESS, { data });
    }
}
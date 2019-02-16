import { Controller } from 'egg';
import { httpFormat } from '../extend/helper';
import PowerService from '../io/service/power';
import { RespStatus } from '../../config/responseStatus';

export default class PowerController extends Controller {
    public async addpower() {
        const { ctx } = this;
        if (!ctx.request.body) {
            httpFormat(ctx, RespStatus.FUNC_NOT_SUPPORT);
        }
        if (!ctx.request.body['level']||!ctx.request.body['name']) {
            httpFormat(ctx, RespStatus.DATA_NOT_FOUND);
        }
        const powerService = new PowerService(ctx);
        const data = await powerService.insertPower(ctx.request.body);
        httpFormat(ctx, RespStatus.SUCCESS, { data });
    }
    public async getpowers() {
        const { ctx } = this;
        const powerService = new PowerService(ctx);
        const data = await powerService.findPowers();
        httpFormat(ctx, RespStatus.SUCCESS, { data });
    }
    public async getpower() {
        const { ctx } = this;
        if (!ctx.params.id) {
            httpFormat(ctx, RespStatus.FUNC_NOT_SUPPORT);
        }
        const powerService = new PowerService(ctx);
        const data = await powerService.findPowerById(ctx.params.id);
        httpFormat(ctx, RespStatus.SUCCESS, { data });
    }
    public async updatepower() {
        const { ctx } = this;
        if (!ctx.request.body) {
            httpFormat(ctx, RespStatus.FUNC_NOT_SUPPORT);
        }
        if (!ctx.request.body['id']||!ctx.request.body['name']) {
            httpFormat(ctx, RespStatus.DATA_NOT_FOUND);
        }
        const powerService = new PowerService(ctx);
        const data = await powerService.updatePower(ctx.request.body);
        httpFormat(ctx, RespStatus.SUCCESS, { data });
    }
}
import { Controller } from 'egg';
import { httpFormat } from '../extend/helper';
import UserService from '../io/service/auth';
import { RespStatus } from '../../config/responseStatus';

export default class UserController extends Controller {
    public async adduser() {
        const { ctx } = this;
        if (!ctx.request.body) {
            httpFormat(ctx, RespStatus.FUNC_NOT_SUPPORT);
        }
        if (!ctx.request.body['id']||!ctx.request.body['name']) {
            httpFormat(ctx, RespStatus.DATA_NOT_FOUND);
        }
        const userService = new UserService(ctx);
        const data = await userService.insertUser(ctx.request.body);
        httpFormat(ctx, RespStatus.SUCCESS, { data });
    }
    public async getusers() {
        const { ctx } = this;
        const userService = new UserService(ctx);
        const data = await userService.findUsers();
        httpFormat(ctx, RespStatus.SUCCESS, { data });
    }
    public async getuser() {
        const { ctx } = this;
        if (!ctx.params.id) {
            httpFormat(ctx, RespStatus.FUNC_NOT_SUPPORT);
        }
        const userService = new UserService(ctx);
        const data = await userService.findUserById(ctx.params.id);
        httpFormat(ctx, RespStatus.SUCCESS, { data });
    }
    public async updateuser() {
        const { ctx } = this;
        if (!ctx.request.body) {
            httpFormat(ctx, RespStatus.FUNC_NOT_SUPPORT);
        }
        if (!ctx.request.body['id']||!ctx.request.body['name']) {
            httpFormat(ctx, RespStatus.DATA_NOT_FOUND);
        }
        const userService = new UserService(ctx);
        const data = await userService.updateUser(ctx.request.body);
        httpFormat(ctx, RespStatus.SUCCESS, { data });
    }
}
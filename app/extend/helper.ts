import { IRespMessage, RespStatus } from '../../config/responseStatus';
import { Context } from 'egg';

const ioFormat = (action: string, data: any = {}, metadata: object = {}) => {
    const meta = Object.assign({}, {
        timestamp: Date.now(),
    }, metadata);

    return {
        meta,
        data: {
            action,
            data,
        },
    };
}

const httpFormat = (ctx: Context, respStatus: IRespMessage, data = {}, metadata: object = {}) => {
    const meta = Object.assign({}, {
        timestamp: Date.now()
    }, metadata);

    if (!respStatus) {
        ctx.logger.error(`response status param not found!`);
        respStatus = RespStatus.SERV_INSIDE_ERR;
    }
    ctx.body = { meta, code: respStatus.code, message: respStatus.message, data };
    ctx.status = respStatus.httpStatus;

}

export {
    ioFormat,
    httpFormat,
};
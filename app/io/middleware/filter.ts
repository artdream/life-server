import { Context } from 'egg';

export default function () {
    return async (ctx: Context, next: any) => {
        // const { socket, packet } = ctx;
        const { } = ctx;
        // console.log(`enter FilterMiddleware,${JSON.stringify(packet)}`);
        // socket.emit('res', 'packet recevied');
        await next();
    };
}
import { Context } from 'egg';

export default function() {
    return async (ctx: Context, next: any) => {
        const {socket} = ctx;
        console.log(`enter AuthMiddleware,connected`);
        socket.emit('res','connected');
        await next();
    };
}
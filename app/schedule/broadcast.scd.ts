import { Subscription } from 'egg';
import PowerController from '../io/controller/power';
import SkillController from '../io/controller/skill';
import TransactionController from '../io/controller/transaction';

export default class BroadcastGameData extends Subscription {
    static get schedule() {
        return {
            type: 'worker',
            interval: '1s',
            immediate: true, // 为 true 时，这个定时任务会在应用启动并 ready 后立刻执行一次这个定时任务
        }
    }
    async subscribe() {
        // const { ctx } = this;
        // const powerCtr = new PowerController(ctx);
        // const skillCtr = new SkillController(ctx);
        // const transactionCtr = new TransactionController(ctx);

        // powerCtr.getpowers();
        // skillCtr.getskills();
        // transactionCtr.gettransactions();
    }
}
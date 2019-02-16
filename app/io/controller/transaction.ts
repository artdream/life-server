import { Controller } from 'egg';
import TransactionService from '../service/transaction';
import { ioFormat } from '../../extend/helper';

declare module 'egg' {
    interface CustomController {
        transaction: TransactionController;
    }
}
export default class TransactionController extends Controller{
    public async gettransactions(){
        const {ctx} = this;
        const transactionService = new TransactionService(ctx);
        const transactions = await transactionService.findTransactions();
        ctx.socket.emit('gettransactionsack', ioFormat(`gettransactionsack`, transactions));
    }
}
import { Controller } from 'egg';
import { httpFormat } from '../extend/helper';
import TransactionService from '../io/service/transaction';
import { RespStatus } from '../../config/responseStatus';

export default class TransactionController extends Controller {
    public async addtransaction() {
        const { ctx } = this;
        if (!ctx.request.body) {
            httpFormat(ctx, RespStatus.FUNC_NOT_SUPPORT);
        }
        if (!ctx.request.body['money'] || !ctx.request.body['name']) {
            httpFormat(ctx, RespStatus.DATA_NOT_FOUND);
        }
        const transactionService = new TransactionService(ctx);
        const data = await transactionService.insertTransaction(ctx.request.body);
        httpFormat(ctx, RespStatus.SUCCESS, { data });
    }
    public async gettransactions() {
        const { ctx } = this;
        const transactionService = new TransactionService(ctx);
        const data = await transactionService.findTransactions();
        httpFormat(ctx, RespStatus.SUCCESS, { data });
    }
    public async gettransaction() {
        const { ctx } = this;
        if (!ctx.params.id) {
            httpFormat(ctx, RespStatus.FUNC_NOT_SUPPORT);
        }
        const transactionService = new TransactionService(ctx);
        const data = await transactionService.findTransactionById(ctx.params.id);
        httpFormat(ctx, RespStatus.SUCCESS, { data });
    }
    public async updatetransaction() {
        const { ctx } = this;
        if (!ctx.request.body) {
            httpFormat(ctx, RespStatus.FUNC_NOT_SUPPORT);
        }
        if (!ctx.request.body['id'] || !ctx.request.body['name']) {
            httpFormat(ctx, RespStatus.DATA_NOT_FOUND);
        }
        const transactionService = new TransactionService(ctx);
        const data = await transactionService.updateTransaction(ctx.request.body);
        httpFormat(ctx, RespStatus.SUCCESS, { data });
    }
}
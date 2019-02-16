import { Service } from 'egg';
import { Transaction } from '../config/transaction';

export default class TransactionService extends Service {
    public async findTransactions() {
        const { app } = this;
        const transactions = await app.mysql.select('tb_transaction');
        return transactions;
    }

    public async findTransactionById(id) {
        const { app } = this;
        const transaction = await app.mysql.select('tb_transaction', {
            where: { id },
            limit: 1,
            offset: 0,
        });
        return transaction;
    }

    public async insertTransaction(transaction: Transaction) {
        const { app } = this;
        const result = await app.mysql.insert('tb_transaction', transaction);
        return result.affectedRows === 1;
    }

    public async updateTransaction(transaction: Transaction) {
        const { app } = this;
        const row = {};
        Object.assign(row, transaction);
        delete row['id'];
        const result = await app.mysql.update('tb_transaction', row, {
            where: {
                id: transaction.id,
            }
        });
        return result.affectedRows === 1;
    }
}
import { Service } from 'egg';
import { User, UserData } from '../config/user';

export default class UserService extends Service {
    public async findUsers() {
        const { app } = this;
        const user = await app.mysql.select('tb_user', {
            columns: ['id', 'name', 'life', 'money', 'health', 'stamina', 'lt_stamina', 'health_factor', 'stamina_factor', 'transaction_array', 'skill_array', 'power_array', 'goods_array', 'skill_select'],
        });
        return user;
    }
    public async findUserById(id) {
        const { app } = this;
        const user = await app.mysql.select('tb_user', {
            where: { id },
            columns: ['id', 'name', 'life', 'money', 'health', 'stamina', 'lt_stamina', 'health_factor', 'stamina_factor', 'transaction_array', 'skill_array', 'power_array', 'goods_array', 'skill_select'],
            limit: 1,
            offset: 0,
        });
        return user;
    }
    public async findUserByPwd(name, pwd) {
        // const user = await this.app.mysql.get('tb_user', { name,pwd });
        const { app } = this;
        const user = await app.mysql.select('tb_user', {
            where: { name, pwd },
            columns: ['id', 'name', 'life', 'money', 'health', 'stamina', 'lt_stamina', 'health_factor', 'stamina_factor', 'transaction_array', 'skill_array', 'power_array', 'goods_array', 'skill_select'],
            limit: 1,
            offset: 0,
        });
        return user;
    }
    public async insertUser(user: User) {
        const { app } = this;
        const result = await app.mysql.insert('tb_user', user);
        return result.affectedRows === 1;
    }
    public async updateUser(user: UserData) {
        const { app } = this;
        const row = {};
        Object.assign(row, user);
        delete row['id'];
        delete row['name'];
        const result = await app.mysql.update('tb_user', row, {
            where: {
                id: user.id,
            }
        });
        return result.affectedRows === 1;
    }
}
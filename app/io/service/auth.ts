import { Service } from "egg";
import { User } from '../config/user';

export default class UserService extends Service {
    public async findUserById(id) {
        const user = await this.app.mysql.select('tb_user', {
            where: { id },
            columns: ['id', 'name', 'life', 'money', 'health', 'stamina', 'lt_stamina', 'health_factor', 'stamina_factor', 'transaction_array', 'skill_array', 'power_array', 'goods_array', 'skill_select'],
            limit: 1,
            offset: 0
        });
        return user;
    }
    public async findUserByPwd(name, pwd) {
        // const user = await this.app.mysql.get('tb_user', { name,pwd });
        const user = await this.app.mysql.select('tb_user', {
            where: { name, pwd },
            columns: ['id', 'name', 'life', 'money', 'health', 'stamina', 'lt_stamina', 'health_factor', 'stamina_factor', 'transaction_array', 'skill_array', 'power_array', 'goods_array', 'skill_select'],
            limit: 1,
            offset: 0
        });
        return user;
    }
    public async insertUser(user: User) {
        const result = await this.app.mysql.insert('tb_user', user);
        return result.affectedRows === 1;
    }
}
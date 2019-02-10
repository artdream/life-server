import { Service } from 'egg';
import { Power } from '../config/power';

export default class PowerService extends Service {
    public async findPowers() {
        const { app } = this;
        const powers = await app.mysql.select('tb_power');
        return powers;
    }

    public async findPowerById(id) {
        const { app } = this;
        const power = await app.mysql.select('tb_power', {
            where: { id },
            limit: 1,
            offset: 0,
        });
        return power;
    }

    public async insertPower(power: Power) {
        const { app } = this;
        const result = await app.mysql.insert('tb_power', power);
        return result.affectedRows === 1;
    }

    public async updatePower(power: Power) {
        const { app } = this;
        const row = {};
        Object.assign(row, power);
        delete row['id'];
        const result = await app.mysql.update('tb_power', row, {
            where: {
                id: power.id,
            }
        });
        return result.affectedRows === 1;
    }
}
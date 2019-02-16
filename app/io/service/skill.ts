import { Service } from 'egg';
import { Skill } from '../config/skill';

export default class SkillService extends Service {
    public async findSkills() {
        const { app } = this;
        const powers = await app.mysql.select('tb_skill');
        return powers;
    }

    public async findSkillById(id) {
        const { app } = this;
        const power = await app.mysql.select('tb_skill', {
            where: { id },
            limit: 1,
            offset: 0,
        });
        return power;
    }

    public async insertSkill(skill: Skill) {
        const { app } = this;
        const result = await app.mysql.insert('tb_skill', skill);
        return result.affectedRows === 1;
    }

    public async updateSkill(skill: Skill) {
        const { app } = this;
        const row = {};
        Object.assign(row, skill);
        delete row['id'];
        const result = await app.mysql.update('tb_skill', row, {
            where: {
                id: skill.id,
            }
        });
        return result.affectedRows === 1;
    }
}

/**
 * 技能数据
 *
 * @interface UserData
 */
interface Skill {
    id: number, // 技能ID
    name: string, // 技能名称
    money: string, // 技能学习消耗财富
    stamina: string, // 技能学习消耗体力
    work_unit: string, // 技能单位价值
    stamina_unit: string, // 技能消耗体力单位价值
    money_unit: string, // 技能消耗财富单位价值
    health_factor: string, // 技能健康值因子 [-0.5 - 0.5]
    stamina_factor: string, // 技能体力值因子 [-0.5 - 0.5]
    need_power: string, // 技能所需能力集合
}

export { Skill };
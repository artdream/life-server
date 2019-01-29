/**
 * 用户全数据
 *
 * @interface User
 */
interface User {
    id: number, // 人物ID
    name: string, // 人物名称
    pwd: string, // 人物密码
    life: string, // 人物总生命
    money: string, // 人物总财富
    health: string, // 人物健康值
    stamina: string, // 人物每日体力值
    lt_stamina: string, // 人物前日体力值
    health_factor: string, // 健康值因子 [-10 - 10] 因子会根据正负值意为 导向好坏影响概率 发生意外概率增大或减少；因子影响周期为随机 可叠加因子值
    stamina_factor: string, // 体力值因子 [-10 - 10]
    transaction_array: string, // 人物拥有商品 id集合
    skill_array: string, // 人物掌握技能 id集合
    power_array: string, // 人物掌握能力 id集合
    goods_array: string, // 人物的可交易物 id集合
    skill_select: string, // 人物选择的技能
}
/**
 * 用户前端使用数据
 *
 * @interface UserData
 */
interface UserData {
    id: number, // 人物ID
    name: string, // 人物名称
    life: string, // 人物总生命
    money: string, // 人物总财富
    health: string, // 人物健康值
    stamina: string, // 人物每日体力值
    lt_stamina: string, // 人物前日体力值
    health_factor: string, // 健康值因子 [-10 - 10] 因子会根据正负值意为 导向好坏影响概率 发生意外概率增大或减少；因子影响周期为随机 可叠加因子值
    stamina_factor: string, // 体力值因子 [-10 - 10]
    transaction_array: string, // 人物拥有商品 id集合
    skill_array: string, // 人物掌握技能 id集合
    power_array: string, // 人物掌握能力 id集合
    goods_array: string, // 人物的可交易物 id集合
    skill_select: string, // 人物选择的技能
}
export {
    User,
    UserData,
}
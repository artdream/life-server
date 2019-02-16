/**
 * 商品数据
 *
 * @interface UserData
 */
interface Transaction {
    id: number, // 商品ID
    name: string, // 商品名称
    money: string, // 商品消耗财富单位价值
    health_factor: string, // 商品健康值因子 [-0.5 - 0.5]
    stamina_factor: string, // 商品体力值因子 [-0.5 - 0.5]
    amount: number, // 商品库存数量
}
export {
    Transaction,
}
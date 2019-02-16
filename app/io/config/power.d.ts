/**
 * 能力使用数据
 *
 * @interface Power
 */
interface Power {
    id: number, // 能力ID
    name: string, // 能力名称
    money: string, // 能力学习消耗财富
    stamina: string, // 能力学习消耗体力
    level: number, // 能力级别 [ 0 - 99 ]
}

export {
    Power,
}
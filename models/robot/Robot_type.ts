export const RobotType ={
    DOBOT_E6_MAGICIAN: "DobotE6Magician",
    DOBOT_E6_SIM: "DobotE6Sim",
    TEST_ROBOT1: "TestRobotType1",
    TEST_ROBOT2: "TestRobotType2",
} as const

export type RobotType = typeof RobotType[keyof typeof RobotType]

export function isRobotType(value: unknown):value is RobotType{
    return Object.values(RobotType).includes(value as RobotType)
}


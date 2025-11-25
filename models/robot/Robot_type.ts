// All the possible Robot Types supported in the system. They are defined as an "enum-like" object
// so that we can use them easily without having to use "magic strings" everywhere.
export const RobotType ={
    DOBOT_E6_MAGICIAN: "DobotE6Magician",
    DOBOT_E6_SIM: "DobotE6Sim",
    TEST_ROBOT1: "TestRobotType1",
    TEST_ROBOT2: "TestRobotType2",
} as const

// We define a type that represents any of the possible Robot Types in the enum-like object as a series of string literals.
// The advantage of this, is that if we add new Robot Types, the type automatically updates to include them.
export type RobotType = typeof RobotType[keyof typeof RobotType]

/**
 * @description Helper function that checks if a given value is a valid RobotType.
 * @param value - The value to check.
 * @returns true if the value is a valid RobotType, false otherwise.
 */
export function isRobotType(value: unknown):value is RobotType{
    return Object.values(RobotType).includes(value as RobotType)
}


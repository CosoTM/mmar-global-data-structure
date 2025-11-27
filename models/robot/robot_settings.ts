export {RobotSettings, MotionsSettings, ToolSettings}

/**
 * Interface representing the common settings of a Robot.
 */
interface RobotSettings{
    motion: Partial<MotionsSettings>;
    tool: Partial<ToolSettings>;
}

/**
 * Settings for the movement of a Robot
 */
type MotionsSettings = {
    jointSpeed: number; 
    linearSpeed: number;
    jointAcceleration: number;
    linearAcceleration: number;
    continuousPathRate: number;
}

/**
 * Settings for the tool attached to a Robot
 */
type ToolSettings = {
        payloadMass: number;
        payloadCenterOfMass: { x: number; y: number; z: number};
}

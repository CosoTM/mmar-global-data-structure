import { SettingsData } from "./settings_data";
export {RobotPosition}

/**
 * @classdesc Basic Data Object that represents the position a Robot.
 */
class RobotPosition extends SettingsData{
    x:number
    y:number
    z:number
    rx:number
    ry:number
    rz:number
}
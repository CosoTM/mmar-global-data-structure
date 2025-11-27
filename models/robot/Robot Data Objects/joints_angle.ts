import { SettingsData } from "./settings_data";  
export {JointAngle}

/**
 * @classdesc Basic Data Object that represents the angles of the joints of a Robot.
 */
class JointAngle extends SettingsData{
    joints: number[]
}
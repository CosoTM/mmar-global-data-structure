import { MetaObject } from "./Metamodel_metaobjects.structure";
import { RobotType } from "../robot/Robot_type";

export { Robot };

class Robot extends MetaObject {
    public ip_address: string;
    public command_port: number;
    public feedback_port: number;
    public robot_type: RobotType;

    constructor(
        uuid: string,
        name: string,
        ip_address: string,
        command_port: number,
        feedback_port: number,
        robot_type: RobotType
    ) {
        super(uuid, name);
        if(ip_address) this.set_ipAddress(ip_address);
        if(command_port) this.set_CommandPort(command_port);
        if(feedback_port) this.set_FeedbackPort(feedback_port);
        if(robot_type) this.set_robotType(robot_type);
    }

    set_ipAddress(ip_address: string) {
        this.ip_address = ip_address;
    }

    get_ipAddress() {
        return this.ip_address;
    }

    set_CommandPort(tcp_port: number) {
        this.command_port = tcp_port;
    }

    get_CommandPort() {
        return this.command_port;
    }

    set_FeedbackPort(tcp_port: number) {
        this.feedback_port = tcp_port;
    }

    get_FeedbackPort() {
        return this.feedback_port;
    }

    set_robotType(robot_type: RobotType) {
        this.robot_type = robot_type;
    }
    
    get_robotType() {
        return this.robot_type;
    }
}
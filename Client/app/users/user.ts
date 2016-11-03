import { Device }         from '../devices/device';

export const MAIN_USER: User  = {
    id: 1,
    name: "Jissay",
    login: "Jissay",
    password: "Jissay",
    devices: new Array<Device>()
};

export interface User {
    id: number;
    name: String;
    login: String;
    password: String,
    devices: Device[];
}
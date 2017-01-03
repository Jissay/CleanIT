import { Device }         from '../devices/device';

export const MAIN_USER: User  = {
    id: 1,
    name: "Jissay",
    email: "Jissay",
    password: "Jissay",
    devices: new Array<Device>()
};

export interface User {
    id: number;
    name: String;
    email: String;
    password: String,
    devices: Device[];
}
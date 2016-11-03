import { Device }         from '../devices/device';

export const MAIN_USER: User  = {
    id: 1,
    name: "Jissay",
    devices: new Array<Device>()
};

export interface User {
    id: number;
    name: string;
    devices: Device[];
}
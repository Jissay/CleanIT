import { Device }         from './device';

export const MAIN_USER: User  = {
    id: 1,
    name: "",
    devices: new Array<Device>()
};

export interface User {
    id: number;
    name: string;
    devices: Device[];
}
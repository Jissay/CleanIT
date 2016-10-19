import { Device }         from './device';

/** SAMPLE DATA */
export const NAME: string = 'Jissay';

export const MAIN_USER: User  = {
    id: 1,
    name: NAME,
    devices: new Array<Device>()
};

export interface User {
    id: number;
    name: string;
    devices: Device[];
}
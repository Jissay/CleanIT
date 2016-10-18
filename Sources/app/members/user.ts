import { Device }         from './device';

export interface User {
    id: number;
    name: string;
    devices: Device[];
}
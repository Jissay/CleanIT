import { Game }         from './game';

export interface User {
    id: number;
    name: string;
    games: Game[];
}
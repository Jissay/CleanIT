import { Game }         from '../games/game';

export const MAIN_USER: User  = {
    id: 1,
    name: "Jissay",
    email: "Jissay",
    password: "Jissay",
    games: new Array<Game>()
};

export interface User {
    id: number;
    name: String;
    email: String;
    password: String,
    games: Game[];
}
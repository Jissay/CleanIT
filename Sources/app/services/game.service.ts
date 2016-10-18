import { Injectable }   from '@angular/core';

import { Game }     from '../members/game';
import { GAMES }    from './mockdata';

@Injectable()
export class GameService {
    getGames(): Promise<Game[]> {
        return Promise.resolve(GAMES);
    }
}
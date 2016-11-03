import { InMemoryDbService } from 'angular-in-memory-web-api';

export const DEVICES_URL: string = 'app/devices';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
	  let devices = [
			{ id: 1, name: 'Sens\'it'},
			{ id: 2, name: 'Axibox'},
			{ id: 3, name: 'Novapass'},
			{ id: 4, name: 'Extelsmart'},
			{ id: 5, name: 'Delta Wifi'},
			{ id: 6, name: 'Sacha'},
			{ id: 7, name: 'Smart Luggage Tracker'}
	  ];
	  return {devices};
  }
}
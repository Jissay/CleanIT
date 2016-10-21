import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { DeviceSearchService } from '../../services/device-search.service';
import { Device } from '../../members/device';

@Component({
	selector: 'device-search',
	templateUrl: 'app/components/device-search/device-search.component.html',
	styleUrls: [ 'app/components/device-search/device-search.component.css' ],
	providers: [DeviceSearchService]
})

export class DeviceSearchComponent implements OnInit {
  
	devices: Observable<Device[]>;
	private searchTerms = new Subject<string>();
  
  	constructor(
		private deviceSearchService: DeviceSearchService,
		private router: Router
	) {}

	// Push a search term into the observable stream.
	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.devices = this.searchTerms
		.debounceTime(300)        // wait for 300ms pause in events
		.distinctUntilChanged()   // ignore if next search term is same as previous
		.switchMap(term => term   // switch to new observable each time
			// return the http search observable
			? this.deviceSearchService.search(term)
			// or the observable of empty heroes if no search term
			: Observable.of<Device[]>([]))
		.catch(error => {
			// TODO: real error handling
			console.log(error);
			return Observable.of<Device[]>([]);
		});
	}

	gotoDetail(device: Device): void {
		let link = ['/detail', device.id];
		this.router.navigate(link);
	}
}
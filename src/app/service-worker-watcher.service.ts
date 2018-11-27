import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class ServiceWorkerWatcherService {

  constructor(updates: SwUpdate) {
    console.log('here');

    updates.available.subscribe(
      () => console.log('There is an update available')
    );
   }
}

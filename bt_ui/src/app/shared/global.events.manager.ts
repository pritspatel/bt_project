import { Injectable,EventEmitter } from '@angular/core';
import {  } from 'angular2/core';

@Injectable()
export class GlobalEventsManager {
    public showNavBar: EventEmitter<any> = new EventEmitter();

    constructor() {

    }
}
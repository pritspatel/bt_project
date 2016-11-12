import { GlobalEventsManager } from './../shared/global.events.manager';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  showNavBar : boolean = false;

  constructor(private globalEventsManager : GlobalEventsManager) {
    
  }

  ngOnInit() {
    this.globalEventsManager.showNavBar.subscribe((mode)=>{
            this.showNavBar = mode;
            console.log('Event received....')
        });
  }

  ngAfterViewInit(){
    console.log('After view OnInit.....');
  }

}

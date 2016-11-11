import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import {ProjectService} from "./services/ProjectService";
import {DataTableModule,SharedModule,ButtonModule,DialogModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    DialogModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { PriorityService } from './services/Priority.service';
import { SeverityService } from './services/Severity.service';
import { StatusService } from './services/Status.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import {ProjectService} from "./services/ProjectService";
import {DataTableModule,SharedModule,ButtonModule,DialogModule,InputTextareaModule} from 'primeng/primeng';
import { StatusListComponent } from './status-list/status-list.component';
import { SeverityListComponent } from './severity-list/severity-list.component';
import { PriorityListComponent } from './priority-list/priority-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsListComponent,
    StatusListComponent,
    SeverityListComponent,
    PriorityListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    DialogModule,
    InputTextareaModule,
    routing
  ],
  providers: [ProjectService,StatusService,SeverityService,PriorityService,AuthenticationService,AuthGuard,fakeBackendProvider,MockBackend,BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }

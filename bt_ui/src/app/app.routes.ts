import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { SeverityListComponent } from './severity-list/severity-list.component';
import { PriorityListComponent } from './priority-list/priority-list.component';
import { StatusListComponent } from './status-list/status-list.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route Configuration
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'project-list',
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'project-list',
        component: ProjectsListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'status-list',
        component: StatusListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'priority-list',
        component: PriorityListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'severity-list',
        component: SeverityListComponent,
        canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
import { SeverityListComponent } from './severity-list/severity-list.component';
import { PriorityListComponent } from './priority-list/priority-list.component';
import { StatusListComponent } from './status-list/status-list.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'project-list',
    pathMatch: 'full'
  },
  {
      path:'project-list',
      component:ProjectsListComponent
  },
  {
      path: 'status-list',
      component : StatusListComponent
  },
  {
      path : 'priority-list',
      component : PriorityListComponent
  },
  {
      path : 'severity-list',
      component : SeverityListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
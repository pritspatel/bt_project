import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../services/ProjectService";
import {Project} from "../models/Project";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects : Project[];

  constructor(private _projectService : ProjectService) { }

  ngOnInit() {
    this._projectService.getProjects()
      .subscribe(
        data => this.projects = data
      );
  }

}

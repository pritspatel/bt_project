import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../services/ProjectService";
import {Project} from "../models/Project";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  newProject = false;
  project : Project = new Project();
  displayDialog : boolean = false;
  selectedProject : Project;
  projects : Project[];

  constructor(private _projectService : ProjectService) { }

  ngOnInit() {
    this._projectService.getProjects()
      .subscribe(
        data => this.projects = data
      );
  }

  showDialogToAdd() {
    this.newProject = true;
    this.project = new Project();
    this.displayDialog = true;
  }

  save() {
    if(this.newProject)
      this.projects.push(this.project);
    else
      this.projects[this.findSelectedCarIndex()] = this.project;

    this.project = null;
    this.displayDialog = false;
  }

  findSelectedCarIndex(): number {
    return this.projects.indexOf(this.selectedProject);
  }

  delete(){

  }
}

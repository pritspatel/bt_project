import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../services/ProjectService";
import { Project } from "../models/Project";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  newProject = false;
  project: Project = new Project();
  displayDialog: boolean = false;
  selectedProject: Project;
  projects: Project[];

  constructor(private _projectService: ProjectService) { }

  /**
   * Lifecycle hook for on init
   */
  ngOnInit() {
    this._projectService.getProjects()
      .subscribe(
      data => this.projects = data
      );
  }


  /**
   * Sets certain properties to show dialog.
   */
  showDialogToAdd() {
    this.newProject = true;
    this.project = new Project();
    this.displayDialog = true;
  }



  /**
   * Called when 'Save' button is clicked
   */
  save(event) {
    if (this.newProject) {
      console.log(this.project);
      this._projectService.createProject(this.project).subscribe(
        data => this.projects.push(data)
      );
    } else {

      console.log('Edit ---' + this.project);
      this._projectService.updateProject(this.project).subscribe(
        data => this.projects[this.findSelectedProjectIndex()] = data
      );
    }

    this.project = null;
    this.displayDialog = false;
  }

  /**
   * Method to find selected project from project array
   */
  findSelectedProjectIndex(): number {
    console.log('Selected index : ' + this.projects.indexOf(this.selectedProject));
    return this.projects.indexOf(this.selectedProject);
  }

  /**
   * Method to delete the data
   */
  delete() {
    this.project = this.projects[this.findSelectedProjectIndex()];
    this._projectService.deleteProject(this.project).subscribe(
      data => this.project = data
    );
    this.projects.splice(this.findSelectedProjectIndex(), 1);
    this.project = null;
    this.displayDialog = false;
  }

  /**
   * returns selected data.
   */
  onRowSelect(event) {
    this.newProject = false;
    this.project = this.cloneProject(event.data);
    this.displayDialog = true;
  }

  cloneProject(p: Project): Project {
    let project = new Project();
    for (let prop in p) {
      project[prop] = p[prop];
    }
    return project;
  }

}

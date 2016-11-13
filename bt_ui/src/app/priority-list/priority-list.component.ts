import { PriorityService } from './../services/Priority.service';
import { Priority } from './../models/Priority.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-priority-list',
  templateUrl: './priority-list.component.html',
  styleUrls: ['./priority-list.component.css']
})
export class PriorityListComponent implements OnInit {

   newProject = false;
  priority: Priority = new Priority();
  displayDialog: boolean = false;
  selectedProject: Priority;
  priorityList: Priority[];

  constructor(private _priorityService:PriorityService) { }

  /**
   * Lifecycle hook for on init
   */
  ngOnInit() {
    console.log('Firing on init');
    this._priorityService.getPriorities()
      .subscribe(
      data => this.priorityList = data
      );
  }


  /**
   * Sets certain properties to show dialog.
   */
  showDialogToAdd() {
    this.newProject = true;
    this.priority = new Priority();
    this.displayDialog = true;
  }



  /**
   * Called when 'Save' button is clicked
   */
  save(event) {
    if (this.newProject) {
      console.log(this.priority);
      this._priorityService.createPriority(this.priority).subscribe(
        data => this.priorityList.push(data)
      );
    } else {

      console.log('Edit ---' + this.priority);
      this._priorityService.updatePriority(this.priority).subscribe(
        data => this.priorityList[this.findSelectedProjectIndex()] = data
      );
    }

    this.priority = null;
    this.displayDialog = false;
  }

  /**
   * Method to find selected priority from priority array
   */
  findSelectedProjectIndex(): number {
    console.log('Selected index : ' + this.priorityList.indexOf(this.selectedProject));
    return this.priorityList.indexOf(this.selectedProject);
  }

  /**
   * Method to delete the data
   */
  delete() {
    this.priority = this.priorityList[this.findSelectedProjectIndex()];
    this._priorityService.deletePriority(this.priority).subscribe(
      data => this.priority = data
    );
    this.priorityList.splice(this.findSelectedProjectIndex(), 1);
    this.priority = null;
    this.displayDialog = false;
  }

  /**
   * returns selected data.
   */
  onRowSelect(event) {
    this.newProject = false;
    this.priority = this.cloneProject(event.data);
    this.displayDialog = true;
  }

  cloneProject(p: Priority): Priority {
    let priority = new Priority();
    for (let prop in p) {
      priority[prop] = p[prop];
    }
    return priority;
  }

}

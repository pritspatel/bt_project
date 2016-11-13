import { SeverityService } from './../services/Severity.service';
import { Severity } from './../models/Severity.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-severity-list',
  templateUrl: './severity-list.component.html',
  styleUrls: ['./severity-list.component.css']
})
export class SeverityListComponent implements OnInit {

   newProject = false;
  severity: Severity = new Severity();
  displayDialog: boolean = false;
  selectedProject: Severity;
  severityList: Severity[];

  constructor(private _severityService: SeverityService) { }

  /**
   * Lifecycle hook for on init
   */
  ngOnInit() {
    console.log('Firing on init');
    this._severityService.getSeverities()
      .subscribe(
      data => this.severityList = data
      );
  }


  /**
   * Sets certain properties to show dialog.
   */
  showDialogToAdd() {
    this.newProject = true;
    this.severity = new Severity();
    this.displayDialog = true;
  }



  /**
   * Called when 'Save' button is clicked
   */
  save(event) {
    if (this.newProject) {
      console.log(this.severity);
      this._severityService.createSeverity(this.severity).subscribe(
        data => this.severityList.push(data)
      );
    } else {

      console.log('Edit ---' + this.severity);
      this._severityService.updateSeverity(this.severity).subscribe(
        data => this.severityList[this.findSelectedProjectIndex()] = data
      );
    }

    this.severity = null;
    this.displayDialog = false;
  }

  /**
   * Method to find selected severity from severity array
   */
  findSelectedProjectIndex(): number {
    console.log('Selected index : ' + this.severityList.indexOf(this.selectedProject));
    return this.severityList.indexOf(this.selectedProject);
  }

  /**
   * Method to delete the data
   */
  delete() {
    this.severity = this.severityList[this.findSelectedProjectIndex()];
    this._severityService.deleteSeverity(this.severity).subscribe(
      data => this.severity = data
    );
    this.severityList.splice(this.findSelectedProjectIndex(), 1);
    this.severity = null;
    this.displayDialog = false;
  }

  /**
   * returns selected data.
   */
  onRowSelect(event) {
    this.newProject = false;
    this.severity = this.cloneProject(event.data);
    this.displayDialog = true;
  }

  cloneProject(p: Severity): Severity {
    let severity = new Severity();
    for (let prop in p) {
      severity[prop] = p[prop];
    }
    return severity;
  }


}

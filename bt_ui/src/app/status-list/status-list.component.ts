import { StatusService } from './../services/Status.service';
import { Status } from './../models/Status.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {

  newstatus = false;
  status: Status = new Status();
  displayDialog: boolean = false;
  selectedStatus: Status;
  statusList: Status[];

  constructor(private _statusService : StatusService) { }

  ngOnInit() {
    this._statusService.getStatuses()
      .subscribe(
      data => this.statusList = data
      );
  }

  /**
   * Sets certain properties to show dialog.
   */
  showDialogToAdd() {
    this.newstatus = true;
    this.status = new Status();
    this.displayDialog = true;
  }



  /**
   * Called when 'Save' button is clicked
   */
  save(event) {
    if (this.newstatus) {
      console.log('Creating new ... ' + this.status);
      this._statusService.createStatus(this.status).subscribe(
        data => this.statusList.push(data)
      );
    } else {

      console.log('Edit ---' + this.status);
      this._statusService.updateStatus(this.status).subscribe(
        data => this.statusList[this.findSelectedStatusIndex()] = data
      );
    }

    this.status = null;
    this.displayDialog = false;
  }

  /**
   * Method to find selected status from status array
   */
  findSelectedStatusIndex(): number {
    console.log('Selected index : ' + this.statusList.indexOf(this.selectedStatus));
    return this.statusList.indexOf(this.selectedStatus);
  }

  /**
   * Method to delete the data
   */
  delete() {
    this.status = this.statusList[this.findSelectedStatusIndex()];
    this._statusService.deleteStatus(this.status).subscribe(
      data => this.status = data
    );
    this.statusList.splice(this.findSelectedStatusIndex(), 1);
    this.status = null;
    this.displayDialog = false;
  }

  /**
   * returns selected data.
   */
  onRowSelect(event) {
    this.newstatus = false;
    this.status = this.clonestatus(event.data);
    this.displayDialog = true;
  }

  clonestatus(p: Status): Status {
    let status = new Status();
    for (let prop in p) {
      status[prop] = p[prop];
    }
    return status;
  }

}

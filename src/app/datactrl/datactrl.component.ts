import { Component, OnInit, Input, Inject } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  acc_no: string;  
}

@Component({
  selector: 'app-datactrl',
  templateUrl: './datactrl.component.html',
  styleUrls: ['./datactrl.component.css']
})
export class DatactrlComponent implements OnInit {

  @Input() ctrltype : string;
  @Input() ctrlname : string;
  @Input() ctrldata : string;
  @Input() ctrlremarks: string;
  @Input() ctrlbtntext: string;

  constructor(public dialog: MatDialog) {
    library.add(faPencilAlt);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditEntryDialog, {
      width: '500px',
      height: '250px',
      data: this.ctrldata
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed');
      this.ctrldata = result;
    });
    dialogRef.close()
  }

  ngOnInit() {
  }

}


@Component({
  selector: 'dialog-userdialog',
  templateUrl: '../userdialog.html',
})

export class EditEntryDialog {

  constructor(
    public dialogRef: MatDialogRef<EditEntryDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
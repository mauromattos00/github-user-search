import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IUser } from '../../../core/store/models/user.model';

interface IDialogData {
  user: IUser;
}

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
})
export class ModalContentComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IDialogData,
    public dialog: MatDialog,
  ) {}

  closeDialog(): void {
    this.dialog.closeAll();
  }
}

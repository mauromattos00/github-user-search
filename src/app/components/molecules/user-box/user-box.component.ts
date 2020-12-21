import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { IUser } from '../../../core/store/models/user.model';

import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss'],
})
export class UserBoxComponent {
  isExpanded = false;
  @Input() user: IUser;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(ModalContentComponent, { data: { user: this.user } });
  }
}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
})
export class ModalContentComponent {
  constructor(public dialog: MatDialog) {}

  closeDialog(): void {
    this.dialog.closeAll();
  }
}

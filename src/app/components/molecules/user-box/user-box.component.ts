import { Component, Input } from '@angular/core';
import { IUser } from '../../../core/store/models/user.model';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss'],
})
export class UserBoxComponent {
  isExpanded = false;
  @Input() user: IUser;

  constructor() {}
}

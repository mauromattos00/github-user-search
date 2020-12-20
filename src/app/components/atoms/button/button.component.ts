import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: string;
  @Output() buttonClick = new EventEmitter();

  constructor() {}

  onClick(): void {
    this.buttonClick.emit();
  }
}

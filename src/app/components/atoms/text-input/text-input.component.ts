import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input()
  placeholder: string;

  @Output()
  inputChangeEvent = new EventEmitter<string>();

  constructor() {}

  handleInputChange(text: string): void {
    this.inputChangeEvent.emit(text);
  }
}

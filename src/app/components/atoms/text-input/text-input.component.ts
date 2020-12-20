import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input() placeholder: string;

  @Input() text: string;
  @Output() textChange: EventEmitter<string> = new EventEmitter<string>();

  @Output() submitSearch = new EventEmitter();

  constructor() {}

  searchText(): void {
    this.submitSearch.emit();
  }

  handleTextChange(): void {
    this.textChange.emit(this.text);
  }
}

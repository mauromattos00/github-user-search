import { Component } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  constructor() {}

  queryText: string;

  searchUser(): void {}

  onTextChange(text: string): void {
    this.queryText = text;
  }
}

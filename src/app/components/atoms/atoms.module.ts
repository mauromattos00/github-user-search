import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from './button/button.component';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [ButtonComponent, TextInputComponent],
  declarations: [ButtonComponent, TextInputComponent],
  providers: [],
})
export class AtomsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from './button/button.component';
import { TextInputComponent } from './text-input/text-input.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [ButtonComponent, TextInputComponent, SpinnerComponent],
  declarations: [ButtonComponent, TextInputComponent, SpinnerComponent],
  providers: [],
})
export class AtomsModule {}

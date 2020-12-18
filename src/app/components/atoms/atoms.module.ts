import { NgModule } from '@angular/core';

import { ButtonComponent } from './button/button.component';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
  imports: [],
  exports: [ButtonComponent, TextInputComponent],
  declarations: [ButtonComponent, TextInputComponent],
  providers: [],
})
export class AtomsModule {}

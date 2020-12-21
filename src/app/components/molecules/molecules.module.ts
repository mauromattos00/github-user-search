import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { SearchBoxComponent } from './search-box/search-box.component';
import { UserBoxComponent } from './user-box/user-box.component';
import { ModalContentComponent } from './modal-content/modal-content.component';

import { AtomsModule } from '../atoms/atoms.module';
@NgModule({
  imports: [CommonModule, AtomsModule, MatDialogModule],
  exports: [SearchBoxComponent, UserBoxComponent],
  declarations: [SearchBoxComponent, UserBoxComponent, ModalContentComponent],
  providers: [],
})
export class MoleculesModule {}

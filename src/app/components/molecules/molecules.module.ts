import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBoxComponent } from './search-box/search-box.component';
import { UserBoxComponent } from './user-box/user-box.component';

import { AtomsModule } from '../atoms/atoms.module';
@NgModule({
  imports: [CommonModule, AtomsModule],
  exports: [SearchBoxComponent, UserBoxComponent],
  declarations: [SearchBoxComponent, UserBoxComponent],
  providers: [],
})
export class MoleculesModule {}

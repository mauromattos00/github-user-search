import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoleculesModule } from '../molecules/molecules.module';

import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [CommonModule, MoleculesModule],
  exports: [UserListComponent],
  declarations: [UserListComponent],
  providers: [],
})
export class OrganismsModule {}

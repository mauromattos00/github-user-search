import { NgModule } from '@angular/core';

import { SearchBoxComponent } from './search-box/search-box.component';
import { UserBoxComponent } from './user-box/user-box.component';

@NgModule({
  imports: [],
  exports: [SearchBoxComponent, UserBoxComponent],
  declarations: [SearchBoxComponent, UserBoxComponent],
  providers: [],
})
export class MoleculesModule {}

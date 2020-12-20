import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AtomsModule } from './components/atoms/atoms.module';
import { MoleculesModule } from './components/molecules/molecules.module';

import { userListReducer } from './core/store/reducers/userList.reducer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AtomsModule,
    MoleculesModule,
    StoreModule.forRoot({ userList: userListReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

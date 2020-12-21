import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AtomsModule } from './components/atoms/atoms.module';
import { MoleculesModule } from './components/molecules/molecules.module';
import { OrganismsModule } from './components/organisms/organisms.module';

import { userListReducer } from './core/store/reducers/userList.reducer';

import { UserListEffects } from './core/store/effects/userList.effects';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    StoreModule.forRoot({ userList: userListReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
    }),
    EffectsModule.forRoot([UserListEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

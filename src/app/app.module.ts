import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { AtomsModule } from './components/atoms/atoms.module';
import { MoleculesModule } from './components/molecules/molecules.module';

@NgModule({
  declarations: [AppComponent],
    StoreDevtoolsModule.instrument({
      maxAge: 20,
    }),
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AtomsModule } from './components/atoms/atoms.module';
import { MoleculesModule } from './components/molecules/molecules.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AtomsModule, MoleculesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

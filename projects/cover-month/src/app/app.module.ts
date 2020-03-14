import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Custom components

import { MainViewComponent } from './components/views/main-view/main-view.component';

// Material components

import { MatCardModule } from '@angular/material/card';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: []
})
export class AppModule { }

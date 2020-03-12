import { NgModule } from '@angular/core';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedLibModule } from 'shared-lib';
// import 'hammerjs';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

// Custom components

import { MainFormDialogComponent } from './components/dialogs/main-form-dialog/main-form-dialog.component';
import { MainFormComponent } from './components/forms/main-form/main-form.component';
import { MainTableComponent } from './components/tables/main-table/main-table.component';

// Material components

import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    MainFormDialogComponent,
    MainTableComponent
  ],
  entryComponents: [
    MainFormDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    // FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    SharedLibModule.forRoot(environment)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

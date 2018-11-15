import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule,MatRadioModule,MatSelectModule,MatDialogModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InscripModule} from './auth/inscripmodule';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {FormatMod} from './formation/formationMod';
import {AuthserviceService} from './auth/authservice.service';
import { PopupService } from './auth/popup.service';
@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,MatSelectModule,MatDialogModule,
    MatButtonModule, 
    MatCheckboxModule,
    InscripModule,
    FormatMod,
    AppRoutingModule
  ],
  providers: [AuthserviceService,
    PopupService ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (){
    
  }
 }


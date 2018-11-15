import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule, FormControl}    from '@angular/forms';
import {InscripComponent} from './inscrip/inscrip.component';
import {ParamComponent}  from './param/param.component';
import { PopupComponent } from './popup/popup.component';
import {InscriptionRoutingModule}  from './inscriproutingmodule';
import {LoginComponent} from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatRadioModule, MatButtonModule,MatDialogModule} from '@angular/material';
import {MatOptionModule} from '@angular/material';
import { PopupService } from './popup.service';
//import {MatToolbarModule} from '@angular/material/toolbar';
//import {AuthserviceService} from './authservice.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    //MatToolbarModule,
    ReactiveFormsModule,
    MatRadioModule, MatButtonModule,MatDialogModule,
    MatFormFieldModule ,
    InscriptionRoutingModule
  ],
  declarations: [
      InscripComponent,
      ParamComponent,
      LoginComponent,
      PopupComponent

  ],
  entryComponents: [PopupComponent],
  providers: [PopupService ]
})
export class InscripModule {}
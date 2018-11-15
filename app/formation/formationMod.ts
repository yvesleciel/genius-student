import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule}    from '@angular/forms';
import {ChapmatComponent} from './chapmat/chapmat.component';
import {MatiereComponent} from './matiere/matiere.component';
import {FormatRoutMod} from './formatRoutMod';
import {MatToolbarModule} from '@angular/material/toolbar';
//import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {BiblioComponent} from './biblio/biblio.component';
import { ListeCourComponent} from './liste-cour/liste-cour.component';
import{ChatComponent} from './chat/chat.component';
import {ProfComponent} from './prof/prof.component';
import {GroupeComponent} from './groupe/groupe.component';
import {ScoolComponent} from './scool/scool.component';
import {FormService} from './form.service';
import {MatExpansionModule} from '@angular/material/expansion';
//import {MatSelectModule} from '@angular/material';
//import {MatOptionModule} from '@angular/material';

//import {MatMenuItem,MatMenuTrigger} from '@angular/material';
@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      BrowserModule ,
     MatToolbarModule,
     MatMenuModule,
      MatTabsModule,
      MatIconModule,
      MatExpansionModule,
      //MatGridListModule,
      MatButtonModule,
      ReactiveFormsModule,
      FormatRoutMod

    ],
    declarations: [
       ChapmatComponent,
       MatiereComponent ,
       BiblioComponent,
       ListeCourComponent,
       ChatComponent,
       ProfComponent,
      GroupeComponent,
       ScoolComponent
    ],
    providers: [FormService],
    bootstrap: []
  })

  export class FormatMod {}
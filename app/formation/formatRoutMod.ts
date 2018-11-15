import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChapmatComponent} from './chapmat/chapmat.component';
import {MatiereComponent} from './matiere/matiere.component';
import {BiblioComponent} from './biblio/biblio.component';
import { ListeCourComponent} from './liste-cour/liste-cour.component';
import{ChatComponent} from './chat/chat.component';
import {ProfComponent} from './prof/prof.component';
import {GroupeComponent} from './groupe/groupe.component';
import {ScoolComponent} from './scool/scool.component';
const formatroute: Routes = [
    
    { path: 'chap/cour/:id', component: ChapmatComponent },

    { path: 'matiere', 
     component:MatiereComponent,
    children: [
        {
           path: 'acceuil',
           component: ListeCourComponent
        },
        {
            path : 'bibliotheque',
            component: BiblioComponent
        },
        {
            path: 'chatbot',
            component: ChatComponent
        },
        {
            path : 'prof',
            component: ProfComponent
        },
        {
            path: 'groupeetude',
            component: GroupeComponent
        },
        {
            path : 'courenligne',
            component: ScoolComponent
        },
        {
            path: '',
           // component: ListeCourComponent
           component: ScoolComponent
        },
        

    ]}
    
   
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(formatroute)
    ],
    exports: [
      RouterModule
    ]
  })

  export class FormatRoutMod { }





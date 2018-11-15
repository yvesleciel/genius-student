import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InscripComponent} from './inscrip/inscrip.component';
import {ParamComponent}  from './param/param.component';
import {LoginComponent} from './login/login.component';

const insroute: Routes = [
  { path: 'inscription',  component:InscripComponent },
  { path: 'param', component: ParamComponent },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(insroute)
  ],
  exports: [
    RouterModule
  ]
})
export class InscriptionRoutingModule { }
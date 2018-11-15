import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
const approutes: Routes = [

  {path: '', redirectTo: '/login',pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(approutes,
  {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit,OnDestroy } from '@angular/core';
import * as firebase from 'firebase';
import { Subscription } from 'rxjs/Subscription';
import {AuthserviceService} from '../../auth/authservice.service';
import {Users} from '../../auth/users';
import {FormService} from '../form.service';
import {Mat} from '../model';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'appg-liste-cour',
  templateUrl: './liste-cour.component.html',
  styleUrls: ['./liste-cour.component.scss']
})
export class ListeCourComponent implements OnInit, OnDestroy {
users : Users;
   mat : Mat[] ;
matSubscription : Subscription;
   tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 3, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 3, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 3, color: 'lightpink'},
    {text: 'Four', cols: 4, rows: 1, color: '#DDBDF1'},
  ];
   
   classe : string;
id:number;
panelOpenState = false;

  constructor(private authservice : AuthserviceService,
  private formservice: FormService) {}
  

  ngOnInit() {
    this.users= new Users ('','','','','','','');
   const  uid = firebase.auth().currentUser.uid;
this.authservice.readUserData( uid).then(
   
   (users:Users) =>{ 
     this.users=users;
    
  }
  

);
 this.authservice.readClasseData(uid).then(
   ( classe:string) => {
  this.classe = classe;
  if (classe == "sil"){
    this.id = 1;
  } 
  if (classe == "cp" ) {
    this.id = 0;
  }
  this.formservice.getMatList(this.id);
this.matSubscription = this.formservice.matSubject.subscribe(
  (mat:Mat[]) => {
    this.mat = mat;
  }
);
this.formservice.emitBooks();

   }
 )
 //if (this.classe == "sil") {
  //this.id = 1;
 //} else {
   //this.id = 0
 //}
 
 
//this.formservice.getMatList(this.id);
//this.matSubscription = this.formservice.matSubject.subscribe(
  //(mat:Mat[]) => {
    //this.mat = mat;
  //});
  
  
//this.formservice.emitBooks();

  }
  

  ngOnDestroy() {
    this.matSubscription.unsubscribe();
  }
}

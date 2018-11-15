import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';
import {Mat} from './model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

mat: Mat[] = [];
matSubject = new Subject<Mat[]>();
id: number

sil :string;
  constructor() {
    //this.getMatList(this.id);
   }

  emitBooks() {
    this.matSubject.next(this.mat);
  }

getMatList(id: number){
  
  firebase.database().ref( '/Liste/'+ id  )
  .on('value', (data:firebase.database.DataSnapshot) => {
    this.mat = data.val()? data.val():[];
     this.emitBooks(); 
}
  
  );
    
  
     
}
  
}

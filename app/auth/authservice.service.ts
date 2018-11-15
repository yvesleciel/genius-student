import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';
import{Users} from './users';



@Injectable({ providedIn: 'root'}) 
export class AuthserviceService {
  users: Users;

 

 constructor() { }

 
  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          // var uid = firebase.auth().currentUser.uid;
           //this.writeUserData(uid,this.users);
            
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
}

signInUser(email: string, password: string) {
  return new Promise(
    (resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    }
  );
}

signOutUser() {
  firebase.auth().signOut();
}


 writeUserData(userId:string, users:Users) {
   
  firebase.database().ref('users/' + userId).set(users);

}

readUserData(uid: string){
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/users/' + uid).once('value').then(
          (data: firebase.database.DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  readClasseData(uid:string){
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/users/' + uid).once('value').then(
          (data: firebase.database.DataSnapshot) => {
            resolve(data.val().classe);
          }, (error) => {
            reject(error);
          }
        );
      }
    );
}
}


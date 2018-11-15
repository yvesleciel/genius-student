import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'appg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {
    const config = {
      apiKey: "AIzaSyBA70uNF3MAl8yFrju8_BVyaxnectKgY8E",
      authDomain: "genius-d108d.firebaseapp.com",
      databaseURL: "https://genius-d108d.firebaseio.com",
      projectId: "genius-d108d",
      storageBucket: "",
      messagingSenderId: "758350542860"
    };
    firebase.initializeApp(config);
    var database= firebase.database();
    }
    ngOnInit() { }
    
  }
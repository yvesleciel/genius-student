import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appg-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss']
})
export class MatiereComponent implements OnInit {
private navLinks = [
{
  label: 'Acceuil',
  path : 'acceuil'
},

{
  label: 'bibliotheque',
  path : 'bibliotheque'
},

{
  label : 'chatbot',
  path : 'chatbot'
},
{
  label: 'prof',
  path : 'prof'
},

{
  label : 'groupe etude',
  path : 'groupeetude'
},

{
  label : 'coure en ligne',
  path : 'courenligne' 
}

];

links = ['First', 'Second', 'Third'];
activeLink = this.navLinks[0];



  constructor() { }

  ngOnInit() {
  }

}

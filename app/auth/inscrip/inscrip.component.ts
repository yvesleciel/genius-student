import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
import {Users} from '../users';
import * as firebase from 'firebase';
import { slideInDownAnimation } from '../../animation';


@Component({
  templateUrl: './inscrip.component.html',
  styleUrls: ['./inscrip.component.scss'],
  animations: [ slideInDownAnimation ]
})
export class InscripComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  userForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthserviceService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
initForm(){
  this.userForm = this.formBuilder.group({
    nom: ['',[Validators.required]],
    prenom: ['',[Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{8,}/)]],
     classe:['',[Validators.required]],
    ville: ['',[Validators.required]],
    etablissement:['',[Validators.required]]

 });
}

onSubmitForm() {
  const email = this.userForm.get('email').value;
  const password = this.userForm.get('password').value;
  const nom = this.userForm.get('nom').value;
  const prenom = this.userForm.get('prenom').value;
  const classe = this.userForm.get('classe').value;
  const ville = this.userForm.get('ville').value;
  const etablissement = this.userForm.get('etablissement').value;
  const categorie = '';
  const users= new Users(nom,prenom,email,classe,ville,etablissement,categorie);

  this.authService.createNewUser(email, password).then(
    () => {
     var uid = firebase.auth().currentUser.uid;
      this.authService.writeUserData(uid, users);
      this.router.navigate(['/matiere']);
      },
    (error) => {
      this.errorMessage = error;
    }
  );
    
 // var uid = firebase.auth().currentUser.uid;
  
}


}

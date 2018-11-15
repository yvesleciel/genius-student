import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import * as firebase from 'firebase';
import {AuthserviceService} from '../authservice.service';
import {Router} from '@angular/router';
import { PopupService } from '../popup.service';
@Component({
  selector: 'appg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  errorMessage: string;
  eye = '../../assets/img/icons8_Invisible_64px.png';
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private fb: FormBuilder,
              private auth: AuthserviceService,
              private router: Router,
              private popupService: PopupService)  { }

              ngOnInit() {
                this.initForm();
              }

              popup(){
                this.popupService.openDialog();
              }
              getErrorMessage() {
                return this.email.hasError('required') ? 'You must enter a value' :
                    this.email.hasError('email') ? 'Not a valid email' :
                        '';
              }
              onSee(){
                if (this.hide) {
                this.eye = '../../assets/img/icons8_Eye_64px.png';
                this.hide = false;
                } else{
                 this.eye =  '../../assets/img/icons8_Invisible_64px.png';
                 this.hide = true;
                }
              }
              initForm() {
                this.signinForm = this.fb.group({
                  email: ['', [Validators.required, Validators.email]],
                  password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{8,}/)]]
                });
              }
            
              onSubmit() {
               const email = this.signinForm.get('email').value;
                const password = this.signinForm.get('password').value;
                
                this.auth.signInUser(email, password).then(
                 () => {
                   this.router.navigate(['/matiere']);
                 },
                  (error) => {
                  this.errorMessage = error;
                  }
                );
          }
          }
          

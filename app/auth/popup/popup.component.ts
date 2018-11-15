import { Component , Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';
import { PopupService } from '../popup.service';
export interface DialogData {
    category : string;
  }

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<PopupComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private router: Router ) {}
    ngOnInit(){

    }
      onNoClick(): void {
        this.dialogRef.close();
      }

      Validate() {
       const choix = this.data.category;
       if (choix == "Apprendre"){
        this.router.navigate(['/inscription']);
       } 
      }

}

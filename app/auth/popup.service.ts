import { Injectable , Inject} from '@angular/core';
import {MatDialog} from '@angular/material';
import { PopupComponent } from './popup/popup.component';

export interface DialogData {
   
  }
  
@Injectable({
  providedIn: 'root'
})

export class PopupService {
    choix: string;
    
  constructor(public dialog:MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '400px',
      height: '200px',
      data: {category: this.choix}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Le popup a été fermé.');
      this.choix= result;
    });
  }

}



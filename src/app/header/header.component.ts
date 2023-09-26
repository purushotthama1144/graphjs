import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GraphjsComponent } from '../home/graphjs/graphjs.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private dialog: MatDialog,){}

  enablePopup() {
    const dilogRef = this.dialog.open(GraphjsComponent, {
      disableClose: true,
      width: '90%',
      data: {
       enable:true
      },
    });
    dilogRef.afterClosed().subscribe((data) => {
      
    });
  }
}

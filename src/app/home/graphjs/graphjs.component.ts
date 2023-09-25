import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graphjs',
  templateUrl: './graphjs.component.html',
  styleUrls: ['./graphjs.component.scss']
})
export class GraphjsComponent implements OnInit{
  enableActionButtons: boolean = false;
  constructor(private router:Router , @Optional() @Inject(MAT_DIALOG_DATA) public data: any){

  }
  
  ngOnInit(): void {
    if(this.router.url == '/') {
      this.enableActionButtons = true;
    } 
    if(this.data) {
      this.enableActionButtons = false;
    }

  }
}

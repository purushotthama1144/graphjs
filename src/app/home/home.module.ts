import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GraphjsComponent } from './graphjs/graphjs.component';
import { MaterialModule } from '../material.module';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path:'' , children: [
    { path: '', component: GraphjsComponent },
  ]}
];

@NgModule({
  declarations: [
    HomeComponent,
    GraphjsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }

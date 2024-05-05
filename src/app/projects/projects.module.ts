import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsDetailComponent } from './projects-detail/projects-detail.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"detail/:id",
    component:DetailComponent
   }
];

@NgModule({
  declarations: [
    ProjectsDetailComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    ProjectsDetailComponent
  ]
})
export class ProjectsModule {
  // constructor(){
  //   console.warn("Projects Module is lazy loaded")
  // }
 }
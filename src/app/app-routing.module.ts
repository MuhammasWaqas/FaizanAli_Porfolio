import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsDetailComponent } from './projects/projects-detail/projects-detail.component';
import { MyResumeComponent } from './resume/my-resume/my-resume.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { CanDeactiveGuardService } from './contact/canDeactivateguard.service';

const routes: Routes = [
    {
      path:"",
      redirectTo:"home",
      pathMatch:"full"
    },
    {
      path:"home",
      component:HomeComponent
    },
    { 
      path:"projects",
      loadChildren:() => import('./projects/projects.module').then( (module) => module.ProjectsModule),
      component:ProjectsDetailComponent,
    },
    {
      path:"resume",
      loadChildren:() => import('./resume/resume.module').then( (module) => module.ResumeModule),
      component:MyResumeComponent
    },
    {
      path:"contact",
      loadChildren:() => import('./contact/contact.module').then( (module) => module.ContactModule),
      component:ContactUsComponent,
      canDeactivate:[CanDeactiveGuardService]
    },
    {
      path:"**",
      component:HomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
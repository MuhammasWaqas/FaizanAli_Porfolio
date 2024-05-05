import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EducationComponent } from './education/education.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectPicsComponent } from './project-pics/project-pics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  ToastrModule, ToastrService } from 'ngx-toastr';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SkillsComponent } from './skills/skills.component';

  const firebaseConfig = {
    apiKey: "AIzaSyDd-aSzjIJrmMJxR1a-Q-5dRlgr_FDnnWE",
    authDomain: "portfolio-a7f41.firebaseapp.com",
    projectId: "portfolio-a7f41",
    storageBucket: "portfolio-a7f41.appspot.com",
    messagingSenderId: "83354014873",
    appId: "1:83354014873:web:73ca2b815be764d28b1408",
    measurementId: "G-5BHGGWTFG6"
  };

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      HeaderComponent,
      FooterComponent,
      EducationComponent,
      ExperienceComponent,
      ProjectPicsComponent,
      SkillsComponent,
    ],
  providers: [ToastrService,Title],
  bootstrap: [AppComponent  ],
  imports: [
        BrowserModule,
        AppRoutingModule,
        NgxSkeletonLoaderModule,
        ReactiveFormsModule,
        BrowserAnimationsModule, 
        ToastrModule.forRoot({
          timeOut:8000,
          positionClass:"toast-bottom-right",
          extendedTimeOut:3000
        }),
        provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideFirestore(() => getFirestore()),
    ]
})
export class AppModule { 
  //  constructor(){
  //     console.warn("App Module is Eagerly loaded")
  //   }
 }

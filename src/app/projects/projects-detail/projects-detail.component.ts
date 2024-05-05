import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects-detail',
  templateUrl: './projects-detail.component.html',
  styleUrls: ['./projects-detail.component.scss'],
  providers:[ProjectService]
})
export class ProjectsDetailComponent implements OnInit {

  projects:any;
  constructor(private projectServices:ProjectService){
  }
  
  ngOnInit() {
    // console.log("Project Module")
    this.projects = this.projectServices.Projects;
    // console.log(this.projects)
  }


  // getID(){
  //   this.projects = this.projectServices.Projects;
  //   console.log(this.projects)
  // }
  isTrue:boolean= false
  showIcon(link:any){
    //  this.isTrue = true
    link.iconVisible = true;
  }
  closeIcon(link:any){
    // this.isTrue = false
    link.iconVisible = false;
 }


}
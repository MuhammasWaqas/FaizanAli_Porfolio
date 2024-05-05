import { Component, OnInit } from '@angular/core';
//import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.scss']
})
export class MyResumeComponent implements OnInit{
   //constructor(private sanitizer:DomSanitizer){}
  
  //fileUrl:any;
  ngOnInit() {
    // //const data ='assets/sir.jpg';
    // const data='Some Data'
    // const blob = new Blob([data], {
    //     type: 'application/octet-stream'
    //   });
    // this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    
  
  }
}

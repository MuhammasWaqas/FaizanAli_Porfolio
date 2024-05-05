import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
   constructor(private router:ActivatedRoute,
              private location:Location){
   }
   
   routeId:any;
   ngOnInit(): void {
     this.router.paramMap.subscribe((data)=>{
      console.log(data);
     });

     this.routeId=this.router.snapshot.params;
      console.log(this.routeId);
      console.log("Show Detail")
   }
  
  goBack(){
      this.location.back()
   } 
     
}
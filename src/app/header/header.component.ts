import { Component, Input, OnInit, Output, ViewChild ,EventEmitter} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit{

   constructor(private titleService:Title){
   } 
  setPageTitle(title:any){
    this.titleService.setTitle(title);
  }

   ngOnInit(): void {
   }

  @ViewChild("nav") navbar:any;
   
  @Output() parentFunc: EventEmitter<any> = new EventEmitter();
     
  func(){
    this.parentFunc.emit();
   }
  
  navbarTheme(){
    let Navbar = this.navbar.nativeElement;
    // console.log(Navbar);
    Navbar.classList.toggle("navbartheme")
  }  
  

         //This Code for Second Approuch of theme change function: 
  // changeTheme(){
  //   document.body.style.backgroundColor="SlateBlue";
  //   document.body.style.color="white"
  //   this.navbar.nativeElement.style.backgroundColor="SlateBlue"
  //  }
  
  //  realTheme(){
  //   document.body.style.backgroundColor="white";
  //   document.body.style.color="black";
  //   this.navbar.nativeElement.style.backgroundColor="rgb(64, 204, 186)"
  //  }
   
  //  changeTheme(){
  //   // let changeStyle=document.getElementById("body");
  //   let changeStyle = document.body;
  //       console.log(changeStyle);
  //       changeStyle.classList.toggle("theme");
  //  }
  
  }
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseApiService } from '../firebase-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {

  constructor(
    private Apiservice: FirebaseApiService,
    private toastr: ToastrService
  ){}

  contactForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    //subject:new FormControl("",[Validators.required]),
    description: new FormControl("", [Validators.required]),
  })

  getFromValue() {
    //console.log(this.contactForm.value);
    this.Apiservice.StoreUserData(
      this.contactForm.value.name,
      this.contactForm.value.email,
      this.contactForm.value.description
    )
      .then((respone) => {
        console.log(respone);
        console.warn("Yes successfully store data");
        this.toastr.success("Form Data is Submited successfully");
      });
    this.contactForm.reset()
  }

  get formcontrol() {
    return this.contactForm.controls
  }

  showData() {
    this.Apiservice.getUserData().subscribe( (data) => {
      console.log(data);
    });
  }

  ngOnInit(): void { 
    this.showData();
  }

  canExit() {
    if (this.contactForm.value.name || this.contactForm.value.email || this.contactForm.value.description) {
      console.log("Form is not valid please save this")
      return confirm("Are You Wanted to leave Page OR Save Changes")
    } else {
      console.log("Form is valid ")
      return true;
    }
  }


  // Practice toastr message!!
  // getToastr(){
  //   this.toastr.info("Blue color is  know as info")
  // }

}
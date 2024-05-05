import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // ToastrModule.forRoot(),
  ],
})
export class ContactModule { 
}

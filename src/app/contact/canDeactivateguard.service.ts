import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { Injectable } from "@angular/core";
   
 @Injectable({
    providedIn:"root"
 })

export class CanDeactiveGuardService implements CanDeactivate<ContactUsComponent>{
     
    canDeactivate(component: ContactUsComponent,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState?: RouterStateSnapshot ): boolean{

        return component.canExit();
        
     }
      
}  
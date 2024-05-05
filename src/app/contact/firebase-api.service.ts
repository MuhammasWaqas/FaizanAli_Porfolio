import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {

  constructor(private fs:Firestore) { }
  
   StoreUserData(username:string , useremail:string ,userdisp:string){
    //console.log(name ,"==",email,"==",disp);
    let data = { 
         name:username , 
         email:useremail, 
         disp:userdisp
        };
        
    let getCollection= collection(this.fs,"UserData")
        return addDoc(getCollection , data)
   }

   getUserData() : Observable<any>{
    let GetData = collection(this.fs,"UserData");
    return collectionData( GetData,{idField:'id'} )
   }

}

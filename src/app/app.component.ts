import { Component } from '@angular/core';
import { Placeholder } from './Customloader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Sir Faizan-Ali';
  ThemeObject = Placeholder
  
  changeTheme(){
     let changeStyle = document.getElementById("theme");
       // let changeStyle = document.body;
        //  console.log(changeStyle);
      changeStyle?.classList.toggle("theme");
   }
   
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-guide-menu',
  templateUrl: './guide-menu.component.html',
  styleUrls: ['./guide-menu.component.css']
})
export class GuideMenuComponent {
 
    public currDisplay : string;
    constructor(private router: Router)
    {
      this.currDisplay = "";
    }
  
    switchContent(s : string){
      this.router.navigate([s])
      this.currDisplay = 't'
     }
  
}

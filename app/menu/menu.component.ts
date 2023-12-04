import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
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

import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
// import svgHome from "../../../assets/icons/home.svg";

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  constructor(private sanitizer: DomSanitizer) {

  }

  isUserConnected(): boolean {
    let user: any = null
    user = localStorage.getItem('user')
    if (user) return true
    else return false  
  }
}
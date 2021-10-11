import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  appLogo = './assets/images/logoA7.png';
  appMenuTemp = './assets/images/headerTemp.png';
  appMenuLight = './assets/images/headerLight.png';
  appMenuNoise = './assets/images/headerNoise.png';
  appMenuContact = './assets/images/headerContact.png';

  constructor() { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.removeItem("jwt");
  }
}

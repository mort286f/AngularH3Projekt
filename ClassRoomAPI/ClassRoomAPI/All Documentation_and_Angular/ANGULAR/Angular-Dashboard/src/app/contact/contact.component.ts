import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  cText: string = 'Velkommen til kontakt os.'; 

  constructor() { }

  ngOnInit(): void {
  }

}

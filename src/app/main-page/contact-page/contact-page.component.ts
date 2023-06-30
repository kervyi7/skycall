import { Component, OnInit } from '@angular/core';
import { UserContact } from 'src/app/core/models/user-contact';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  userContact: UserContact = new UserContact();

  constructor() { }

  ngOnInit() {

  }

  public onSave() {
    
  }

}

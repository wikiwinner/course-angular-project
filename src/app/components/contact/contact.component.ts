import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactAbout = 'Our address is provided on the map. Fill out the form to contact us.';
  public Contact = 'Contact';
  public Contacts = 'Contacts';
  public Home = 'Home';
  public FirstName = 'First Name';
  public EmailAddress = 'Email Address';
  public TelNumber = 'Tel. Number';
  public Subject = 'Subject';
  public Message = 'Message';

  constructor() { }

  ngOnInit(): void {
  }

}

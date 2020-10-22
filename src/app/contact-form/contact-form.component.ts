import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  contactMethods=[
    { id: 1, name:"Email"},
    { id: 2, name:"Phone"}
  ];

  contactMethods2=[
    { id: 0, name:"Select Method Contact"},
    { id: 1, name:"Email"},
    { id: 2, name:"Phone"}
  ];

  log(x){
    console.log(x);
  }

  onSubmitted(f){
    console.log(f);
  }

  modelChange(contact){
    console.log(contact);
  }
}

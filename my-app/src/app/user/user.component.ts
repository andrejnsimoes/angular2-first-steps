import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title:string = 'Angular2 First Steps!';
  name:string = 'André';
  email:string = 'andre.simoes@cashyt.com';
  address = {
    street: 'Rua da Sofia',
    city: 'Coimbra'
  };

  constructor() { }

  ngOnInit() {
  }

}

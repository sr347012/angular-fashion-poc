import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  id = Math.round(Math.random()*100000);
  length : any;
  waist: any;
  firstName: any;
  lastName: any;
  contact: any;
  neck: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}

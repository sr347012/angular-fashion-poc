import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  id: any;
  length: any;
  chest: any;
  waist: any;
  armRound: any;
  armRoundHeight: any;
  neckHeight: any;

  orders= [
    {
    "id": "010121",
    "name": "John Doe",
    "Address": "North Carolina, United States of America",
    "contact": "801-901-8989",
    "verified": "Y",
    "design": [
      {
        "length": "22",
        "chest": "24",
        "waist":"22",
        "armround":"32",
        "neckheight":"11",
        "armroundheight":"12"
      }
    ]
  },
  {
    "id": "00232",
    "name": "Alice Carter",
    "Address": "Las Vegas, United States of America",
    "contact": "811-911-1989",
    "verified": "Y",
    "design": [
      {
        "length": "12",
        "chest": "14",
        "waist":"23",
        "armround":"42",
        "neckheight":"61",
        "armroundheight":"62"
      }
    ]
  },
  ]

  constructor(private router: Router,
    public route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
}
  ngOnInit(): void {
    this.length = this.orders[0].design[0].length;
    this.chest = this.orders[0].design[0].chest;
    this.waist = this.orders[0].design[0].waist
    this.armRound = this.orders[0].design[0].armround
    this.armRoundHeight = this.orders[0].design[0].armroundheight
    this.neckHeight = this.orders[0].design[0].neckheight
  }
 
}

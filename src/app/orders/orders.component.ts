import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
orderId: any;

orders= [
  {
    "id": "011121",
    "name": "Riya Sharma",
    "Address": "North Carolina, United States of America",
    "contact": "101-101-8989",
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
    "id": "013121",
    "name": "Ritu Khelkar",
    "Address": "North Carolina, United States of America",
    "contact": "301-921-8283",
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
  "id": "014121",
  "name": "Mala Kochar",
  "Address": "North Carolina, United States of America",
  "contact": "501-961-8989",
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
  "id": "100232",
  "name": "Maya Philip",
  "Address": "Las Vegas, United States of America",
  "contact": "011-011-1989",
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

  constructor(public orderService: OrdersService) { 
    // this.orderService.getOrders().subscribe((data:any)=> {
    //   console.log(data);
    //   this.orderId = data.id;
    // })
  }

  ngOnInit(): void {
    
  }

}

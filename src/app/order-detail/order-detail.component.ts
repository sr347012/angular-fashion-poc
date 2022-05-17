import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrdersService } from '../orders.service';

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
   backActive:any ;
   frontActive:any;
   pattiActive:any;
   sleeveActive : any ;

  orders= [
    {
    "id": "010121",
    "name": "John Doe",
    "Address": "North Carolina, United States of America",
    "contact": "801-901-8989",
    "verified": "Y",
    "design": [
      {
        "length": "14",
        "chest": "34",
        "waist":"28",
        "armround":"15",
        "neckheight":"9.5",
        "armroundheight":"5.5"
      }
    ]
  },
  ]

  constructor(private router: Router,
    public route: ActivatedRoute, public orderService: OrdersService) {
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

  checkActiveGraph(name:string) {
    this.orderService.backActive.next(false);
    this.orderService.frontActive.next(false);
    this.orderService.sleeveActive.next(false);
    this.orderService.pattiActive.next(false);

    if(name == 'back')  this.orderService.backActive.next(true) ; 
    if(name == 'front')  this.orderService.frontActive.next(true) ;
    if(name == 'sleeve')  this.orderService.sleeveActive.next(true) ; 
    if(name == 'patti') this.orderService.pattiActive.next(true);

    this.backActive = this.orderService.backActive;
    this.frontActive = this.orderService.frontActive;
    this.sleeveActive = this.orderService.sleeveActive;
    this.pattiActive = this.orderService.pattiActive;
  }
 reDraw() {
  //  console.log(this.neckHeight, this.neckHeight - 9.5);
  var diff = this.neckHeight - 9.5;
  const d = document.getElementById('leftArcRed')?.getAttribute('d');
  var elem= d?.split(' ');
  var upd_value = 0;
  var old_value = 0;

  elem? old_value = parseInt(elem[elem.length-1]) : null
  upd_value = old_value + diff 
  var upd_str = d?.replace(old_value.toString(), upd_value.toString())
  // console.log("OLD---",d, elem? elem[elem.length-1] : null);
  // var elems = [];
  
  // for (var x in elem) {
  //     if (elem[x].indexOf('C') >= 0)  elem[x].split('C').forEach((y)=> elems.push(y));

  //     if (elem[x].indexOf('M') >= 0)  elems.push(elem[x].split('M').join(' ').trim());
      
  //     if (elem[x].indexOf('C') < 0 && elem[x].indexOf('M') < 0) elems.push(elem[x])
  // }
  // console.log(elems);
  // if (topX_new == 0) topX_new = elems[0];
  // if (topY_new == 0) topY_new = elems[1];
  // if (topCX_new == 0) topCX_new = elems[2];
  // if (topCY_new == 0) topCY_new = elems[3];
  // if (btmX_new == 0) btmX_new = elems[6];
  // if (btmY_new == 0) btmY_new = elems[7];
  // if (btmCX_new == 0) btmCX_new = elems[4];
  // if (btmCY_new == 0) btmCY_new = elems[5];

  // let updated_path = 'M'+topX_new+' '+topY_new+'C'+topCX_new+' '+topCY_new+' '+btmCX_new
  // +' '+btmCY_new+' '+btmX_new+' '+btmY_new;
  // console.log("NEW---",updated_path);
  document.getElementById('leftArcRed')?.setAttribute('d', upd_str? upd_str: 'XXX')
}
}

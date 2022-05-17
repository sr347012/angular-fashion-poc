import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
   backActive : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false) ;
   frontActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false) ;
   pattiActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false) ;
   sleeveActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false) ;

  constructor(public http: HttpClient) { }
  public getOrders():Observable<any> {
    return this.http.get('./ordersList.json')
  }
}

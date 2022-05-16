import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(public http: HttpClient) { }
  public getOrders():Observable<any> {
    return this.http.get('./ordersList.json')
  }
}

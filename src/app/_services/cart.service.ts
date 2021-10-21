import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../modal/modal';

const API_URL_cart ='http://localhost:8080/api/cart/'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  addCartToUser(cart: Cart, idUser: number): Observable<Cart> {
    return this.http.post<Cart>(API_URL_cart+'addCartToUser', cart);
  }

}

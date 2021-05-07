import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Product,Category} from './../modal/modal'


const API_URL='http://localhost:8080/api/product/'
const API_URL_cat ='http://localhost:8080/api/category/'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http:HttpClient
  ) { }

  getAllProduct():Observable<Product[]>{

    return this.http.get<Product[]>(API_URL+'getAllProducts');
 
  }

  getAllCategroy():Observable<Category[]>{

    return this.http.get<Category[]>(API_URL_cat+'getAllCategory');
  }
}

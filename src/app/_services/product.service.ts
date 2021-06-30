import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Product,Category, Product2} from './../modal/modal'


const API_URL='http://localhost:8080/api/product/'
const API_URL_cat ='http://localhost:8080/api/category/'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProduct():Observable<Product[]>{
    return this.http.get<Product[]>(API_URL+'getAllProducts');
  } 

  getAllCategroy():Observable<Category[]>{
    return this.http.get<Category[]>(API_URL_cat+'getAllCategory');
  }

  findCategoryById(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL+`findProductsForCategory/${id}`);
  }

  findProductById(Id:number): Observable<Product[]>{
    return this.http.get<Product[]>(API_URL+`findProductById/${Id}`);
  }

  findByName(name:string): Observable<Product[]>{
    return this.http.get<Product[]>(API_URL+`findByName/${name}`);
  }

  addProductToCategory(product: Product, idCategory: number): Observable<Product> {
    return this.http.post<Product>(API_URL+`addProductToCategory/${idCategory}`, product);
  }
}

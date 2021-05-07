import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from './../_services/product.service'
import {Category, Product} from './../modal/modal'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  public products: Product[] = [];
  public categorys: Category[] =[];

  constructor(

    private productservice: ProductService,
    private router:Router) {}

  ngOnInit(): void {

    this.loadProducts();
    this.loadCategroy();

  }

  loadProducts() {
    this.productservice.getAllProduct().subscribe(
      (items: Product[]) => {
        this.products.splice(0, this.products.length);
        this.products.push(...items);
        console.log(this.products);
      }
    );
  }

  loadCategroy(){
    this.productservice.getAllCategroy().subscribe(
      (_items:Category[])=>{
        this.categorys.splice(0,this.categorys.length);
        this.categorys.push(..._items);
        console.log(this.categorys);
      }
    );
  }
}

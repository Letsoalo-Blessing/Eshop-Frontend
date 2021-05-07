import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Product} from './../modal/modal';
import {ProductService} from './../_services/product.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // public product: Product;
  products: Product[] = [];
  
  constructor(

    private productservice: ProductService,
    private router:Router) {}

  ngOnInit(): void {
    // this.getProducts();
   
  }

  loadProducts() {
    this.productservice.getAllProduct().subscribe(
      (products: any[]) => {
        this.products = products;
        console.log(this.products);
      }
    );
  }
  // getProducts(): void {
  //   this.productservice.getAllProduct().subscribe((_products:any)=>{
  //       this.products.splice(0, this.products.length);
  //       this.products.push(_products);
  //       console.log(this.products);
  //     }
  //   );
  // }

}

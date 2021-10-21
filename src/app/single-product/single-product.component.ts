import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../_services/product.service';
import {Product} from './../modal/product'

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  idProd: number;
  public product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService,
    private router: Router) {
      this.route.params.subscribe((params: Params) => {
        this.idProd = params.productId;
        console.log(this.idProd);
        this.productService.findProductById(this.idProd).subscribe(product => {
          // this.products = products;
          this.product = product;
          console.log(this.product);
        }
        );
      }
    )
  }
  ngOnInit(): void {

  }

}

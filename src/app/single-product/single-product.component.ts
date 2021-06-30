import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../_services/product.service';
import { Category, Product } from './../modal/modal';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  Prod_id: number;
  public products: Product[] = [];
  public categorys: Category[] =[];

  constructor(private route: ActivatedRoute, private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  
    this.getProduct();
  }

  getProduct(): void{

    this.route.params.subscribe((params: Params) => {
      this.Prod_id = params.productId;
      console.log(this.Prod_id);

      this.productService.findProductById(this.Prod_id).subscribe(products => {
        this.products=products;
        console.log(this.products);
      }
      );
    }
  )
  }
}

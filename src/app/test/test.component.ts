import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product, Product2 } from './../modal/modal';
import { ProductService } from './../_services/product.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // id: number;
  // products: Product2[]=[];

  constructor(
    private route: ActivatedRoute, private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

   
    // this.route.params.subscribe((params: Params) => {
    //   this.id = params.productId;
    //   console.log(this.id);


    //   this.productService.findProductById(this.id).subscribe((items: Product2[]) => {

    //     this.products=items;
    //     console.log(this.products);

    //   }
    //   );
    // });

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {ProductService} from './../_services/product.service'
import {Category, Product} from './../modal/modal'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  idCategory: number;
  public products: Product[] = [];
  public categorys: Category[] =[];

  constructor(private route: ActivatedRoute, private productService: ProductService,
    private router: Router) {}

  ngOnInit(): void {
    this.loadCategroy();
    // this.SelectCategory(this.idCategory);
  }

  // SelectCategory(categoryId){
  //   this.route.params.subscribe((params: Params) => {
  //     this.idCategory = params.categoryId;
  //     console.log(this.idCategory);
  //     this.productService.findCategoryById(this.idCategory).subscribe(products => {
  //       this.products = products;
  //     }
  //     );
  //   }
  // )
  // }
  
  loadCategroy(){
    this.productService.getAllCategroy().subscribe(
      (_items:Category[])=>{
        this.categorys.splice(0,this.categorys.length);
        this.categorys.push(..._items);
        // console.log(this.categorys);
      }
    );
  }
}

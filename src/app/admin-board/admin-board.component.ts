import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from './../_services/product.service'
import { Product, Category } from './../modal/modal';
import { TokenStorageService } from '../_services/token-storage.service';
import { ListProductComponent } from '../list-product/list-product.component';



@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})
export class AdminBoardComponent implements OnInit {
  idCategory: number;
  currentUser: any;
  public categorys: Category[] = [];
  public products: Product[] = [];
  product: Product={} as Product;

  constructor(private route: ActivatedRoute, private productService: ProductService,
    private router: Router,
    private token: TokenStorageService) {
   
  }

  ngOnInit(): void {

    this.loadCategroy();
    this.currentUser = this.token.getUser();
  }

  loadCategroy(){
    this.productService.getAllCategroy().subscribe(
      (_items:Category[])=>{
        this.categorys.splice(0,this.categorys.length);
        this.categorys.push(..._items);
        console.log(this.categorys);
      }
    );
  }

  loadProducts() {
    this.productService.getAllProduct().subscribe(
      (items: Product[]) => {
        this.products.splice(0, this.products.length);
        this.products.push(...items);
        console.log(this.products);
      }
    );
  }
  Add_Prod() {

    this.router.navigate(['productList'])
  }

  addProduct() {
    this.router.navigate(['productList'])
    
  }
}

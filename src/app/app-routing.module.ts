import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ListProductComponent } from './list-product/list-product.component';
import { LoginComponent } from './login/login.component';
import { ModBoardComponent } from './mod-board/mod-board.component';
import { Page404Component } from './page404/page404.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { DispCategoryComponent} from './disp-category/disp-category.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [

{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path: 'products',component:ProductsComponent},
{path: 'cart',component:CartComponent},
{path: 'checkout',component:CheckoutComponent},
{path: 'profile',component:ProfileComponent},
{path: 'register',component: RegisterComponent},
{path: 'contact',component:ContactComponent},
{path: 'test/:productId',component:TestComponent},
{path: 'admin',component:AdminBoardComponent},
{path:'moderator',component:ModBoardComponent},
{path:'productList',component:ListProductComponent},
{path:'category/:categoryId',component:DispCategoryComponent},
{path:'single-products/:productId',component:SingleProductComponent},
{path:'**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

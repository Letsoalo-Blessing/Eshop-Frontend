export interface Product{
    id:number;
    name:string;
    description:string;
    price:number;
    pictureUrl:string;
    categoryId:number;
}

export interface Category {
    
    id: String;
    name: String;
    pictureUrl:string;
}
export interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    pictureUrl: string;
  }
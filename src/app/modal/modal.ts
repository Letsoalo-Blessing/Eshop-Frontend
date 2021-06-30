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

export class Product2{
    id:number;
    name:string;
    description:string;
    price:number;
    pictureUrl:string;
    categoryId:number;
}
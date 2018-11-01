import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component ({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent 
                implements OnInit {
    pageTitle:string='Product List';
    imageWidth:number=50;
    imageMargin:number=2;
    filterProducts:IProduct[];
    showImage:boolean=false;
    showHide:string='Show Image';
    _listFilter:string='';
    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(val:string){
        this._listFilter=val;
        this.filterProducts=this.filterProductName(this._listFilter);
    }
    constructor(private productService: ProductService){
        
    }
    ngOnInit():void {
       // console.log('baba');
        this.products=this.productService.getProducts();
        this.filterProducts=this.filterProductName(this._listFilter);
    }
    
    products:IProduct[];
    toggleImage():void{
        this.showImage=!this.showImage;
    }
    filterProductName(query:string):IProduct[]{
        return this.products.filter((el:IProduct)=>{
            return(el.productName.toLowerCase().indexOf(query.toLowerCase())>-1)
        })
    }
    onRatingClicked(event:number):void{
        console.log(event);
    }
}
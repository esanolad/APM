import { Component, OnInit } from '@angular/core';
import { IProduct } from "./product";
import {ActivatedRoute, Router} from '@angular/router'
import { ProductService } from './product.service';


@Component({
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:IProduct;
  pageTitle:string='Product Detail';
  constructor(private route:ActivatedRoute, private productService:ProductService, private router:Router) {
    
   }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe((prod)=>{
      //console.log(prod[1]);
      //this.product=prod;
      prod.forEach((p)=>{
        if (p.productId==id) this.product=p;
      })
    });
  }
  onBack():void{
    this.router.navigate(['/products']);
  }

}

import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable} from "rxjs";
import{catchError, tap} from "rxjs/operators";

@Injectable({
    providedIn:'root'
})
export class ProductService{
  private productUrl ='api/products/products.json';
  constructor(private http:HttpClient) {}

    getProducts():Observable<IProduct[]>{
      return this.http.get<IProduct[]>(this.productUrl).pipe(
        tap(data=>console.log('All'+JSON.stringify(data)))
        //catchError()
      );
    };
    private handleError(err:HttpErrorResponse){
      console.error("error")
    }
}
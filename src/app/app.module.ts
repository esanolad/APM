import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { convertToSpacesPipe } from './shared/convertToSpaces.pipe';
import { starComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { HttpClientModule } from "@angular/common/http";  

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    convertToSpacesPipe,
    starComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule} from '@Angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { convertToSpacesPipe } from '../shared/convertToSpaces.pipe';
import { ProductDetailsGuard } from './product-details.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([ 
      {path:'products',component:ProductListComponent},
      {
        path:'products/:id', 
        component:ProductDetailComponent , 
        canActivate:[ProductDetailsGuard]
      }
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    convertToSpacesPipe
  
  ]
})
export class ProductModule { }

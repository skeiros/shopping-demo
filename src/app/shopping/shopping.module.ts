import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ListComponent } from './list/list.component';
import { ShoppingService } from './shopping.service';

import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms'; // Import FormsModule

 
import { ProductModalComponent } from './product-modal/product-modal.component';
 import { LazyImageComponent } from './lazy-image/lazy-image.component';
@NgModule({
  providers:[
    ShoppingService, 
  ],
  declarations: [
    ListComponent,
    ProductModalComponent,
    LazyImageComponent,
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    HttpClientModule,MatTableModule,FormsModule, 
  ]
})
export class ShoppingModule { }
